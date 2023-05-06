import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {HealthDialogComponent} from "../../base/dialog/health-dialog/health-dialog.component";
import {HealDialogResult} from "../../base/types";

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent {

  debugHealth = 2;

  constructor(public dialog: MatDialog) {
  }

  onHealthClick() {
    const dialogRef = this.dialog.open(HealthDialogComponent, {width: '100%', position: {top: '24px'}});
    dialogRef.afterClosed().subscribe((res: HealDialogResult) => {
      if (Number.isNaN(parseInt(res.value))) {
        return;
      }
      if (res.heal) {
        this.debugHealth += parseInt(res.value)
      } else {
        this.debugHealth -= parseInt(res.value)
      }
    })
  }

}
