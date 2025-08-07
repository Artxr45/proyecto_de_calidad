# Dulce Tentación - Aplicación de Ventas de Postres

Una elegante aplicación de comercio electrónico para la venta de postres artesanales, construida con React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Catálogo de Productos**: Navegación por categorías con filtros dinámicos
- **Carrito de Compras**: Funcionalidad completa de agregar, quitar y modificar cantidades
- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Interfaz Moderna**: Animaciones suaves y micro-interacciones
- **Formulario de Contacto**: Integrado con Netlify Forms
- **Optimizado para SEO**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utilitario
- **Vite** - Herramienta de construcción rápida
- **Lucide React** - Iconos modernos
- **Context API** - Gestión de estado del carrito

## 📦 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la construcción
npm run preview
```

## 🌐 Despliegue en Netlify

Esta aplicación está optimizada para Netlify:

1. **Automático**: Conecta tu repositorio de GitHub a Netlify
2. **Manual**: Ejecuta `npm run build` y sube la carpeta `dist`

### Configuración de Netlify

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18

## 📋 Funcionalidades

### Carrito de Compras
- Agregar productos con un clic
- Modificar cantidades dinámicamente
- Eliminar productos individuales
- Cálculo automático de totales
- Persistencia durante la sesión

### Navegación
- Scroll suave entre secciones
- Menú responsive
- Contador de items en el carrito

### Formulario de Contacto
- Validación de campos
- Integración con Netlify Forms
- Confirmación visual de envío

## 🎨 Diseño

- **Paleta de Colores**: Rosa (#EC4899) y Naranja (#F97316)
- **Tipografía**: Sistema de fuentes nativo optimizado
- **Espaciado**: Sistema de 8px para consistencia
- **Animaciones**: Transiciones suaves y hover effects

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Imágenes**: Optimizadas para diferentes densidades de pantalla

## 🔧 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductCatalog.tsx
│   ├── ProductCard.tsx
│   ├── Cart.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── context/            # Context API
│   └── CartContext.tsx
├── data/              # Datos estáticos
│   └── desserts.ts
├── types/             # Definiciones TypeScript
│   └── dessert.ts
└── App.tsx           # Componente principal
```

## 🚀 Próximas Mejoras

- [ ] Integración con pasarela de pagos (Stripe)
- [ ] Sistema de autenticación de usuarios
- [ ] Base de datos para productos y pedidos
- [ ] Panel de administración
- [ ] Sistema de reviews y calificaciones
- [ ] Notificaciones push
- [ ] Modo oscuro

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.# proyecto_de_calidad
