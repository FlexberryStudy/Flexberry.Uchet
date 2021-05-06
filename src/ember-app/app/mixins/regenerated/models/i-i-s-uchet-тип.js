import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string')
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-uchet-тип.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТипE', 'i-i-s-uchet-тип', {
    название: attr('Название', { index: 0 })
  });

  modelClass.defineProjection('ТипL', 'i-i-s-uchet-тип', {
    название: attr('Название', { index: 0 })
  });
};
