import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectList : any[];
  constructor(
    projectService : ProjectService
  ) { 
    this.projectList = projectService.getProjects();
  }

  ngOnInit(): void {
  }

}
