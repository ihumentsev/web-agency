/** @type {import('next').NextConfig} */
import config from './configs/i18n.mjs';
const { i18n } = config;
const nextConfig = {
  reactStrictMode: true,
  i18n,
  i18n: {
    defaultLocale: 'uk',
    locales: [ 'en', 'uk','ru', 'pl'],
    localeDetection: false,
  },
  images: {
    domains: ["lh3.googleusercontent.com","navchora.com.ua"],
  },
};

export default nextConfig;
