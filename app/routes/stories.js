import Route from '@ember/routing/route';

let mapper = (model) => {
  let { attributes, type } = model;
  return { type, ...attributes };
}

let sortById = (prev, next) => prev.id < next.id ? 1 : -1
let sortByName = (a,b) => a.author < b.author ? 1 : -1
let sortByYearAsc = (prev, next) => prev.year < next.year ? 1 : -1
let sortByYearDesc = (prev, next) => prev.year < next.year ? -1 : 1

export default class StoriesRoute extends Route {
  queryParams = {
    sort: {
      refreshModel: true
    }
  };

  async model(params) {
    let response = await fetch('/api/stories.json');
    let { data } = await response.json();

    switch (params.sort) {
      case 'recent':
        return data.sort(sortById).map(mapper);
      case 'name':
        return data.sort(sortByName).map(mapper);
      case 'year asc':
        return data.sort(sortByYearAsc).map(mapper);
      case 'year desc':
        return data.sort(sortByYearDesc).map(mapper);
      default:
        return data.map(mapper)
    }

  }
}
