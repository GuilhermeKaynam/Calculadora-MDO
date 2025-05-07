import React, { createContext, useState, useContext, ReactNode } from 'react';
import { boxData } from '../data/boxData';

type BoxType = 'reto' | 'canto';
type GlassColor = 'incolor' | 'fume' | 'verde';

interface BoxContextType {
  boxType: BoxType;
  setBoxType: (type: BoxType) => void;
  glassColor: GlassColor;
  setGlassColor: (color: GlassColor) => void;
  width: number;
  setWidth: (width: number) => void;
  width2: number;
  setWidth2: (width: number) => void;
  hasInstallmentFee: boolean;
  setHasInstallmentFee: (has: boolean) => void;
  totalPrice: number;
  calculationHistory: BoxCalculationHistoryItem[];
  addToHistory: () => void;
  clearHistory: () => void;
}

export interface BoxCalculationHistoryItem {
  id: string;
  boxType: BoxType;
  glassColor: GlassColor;
  width: number;
  width2?: number;
  totalPrice: number;
  date: Date;
  hasInstallmentFee: boolean;
}

const BoxContext = createContext<BoxContextType | undefined>(undefined);

const FIXED_HEIGHT = 1.9; // Fixed height for all boxes

export const BoxContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [boxType, setBoxType] = useState<BoxType>('reto');
  const [glassColor, setGlassColor] = useState<GlassColor>('incolor');
  const [width, setWidth] = useState<number>(1);
  const [width2, setWidth2] = useState<number>(1);
  const [hasInstallmentFee, setHasInstallmentFee] = useState<boolean>(false);
  const [calculationHistory, setCalculationHistory] = useState<BoxCalculationHistoryItem[]>([]);

  const calculateTotalPrice = (): number => {
    const basePrice = boxData[glassColor];
    let area: number;

    if (boxType === 'reto') {
      area = width * FIXED_HEIGHT;
    } else {
      area = (width + width2) * FIXED_HEIGHT;
    }

    let total = area * basePrice;

    if (hasInstallmentFee) {
      total *= 1.1; // 10% installment fee
    }

    return Math.round(total * 100) / 100;
  };

  const totalPrice = calculateTotalPrice();

  const addToHistory = () => {
    const newHistoryItem: BoxCalculationHistoryItem = {
      id: Date.now().toString(),
      boxType,
      glassColor,
      width,
      width2: boxType === 'canto' ? width2 : undefined,
      totalPrice,
      date: new Date(),
      hasInstallmentFee,
    };

    setCalculationHistory(prev => [newHistoryItem, ...prev].slice(0, 10));
  };

  const clearHistory = () => {
    setCalculationHistory([]);
  };

  return (
    <BoxContext.Provider
      value={{
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
        totalPrice,
        calculationHistory,
        addToHistory,
        clearHistory,
      }}
    >
      {children}
    </BoxContext.Provider>
  );
};

export const useBoxContext = () => {
  const context = useContext(BoxContext);
  if (context === undefined) {
    throw new Error('useBoxContext must be used within a BoxContextProvider');
  }
  return context;
};