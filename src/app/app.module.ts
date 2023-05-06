import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {HealthBarComponent} from './base/health-bar/health-bar.component';
import {StatCardComponent} from './base/stat-card/stat-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {AttackElementComponent} from './base/attack-element/attack-element.component';
import {MatListModule} from "@angular/material/list";
import {LabelCardComponent} from './base/label-card/label-card.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {NavBarComponent} from './base/nav-bar/nav-bar.component';
import {NavBarSpacerComponent} from './base/nav-bar/nav-bar-spacer/nav-bar-spacer.component';
import {BattleComponent} from './tabs/battle/battle.component';
import {SkillsComponent} from './tabs/skills/skills.component';
import {InventoryComponent} from './tabs/inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthBarComponent,
    StatCardComponent,
    AttackElementComponent,
    LabelCardComponent,
    NavBarComponent,
    NavBarSpacerComponent,
    BattleComponent,
    SkillsComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
