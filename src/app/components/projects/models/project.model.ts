
export class Project {
  public id: number;
  public title: string;
  public shortname: string;
  public image: string;
  public url: string|null = null;
  public description: string;
  public article: string|null = null;

  public constructor(id: number,
                     title: string,
                     shortname: string,
                     image: string,
                     url: string|null = null,
                     description: string,
                     article: string|null = null) {
    this.id = id;
    this.title = title;
    this.shortname = shortname;
    this.image = image;
    this.url = url;
    this.description = description;
    this.article = article;
  }
}
