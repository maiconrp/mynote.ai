
import React from "react";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 bg-white/90 backdrop-blur-sm border-b border-gray-100 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-brand-blue" />
          <span className="font-bold text-xl text-gray-900">
            mynote<span className="text-brand-blue">.ia</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#funcionalidades" className="text-gray-600 hover:text-gray-900 transition-colors">
            Funcionalidades
          </a>
          <a href="#como-funciona" className="text-gray-600 hover:text-gray-900 transition-colors">
            Como funciona
          </a>
          <a href="#planos" className="text-gray-600 hover:text-gray-900 transition-colors">
            Planos
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="hidden md:inline-flex">
            Login
          </Button>
          <Button className="bg-brand-accent hover:bg-orange-600 text-white font-medium">
            Experimente Grátis
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
