export default function Header({ onOpenModal }) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 text-white p-2 rounded-xl font-bold text-xl">
            ⚡
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 leading-none">TechStore API</h1>
            <p className="text-xs text-slate-500 mt-1">Panel E-Commerce & Control de Stock</p>
          </div>
        </div>

        <button
          onClick={onOpenModal}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-sm flex items-center gap-2"
        >
          <span>+</span>
          <span>Nuevo Producto</span>
        </button>
      </div>
    </header>
  );
}
