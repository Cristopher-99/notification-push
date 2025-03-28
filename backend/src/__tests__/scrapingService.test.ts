// __tests__/services/scrapingService.test.ts
import { scrapeAndNotify } from "../../src/services/scrapingService";
import * as puppeteer from "puppeteer";
import { jest } from "@jest/globals";

describe("Scraping Service", () => {
  let browser: puppeteer.Browser;

  beforeEach(async () => {
    jest.setTimeout(30000); // Aumentamos el timeout a 30 segundos
    browser = await puppeteer.launch({ headless: true });
  });

  afterEach(async () => {
    await browser.close();
  });

  it("should scrape and notify successfully", async () => {
    const result = await scrapeAndNotify();
    expect(result.success).toBe(true);
    expect(result.articles).toBeDefined();
    expect(result.articles.length).toBeGreaterThan(0);
    expect(result.error).toBeUndefined();
  }, 30000); // Aumentamos el timeout para este test específico

  it("should handle errors gracefully", async () => {
    // Simular un error
    jest
      .spyOn(puppeteer, "launch")
      .mockRejectedValue(new Error("Browser launch failed"));

    const result = await scrapeAndNotify();
    expect(result.success).toBe(false);
    expect(result.error).toBeDefined();
    expect(result.articles.length).toBe(0);
  });
});
