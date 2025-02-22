import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  duration: text("duration").notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  content: text("content").notNull(),
  avatarUrl: text("avatar_url").notNull(),
});

export const team = pgTable("team", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const insertCourseSchema = createInsertSchema(courses);
export const insertTestimonialSchema = createInsertSchema(testimonials);
export const insertTeamSchema = createInsertSchema(team);

export type Course = typeof courses.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
export type TeamMember = typeof team.$inferSelect;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type InsertTeamMember = z.infer<typeof insertTeamSchema>;
