import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISUchetВендорLForm from './forms/i-i-s-uchet-вендор-l';
import IISUchetОборудованиеLForm from './forms/i-i-s-uchet-оборудование-l';
import IISUchetОперацииLForm from './forms/i-i-s-uchet-операции-l';
import IISUchetПользовательLForm from './forms/i-i-s-uchet-пользователь-l';
import IISUchetРабочееМестоLForm from './forms/i-i-s-uchet-рабочее-место-l';
import IISUchetТипLForm from './forms/i-i-s-uchet-тип-l';
import IISUchetФилиалLForm from './forms/i-i-s-uchet-филиал-l';
import IISUchetВендорEForm from './forms/i-i-s-uchet-вендор-e';
import IISUchetОперацииEForm from './forms/i-i-s-uchet-операции-e';
import IISUchetПользовательEForm from './forms/i-i-s-uchet-пользователь-e';
import IISUchetРабочееМестоEForm from './forms/i-i-s-uchet-рабочее-место-e';
import IISUchetТипEForm from './forms/i-i-s-uchet-тип-e';
import IISUchetФилиалEForm from './forms/i-i-s-uchet-филиал-e';
import IISUchetВендорModel from './models/i-i-s-uchet-вендор';
import IISUchetОборудованиеModel from './models/i-i-s-uchet-оборудование';
import IISUchetОперацииModel from './models/i-i-s-uchet-операции';
import IISUchetПОModel from './models/i-i-s-uchet-п-о';
import IISUchetПользовательModel from './models/i-i-s-uchet-пользователь';
import IISUchetРабочееМестоModel from './models/i-i-s-uchet-рабочее-место';
import IISUchetТипModel from './models/i-i-s-uchet-тип';
import IISUchetФилиалModel from './models/i-i-s-uchet-филиал';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-uchet-вендор': IISUchetВендорModel,
    'i-i-s-uchet-оборудование': IISUchetОборудованиеModel,
    'i-i-s-uchet-операции': IISUchetОперацииModel,
    'i-i-s-uchet-п-о': IISUchetПОModel,
    'i-i-s-uchet-пользователь': IISUchetПользовательModel,
    'i-i-s-uchet-рабочее-место': IISUchetРабочееМестоModel,
    'i-i-s-uchet-тип': IISUchetТипModel,
    'i-i-s-uchet-филиал': IISUchetФилиалModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'учет-оборудования-и-п-о': {
          caption: 'учет-оборудования-и-п-о',
          title: 'учет-оборудования-и-п-о',
          'i-i-s-uchet-рабочее-место-l': {
            caption: 'i-i-s-uchet-рабочее-место-l',
            title: 'i-i-s-uchet-рабочее-место-l'
          },
          'i-i-s-uchet-операции-l': {
            caption: 'i-i-s-uchet-операции-l',
            title: 'i-i-s-uchet-операции-l'
          }
        },
        справочники: {
          caption: 'справочники',
          title: 'справочники',
          'i-i-s-uchet-тип-l': {
            caption: 'i-i-s-uchet-тип-l',
            title: 'i-i-s-uchet-тип-l'
          },
          'i-i-s-uchet-вендор-l': {
            caption: 'i-i-s-uchet-вендор-l',
            title: 'i-i-s-uchet-вендор-l'
          },
          'i-i-s-uchet-филиал-l': {
            caption: 'i-i-s-uchet-филиал-l',
            title: 'i-i-s-uchet-филиал-l'
          },
          'i-i-s-uchet-пользователь-l': {
            caption: 'i-i-s-uchet-пользователь-l',
            title: 'i-i-s-uchet-пользователь-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-uchet-вендор-l': IISUchetВендорLForm,
    'i-i-s-uchet-оборудование-l': IISUchetОборудованиеLForm,
    'i-i-s-uchet-операции-l': IISUchetОперацииLForm,
    'i-i-s-uchet-пользователь-l': IISUchetПользовательLForm,
    'i-i-s-uchet-рабочее-место-l': IISUchetРабочееМестоLForm,
    'i-i-s-uchet-тип-l': IISUchetТипLForm,
    'i-i-s-uchet-филиал-l': IISUchetФилиалLForm,
    'i-i-s-uchet-вендор-e': IISUchetВендорEForm,
    'i-i-s-uchet-операции-e': IISUchetОперацииEForm,
    'i-i-s-uchet-пользователь-e': IISUchetПользовательEForm,
    'i-i-s-uchet-рабочее-место-e': IISUchetРабочееМестоEForm,
    'i-i-s-uchet-тип-e': IISUchetТипEForm,
    'i-i-s-uchet-филиал-e': IISUchetФилиалEForm
  },

});

export default translations;
