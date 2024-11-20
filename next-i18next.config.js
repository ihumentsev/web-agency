/** @type {import('next-i18next').UserConfig} */ // Импортируем объект i18n из пакета next-i18next


module.exports = {
  i18n: {
    defaultLocale: 'uk',
    locales: [ 'en', 'uk','ru', 'pl'],
    localeDetection: false,
  },
}

