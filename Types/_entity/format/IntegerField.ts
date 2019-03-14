import Field from './Field';

/**
 * Формат целочисленного поля.
 *
 * Создадим поле челочисленного типа:
 * <pre>
 *    var field = {
 *       name: 'foo',
 *       type: 'integer'
 *    };
 * </pre>
 * @class Types/_entity/format/IntegerField
 * @extends Types/_entity/format/Field
 * @public
 * @author Мальцев А.А.
 */
export default class IntegerField extends Field /** @lends Types/_entity/format/IntegerField.prototype */{
   _$defaultValue: number;
}

IntegerField.prototype['[Types/_entity/format/IntegerField]'] = true;
IntegerField.prototype._moduleName = 'Types/entity:format.IntegerField';
IntegerField.prototype._typeName = 'Integer';
IntegerField.prototype._$defaultValue = 0;
