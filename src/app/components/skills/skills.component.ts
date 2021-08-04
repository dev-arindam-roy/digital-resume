import { Component, OnInit } from '@angular/core';

import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  techSkills : any[];

  constructor(
    skillService : SkillsService
  ) {
    this.techSkills = skillService.getSkills();
   }

  ngOnInit(): void {
  }

}
