import React from 'react';
import { ShoppingBag, ChefHat, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-pink-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              Dulce Tentación
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors font-medium scroll-smooth">
              Inicio
            </a>
            <a href="#products" className="text-gray-700 hover:text-pink-600 transition-colors font-medium scroll-smooth">
              Productos
            </a>
            <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors font-medium scroll-smooth">
              Nosotros
            </a>
            <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors font-medium scroll-smooth">
              Contacto
            </a>
          </nav>

          <button
            onClick={onCartClick}
            className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors hover:bg-pink-50 rounded-full"
          >
            <ShoppingBag className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-600 to-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          <button className="md:hidden p-2 text-gray-700 hover:text-pink-600 transition-colors">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;