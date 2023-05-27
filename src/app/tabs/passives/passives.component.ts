import { Component } from '@angular/core';
import {AddDialogComponent} from "../../base/dialog/add-dialog/add-dialog.component";
import {AddPassiveDialogComponent} from "../../base/dialog/add-passive-dialog/add-passive-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {CharacterService} from "../../base/service/character.service";
import {Ability} from "../../base/types";

@Component({
  selector: 'app-passives',
  templateUrl: './passives.component.html',
  styleUrls: ['./passives.component.scss']
})
export class PassivesComponent {

  activeEditMode = false;
  passiveEditMode = false;

  constructor(private dialog: MatDialog, public charService: CharacterService) {
  }

  onAddActiveClick() {
    const dialogRef = this.dialog.open(AddPassiveDialogComponent);
    dialogRef.afterClosed().subscribe((res: Ability) => {
      if(res) {
        this.charService.addActiveAbility(res);
      }
    });
  }

  onRemoveActive(passive: Ability) {
    this.charService.removeActiveAbility(passive);
    this.activeEditMode = false;
  }

  onAddPassiveClick() {
    const dialogRef = this.dialog.open(AddPassiveDialogComponent);
    dialogRef.afterClosed().subscribe((res: Ability) => {
      if(res) {
        this.charService.addPassiveAbility(res);
      }
    });
  }

  onRemovePassive(passive: Ability) {
    this.charService.removePassiveAbility(passive);
    this.passiveEditMode = false;
  }
}
