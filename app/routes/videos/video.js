import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      record: this.get('store').peekRecord('video', params.id)
    };
  }
});
