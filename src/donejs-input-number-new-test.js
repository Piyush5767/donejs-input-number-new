import QUnit from 'steal-qunit';
import plugin from './donejs-input-number-new';

QUnit.module('donejs-input-number-new');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the donejs-input-number-new plugin');
});
