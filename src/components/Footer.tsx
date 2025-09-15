
import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Spark Media
            </h3>
            <p className="text-purple-200 mb-4">
              Ready to ignite your brand's potential? At Spark Media, we're not just creating content; 
              we're crafting sparks that connect with your audience and set your business ablaze with success.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-purple-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-purple-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-purple-200 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#team" className="text-purple-200 hover:text-white transition-colors">Team</a></li>
              <li><a href="#contact" className="text-purple-200 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-purple-300" />
                <span className="text-purple-200">India (We're here to serve you!)</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-purple-300" />
                <a href="mailto:sparksocialmedia.in@gmail.com" className="text-purple-200 hover:text-white transition-colors">
                  sparksocialmedia.in@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-purple-300" />
                <a href="tel:+919427407354" className="text-purple-200 hover:text-white transition-colors">
                  +91 9427407354
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <a 
              href="https://www.instagram.com/sparksocialmedia.in?igsh=MWRlcnNnd2VvcTVocg%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-purple-200 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5 mr-2" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-purple-800 pt-8 text-center">
          <p className="text-purple-300">
            &copy; {currentYear} Spark Media. All Rights Reserved. (We've got your content covered!)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
