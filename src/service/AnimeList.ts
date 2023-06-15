import AnimeAPI from "./AnimeAPI";

class AnimeList extends AnimeAPI {
  static popular(arg0: {}) {
    throw new Error("Method not implemented.");
  }
  public popular = () => {
    let headers = {};
    headers = {
      apikey: "",
    };
    const filter = {};
    return this.AnimeAPI.get(`https://gogoanime.consumet.stream/popular`, {
      headers,
    });
  };
}

export default AnimeList;
