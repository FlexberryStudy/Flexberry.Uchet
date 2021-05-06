import { Serializer as ПОSerializer } from
  '../mixins/regenerated/serializers/i-i-s-uchet-п-о';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПОSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
