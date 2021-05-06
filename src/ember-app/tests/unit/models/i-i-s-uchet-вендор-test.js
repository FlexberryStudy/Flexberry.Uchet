import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-uchet-вендор', 'Unit | Model | i-i-s-uchet-вендор', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-uchet-вендор',
    'model:i-i-s-uchet-оборудование',
    'model:i-i-s-uchet-операции',
    'model:i-i-s-uchet-п-о',
    'model:i-i-s-uchet-пользователь',
    'model:i-i-s-uchet-рабочее-место',
    'model:i-i-s-uchet-тип',
    'model:i-i-s-uchet-филиал',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
