import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Uchet',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Uchet',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Uchet',
          title: 'Uchet'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'учет-оборудования-и-п-о': {
          caption: 'Учет оборудования и ПО',
          title: 'Учет оборудования и ПО',
          'i-i-s-uchet-рабочее-место-l': {
            caption: 'Рабочее место',
            title: ''
          },
          'i-i-s-uchet-операции-l': {
            caption: 'Операции',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-uchet-тип-l': {
            caption: 'Тип',
            title: 'Тип'
          },
          'i-i-s-uchet-вендор-l': {
            caption: 'Вендор',
            title: 'Вендор'
          },
          'i-i-s-uchet-филиал-l': {
            caption: 'Филиал',
            title: 'Филиал'
          },
          'i-i-s-uchet-пользователь-l': {
            caption: 'Пользователь',
            title: 'Пользователь'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
