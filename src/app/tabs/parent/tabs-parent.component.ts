import {Component, OnInit} from '@angular/core';
import {CharacterService} from "../../base/service/character.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tabs-parent',
  templateUrl: './tabs-parent.component.html',
  styleUrls: ['./tabs-parent.component.scss']
})
export class TabsParentComponent implements OnInit {

  constructor(public charService: CharacterService, private router : Router) {
  }

  deleteCharPrompt() {
    if (confirm('Delete Character?')) {
      this.charService.deleteCharacter();
      this.router.navigate(['/']).then();
    }
  }

  ngOnInit(): void {
    this.charService.loadCharacter()
  }

}
