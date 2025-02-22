import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get("/api/courses", async (_req, res) => {
    const courses = await storage.getAllCourses();
    res.json(courses);
  });

  app.get("/api/testimonials", async (_req, res) => {
    const testimonials = await storage.getAllTestimonials();
    res.json(testimonials);
  });

  app.get("/api/team", async (_req, res) => {
    const team = await storage.getAllTeamMembers();
    res.json(team);
  });

  const httpServer = createServer(app);
  return httpServer;
}
