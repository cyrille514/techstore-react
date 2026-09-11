// Liste complète des produits avec noms et prix réels associés à vos images locales
const CUSTOM_PRODUCTS = [
  // --- Portátiles ---
  { 
    nombre: 'MacBook Pro 16" M3', 
    precio: 2499, 
    stock: 5, 
    categoria: 'Portátiles', 
    imagen: '/images/laptop.jpg' 
  },
  { 
    nombre: 'Dell XPS 15 OLED', 
    precio: 1899, 
    stock: 3, 
    categoria: 'Portátiles', 
    imagen: '/images/laptop1.jpg' 
  },
  { 
    nombre: 'Asus ROG Zephyrus G14', 
    precio: 1599, 
    stock: 4, 
    categoria: 'Portátiles', 
    imagen: '/images/ordenador.avif' 
  },

  // --- Periféricos ---
  { 
    nombre: 'Mouse Inalámbrico Ergonómico', 
    precio: 49, 
    stock: 12, 
    categoria: 'Periféricos', 
    imagen: '/images/mousse.jpg' 
  },
  { 
    nombre: 'Secador Pro Estudio', 
    precio: 79, 
    stock: 8, 
    categoria: 'Periféricos', 
    imagen: '/images/ecouchador.jpg' 
  },
  { 
    nombre: 'Ratón Gaming RGB 16000 DPI', 
    precio: 65, 
    stock: 15, 
    categoria: 'Periféricos', 
    imagen: '/images/Raton.jpg' 
  },
  { 
    nombre: 'Teclado Mecánico Retroalimentado', 
    precio: 129, 
    stock: 7, 
    categoria: 'Periféricos', 
    imagen: '/images/teclado.avif' 
  },

  // --- Accesorios ---
  { 
    nombre: 'Pack Robótica y Domótica Completo', 
    precio: 199, 
    stock: 6, 
    categoria: 'Accesorios', 
    imagen: '/images/complet.jpg' 
  },
  { 
    nombre: 'Frigorífico Inteligente Compacto', 
    precio: 899, 
    stock: 2, 
    categoria: 'Accesorios', 
    imagen: '/images/frigo.avif' 
  },
  { 
    nombre: 'Kit Mantenimiento Hardware Pro', 
    precio: 35, 
    stock: 20, 
    categoria: 'Accesorios', 
    imagen: '/images/kit.jpg' 
  },
  { 
    nombre: 'Refrigerador Secundario Tech', 
    precio: 649, 
    stock: 3, 
    categoria: 'Accesorios', 
    imagen: '/images/refrigerateur.avif' 
  },
  { 
    nombre: 'Robot de Cocina Multifunción', 
    precio: 349, 
    stock: 5, 
    categoria: 'Accesorios', 
    imagen: '/images/moulinex.avif' 
  },
  { 
    nombre: 'Ventilador Silencioso USB', 
    precio: 29, 
    stock: 18, 
    categoria: 'Accesorios', 
    imagen: '/images/ventilador.avif' 
  },
  { 
    nombre: 'Ventilador de Torre Digital', 
    precio: 85, 
    stock: 9, 
    categoria: 'Accesorios', 
    imagen: '/images/ventilador1.jpg' 
  },
  { 
    nombre: 'Pack Electrodomésticos Smart Home', 
    precio: 1120, 
    stock: 2, 
    categoria: 'Accesorios', 
    imagen: '/images/menager.avif' 
  }
];

export const apiService = {
  /**
   * Récupère la liste complète des produits avec identifiant unique.
   */
  async getProducts() {
    try {
      return CUSTOM_PRODUCTS.map((item, index) => ({
        id: String(index + 1),
        ...item
      }));
    } catch (error) {
      console.error('Erreur lors du chargement des produits :', error);
      return [];
    }
  }
};
