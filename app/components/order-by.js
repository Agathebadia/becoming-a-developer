import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class OrderByComponent extends Component {
  @service router;

  @action
  changeSorting(event) {
    this.router.transitionTo( 'stories', { queryParams: { sort: event.target.value }});
  }
}
