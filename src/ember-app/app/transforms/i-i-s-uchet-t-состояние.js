import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tСостояниеEnum from '../enums/i-i-s-uchet-t-состояние';

export default FlexberryEnum.extend({
  enum: tСостояниеEnum,
  sourceType: 'IIS.Uchet.tСостояние'
});
