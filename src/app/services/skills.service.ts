import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  techSkills = [
    {
      id: 0,
      name: "Web Based Server Side Technologies (Backend)",
      skill: ["Custom PHP", "Codeigniter", "Wordpress", "Laravel", "Lumen", "ASP.NET using C#", "ASP.NET (MVC) using C#", "Node Js"]
    },
    {
      id: 1,
      name: "Web Based Client Side Technologies (Frontend)",
      skill: ["Javascript", "ES5", "ES6", "TypeScript", "Jquery", "Ajax", "Axios", "Angular", "RxJs", "Vue Js"]
    },
    {
      id: 2,
      name: "Web Designing",
      skill: ["HTML5", "CSS3", "Bootstrap 3, 4, 5", "SaSS", "Font Awesome", "Tailwind css", "Photoshop"]
    },
    {
      id: 3,
      name: "Database",
      skill: ["MySQL", "MS SQL Server", "SQLite", "MongoDB"]
    },
    {
      id: 4,
      name: "Desktop Application Development",
      skill: ["Windows Form Application using C#", "WPF"]
    },
    {
      id: 5,
      name: "Tools and Softwares",
      skill: ["GIT", "MS Visual Code", "MS Visual Studio", "SubLime", "NotePad++", "FileZila", "Core FTP"]
    },
    {
      id: 6,
      name: "Version Controlling",
      skill: ["Github", "Gitlab", "Bitbucket"]
    },
    {
      id: 7,
      name: "Key Skills",
      skill: ["REST API", "Micro Service", "3rd Party API Integration", "Architechture Design"]
    },
    {
      id: 8,
      name: "API Integration",
      skill: ["Google", "Youtube", "Facebook", "Twitter", "Linkedin", "Flipkart", "Amazone", "Bitcoin"]
    },
    {
      id: 9,
      name: "Payment Getway Integration",
      skill: ["Paypal", " CC Avenue", "Paytm", "PayUmoney", "PayFast", "Instamojo", "Stripe"]
    }
  ];

  getSkills() {
    return this.techSkills;
  }
}
