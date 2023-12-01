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
  }

  public importCharacter(input: any) {
    if (input?.files?.length > 0) {
      const file = input.files[0] as File;
      file.text().then(text => this.charService.importCharacter(text))
        .then(() => this.router.navigate(['char', 'battle']))
        .then();
    }
  }

}
