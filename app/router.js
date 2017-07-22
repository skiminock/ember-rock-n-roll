import Ember from 'ember';
import config from './config/environment';

var blackDog = { title: 'Black Dog', band: 'Led Zeppelin', rating: 3
};
var yellowLedbetter = { title: 'Yellow Ledbetter', band: 'Pearl Jam',
  rating: 4
};
var pretender = {
  title: 'The Pretender', band: 'Foo Fighters', rating: 2
};
var songs = [blackDog, yellowLedbetter, pretender];

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  model: () => songs
});

Router.map(function() {
  // this.route('my');
  this.route('bands', function() {
    this.route('songs');
  });
  this.route('songs');
});

export default Router;
