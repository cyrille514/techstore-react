export default function ProductCard({ product, onAddToCart, onDeleteProduct }) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative group">
      <div>
        <div className="relative mb-3 bg-slate-50 rounded-xl p-2 h-44 flex items-center justify-center overflow-hidden">
          <span className="absolute top-2 left-2 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
            {product.categoria}
          </span>
          <img
            src={product.imagen}
            alt={product.nombre}
            className="h-full w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h3 className="font-semibold text-slate-800 text-sm line-clamp-2 mb-2" title={product.nombre}>
          {product.nombre}
        </h3>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-indigo-600">{product.precio} €</span>
          <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
            Stock: {product.stock}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl text-xs transition-colors flex items-center justify-center gap-1"
          >
            🛒 Añadir
          </button>
          <button
            onClick={() => onDeleteProduct(product.id)}
            className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
            title="Eliminar producto"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}
