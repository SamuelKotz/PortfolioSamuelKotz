import { register, init } from 'svelte-i18n';
import en from '../../locales/en.json';
import pt from '../../locales/pt.json';

register('en', () => Promise.resolve(en));
register('pt', () => Promise.resolve(pt));

init({
  fallbackLocale: 'en',
  initialLocale: 'en',
});
