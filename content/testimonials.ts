export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  quote: string;
  source: "student" | "client" | "colleague";
  verified: boolean;
}

// Intentionally empty until real, verifiable testimonials are collected.
// The TestimonialsPlaceholder section renders an honest empty state when this is empty.
export const testimonials: Testimonial[] = [];
