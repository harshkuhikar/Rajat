
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className={`py-20 px-4 md:px-8 transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-black to-gray-900 p-8 md:p-16 border border-gray-800/50 shadow-2xl">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-teal-500/30 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="md:max-w-2xl">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-6 w-6 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Ready to ignite your brand?</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Let's Create Content That <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Makes an Impact</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of successful brands who've transformed their digital presence with our expert content services. Your audience is waiting to hear your story.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="text-lg px-8 py-6 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 rounded-full border-0 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started Today
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="text-lg px-8 py-6 border-2 border-gray-700 text-white hover:bg-gray-800 rounded-full transition-all duration-300 group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            <div className="flex-shrink-0 hidden lg:block">
              <div className="w-40 h-40 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 animate-pulse" style={{animationDuration: "3s"}}></div>
                <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center">
                  <Zap className="h-16 w-16 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
