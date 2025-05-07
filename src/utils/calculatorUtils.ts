import { glassData } from '../data/glassData';

interface CalculationParams {
  glassType: string;
  area: number;
  isBeveled: boolean;
  serviceType: 'retirar' | 'instalado';
  hasInstallmentFee: boolean;
}

export const calculatePrice = ({
  glassType,
  area,
  isBeveled,
  serviceType,
  hasInstallmentFee,
}: CalculationParams): number => {
  // Get the base price per square meter
  const pricePerSquareMeter = glassData[glassType]?.[serviceType] || 0;
  
  // Calculate the base price (area × price per square meter)
  let total = area * pricePerSquareMeter;
  
  // Apply 20% surcharge if beveled
  if (isBeveled) {
    total *= 1.2;
  }
  
  // Apply 10% installment fee if selected
  if (hasInstallmentFee) {
    total *= 1.1;
  }
  
  // Round to 2 decimal places
  return Math.round(total * 100) / 100;
};