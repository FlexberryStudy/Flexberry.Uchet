import $ from 'jquery';
import Mixin from '@ember/object/mixin';

export let OfflineSerializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      сотрудник: { serialize: 'id', deserialize: 'records' },
      тип: { serialize: 'id', deserialize: 'records' },
      рабочееМесто: { serialize: 'id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
