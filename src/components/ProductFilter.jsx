export default function ProductFilter({ selectedCategory, onSelectCategory, searchQuery, onSearchChange }) {
  const categories = ['Todos', 'Portátiles', 'Periféricos', 'Accesorios'];

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
      <div className="flex gap-1 bg-slate-200/60 p-1 rounded-xl w-full sm:w-auto overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="w-full sm:w-64">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar producto..."
          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-indigo-600 transition-colors"
        />
      </div>
    </div>
  );
}
