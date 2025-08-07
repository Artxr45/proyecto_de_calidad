import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: "Hecho con Amor",
      description: "Cada postre es creado con pasión y dedicación, usando recetas familiares transmitidas por generaciones."
    },
    {
      icon: Award,
      title: "Ingredientes Premium",
      description: "Seleccionamos solo los mejores ingredientes: chocolate belga, vainilla de Madagascar y frutas frescas."
    },
    {
      icon: Users,
      title: "Equipo Experto",
      description: "Nuestros pasteleros tienen más de 15 años de experiencia creando momentos dulces únicos."
    },
    {
      icon: Clock,
      title: "Frescura Garantizada",
      description: "Todos nuestros postres se preparan diariamente para garantizar la máxima frescura y sabor."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Sobre <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">Nosotros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desde 2010, Dulce Tentación ha sido el destino favorito para los amantes de los postres. 
            Nuestra misión es crear momentos especiales a través de sabores únicos y presentaciones artísticas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Nuestra Historia</h3>
            <p className="text-gray-600 leading-relaxed">
              Todo comenzó en la cocina de la abuela María, donde las recetas secretas se transmitían 
              de generación en generación. Con el sueño de compartir estos sabores únicos con el mundo, 
              fundamos Dulce Tentación.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hoy, más de una década después, seguimos manteniendo esa tradición familiar mientras 
              innovamos con nuevas técnicas y sabores. Cada postre cuenta una historia y crea 
              recuerdos inolvidables.
            </p>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                  10,000+
                </div>
                <div className="text-gray-600 text-sm">Postres Vendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                  1,500+
                </div>
                <div className="text-gray-600 text-sm">Clientes Felices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                  14
                </div>
                <div className="text-gray-600 text-sm">Años de Experiencia</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Nuestro equipo trabajando" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Hecho con Amor</p>
                  <p className="text-sm text-gray-600">Desde 2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;