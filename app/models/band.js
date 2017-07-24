/*
import DS from 'ember-data';
export default DS.Model.extend({

});*/

import Ember from 'ember';

export default Ember.Object.extend({
  name: '',
  description: '',
  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),
  setupSongs: Ember.on('init', function() {
    if (!this.get('songs')) {
      this.set('songs', []);
    }
  }),
});
