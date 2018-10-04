import Route from '@ember/routing/route';

export default Route.extend({
  beforeMOdel() {
    this.replaceWith('rentals');
  }
});
