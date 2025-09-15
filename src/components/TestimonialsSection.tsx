
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { StarIcon } from 'lucide-react';

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Marketing Director",
      company: "TechGrow Solutions",
      image: "/placeholder.svg",
      content: "Working with Spark Media transformed our brand's online presence completely. Their team understood our vision immediately and turned it into captivating content that truly resonated with our audience. Our engagement metrics have never been better!",
      stars: 5
    },
    {
      name: "Sarah Williams",
      role: "CEO",
      company: "Wellness Worldwide",
      image: "/placeholder.svg",
      content: "The creativity and strategic thinking that Spark Media brings to the table is unmatched. They didn't just manage our content; they elevated our entire brand story. The ROI we've seen from their campaigns has exceeded our expectations tenfold.",
      stars: 5
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "EcoFriendly Products",
      image: "/placeholder.svg",
      content: "As a startup, we needed a content partner who could help us stand out in a crowded market. Spark Media delivered beyond our wildest expectations. Their approach is both creative and data-driven, resulting in content that not only looks great but performs exceptionally well.",
      stars: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Brand Manager",
      company: "Heritage Crafts Co.",
      image: "/placeholder.svg",
      content: "Spark Media has an incredible ability to capture the essence of a brand. They translated our company's rich history and craftsmanship into compelling content that attracted exactly the kind of customers we wanted to reach. They're true partners in our success.",
      stars: 5
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-20 px-4 md:px-8 max-w-7xl mx-auto transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      id="testimonials"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient-to-r">
          Voices of Success
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Don't just take our word for it—hear what our clients have to say about their Spark Media experience
        </p>
      </div>
      
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div 
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.6s ease-out"
                }}
              >
                <Card className="border-none shadow-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-gray-300 mb-6 flex-grow">"{testimonial.content}"</p>
                    
                    <div className="flex items-center mt-auto pt-4 border-t border-gray-700/50">
                      <Avatar className="h-10 w-10 mr-3 border border-gray-700">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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

export default TestimonialsSection;
