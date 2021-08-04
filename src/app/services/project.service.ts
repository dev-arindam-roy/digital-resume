import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  projects = [
    {
      name: "SUITE XS",
      type: "Domain, Hosting, SSL, Cloud Services Providing Web Application",
      client: "NTT",
      country: "Japan",
      role: "Senior Developer",
      size: 3,
      technologies: ["Laravel 7", "Lumen 7", "Vue Js", "REST API", "Micro Service", "JWT Authentication", "Bootstrap 4"]
    },
    {
      name: "Eammy Lite",
      type: "Resturant Management Application",
      client: "HIRUKO",
      country: "Singapore",
      role: "Team Lead",
      size: 3,
      technologies: ["Angular", "Laravel 7", "REST API", "Micro Service", "JWT Authentication", "Bootstrap 4"]
    },
    {
      name: "Lets Get Sale",
      type: "Online Bidding & Sales, Like OLX, Quiker",
      client: "CAMLIXA",
      country: "Canada",
      role: "Team Lead",
      size: 2,
      technologies: ["Angular", "Node Js", "REST API", "Micro Service", "JWT Authentication", "Bootstrap 4"]
    }
  ];

  getProjects() {
    return this.projects;
  }
}
