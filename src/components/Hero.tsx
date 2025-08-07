import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 text-sm">+1000 clientes satisfechos</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                Postres
              </span>
              <br />
              <span className="text-gray-800">Artesanales</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Descubre nuestros deliciosos postres hechos con ingredientes premium y mucho amor. 
              Cada bocado es una experiencia única.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#products"
                className="group bg-gradient-to-r from-pink-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 scroll-smooth"
              >
                <span>Ver Catálogo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#about"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-pink-600 hover:text-pink-600 transition-colors flex items-center justify-center scroll-smooth"
              >
                Conoce Nuestra Historia
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Postres artesanales" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">24/7</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Delivery Disponible</p>
                  <p className="text-sm text-gray-600">Entrega rápida y segura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;