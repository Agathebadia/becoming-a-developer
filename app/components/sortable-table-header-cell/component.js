import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'selection',

  click() {
    this.get("on-click")(this.get("field"));
  }
});
