import React from 'react';
import { useGlassContext } from '../context/GlassContext';
import { Trash2 } from 'lucide-react';

const CalculationHistory: React.FC = () => {
  const { calculationHistory, clearHistory } = useGlassContext();

  const formatCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  if (calculationHistory.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">Nenhum cálculo salvo ainda.</p>
        <p className="text-gray-400">Os cálculos que você salvar aparecerão aqui.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Histórico de Cálculos</h2>
        <button
          onClick={clearHistory}
          className="flex items-center text-red-600 hover:text-red-800 transition-colors"
        >
          <Trash2 size={16} className="mr-1" />
          <span>Limpar Histórico</span>
        </button>
      </div>

      <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
        {calculationHistory.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-blue-700">{item.glassType}</h3>
              <span className="text-sm text-gray-500">{formatDate(item.date)}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 mb-3">
              <div>
                <p className="text-xs text-gray-500">Dimensões</p>
                <p className="text-sm">
                  {item.height.toFixed(2)}m × {item.width.toFixed(2)}m
                </p>
              </div>
              
              <div>
                <p className="text-xs text-gray-500">Área</p>
                <p className="text-sm">{item.area.toFixed(2)} m²</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-500">Serviço</p>
                <p className="text-sm capitalize">{item.serviceType === 'retirar' ? 'Retirada' : 'Instalação'}</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-500">Lapidado</p>
                <p className="text-sm">{item.isBeveled ? 'Sim' : 'Não'}</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-500">Parcelamento</p>
                <p className="text-sm">{item.hasInstallmentFee ? 'Sim' : 'Não'}</p>
              </div>
            </div>
            
            <div className="mt-2 flex justify-end">
              <p className="font-bold text-lg text-green-600">
                {formatCurrency(item.totalPrice)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalculationHistory;