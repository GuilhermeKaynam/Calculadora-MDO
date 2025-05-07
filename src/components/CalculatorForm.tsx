import React from 'react';
import { useGlassContext } from '../context/GlassContext';
import { glassData } from '../data/glassData';

const CalculatorForm: React.FC = () => {
  const {
    glassType,
    setGlassType,
    height,
    setHeight,
    width,
    setWidth,
    isBeveled,
    setIsBeveled,
    serviceType,
    setServiceType,
    hasInstallmentFee,
    setHasInstallmentFee,
  } = useGlassContext();

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="glassType" className="block text-sm font-medium text-gray-700">
          Tipo de Vidro
        </label>
        <select
          id="glassType"
          value={glassType}
          onChange={(e) => setGlassType(e.target.value)}
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {Object.keys(glassData).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="height" className="block text-sm font-medium text-gray-700">
            Altura (metros)
          </label>
          <input
            id="height"
            type="number"
            min="0.01"
            step="0.01"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
            className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="width" className="block text-sm font-medium text-gray-700">
            Largura (metros)
          </label>
          <input
            id="width"
            type="number"
            min="0.01"
            step="0.01"
            value={width}
            onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
            className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="isBeveled"
          type="checkbox"
          checked={isBeveled}
          onChange={(e) => setIsBeveled(e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="isBeveled" className="ml-2 block text-sm text-gray-700">
          Vidro Lapidado? (adicional de 20%)
        </label>
      </div>

      <div className="space-y-2">
        <span className="block text-sm font-medium text-gray-700">Tipo de Serviço</span>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <input
              id="pickup"
              type="radio"
              value="retirar"
              checked={serviceType === 'retirar'}
              onChange={() => setServiceType('retirar')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <label htmlFor="pickup" className="ml-2 block text-sm text-gray-700">
              Retirada
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="installation"
              type="radio"
              value="instalado"
              checked={serviceType === 'instalado'}
              onChange={() => setServiceType('instalado')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <label htmlFor="installation" className="ml-2 block text-sm text-gray-700">
              Instalação
            </label>
          </div>
        </div>
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

export default CalculatorForm;