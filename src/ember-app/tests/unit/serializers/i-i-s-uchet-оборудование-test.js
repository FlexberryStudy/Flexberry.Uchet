import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-uchet-оборудование', 'Unit | Serializer | i-i-s-uchet-оборудование', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-uchet-оборудование',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-uchet-t-действие',
    'transform:i-i-s-uchet-t-состояние',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
