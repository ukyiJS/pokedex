import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/roboto-font/roboto-font.css';
import { Dialog, Meta, Notify, Quasar } from 'quasar';
import 'quasar/dist/quasar.ie.polyfills';
import lang from 'quasar/lang/ko-kr';
import Vue from 'vue';
import './styles/quasar.scss';

Vue.use(Quasar, {
  config: { dark: 'auto' },
  plugins: { Meta, Notify, Dialog },
  lang,
});
