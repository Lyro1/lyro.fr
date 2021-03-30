import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppInfoModel, AppInfoTechno, Devices} from "./models/app-info.model";

@Component({
  selector: 'app-app-store',
  templateUrl: './app-store.component.html',
  styleUrls: ['./app-store.component.scss']
})
export class AppStoreComponent implements OnInit {

  @Output() closed = new EventEmitter();
  public apps: AppInfoModel[] = [];
  public selectedApp: AppInfoModel | null = null;

  constructor() {
    this.getMyApps();
  }

  ngOnInit(): void {
  }

  public getMyApps(): void {
    if (!this.apps || this.apps.length > 0) {
      this.apps = [];
    }

    this.apps.push(
      new AppInfoModel('Stoodent',
        'stoodent.png',
        'School',
        null,
        'Stoodent team',
        'Under development',
        ['EN', 'FR'],
        'Stoodent is a project that aims to revolutionize the french education system.<br/><br/>'+
          'As students for a good amount of years, we realised that we were not satisfied by the amount '+
          'and the complexity of services and platform that we had to juggle with to get all the information '+
          'we need about our scholarship. So we decided, why not create our dream plateform?<br/><br/>'+
          'A centralized application that regroups all our scholarship, with all the information we need. '+
          'A single place where we can find our grades, our planning and our work. A place where we can '+
          'exchange with our teachers and administrations.<br/><br/>'+
          'But this revolution is only viable if the people who run the schools are okay with it. That is '+
          'the reason why we built a complete administration tool that allows teachers to plan their classes, '+
          ', to plan their exams, to grade their students and to answer their questions. This is also why '+
          'Stoodent provides the simplest way to manage a school and all its various entities, with an amazing '+
          'drag-and-drop system. You just create blocs to describe our school organisation, and that\'s it! '+
          '<br/><br/>'+
          'Stoodent is still under development, and we are currently looking for a way to develop it as '+
          'close as we can of our original vision, even if it is probably a very ambitious project.',
        ['stoodent-screenshot-1.png', 'stoodent-screenshot-2.png'],
        [Devices.COMPUTER, Devices.IPHONE, Devices.IPAD],
        [
          new AppInfoTechno(
            'angular.png',
            'Angular',
            'We developed a responsive web front-end with the powerful Angular framework. It allows ' +
            'us to produce a clean code and implement each feature as a standalone module which is plug-and-play.'
          ),
          new AppInfoTechno(
            'symfony.png',
            'Symfony',
            'Our first version of the back-end was made in pure Symfony. This framework allows a cleaner '+
            'code and a more rigorous coding style, while giving access to powerful methods and architectures.'
          ),
          new AppInfoTechno(
            'dotnet.png',
            '.NET',
            'As we gained maturity on the project, we decided that it was time to build stronger '+
            'foundations. That is why Romain decided to do a complete overhaul of the back in .NET'
          ),
        ]
      ),
      new AppInfoModel('Maltopia',
        'maltopia.png',
        'Cyber-security',
        'https://github.com/Maltopia',
        'Maltopia team',
        'Published',
        ['EN'],
        'Maltopia is the final school project I worked on as part of my scholarship.<br/><br/>'+
        'With 3 of my schoolmates, we were assigned the task to create a malware zoo from scratch. '+
        'After defining a clear architecture, we started developing the tool in two very distinct parts, following '+
        'a MVP model:<br/><br/><ul>'+
        '<li>Our back-end, done with the Python framework Flask, was responsible for crawling various malware sources '+
        'and downloading them in a secure way using a Tor client. Then, a small analysis using well-known tools '+
        'allowed us to gather some more information and to store them and a zipped copy of the malware in a dedicated '+
        'space.</li><br/>'+
        '<li>Our front-end, which I was responsible for, was designed to be a super-simple web app, which anybody '+
        'could use, even without any specific knowledge about malware and security. Its design is meant to be very ' +
        'simple and clean, while displaying the information in a logical way. A search engine allows you to find ' +
        'very easily the information you are looking for, and a user account system also enable registered users ' +
        'to perform authorized actions, such as downloading and uploading new malwares.</li></ul><br/><br/>'+
        'All of that was done within a 3 week period, after which we had to present it to a group of researchers and ' +
        'professors.<br/><br/>'+
        'This project is now used in the EPITA\'s Cyber-security Laboratory (LSE) in coordination with other tools '+
        'developed by our classmates.',
        ['maltopia-screenshot-1.png', 'maltopia-screenshot-2.png'],
        [Devices.COMPUTER],
        [
          new AppInfoTechno(
            'angular.png',
            'Angular',
            'I was in charge of the front-end development, so I choose the framework I know best ' +
            'to be as efficient as possible. That\'s why I choose Angular.'
          ),
          new AppInfoTechno(
            'python.png',
            'Python',
            'As my schoolmate Ricardo was in charge of back-end development, he chose Python and '+
            'its back-end framework Flask to produce a powerful and reliable back-end while following our deadlines.'
          ),
        ]
      ),
      new AppInfoModel('Digitab',
        'digitab.png',
        'Finance',
        'https://app-digitab.lyro.fr',
        'Louis Dupont',
        'Under development',
        ['FR'],
        'While I often enjoy a restaurant with some friends, there is a step that we always hate: paying. ' +
        'It\'s way to long and complicated, and when we are quite a large table, it can become difficult to know who ' +
        'took what. That\'s why I made Digitab.<br/><br/>' +
        'Digitab is a simple app that everyone can use, even without an account. You just need to create your table, ' +
        'and add the various meals you ordered. Once it is done, everyone can join and select which meal they took, and ' +
        'then know exactly how much they have to pay. Simple and clear.<br/><br/>' +
        'Digitab has been released as a MVP on a subdomain on my website, and I added a (quite bad) attempt at ' +
        'automatically recognize a restaurant bill and the meals written on it.<br/><br/>' +
        'I plan to develop a dedicated mobile app on iOS and Android to make the access even easier.',
        ['digitab-screenshot-1.png', 'digitab-screenshot-2.png', 'digitab-screenshot-3.png'],
        [Devices.COMPUTER, Devices.IPHONE, Devices.IPAD],
        [
          new AppInfoTechno(
            'angular.png',
            'Angular',
            'Since Digitab was supposed to be a service available on as many plateform as possible, I '+
            'chose to start with a web app and decided to work using Angular as my main framework.'
          ),
          new AppInfoTechno(
            'symfony.png',
            'Symfony',
            'As I wanted a MVP done as fast as I could, I choose the back-end framework I knew best, '+
            'which was Symfony. It allowed me to reuse some portions of code I already did in previous projects.'
          )
        ]
      ),
      new AppInfoModel('Surftide',
        'surftide-logo.png',
        'Sport',
        null,
        'Louis Dupont',
        'Under development',
        ['FR', 'EN'],
        'In the summer, I often go visit my friend Arnaud in Bretagne, and we love to go surfing. ' +
        'For many years, we have been doing the same thing: we check on the internet the weather forecast, and ' +
        'when it\'s supposed to be windy and the best to surf, we climb the little hill next to his house and we ' +
        'check if the forecast is accurate. And most of the time it is not.<br/><br/>' +
        'Even if it is a good moment, I had the idea that maybe other people could\'t just climb a small hill to ' +
        'check the waves. So I decided to develop a little app that would climb the hill for me.<br/><br/>' +
        'It is very easy: it connects to a weather forecast API, and it checks when the conditions will be the best. ' +
        'And when it knows the weather is perfect, it sends you a little notification that tells you it is time ' +
        'to go surf.<br/><br/>' +
        'You can also access a detailed weather forecast view for the entire week, and know which day will be the best ' +
        'to enjoy your weekly surf session.<br/><br/>' +
        'Even if the app is quite complete and works well, I did not publish it yet on the App Store. But maybe soon...',
        ['surftide-screenshot-1.png', 'surftide-screenshot-2.png', 'surftide-screenshot-3.png'],
        [Devices.IPHONE],
        [
          new AppInfoTechno(
            'swift.png',
            'Swift',
            'As I wanted to develop a clean iOS app, Swift seamed the most logical and obvious choice.'
          ),
          new AppInfoTechno(
            'php.png',
            'PHP',
            'To develop an API very fast, I just wrote some PHP files to be efficient and reliable.'
          ),
        ]
      )
    );
  }

  public selectApp(name: string): void {
    if (!name || name == '') {
      this.selectedApp = null;
    }
    this.selectedApp = this.apps.find((app) => {return app.name === name});
  }

  public closeWindow() {
    this.closed.emit();
  }

}
