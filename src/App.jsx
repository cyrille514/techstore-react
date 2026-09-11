import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductFilter from './components/ProductFilter';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Toast from './components/Toast';
import AddProductModal from './components/AddProductModal';
import CheckoutModal from './components/CheckoutModal';
import { apiService } from './services/api';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [toastMessage, setToastMessage] = useState('');
  
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const data = await apiService.getProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleAddToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    showNotification('Producto añadido al carrito');
  };

  const handleIncreaseQuantity = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleDecreaseQuantity = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0));
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
    setCart(cart.filter(item => item.id !== id));
    showNotification('Producto eliminado');
  };

  const handleAddProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
    showNotification('¡Nuevo producto creado!');
  };

  const handlePaymentSuccess = () => {
    setCart([]);
    showNotification('🎉 ¡Pago realizado con éxito! Gracias por tu compra.');
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'Todos' || product.categoria === selectedCategory;
    const matchesSearch = product.nombre.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cartTotal = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <ProductFilter 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart}
                onDeleteProduct={handleDeleteProduct}
              />
            ))}
          </div>
        </section>

        <Cart 
          cart={cart}
          onIncrease={handleIncreaseQuantity}
          onDecrease={handleDecreaseQuantity}
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />
      </main>

      <AddProductModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProduct={handleAddProduct}
      />

      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        total={cartTotal}
        onPaymentSuccess={handlePaymentSuccess}
      />

      <Toast message={toastMessage} />
    </div>
  );
}
