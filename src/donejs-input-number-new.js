import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './donejs-input-number-new.less';
import view from './donejs-input-number-new.stache';

export const ViewModel = DefineMap.extend({
  value: {
    default: 0,
    type: 'number',
    set(value) {
        if(value > this.max) {
            return this.max;
        }

        if(value < this.min) {
            return this.min;
        }

        return value;
    }
  },
  max: {
      default: Infinity,
      type: 'number'
  },
  min: {
      default: 0,
      type: 'number'
  },
  increment() {
      this.value++;
  },
  decrement() {
      this.value--;
  }
});

export default Component.extend({
  tag: 'donejs-input-number-new',
  ViewModel,
  view
});
