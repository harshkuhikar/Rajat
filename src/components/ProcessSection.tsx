
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Lightbulb, 
  Compass, 
  Rocket, 
  BarChart, 
  CheckCircle 
} from 'lucide-react';

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps = [
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: "Discovery",
      description: "We start by getting to know your brand inside and out. Through in-depth discussions and research, we uncover your unique voice, audience, and goals."
    },
    {
      icon: <Compass className="h-12 w-12" />,
      title: "Strategy",
      description: "With insights in hand, we craft a tailored content strategy that aligns with your business objectives and resonates with your target audience."
    },
    {
      icon: <Rocket className="h-12 w-12" />,
      title: "Creation",
      description: "Our creative team brings your strategy to life through compelling content that sparks engagement and drives action across all platforms."
    },
    {
      icon: <BarChart className="h-12 w-12" />,
      title: "Optimization",
      description: "We continuously monitor performance, gather data, and refine our approach to ensure your content achieves maximum impact and ROI."
    },
    {
      icon: <CheckCircle className="h-12 w-12" />,
      title: "Success",
      description: "Watch as your brand visibility increases, engagement grows, and your business objectives become reality through our strategic content approach."
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-20 px-4 md:px-8 max-w-7xl mx-auto transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient-to-r">
          How We Spark Your Success
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Our proven process transforms your vision into content that ignites engagement and drives results
        </p>
      </div>
      
      <div className="relative">
        {/* Connection line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-500 hidden md:block" style={{transform: "translateX(-50%)"}}></div>
        
        {/* Process steps */}
        <div className="space-y-16 md:space-y-32 relative">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8`}
              style={{
                transitionDelay: `${index * 200}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease-out"
              }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white z-10 shadow-glow">
                {step.icon}
              </div>
              
              {/* Content */}
              <div className={`flex-grow p-6 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-xl ${
                index % 2 === 0 ? "md:text-left" : "md:text-right"
              }`}>
                <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
