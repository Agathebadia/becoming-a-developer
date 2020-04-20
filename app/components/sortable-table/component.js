import Ember from 'ember';


export default Ember.Component.extend({

  tagName: 'table',

  activeSortBy: '',

  dataSorting: Ember.computed("activeSortBy", function() {
  return [ this.get('activeSortBy')];
}),

sortedData: Ember.computed.sort("data", "dataSorting"),


  actions: {
    sort(field) {
      this.set("activeSortBy", field);
    }
  }
});
