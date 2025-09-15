
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface ServiceProps {
  service: {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
  };
  index: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Add staggered animation delay based on index
  const delay = index * 100;
  
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ${
        inView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/50 group">
        <CardHeader className="pb-2">
          <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-teal-500 transition-all duration-500 shadow-lg">
            {service.icon}
          </div>
          <CardTitle className="text-2xl font-bold text-white">{service.title}</CardTitle>
          <CardDescription className="text-lg text-cyan-400 font-medium">
            {service.subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">{service.description}</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="text-cyan-400 p-0 hover:text-cyan-300 hover:bg-transparent group">
            Learn more 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ServiceCard;
