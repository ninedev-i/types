import Field from './Field';

/**
 * Формат поля для рекордсета.
 *
 * Создадим поле c типом "Рекордсет":
 * <pre>
 *    var field = {
 *       name: 'foo',
 *       type: 'recordset'
 *    };
 * </pre>
 * @class Types/_entity/format/RecordSetField
 * @extends Types/_entity/format/Field
 * @public
 * @author Мальцев А.А.
 */
export default class RecordSetField extends Field /** @lends Types/_entity/format/RecordSetField.prototype */{
}

Object.assign(RecordSetField.prototype, {
   '[Types/_entity/format/RecordSetField]': true,
   _moduleName: 'Types/entity:format.RecordSetField',
   _typeName: 'RecordSet'
});
