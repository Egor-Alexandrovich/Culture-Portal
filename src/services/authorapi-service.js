export default class AuthorApiService {
    _apiBase = './data-authors.json';

  getResource = async () => {
    const res = await fetch(`${this._apiBase}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllAuthors = async () => {
     return await this.getResource();
  }
  getAuthor = async (id) => {
    const data = await this.getResource();
    const index = data.findIndex((el) => el.id === id);
    return data[index];
  }
//   getAuthor = async (id) => {
//       console.log(`./autors${id}.json`);
//     const data = await fetch(`authors/autors${id}.json`);
    
//     return await data.json();
//   }

};

  