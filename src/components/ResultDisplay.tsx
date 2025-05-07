import React from 'react';
import { useGlassContext } from '../context/GlassContext';
import { Save } from 'lucide-react';

interface ResultDisplayProps {
  onSave: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ onSave }) => {
  const { 
    glassType, 
    area, 
    isBeveled, 
    serviceType, 
    hasInstallmentFee, 
    totalPrice 
  } = useGlassContext();

  const formatCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-full flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Resultado do Cálculo</h2>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500">Tipo de Vidro</p>
            <p className="text-lg font-medium">{glassType}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500">Área Total</p>
              <p className="text-lg font-medium">{area.toFixed(2)} m²</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500">Tipo de Serviço</p>
              <p className="text-lg font-medium capitalize">{serviceType === 'retirar' ? 'Retirada' : 'Instalação'}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500">Lapidado</p>
              <p className="text-lg font-medium">{isBeveled ? 'Sim (+20%)' : 'Não'}</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500">Taxa de Parcelamento</p>
              <p className="text-lg font-medium">{hasInstallmentFee ? 'Sim (+10%)' : 'Não'}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-sm font-medium text-gray-600">Valor Total:</p>
          <p className="text-3xl font-bold text-green-600 animate-pulse">
            {formatCurrency(totalPrice)}
          </p>
        </div>
        
        <button
          onClick={onSave}
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Save size={18} />
          <span>Salvar Cálculo</span>
        </button>
      </div>
    </div>
  );
};

export default ResultDisplay;