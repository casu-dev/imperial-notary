import {Component, OnInit} from '@angular/core';
import {CharacterService} from "./base/service/character.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private charService: CharacterService) {
  }

  saveChar() {
    this.charService.saveCharacter();
  }

  ngOnInit(): void {
    this.charService.loadCharacter()
  }
}
