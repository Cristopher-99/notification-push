import { Router } from "express";
import { scrapeNotifyController } from "../controllers/scrapingController";

const scrapingRoutes = Router();

scrapingRoutes.get("/scrape-notify", scrapeNotifyController);

export default scrapingRoutes;
