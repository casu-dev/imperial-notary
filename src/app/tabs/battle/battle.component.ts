import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {HealthDialogComponent} from "../../base/dialog/health-dialog/health-dialog.component";
import {HealDialogResult} from "../../base/types";
import {CharacterService} from "../../base/service/character.service";
import {AddDialogComponent} from "../../base/dialog/add-dialog/add-dialog.component";

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent {

  debugHealth = 2;

  constructor(private dialog: MatDialog, public charService: CharacterService) {
  }

  onHealthClick() {
    const dialogRef = this.dialog.open(HealthDialogComponent, {position: {top: '24px'}});
    dialogRef.afterClosed().subscribe((res: HealDialogResult) => {
      if (Number.isNaN(parseInt(res.value))) {
        return;
      }
      let curr = this.charService.selectedChar.currentHealth;
      if (res.heal) {
        this.charService.selectedChar.currentHealth = Math.min(Math.max(curr + parseInt(res.value), 0), this.charService.finalWounds)
      } else {
        this.charService.selectedChar.currentHealth = Math.min(Math.max(curr - parseInt(res.value), 0), this.charService.finalWounds)
      }
    })
  }

  onAddStatClick() {
    const dialogRef = this.dialog.open(AddDialogComponent, {position: {top: '24px'}});
    dialogRef.afterClosed().subscribe((res: {name: string}) => {
      if(res) {
        this.charService.addTracker(res.name);
      }
    });
  }

  onAddWeaponClick() {
    const dialogRef = this.dialog.open(AddDialogComponent, {position: {top: '24px'}});
    dialogRef.afterClosed().subscribe((res: {name: string}) => {
      if(res) {
        this.charService.addWeapon(res.name);
      }
    });
  }

}
