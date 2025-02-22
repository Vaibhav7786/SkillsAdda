
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <main>
      <AboutSection />
      <WhySection />
      <CoursesSection />
      <TeamSection />
      <TestimonialsSection />
    </main>
  );
}
