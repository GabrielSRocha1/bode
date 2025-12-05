import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import ptTranslations from '../translations/pt';
import esTranslations from '../translations/es';
import enTranslations from '../translations/en';

export type Language = 'pt' | 'es' | 'en';

const translationsMap: Record<Language, Record<string, string>> = {
  pt: ptTranslations,
  es: esTranslations,
  en: enTranslations,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Mapeamento de países para idiomas
const countryToLanguage: Record<string, Language> = {
  // Países de língua portuguesa
  'BR': 'pt', 'PT': 'pt', 'AO': 'pt', 'MZ': 'pt', 'CV': 'pt', 'GW': 'pt', 'ST': 'pt', 'TL': 'pt',
  // Países de língua espanhola
  'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'CL': 'es', 'PE': 'es', 'VE': 'es', 'EC': 'es',
  'GT': 'es', 'CU': 'es', 'BO': 'es', 'DO': 'es', 'HN': 'es', 'PY': 'es', 'SV': 'es', 'NI': 'es',
  'CR': 'es', 'PA': 'es', 'UY': 'es', 'PR': 'es',
  // Países de língua inglesa (padrão)
  'US': 'en', 'GB': 'en', 'CA': 'en', 'AU': 'en', 'NZ': 'en', 'IE': 'en', 'ZA': 'en', 'SG': 'en',
  'MY': 'en', 'PH': 'en', 'IN': 'en', 'PK': 'en', 'BD': 'en', 'NG': 'en', 'KE': 'en', 'GH': 'en',
  'TZ': 'en', 'UG': 'en', 'ZW': 'en', 'ZM': 'en', 'MW': 'en', 'RW': 'en', 'ET': 'en', 'SL': 'en',
  'LR': 'en', 'GM': 'en', 'BS': 'en', 'BB': 'en', 'JM': 'en', 'TT': 'en', 'GY': 'en', 'BZ': 'en',
  'AG': 'en', 'DM': 'en', 'GD': 'en', 'KN': 'en', 'LC': 'en', 'VC': 'en', 'SC': 'en',
  'MU': 'en', 'FJ': 'en', 'PG': 'en', 'SB': 'en', 'VU': 'en', 'WS': 'en', 'TO': 'en', 'KI': 'en',
  'TV': 'en', 'NR': 'en', 'PW': 'en', 'FM': 'en', 'MH': 'en',
};

// Detectar idioma baseado na localização
const detectLanguage = (): Language => {
  // Primeiro, verificar se há um idioma salvo no localStorage
  const savedLanguage = localStorage.getItem('bodescoin-language') as Language;
  if (savedLanguage && ['pt', 'es', 'en'].includes(savedLanguage)) {
    return savedLanguage;
  }

  // Tentar detectar pelo timezone e idioma do navegador
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const browserLang = navigator.language.split('-')[0];
    
    // Se o idioma do navegador for português ou espanhol, usar diretamente
    if (browserLang === 'pt') return 'pt';
    if (browserLang === 'es') return 'es';
    
    // Tentar detectar pelo timezone (aproximado)
    if (timezone.includes('America/Sao_Paulo') || timezone.includes('America/Fortaleza') || 
        timezone.includes('America/Recife') || timezone.includes('America/Bahia') ||
        timezone.includes('America/Manaus') || timezone.includes('America/Cuiaba') ||
        timezone.includes('America/Campo_Grande') || timezone.includes('America/Belem') ||
        timezone.includes('America/Araguaina') || timezone.includes('America/Maceio') ||
        timezone.includes('America/Natal') || timezone.includes('America/Santarem') ||
        timezone.includes('America/Boa_Vista') || timezone.includes('America/Porto_Velho') ||
        timezone.includes('America/Rio_Branco') || timezone.includes('America/Eirunepe') ||
        timezone.includes('Europe/Lisbon')) {
      return 'pt';
    }
    
    if (timezone.includes('America/Mexico') || timezone.includes('America/Argentina') ||
        timezone.includes('America/Santiago') || timezone.includes('America/Bogota') ||
        timezone.includes('America/Lima') || timezone.includes('America/Caracas') ||
        timezone.includes('America/Guayaquil') || timezone.includes('America/Guatemala') ||
        timezone.includes('America/Havana') || timezone.includes('America/La_Paz') ||
        timezone.includes('America/Santo_Domingo') || timezone.includes('America/Tegucigalpa') ||
        timezone.includes('America/Asuncion') || timezone.includes('America/San_Salvador') ||
        timezone.includes('America/Managua') || timezone.includes('America/Costa_Rica') ||
        timezone.includes('America/Panama') || timezone.includes('America/Montevideo') ||
        timezone.includes('America/Puerto_Rico') || timezone.includes('Europe/Madrid')) {
      return 'es';
    }
  } catch (error) {
    console.error('Error detecting language:', error);
  }

  // Padrão: inglês
  return 'en';
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('bodescoin-language', lang);
  };

  const t = (key: string): string => {
    return translationsMap[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

