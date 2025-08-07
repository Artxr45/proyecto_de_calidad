import React from 'react';

interface Category {
  id: string;
  name: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
            selectedCategory === category.id
              ? 'bg-gradient-to-r from-pink-600 to-orange-500 text-white border-transparent shadow-lg transform scale-105'
              : 'text-gray-700 border-gray-200 hover:border-pink-300 hover:text-pink-600 hover:bg-pink-50'
          }`}
        >
          <span>{category.name}</span>
          <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
            selectedCategory === category.id 
              ? 'bg-white/20' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;