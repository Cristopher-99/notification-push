import { Request, Response } from "express";
import { scrapeAndNotify } from "../services/scrapingService";

export const scrapeNotifyController = async (req: Request, res: Response) => {
  try {
    const result = await scrapeAndNotify();
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
