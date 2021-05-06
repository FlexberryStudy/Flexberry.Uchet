import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  инвНомер: DS.attr('string'),
  кабинет: DS.attr('string'),
  место: DS.attr('string'),
  филиал: DS.belongsTo('i-i-s-uchet-филиал', { inverse: null, async: false }),
  пО: DS.hasMany('i-i-s-uchet-п-о', { inverse: 'рабочееМесто', async: false }),
  оборудование: DS.hasMany('i-i-s-uchet-оборудование', { inverse: 'рабочееМесто', async: false })
});

export let ValidationRules = {
  инвНомер: {
    descriptionKey: 'models.i-i-s-uchet-рабочее-место.validations.инвНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кабинет: {
    descriptionKey: 'models.i-i-s-uchet-рабочее-место.validations.кабинет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  место: {
    descriptionKey: 'models.i-i-s-uchet-рабочее-место.validations.место.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  филиал: {
    descriptionKey: 'models.i-i-s-uchet-рабочее-место.validations.филиал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пО: {
    descriptionKey: 'models.i-i-s-uchet-рабочее-место.validations.пО.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  оборудование: {
    descriptionKey: 'models.i-i-s-uchet-рабочее-место.validations.оборудование.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РабочееМестоE', 'i-i-s-uchet-рабочее-место', {
    инвНомер: attr('Инв номер', { index: 0 }),
    кабинет: attr('Кабинет', { index: 1 }),
    место: attr('Место', { index: 2 }),
    филиал: belongsTo('i-i-s-uchet-филиал', 'Филиал', {
      название: attr('Название', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'название' }),
    оборудование: hasMany('i-i-s-uchet-оборудование', 'Оборудование', {
      инвНомер: attr('Инв номер', { index: 0 }),
      название: attr('Название', { index: 1 }),
      датаДобавления: attr('Дата добавления', { index: 2 }),
      сотрудник: belongsTo('i-i-s-uchet-пользователь', 'Сотрудник', {
        фИО: attr('ФИО', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'фИО' }),
      тип: belongsTo('i-i-s-uchet-тип', 'Тип', {
        название: attr('Название', { index: 6, hidden: true })
      }, { index: 5, displayMemberPath: 'название' })
    }),
    пО: hasMany('i-i-s-uchet-п-о', 'ПО', {
      название: attr('Название', { index: 0 }),
      версия: attr('Версия', { index: 1 }),
      freeware: attr('Freeware', { index: 2 }),
      вендор: belongsTo('i-i-s-uchet-вендор', 'Вендор', {
        название: attr('Название', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('РабочееМестоL', 'i-i-s-uchet-рабочее-место', {
    инвНомер: attr('Инв номер', { index: 0 }),
    кабинет: attr('Кабинет', { index: 1 }),
    место: attr('Место', { index: 2 }),
    филиал: belongsTo('i-i-s-uchet-филиал', 'Название', {
      название: attr('Название', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
