import { Serializer as ВендорSerializer } from
  '../mixins/regenerated/serializers/i-i-s-uchet-вендор';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВендорSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
