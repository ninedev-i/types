/* global define, describe, it, assert */
define([
   'Types/_source/Query'
], function(
   QueryModule
) {
   'use strict';

   var Query = QueryModule.default;
   var Order = QueryModule.Order;

   describe('Types/_source/Query.Order', function() {
      describe('.getSelector', function() {
         it('should return empty string by default', function() {
            var order = new Order();
            assert.strictEqual(order.getSelector(), '');
         });
         it('should return value passed to the constructor', function() {
            var order = new Order({
               selector: 'test'
            });
            assert.equal(order.getSelector(), 'test');
         });
      });

      describe('.getOrder', function() {
         it('should return false by default', function() {
            var order = new Order();
            assert.isFalse(order.getOrder());
         });
         it('should return boolean value passed to the constructor', function() {
            var order = new Order({
               order: false
            });
            assert.isFalse(order.getOrder());
         });
         it('should return false from string "ASC" passed to the constructor', function() {
            var order = new Order({
               order: 'ASC'
            });
            assert.isFalse(order.getOrder());

            order = new Order({
               order: 'asc'
            });
            assert.isFalse(order.getOrder());

            order = new Order({
               order: 'Asc'
            });
            assert.isFalse(order.getOrder());
         });
         it('should return true from string "DESC" passed to the constructor', function() {
            var order = new Order({
               order: 'DESC'
            });
            assert.isTrue(order.getOrder());

            order = new Order({
               order: 'desc'
            });
            assert.isTrue(order.getOrder());

            order = new Order({
               order: 'Desc'
            });
            assert.isTrue(order.getOrder());
         });
      });
   });
});
