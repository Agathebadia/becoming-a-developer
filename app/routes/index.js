import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return {
      author: 'Bob',
      year: '2015',
      testimony: 'f ds  dfkjds f  fdhf df d fdhbfdhsufgdshjf b fhdis f fdjs fd f jd fhdsgf dbf df dbfud fhdsb fhds fd f ds fdusbf dusf dsf  dfgd bfds fdjs fdj fgzudbf dsjf dsfb d f ds  dfkjds f  fdhf df d fdhbfdhsufgdshjf b fhdis f fdjs fd f jd fhdsgf dbf df dbfud fhdsb fhds fd f ds fdusbf dusf dsf  dfgd bfds fdjs fdj fgzudbf dsjf dsfb d f ds dfkjds f fdhf df d fdhbfdhsufgdshjf b fhdis f fdjs fd f jd fhdsgf dbf df dbfud fhdsb fhds fd f ds fdusbf dusf dsf',
      image: '',
    };
  }
}
