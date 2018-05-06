const API_URL = 'http://localhost:4000/api/search';

class SkyscannerSearch {
  constructor() {
    this.searchParams = {};
  }

  setCriteria(criteria) {
    this.searchParams = {...this.searchParams, ...criteria};
  }

  serializeParams(){
    return Object.keys(this.searchParams).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(this.searchParams[k])}`).join('&');
  }

  getSearchUrl(){
    return API_URL + '?' + this.serializeParams();
  }

  search() {
    return fetch(this.getSearchUrl())
      .then(response => { return response.json() })
      .then(data => {
        return { success: true, data: data };
      })
      .catch(err => {
        console.error("Searched failed with error:", err);
        return { success: false, data: [] };
      });
  }

  static perform(criteria){
    let searchCriteria = {
      ...criteria,
      toPlace: criteria.toPlace.value,
      fromPlace: criteria.fromPlace.value
    };

    let instance = new this();
    instance.setCriteria(searchCriteria);
    return instance.search();
  }
}

module.exports = SkyscannerSearch;