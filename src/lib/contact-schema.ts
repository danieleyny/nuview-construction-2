import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please share your name").max(100),
  email: z.string().email("Valid email, please"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Pick a project type"),
  budget: z.string().optional(),
  zip: z.string().optional(),
  message: z.string().min(10, "A few sentences helps").max(2000),
  // Honeypot
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const quoteSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().min(1),
  message: z.string().min(5).max(1000),
  website: z.string().max(0).optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;

export const projectTypes = [
  "Kitchen",
  "Bathroom",
  "Full renovation",
  "Addition",
  "Commercial",
  "Outdoor / Deck",
  "Other",
];

export const budgets = ["< $25k", "$25–75k", "$75–200k", "$200k+", "Not sure yet"];
