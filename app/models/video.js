import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  picture: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.attr('string'),
  recordedIn: DS.attr('date'),
  provider: DS.attr('string'),

  bg: Ember.computed('picture', function () {
    console.log(this);
    if (!this.get('picture')) {
      return '';
    }
    return 'background-image: url('+this.get('picture')+')';
  })
});
