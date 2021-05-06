import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string'),
  версия: DS.attr('string'),
  freeware: DS.attr('boolean'),
  вендор: DS.belongsTo('i-i-s-uchet-вендор', { inverse: null, async: false }),
  рабочееМесто: DS.belongsTo('i-i-s-uchet-рабочее-место', { inverse: 'пО', async: false })
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-uchet-п-о.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  версия: {
    descriptionKey: 'models.i-i-s-uchet-п-о.validations.версия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  freeware: {
    descriptionKey: 'models.i-i-s-uchet-п-о.validations.freeware.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  вендор: {
    descriptionKey: 'models.i-i-s-uchet-п-о.validations.вендор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рабочееМесто: {
    descriptionKey: 'models.i-i-s-uchet-п-о.validations.рабочееМесто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПОE', 'i-i-s-uchet-п-о', {
    название: attr('Название', { index: 0 }),
    версия: attr('Версия', { index: 1 }),
    freeware: attr('Freeware', { index: 2 }),
    вендор: belongsTo('i-i-s-uchet-вендор', 'Вендор', {
      название: attr('Название', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'название' })
  });
};
