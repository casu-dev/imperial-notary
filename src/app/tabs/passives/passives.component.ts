import { Component } from '@angular/core';
import {AddDialogComponent} from "../../base/dialog/add-dialog/add-dialog.component";
import {AddPassiveDialogComponent} from "../../base/dialog/add-passive-dialog/add-passive-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {CharacterService} from "../../base/service/character.service";
import {PassiveAbility} from "../../base/types";

@Component({
  selector: 'app-passives',
  templateUrl: './passives.component.html',
  styleUrls: ['./passives.component.scss']
})
export class PassivesComponent {

  editMode = false;

  constructor(private dialog: MatDialog, public charService: CharacterService) {
  }

  onAddPassiveClick() {
    const dialogRef = this.dialog.open(AddPassiveDialogComponent);
    dialogRef.afterClosed().subscribe((res: PassiveAbility) => {
      if(res) {
        this.charService.addPassiveAbility(res);
      }
    });
  }

  onRemovePassive(passive: PassiveAbility) {
    this.charService.removePassiveAbility(passive);
    this.editMode = false;
  }
}
