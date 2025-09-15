import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../SPARK_LOGO.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Spark Media
          </span> */}
          <img src={logo} alt="" style={{ height: "50px" }} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#hero"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#team"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            Contact
          </a>
          <Button
            className="bg-gradient-to-r bg-black hover:bg-gray-700 text-white hover:border-gray-600 border-2 transition-all duration-300"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Quote
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute w-full bg-gray-900 shadow-lg py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a
              href="#hero"
              className="text-white hover:text-cyan-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-white hover:text-cyan-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-white hover:text-cyan-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#team"
              className="text-white hover:text-cyan-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-white hover:text-cyan-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Quote
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
