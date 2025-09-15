import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Rocket,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Github,
} from "lucide-react";

const SocialIcon = ({
  icon: Icon,
  name,
  color,
  delay,
}: {
  icon: React.ElementType;
  name: string;
  color: string;
  delay: number;
}) => {
  return (
    <div
      className={`transform transition-all duration-500 delay-${delay} hover:scale-110`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`flex flex-col items-center gap-2 group`}>
        <div
          className={`p-4 rounded-full ${color} shadow-lg shadow-${color}/30 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>
        <span className="text-xs font-medium text-gray-300 opacity-80 group-hover:opacity-100">
          {name}
        </span>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  const socialIcons = [
    {
      icon: Instagram,
      name: "Instagram",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      delay: 100,
    },
    { icon: Facebook, name: "Facebook", color: "bg-blue-600", delay: 200 },
    { icon: Linkedin, name: "LinkedIn", color: "bg-blue-700", delay: 400 },
    { icon: Youtube, name: "YouTube", color: "bg-red-600", delay: 500 },
  ];

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Black background with animated elements */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        {/* Animated glow effects */}
        <div
          className={`hidden absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl transition-all duration-2000 ${
            inView ? "opacity-40" : "opacity-0"
          }`}
        ></div>
        <div
          className={`hidden absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 blur-3xl transition-all duration-2000 ${
            inView ? "opacity-40" : "opacity-0"
          }`}
        ></div>

        {/* Grid overlay for texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjMTExMTExIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text Content */}
          <div
            className={`transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 text-gray-300 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Content that makes your brand shine</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
              Let Your Brand{" "}
              <span className="relative">
                <span className="bg-gradient-to-r text-white bg-clip-text text-transparent inline-block">
                  Spark Online!
                </span>
                <span className="absolute -top-10 -right-10">
                  <Sparkles className="w-10 h-10 text-cyan-400 animate-pulse" />
                </span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Tired of dull content? Spark Media brings your brand to life with
              powerful, engaging content that cuts through the noise and sets
              you apart.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="text-lg px-8 py-6 bg-black hover:bg-gray-700 text-white hover:border-gray-600 border-2 rounded-full shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-gray-700 group"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Started
                <Rocket className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-gray-700 text-white hover:text-white hover:bg-gray-800 rounded-full transition-all duration-300 group"
                onClick={() =>
                  document
                    .getElementById("team")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Social Media Icons - replacing the previous card element */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="relative">
              <div className="w-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 p-8">
                {/* Abstract shapes inside the container */}
                <div className="hidden absolute left-0 top-0 w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    We Amplify Your Social Media Presence
                  </h3>
                  <p className="text-gray-300">
                    Connecting your brand with audiences across all major
                    platforms
                  </p>
                </div>

                {/* Social media icons in a grid */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6 relative z-10">
                  {socialIcons.map((social, index) => (
                    <SocialIcon
                      key={index}
                      icon={social.icon}
                      name={social.name}
                      color={social.color}
                      delay={social.delay}
                    />
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <div
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 text-gray-300 transition-all duration-500 ${
                      animationComplete ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="text-sm">
                      Let us manage your social presence
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
