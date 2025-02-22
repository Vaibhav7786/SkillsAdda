import {
  type Course,
  type Testimonial,
  type TeamMember,
  type InsertCourse,
  type InsertTestimonial,
  type InsertTeamMember,
} from "@shared/schema";

export interface IStorage {
  getAllCourses(): Promise<Course[]>;
  getAllTestimonials(): Promise<Testimonial[]>;
  getAllTeamMembers(): Promise<TeamMember[]>;
  createCourse(course: InsertCourse): Promise<Course>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
}

export class MemStorage implements IStorage {
  private courses: Map<number, Course>;
  private testimonials: Map<number, Testimonial>;
  private team: Map<number, TeamMember>;
  private currentId: number;

  constructor() {
    this.courses = new Map();
    this.testimonials = new Map();
    this.team = new Map();
    this.currentId = 1;
  }

  async getAllCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getAllTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.team.values());
  }

  async createCourse(course: InsertCourse): Promise<Course> {
    const id = this.currentId++;
    const newCourse = { ...course, id };
    this.courses.set(id, newCourse);
    return newCourse;
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentId++;
    const newTestimonial = { ...testimonial, id };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }

  async createTeamMember(member: InsertTeamMember): Promise<TeamMember> {
    const id = this.currentId++;
    const newMember = { ...member, id };
    this.team.set(id, newMember);
    return newMember;
  }
}

export const storage = new MemStorage();
