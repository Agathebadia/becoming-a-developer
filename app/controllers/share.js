import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ShareController extends Controller {
  @tracked yesContact = false;
  @action changeYesContent(bool) {
    this.yesContact = bool
  }
}

