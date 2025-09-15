import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Social Media Revolution",
      client: "TechGrow Solutions",
      description:
        "Transformed their social media presence with targeted content that increased engagement by 240% and grew their following by 10,000+ in just three months.",
      tags: ["Social Media", "Strategy", "Content Creation"],
      image: "/placeholder.svg",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Content Overhaul",
      client: "Wellness Worldwide",
      description:
        "Revitalized the brand's content strategy across all channels, leading to a 180% increase in website traffic and 85% improvement in conversion rates.",
      tags: ["Content Strategy", "SEO", "Brand Voice"],
      image: "/placeholder.svg",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Campaign Launch",
      client: "EcoFriendly Products",
      description:
        "Designed and executed an integrated campaign that reached 2 million people and drove a 35% increase in product sales during the first month of launch.",
      tags: ["Campaign", "Creative", "Analytics"],
      image: "/placeholder.svg",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Brand Storytelling",
      client: "Heritage Crafts Co.",
      description:
        "Created an authentic brand narrative that connected emotionally with audiences, resulting in a 90% positive sentiment increase and 45% rise in direct inquiries.",
      tags: ["Storytelling", "Brand Identity", "Content"],
      image: "/placeholder.svg",
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section
      style={{ display: "none" }}
      ref={ref}
      className={`py-20 px-4 md:px-8 max-w-7xl mx-auto transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      id="projects"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient-to-r">
          Sparks That Ignited Success
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Browse through our portfolio of projects that transformed brands and
          delivered exceptional results
        </p>
      </div>

      <Carousel
        className="w-full max-w-5xl mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/2 pl-4"
            >
              <div
                className="h-full overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 shadow-xl"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.6s ease-out",
                }}
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/30 mix-blend-overlay filter blur-xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-white/20 mix-blend-overlay filter blur-xl"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h4 className="text-lg font-medium text-white">
                      {project.client}
                    </h4>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="bg-gray-800/50 text-gray-300 border-gray-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-cyan-400 hover:text-cyan-300 p-0 hover:bg-transparent"
                  >
                    Case study{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8 gap-4">
          <CarouselPrevious className="static relative transform-none bg-gray-800 hover:bg-gray-700 border-gray-700" />
          <CarouselNext className="static relative transform-none bg-gray-800 hover:bg-gray-700 border-gray-700" />
        </div>
      </Carousel>
    </section>
  );
};

export default ProjectsSection;
