import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CharacterService} from "../base/service/character.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public charService: CharacterService) {
  }

  ngOnInit(): void {
    if (this.charService.ownsCharacter) {
      this.router.navigate(['char', 'battle']).then();
    }
    else {
      this.router.navigate(['create']).then();
    }
  }


}
