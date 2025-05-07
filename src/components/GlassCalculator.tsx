import React, { useState } from 'react';
import GlassCalculatorForm from './CalculatorForm';
import ResultDisplay from './ResultDisplay';
import CalculationHistory from './CalculationHistory';
import { useGlassContext } from '../context/GlassContext';
import { ClipboardList, Calculator } from 'lucide-react';

const GlassCalculator: React.FC = () => {
  const { addToHistory } = useGlassContext();
  const [activeTab, setActiveTab] = useState<'calculator' | 'history'>('calculator');

  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out">
      <div className="bg-blue-700 text-white p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left">
            MDO Calculadora de Vidros
          </h1>
          <div className="flex gap-2 w-full sm:w-auto justify-center">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'calculator' ? 'bg-blue-800' : 'hover:bg-blue-600'
              }`}
            >
              <Calculator size={18} />
              <span>Calculadora</span>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'history' ? 'bg-blue-800' : 'hover:bg-blue-600'
              }`}
            >
              <ClipboardList size={18} />
              <span>Histórico</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {activeTab === 'calculator' ? (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Informações do Vidro</h2>
              <GlassCalculatorForm />
            </div>
            <div>
              <ResultDisplay onSave={addToHistory} />
            </div>
          </div>
        ) : (
          <CalculationHistory />
        )}
      </div>

      <div className="bg-gray-100 p-4 text-center text-gray-600 text-sm">
        © 2025 MDO Vidros - Calculadora desenvolvida para auxiliar orçamentos
      </div>
    </div>
  );
};

export default GlassCalculator;