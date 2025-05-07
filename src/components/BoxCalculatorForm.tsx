import React from 'react';
import { useBoxContext } from '../context/BoxContext';

const BoxCalculatorForm: React.FC = () => {
  const {
    boxType,
    setBoxType,
    glassColor,
    setGlassColor,
    width,
    setWidth,
    width2,
    setWidth2,
    hasInstallmentFee,
    setHasInstallmentFee,
  } = useBoxContext();

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Tipo de Box
        </label>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <input
              id="reto"
              type="radio"
              value="reto"
              checked={boxType === 'reto'}
              onChange={() => setBoxType('reto')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <label htmlFor="reto" className="ml-2 block text-sm text-gray-700">
              Box Reto
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="canto"
              type="radio"
              value="canto"
              checked={boxType === 'canto'}
              onChange={() => setBoxType('canto')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <label htmlFor="canto" className="ml-2 block text-sm text-gray-700">
              Box de Canto
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Cor do Vidro
        </label>
        <select
          value={glassColor}
          onChange={(e) => setGlassColor(e.target.value as 'incolor' | 'fume' | 'verde')}
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="incolor">Incolor</option>
          <option value="fume">Fumê</option>
          <option value="verde">Verde</option>
        </select>
      </div>

      <div className={`grid ${boxType === 'canto' ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
        <div className="space-y-2">
          <label htmlFor="width" className="block text-sm font-medium text-gray-700">
            Largura {boxType === 'canto' ? '1' : ''} (metros)
          </label>
          <input
            id="width"
            type="number"
            min="0.1"
            step="0.01"
            value={width}
            onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
            className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {boxType === 'canto' && (
          <div className="space-y-2">
            <label htmlFor="width2" className="block text-sm font-medium text-gray-700">
              Largura 2 (metros)
            </label>
            <input
              id="width2"
              type="number"
              min="0.1"
              step="0.01"
              value={width2}
              onChange={(e) => setWidth2(parseFloat(e.target.value) || 0)}
              className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        )}
      </div>

      <div className="flex items-center">
        <input
          id="hasInstallmentFee"
          type="checkbox"
          checked={hasInstallmentFee}
          onChange={(e) => setHasInstallmentFee(e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="hasInstallmentFee" className="ml-2 block text-sm text-gray-700">
          Aplicar Taxa de Parcelamento? (adicional de 10%)
        </label>
      </div>
    </div>
  );
};

export default BoxCalculatorForm;