import React from 'react';
import { useBoxContext } from '../context/BoxContext';
import { Save } from 'lucide-react';

interface BoxResultDisplayProps {
  onSave: () => void;
}

const BoxResultDisplay: React.FC<BoxResultDisplayProps> = ({ onSave }) => {
  const { 
    boxType,
    glassColor,
    width,
    width2,
    hasInstallmentFee,
    totalPrice
  } = useBoxContext();

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
            <p className="text-sm text-gray-500">Tipo de Box</p>
            <p className="text-lg font-medium capitalize">{boxType === 'reto' ? 'Box Reto' : 'Box de Canto'}</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500">Cor do Vidro</p>
            <p className="text-lg font-medium capitalize">{glassColor}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500">Largura {boxType === 'canto' ? '1' : ''}</p>
              <p className="text-lg font-medium">{width.toFixed(2)}m</p>
            </div>
            
            {boxType === 'canto' && (
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500">Largura 2</p>
                <p className="text-lg font-medium">{width2.toFixed(2)}m</p>
              </div>
            )}
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500">Taxa de Parcelamento</p>
            <p className="text-lg font-medium">{hasInstallmentFee ? 'Sim (+10%)' : 'Não'}</p>
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

export default BoxResultDisplay;