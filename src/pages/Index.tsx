import React from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatisticsSection from "@/components/StatisticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import {
  ArrowRight,
  PenTool,
  Target,
  LayoutDashboard,
  Users,
  Sparkles,
  Lightbulb,
  BarChart,
  Flame,
} from "lucide-react";

const services = [
  {
    title: "Content Creation",
    subtitle:
      "High-impact visuals, videos, and copy that capture attention and tell your brand story with clarity and creativity.",
    description:
      "From reels to campaigns, we create content that sparks conversations and drives results.",
    icon: <PenTool className="h-12 w-12" />,
  },
  {
    title: "Content Management",
    subtitle:
      "End-to-end handling of your content-from planning and scheduling to publishing and performance tracking!",
    description:
      "We keep your content ecosystem running smoothly, so you can focus on growth.",
    icon: <Target className="h-12 w-12" />,
  },
  {
    title: "Content Strategy",
    subtitle:
      "Data-driven strategies that align content with business goals, audience insights, and platform trends",
    description:
      "Every post, caption, and asset serves a purpose—backed by insight and intent.",
    icon: <LayoutDashboard className="h-12 w-12" />,
  },
  {
    title: "Social Media Management",
    subtitle:
      "We build your brand’s voice online—curating, posting, and engaging across platforms for consistent growth and reach",
    description:
      "Turn followers into loyal fans with meaningful and consistent online presence",
    icon: <Users className="h-12 w-12" />,
  },
  {
    title: "Brand Positioning",
    subtitle:
      "We define what makes you unique and strategically place your brand where it matters most in the market",
    description:
      "Stand out in a crowded market with clarity, confidence, and consistency",
    icon: <Sparkles className="h-12 w-12" />,
  },
  {
    title: "Brand Identity",
    subtitle:
      "Logo, colors, tone, and style—everything your audience sees, hears, and feels about your brand, crafted to perfection",
    description: "We don’t just design looks—we build lasting impressions",
    icon: <Lightbulb className="h-12 w-12" />,
  },
  {
    title: "Brand Consultancy",
    subtitle:
      "Expert guidance to help you refine your brand, align with your vision, and scale with confidence",
    description:
      "Get clarity, direction, and creative solutions tailored to your brand's next big move.",
    icon: <BarChart className="h-12 w-12" />,
  },
];

const teamMembers = [
  {
    name: "Rajat Srivastava",
    title: "Founder, Spark Media",
    subtitle: "The spark behind the fire!",
    bio: "Rajat has always had a burning passion for Marketing campaigns. With a background in Sales & Marketing, he's fueled by the desire to help brands truly shine in the digital landscape. He's committed to igniting your brand's success, one spark at a time.",
    image: "/placeholder.svg",
  },
  {
    name: "ChatGPT",
    title: "Marketing Assistant",
    subtitle: "",
    bio: "Our AI assistant is like having a marketing expert at your fingertips 24/7. It's trained to understand your brand's unique needs and provide insightful strategy recommendations that truly pop.",
    image: "/placeholder.svg",
  },
];

const Index = () => {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [pricingRef, pricingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleContactClick = () => {
    toast({
      title: "Contact Request Sent",
      description: "We'll get back to you shortly!",
    });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Services Section */}
      <section
        ref={servicesRef}
        className={`py-16 px-4 md:px-8 max-w-7xl mx-auto transition-all duration-1000 ${
          servicesInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        id="services"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We’re not just about content - we’re your complete creative partner,
            delivering everything you need (and more) to make your brand stand
            out.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <section
        ref={pricingRef}
        className={`py-16 px-4 md:px-8 max-w-7xl mx-auto rounded-3xl transition-all duration-1000 ${
          pricingInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        id="pricing"
      >
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Our Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We offer tailored solutions for maximum impact. Pricing is
            customized based on your specific goals and requirements. Let’s
            connect to understand your needs.
          </p>
          <Button
            className="px-8 py-6 text-lg bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 rounded-full shadow-md hover:shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 group"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact us for a personalized quote
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Team Section */}
      <section
        ref={teamRef}
        className={`py-16 px-4 md:px-8 max-w-7xl mx-auto transition-all duration-1000 ${
          teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        id="team"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Meet the Team That Sparks the Magic!
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
