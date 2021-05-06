import { Serializer as РабочееМестоSerializer } from
  '../mixins/regenerated/serializers/i-i-s-uchet-рабочее-место';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РабочееМестоSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
