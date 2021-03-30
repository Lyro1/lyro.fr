
export enum Devices {
  COMPUTER = 'computer',
  IPAD = 'ipad',
  IPHONE = 'iphone',
  WATCH = 'watch',
  TV = 'tv'
}

export class AppInfoTechno {
  logo: string;
  name: string;
  description: string;

  public constructor(logo: string, name: string, description: string) {
    this.logo = logo;
    this.name = name;
    this.description = description;
  }
}

export class AppInfoModel {
  name: string;
  logo: string;
  domain: string;
  link: string;
  developer: string;
  status: string;
  language: string[] = [];
  description: string;
  screenshots: string[] = [];
  devices: Devices[] = [];
  technologies: AppInfoTechno[] = [];

  public constructor(name: string,
                     logo: string,
                     domain: string,
                     link: string,
                     developer: string,
                     status: string,
                     language: string[],
                     description: string,
                     screenshots: string[],
                     devices: Devices[],
                     technologies: AppInfoTechno[]) {
    this.name = name;
    this.logo = logo;
    this.domain = domain;
    this.link = link;
    this.developer = developer;
    this.status = status;
    this.language = language;
    this.description = description;
    this.screenshots = screenshots;
    this.devices = devices;
    this.technologies = technologies;
  }
}
