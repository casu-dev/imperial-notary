import {Component, OnInit} from '@angular/core';
import {CharacterService} from "./base/service/character.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public charService: CharacterService) {
  }

  saveChar() {
    this.charService.saveCharacter();
  }

  deleteChar() {
    if (confirm('Delete Character?')) {
      this.charService.deleteCharacter();
    }
  }

  ngOnInit(): void {
    this.charService.loadCharacter()
  }
}
