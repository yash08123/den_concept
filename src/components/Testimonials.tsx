import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "I like how Den lets me stay in flow - I can chat with my entire knowledge base, use AI to create new artifacts, and share them with my team",
      name: "Rajat Khanna",
      designation: "Co-founder at Prism",
      src: "/Rajat.png",
    },
    {
      quote:
        "Den is just magical to use. It understands our company better than we do. We love Den.",
      name: "Nicole Lu",
      designation: "Co-founder at Sieve",
      src: "/Nicole.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
