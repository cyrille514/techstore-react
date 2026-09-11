import { useState } from 'react';

export default function CheckoutModal({ isOpen, onClose, total, onPaymentSuccess }) {
  const [method, setMethod] = useState('card'); // 'card', 'paypal', 'bizum'
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulation du traitement bancaire (1.5s)
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900">Finalizar Pago</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 font-bold text-xl p-1">✕</button>
        </div>

        <div className="bg-indigo-50 p-4 rounded-xl mb-4 flex justify-between items-center">
          <span className="text-sm font-semibold text-indigo-900">Total a pagar:</span>
          <span className="text-xl font-extrabold text-indigo-600">{total} €</span>
        </div>

        {/* Sélection du mode de paiement (3 options) */}
        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={() => setMethod('card')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
              method === 'card' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-500'
            }`}
          >
            💳 Tarjeta
          </button>
          <button
            type="button"
            onClick={() => setMethod('paypal')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
              method === 'paypal' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-500'
            }`}
          >
            🅿️ PayPal
          </button>
          <button
            type="button"
            onClick={() => setMethod('bizum')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
              method === 'bizum' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-500'
            }`}
          >
            📱 Bizum
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {method === 'card' && (
            <>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Número de tarjeta</label>
                <input type="text" required placeholder="4532 •••• •••• 8892" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-600" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Caducidad</label>
                  <input type="text" required placeholder="MM/YY" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-600" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">CVC</label>
                  <input type="text" required placeholder="123" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-600" />
                </div>
              </div>
            </>
          )}

          {method === 'paypal' && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Correo electrónico de PayPal</label>
              <input type="email" required placeholder="usuario@email.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-600" />
            </div>
          )}

          {method === 'bizum' && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Número de teléfono móvil</label>
              <input type="tel" required placeholder="600 000 000" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-600" />
            </div>
          )}

          <div className="flex gap-3 pt-3">
            <button type="button" onClick={onClose} className="flex-1 bg-slate-100 text-slate-700 font-semibold py-2 rounded-xl text-sm">
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isProcessing}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-xl text-sm transition-colors shadow-sm disabled:bg-slate-300"
            >
              {isProcessing ? 'Procesando...' : 'Pagar Ahora'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
