import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  действие: DS.attr('i-i-s-uchet-t-действие'),
  состояние: DS.attr('i-i-s-uchet-t-состояние'),
  оборудование: DS.belongsTo('i-i-s-uchet-оборудование', { inverse: null, async: false }),
  админ: DS.belongsTo('i-i-s-uchet-пользователь', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-uchet-операции.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  действие: {
    descriptionKey: 'models.i-i-s-uchet-операции.validations.действие.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-uchet-операции.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оборудование: {
    descriptionKey: 'models.i-i-s-uchet-операции.validations.оборудование.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  админ: {
    descriptionKey: 'models.i-i-s-uchet-операции.validations.админ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОперацииE', 'i-i-s-uchet-операции', {
    дата: attr('Дата', { index: 0 }),
    действие: attr('Действие', { index: 1 }),
    состояние: attr('Состояние', { index: 2 }),
    оборудование: belongsTo('i-i-s-uchet-оборудование', 'Оборудование', {
      инвНомер: attr('Инв номер', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'инвНомер' }),
    админ: belongsTo('i-i-s-uchet-пользователь', 'Админ', {
      фИО: attr('ФИО', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ОперацииL', 'i-i-s-uchet-операции', {
    дата: attr('Дата', { index: 0 }),
    действие: attr('Действие', { index: 1 }),
    состояние: attr('Состояние', { index: 2 }),
    оборудование: belongsTo('i-i-s-uchet-оборудование', 'Инв номер', {
      инвНомер: attr('Инв номер', { index: 3 })
    }, { index: -1, hidden: true }),
    админ: belongsTo('i-i-s-uchet-пользователь', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
