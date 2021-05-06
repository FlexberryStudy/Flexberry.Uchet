import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string'),
  датаДобавления: DS.attr('date'),
  инвНомер: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-uchet-пользователь', { inverse: null, async: false }),
  тип: DS.belongsTo('i-i-s-uchet-тип', { inverse: null, async: false }),
  рабочееМесто: DS.belongsTo('i-i-s-uchet-рабочее-место', { inverse: 'оборудование', async: false })
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-uchet-оборудование.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаДобавления: {
    descriptionKey: 'models.i-i-s-uchet-оборудование.validations.датаДобавления.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  инвНомер: {
    descriptionKey: 'models.i-i-s-uchet-оборудование.validations.инвНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-uchet-оборудование.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-uchet-оборудование.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рабочееМесто: {
    descriptionKey: 'models.i-i-s-uchet-оборудование.validations.рабочееМесто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОборудованиеE', 'i-i-s-uchet-оборудование', {
    инвНомер: attr('Инв номер', { index: 0 }),
    название: attr('Название', { index: 1 }),
    датаДобавления: attr('Дата добавления', { index: 2 }),
    сотрудник: belongsTo('i-i-s-uchet-пользователь', 'Сотрудник', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' }),
    тип: belongsTo('i-i-s-uchet-тип', 'Тип', {
      название: attr('Название', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'название' })
  });

  modelClass.defineProjection('ОборудованиеL', 'i-i-s-uchet-оборудование', {
    инвНомер: attr('Инвентаризационный номер', { index: 0 }),
    название: attr('Название', { index: 1 }),
    датаДобавления: attr('Дата добавления', { index: 2 }),
    тип: belongsTo('i-i-s-uchet-тип', 'Тип', {
      название: attr('Тип', { index: 3 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-uchet-пользователь', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
