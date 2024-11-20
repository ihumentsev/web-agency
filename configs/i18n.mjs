// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locales/en/common.json' assert { type: 'json' };
import plTranslation from '../locales/pl/common.json' assert { type: 'json' };
import ukTranslation from '../locales/uk/common.json' assert { type: 'json' };
import ruTranslation from '../locales/ru/common.json' assert { type: 'json' };


// Инициализация i18next
i18n
  .use(initReactI18next) // Используем реакт-адаптер для i18next
  .init({
    resources: {
      en: {
        translation: enTranslation
    },
      pl: {
        translation: plTranslation // Перевод для французского языка
      },
      uk: {
        translation: ukTranslation // Перевод для французского языка
      },
      ru: {
        translation: ruTranslation // Перевод для французского языка
      },
    },
    lng: 'uk', // Устанавливаем язык по умолчанию
    fallbackLng: 'uk', // Язык, используемый по умолчанию в случае отсутствия перевода
    interpolation: {
      escapeValue: false, // Реагируем на вставки переменных
    },
  });

  // Создаем объект с конфигурацией i18n


export default i18n;
