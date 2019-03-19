import DictionaryField from './DictionaryField';

/**
 * Формат поля флагов.
 *
 * Создадим поле c типом "Флаги":
 * <pre>
 *    var field = {
 *       name: 'foo',
 *       type: 'flags',
 *       dictionary: ['one', 'two', 'three']
 *    };
 * </pre>
 * @class Types/_entity/format/FlagsField
 * @extends Types/_entity/format/DictionaryField
 * @public
 * @author Мальцев А.А.
 */
export default class FlagsField extends DictionaryField /** @lends Types/_entity/format/FlagsField.prototype */{
}

Object.assign(FlagsField.prototype, {
   '[Types/_entity/format/FlagsField]': true,
   _moduleName: 'Types/entity:format.FlagsField',
   _typeName: 'Flags'
});
