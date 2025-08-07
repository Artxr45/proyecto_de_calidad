import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import { desserts } from '../data/desserts';

const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', count: desserts.length },
    { id: 'cakes', name: 'Tartas', count: desserts.filter(d => d.category === 'cakes').length },
    { id: 'cupcakes', name: 'Cupcakes', count: desserts.filter(d => d.category === 'cupcakes').length },
    { id: 'cookies', name: 'Galletas', count: desserts.filter(d => d.category === 'cookies').length },
    { id: 'ice-cream', name: 'Helados', count: desserts.filter(d => d.category === 'ice-cream').length },
  ];

  const filteredDesserts = selectedCategory === 'all' 
    ? desserts 
    : desserts.filter(dessert => dessert.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Nuestros <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">Postres</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada postre es una obra maestra creada con ingredientes frescos y técnicas tradicionales
          </p>
        </div>

        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDesserts.map((dessert, index) => (
            <ProductCard 
              key={dessert.id} 
              dessert={dessert} 
              animationDelay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;