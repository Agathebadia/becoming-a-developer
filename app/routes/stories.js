import Route from '@ember/routing/route';

export default class StoriesRoute extends Route {
  async model() {
    let response = await fetch('/api/stories.json');
    let { data } = await response.json();

    return data.map(model => {
      let { attributes } = model;
      let type;
      return { type, ...attributes };
    });
  }
}
