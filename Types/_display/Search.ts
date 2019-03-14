import Tree from './Tree';
import SearchStrategy from './itemsStrategy/Search';
import ItemsStrategyComposer from './itemsStrategy/Composer';
import {register} from '../di';

/**
 * Проекция для режима поиска. Объединяет развернутые узлы в один элемент с "хлебной крошкой" внутри.
 * @class Types/_display/Search
 * @extends Types/_display/Tree
 * @public
 * @author Мальцев А.А.
 */
export default class Search extends Tree /** @lends Types/_display/Search.prototype */{
   _createComposer(): ItemsStrategyComposer {
      const composer = super._createComposer();
      composer.append(SearchStrategy);

      return composer;
   }
}

Search.prototype._moduleName = 'Types/display:Search';
Search.prototype['[Types/_display/Search]'] = true;

register('Types/display:Search', Search);
