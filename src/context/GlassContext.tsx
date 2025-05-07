import React, { createContext, useState, useContext, ReactNode } from 'react';
import { glassData } from '../data/glassData';
import { calculatePrice } from '../utils/calculatorUtils';

type ServiceType = 'retirar' | 'instalado';

interface GlassContextType {
  glassType: string;
  setGlassType: (type: string) => void;
  height: number;
  setHeight: (height: number) => void;
  width: number;
  setWidth: (width: number) => void;
  isBeveled: boolean;
  setIsBeveled: (isBeveled: boolean) => void;
  serviceType: ServiceType;
  setServiceType: (type: ServiceType) => void;
  hasInstallmentFee: boolean;
  setHasInstallmentFee: (has: boolean) => void;
  area: number;
  totalPrice: number;
  calculationHistory: CalculationHistoryItem[];
  addToHistory: () => void;
  clearHistory: () => void;
}

export interface CalculationHistoryItem {
  id: string;
  glassType: string;
  height: number;
  width: number;
  isBeveled: boolean;
  serviceType: ServiceType;
  hasInstallmentFee: boolean;
  area: number;
  totalPrice: number;
  date: Date;
}

const GlassContext = createContext<GlassContextType | undefined>(undefined);

export const GlassContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [glassType, setGlassType] = useState<string>(Object.keys(glassData)[0]);
  const [height, setHeight] = useState<number>(1);
  const [width, setWidth] = useState<number>(1);
  const [isBeveled, setIsBeveled] = useState<boolean>(false);
  const [serviceType, setServiceType] = useState<ServiceType>('retirar');
  const [hasInstallmentFee, setHasInstallmentFee] = useState<boolean>(false);
  const [calculationHistory, setCalculationHistory] = useState<CalculationHistoryItem[]>([]);

  const area = height * width;
  
  const totalPrice = calculatePrice({
    glassType,
    area,
    isBeveled,
    serviceType,
    hasInstallmentFee,
  });

  const addToHistory = () => {
    const newHistoryItem: CalculationHistoryItem = {
      id: Date.now().toString(),
      glassType,
      height,
      width,
      isBeveled,
      serviceType,
      hasInstallmentFee,
      area,
      totalPrice,
      date: new Date(),
    };

    setCalculationHistory(prev => [newHistoryItem, ...prev].slice(0, 10));
  };

  const clearHistory = () => {
    setCalculationHistory([]);
  };

  return (
    <GlassContext.Provider
      value={{
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
        area,
        totalPrice,
        calculationHistory,
        addToHistory,
        clearHistory,
      }}
    >
      {children}
    </GlassContext.Provider>
  );
};

export const useGlassContext = () => {
  const context = useContext(GlassContext);
  if (context === undefined) {
    throw new Error('useGlassContext must be used within a GlassContextProvider');
  }
  return context;
};