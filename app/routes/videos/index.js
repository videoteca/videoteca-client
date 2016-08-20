import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      records: this.get('store').peekAll('video')
    };
  }
});
