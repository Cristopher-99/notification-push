import puppeteer from "puppeteer";
import { sendPushNotification } from "./notificationsService";

interface Article {
  title: string;
  body: string;
}

export const performScraping = async (): Promise<Article[]> => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://www.sindicatodelseguro.com.ar/", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  const articles: Article[] = await page.evaluate(() => {
    const results: { title: string; body: string }[] = [];
    const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4"));

    for (const heading of headings) {
      const title = heading.textContent?.trim() || "";
      let body = "Contenido no encontrado";

      const next = heading.nextElementSibling;
      if (next && next.tagName.toLowerCase() === "p") {
        body = next.textContent?.trim() || body;
      } else if (next) {
        const p = next.querySelector("p");
        if (p) body = p.textContent?.trim() || body;
      }

      results.push({ title, body });
    }

    return results;
  });

  await browser.close();
  return articles;
};

export interface ScrapeResult {
  success: boolean;
  articles: Article[];
  title: string;
  body: string;
  error?: any;
}

export const scrapeAndNotify = async (): Promise<ScrapeResult> => {
  try {
    const articles = await performScraping();

    const notificationTitle = "Nuevos encabezados detectados";
    const notificationBody = articles
      .slice(0, 5)
      .map((a, i) => `${i + 1}. ${a.title}`)
      .join("\n");

    await sendPushNotification(
      notificationTitle,
      notificationBody,
      "ScrapingScreen"
    );

    return {
      success: true,
      articles,
      title: notificationTitle,
      body: notificationBody,
    };
  } catch (error) {
    console.error("Error en scraping y notificación:", error);
    return {
      success: false,
      articles: [],
      title: "",
      body: "",
      error,
    };
  }
};
