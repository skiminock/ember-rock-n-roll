import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['rating-panel'],
  rating: 0,
  maxRating: 5,
  item: null,
  setAction: '',

  actions: {
    set: function (newRating) {
      // this.get('item').set('rating', newRating);
      this.sendAction('setAction', {
        item: this.get('item'),
        rating: newRating
      });
    },
  },

  stars: Ember.computed('rating', 'maxRating', function() {
    var fullStars = this.starRange(1, this.get('rating'), 'full');
    var emptyStars = this.starRange(this.get('rating') + 1, this.get('maxRating'), 'empty');

    return fullStars.concat(emptyStars);
  }),

  starRange: function (star, end, type) {
    var starsData = [];
    for (var i = star; i <= end; i++) {
      starsData.push({ rating: i, full: type === 'full' });
    }
    return starsData;
  },

});
