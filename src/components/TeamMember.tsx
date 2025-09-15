
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useInView } from 'react-intersection-observer';

interface TeamMemberProps {
  member: {
    name: string;
    title: string;
    subtitle?: string;
    bio: string;
    image: string;
  };
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Add staggered animation delay based on index
  const delay = index * 200;
  
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
      <Card className="max-w-sm overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/50">
        <div className="h-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mix-blend-overlay"></div>
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        </div>
        <CardHeader className="pb-2 relative z-10 -mt-10">
          <CardTitle className="text-2xl font-bold text-white">{member.name}</CardTitle>
          <CardDescription className="text-lg text-cyan-400 font-medium">
            {member.title}
            {member.subtitle && (
              <span className="block text-sm mt-1 italic text-gray-300">{member.subtitle}</span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">{member.bio}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamMember;
