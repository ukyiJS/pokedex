import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/roboto-font/roboto-font.css';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.ie.polyfills';
import lang from 'quasar/lang/ko-kr';
import './styles/quasar.scss';
import Vue from 'vue';

Vue.use(Quasar, {
  config: { dark: 'auto' },
  plugins: {},
  lang,
});
