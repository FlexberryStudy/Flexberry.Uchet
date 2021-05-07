import OfflineGlobals from 'ember-flexberry/services/offline-globals';
import { merge } from '@ember/polyfills';

export default OfflineGlobals.extend({
  init() {
    this._super(...arguments);
    this.setOnlineAvailable(false);
  },
  getOfflineSchema() {
    let parentSchema = this._super(...arguments);
    let returnedSchema = merge(parentSchema, {
      'i-i-s-uchet-вендор': 'id,название',
			'i-i-s-uchet-оборудование': 'id,название,датаДобавления,инвНомер,сотрудник,тип,рабочееМесто',
			'i-i-s-uchet-операции': 'id,дата,действие,состояние,оборудование,админ',
			'i-i-s-uchet-п-о': 'id,название,версия,freeware,вендор,рабочееМесто',
			'i-i-s-uchet-пользователь': 'id,фИО,админ',
			'i-i-s-uchet-рабочее-место': 'id,инвНомер,кабинет,место,филиал,*пО,*оборудование',
			'i-i-s-uchet-тип': 'id,название',
			'i-i-s-uchet-филиал': 'id,название,адрес'
    });

    return returnedSchema;
  }
});
