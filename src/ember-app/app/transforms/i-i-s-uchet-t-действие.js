import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tДействиеEnum from '../enums/i-i-s-uchet-t-действие';

export default FlexberryEnum.extend({
  enum: tДействиеEnum,
  sourceType: 'IIS.Uchet.tДействие'
});
