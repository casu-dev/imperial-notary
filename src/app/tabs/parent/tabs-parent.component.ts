import {Component, OnInit, ViewChild} from '@angular/core';
import {CharacterService} from "../../base/service/character.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {RenameDialogComponent} from "../../base/dialog/rename-dialog/rename-dialog.component";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-tabs-parent',
  templateUrl: './tabs-parent.component.html',
  styleUrls: ['./tabs-parent.component.scss']
})
export class TabsParentComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav? : MatSidenav;

  constructor(public charService: CharacterService, private router: Router, private dialog: MatDialog) {
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

  showRenamePrompt() {
    const dialogRef = this.dialog.open(RenameDialogComponent);
    dialogRef.afterClosed().subscribe((res: { name: string }) => {
      if (res?.name) {
        this.charService.setName(res.name);
      }
    })
  }
}
