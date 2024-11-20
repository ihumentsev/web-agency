import { useTranslation } from 'react-i18next';

export default function Custom404() {
  const { t } = useTranslation(); // Используем i18n для перевода

  return (
    <div>
      <h1>{t('404.title')}</h1>
      <p>{t('404.message')}</p>
    </div>
  );
}