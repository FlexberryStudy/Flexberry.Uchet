import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.учет-оборудования-и-п-о.caption'),
          title: i18n.t('forms.application.sitemap.учет-оборудования-и-п-о.title'),
          children: [{
            link: 'i-i-s-uchet-рабочее-место-l',
            caption: i18n.t('forms.application.sitemap.учет-оборудования-и-п-о.i-i-s-uchet-рабочее-место-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-оборудования-и-п-о.i-i-s-uchet-рабочее-место-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-uchet-операции-l',
            caption: i18n.t('forms.application.sitemap.учет-оборудования-и-п-о.i-i-s-uchet-операции-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-оборудования-и-п-о.i-i-s-uchet-операции-l.title'),
            icon: 'folder open',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-uchet-тип-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-uchet-тип-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-uchet-тип-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-uchet-вендор-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-uchet-вендор-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-uchet-вендор-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-uchet-филиал-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-uchet-филиал-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-uchet-филиал-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-uchet-пользователь-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-uchet-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-uchet-пользователь-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})