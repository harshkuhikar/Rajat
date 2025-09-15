import React from "react";
import { useInView } from "react-intersection-observer";
import { Users, BarChart3, ThumbsUp, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const StatisticsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <Users className="h-10 w-10" />,
      value: "20+",
      label: "Happy custoemrs",
      color: "from-blue-500 to-cyan-300",
    },
    {
      icon: <Sparkles className="h-10 w-10" />,
      value: "50+",
      label: "Campaigns Launched",
      color: "from-amber-500 to-orange-300",
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-16 px-4 md:px-8 transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`transition-all duration-700 transform ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="h-full border-none shadow-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950">
                <div className="p-6 relative z-10 overflow-hidden">
                  {/* Glowing background effect */}
                  <div
                    className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${stat.color} opacity-20 blur-xl`}
                  ></div>

                  {/* Icon with gradient background */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg`}
                  >
                    {stat.icon}
                  </div>

                  {/* Statistics */}
                  <h3
                    className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
