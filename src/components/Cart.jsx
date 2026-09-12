export default function Cart({ cart, onIncrease, onDecrease, onOpenCheckout }) {
  const total = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0);

  return (
    <aside className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-fit">
      <h2 className="text-lg bg-yellow-200 font-bold text-violet-600 mb-4">Carrito de Compras</h2>
      
      {cart.length === 0 ? (
        <p className="text-slate-400 text-sm">El carrito está vacío</p>
      ) : (
        <div className="space-y-4">
          <div className="space-y-3">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <img src={item.imagen} alt={item.nombre} className="w-10 h-10 rounded-lg object-contain bg-white p-1" />
                  <div>
                    <h4 className="font-semibold text-sm text-slate-800 line-clamp-1">{item.nombre}</h4>
                    <p className="text-xs text-indigo-600 font-bold">{item.precio} €</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-slate-200">
                  <button onClick={() => onDecrease(item.id)} className="text-slate-500 hover:text-indigo-600 font-bold text-sm w-4 h-4 flex items-center justify-center">-</button>
                  <span className="text-xs font-bold text-slate-700 w-4 text-center">{item.quantity}</span>
                  <button onClick={() => onIncrease(item.id)} className="text-slate-500 hover:text-indigo-600 font-bold text-sm w-4 h-4 flex items-center justify-center">+</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <div className="flex justify-between font-bold text-slate-900">
              <span className="text-violet-400" >Total:</span>
              <span className="text-indigo-600">{total} €</span>
            </div>

            <button
              onClick={onOpenCheckout}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <span>💳</span>
              <span>Procesar Pago</span>
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
