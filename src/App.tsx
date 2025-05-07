import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GlassCalculator from './components/GlassCalculator';
import BoxCalculator from './components/BoxCalculator';
import { GlassContextProvider } from './context/GlassContext';
import { BoxContextProvider } from './context/BoxContext';
import { Calculator, Box } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <nav className="bg-blue-700 text-white p-4 sticky top-0 z-50 shadow-md">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="text-2xl font-bold">MDO Vidros</h1>
            <div className="flex gap-2 w-full sm:w-auto justify-center">
              <Link
                to="/"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Calculator size={20} />
                <span>Calculadora</span>
              </Link>
              <Link
                to="/box"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Box size={20} />
                <span>Box</span>
              </Link>
            </div>
          </div>
        </nav>

        <div className="p-4 flex items-start justify-center min-h-[calc(100vh-80px)]">
          <Routes>
            <Route
              path="/"
              element={
                <GlassContextProvider>
                  <GlassCalculator />
                </GlassContextProvider>
              }
            />
            <Route
              path="/box"
              element={
                <BoxContextProvider>
                  <BoxCalculator />
                </BoxContextProvider>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;