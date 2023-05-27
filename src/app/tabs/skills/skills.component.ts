import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CharacterService} from "../../base/service/character.service";
import {AddDialogComponent} from "../../base/dialog/add-dialog/add-dialog.component";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  constructor(private dialog: MatDialog, public charService: CharacterService) {
  }

  onAddLearnedSkillClick() {
    const dialogRef = this.dialog.open(AddDialogComponent);
    dialogRef.afterClosed().subscribe((res: {name: string}) => {
      if(res) {
        this.charService.addLearnedSkill(res.name);
      }
    });
  }

}
