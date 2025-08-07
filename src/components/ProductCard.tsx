import React from 'react';
import { Plus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Dessert } from '../types/dessert';

interface ProductCardProps {
  dessert: Dessert;
  animationDelay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ dessert, animationDelay = 0 }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(dessert);
    // Pequeña animación visual para confirmar que se agregó al carrito
    const button = document.activeElement as HTMLElement;
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
    }
  };

  return (
    <div 
      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-pink-200 transform hover:-translate-y-2"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={dessert.image} 
          alt={dessert.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold">{dessert.rating}</span>
          </div>
        </div>
        {dessert.isPopular && (
          <div className="absolute top-4 left-4">
            <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Popular
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
            {dessert.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {dessert.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              ${dessert.price}
            </span>
            <span className="text-xs text-gray-500">por unidad</span>
          </div>

          <button
            onClick={handleAddToCart}
            className="group/btn bg-gradient-to-r from-pink-600 to-orange-500 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
          >
            <Plus className="h-5 w-5 group-hover/btn:rotate-90 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;