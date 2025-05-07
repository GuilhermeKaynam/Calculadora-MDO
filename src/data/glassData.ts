export interface GlassPrice {
  retirar: number;
  instalado: number;
}

export interface GlassDataType {
  [key: string]: GlassPrice;
}

export const glassData: GlassDataType = {
  "2 mm Incolor": { "retirar": 105, "instalado": 150 },
  "3 mm Incolor": { "retirar": 117, "instalado": 275 },
  "4 mm Incolor": { "retirar": 140, "instalado": 335 },
  "5 mm Incolor": { "retirar": 194, "instalado": 365 },
  "6 mm Incolor": { "retirar": 237, "instalado": 408 },
  "8 mm Incolor": { "retirar": 254, "instalado": 490 },
  
  "3 mm Fumê claro nacional": { "retirar": 225, "instalado": 390 },
  "4 mm Fumê claro ou verde": { "retirar": 235, "instalado": 390 },
  "6 mm Fumê ou verde": { "retirar": 300, "instalado": 490 },
  "8 mm Fumê ou verde": { "retirar": 408, "instalado": 525 },

  "2 mm Espelho": { "retirar": 230, "instalado": 288 },
  "3 mm Espelho": { "retirar": 257, "instalado": 465 },
  "4 mm Espelho": { "retirar": 290, "instalado": 515 },
  "4 mm Espelho bisotê": { "retirar": 530, "instalado": 680 },
  "Fantasia (Canelado/Miniboreal/Pontilhado)": { "retirar": 155, "instalado": 300 },
  "Fantasia (Ártico/Antílope/Silésia/Bolinha)": { "retirar": 450, "instalado": 600 },
  "4 mm Habitat Reflecta BZ/PT": { "retirar": 370, "instalado": 545 },
  "4 mm Espelho bronze": { "retirar": 530, "instalado": 705 }
};