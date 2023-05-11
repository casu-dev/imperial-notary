import {isDevMode, NgModule} from '@angular/core';
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
import {NavBarComponent} from './tabs/parent/nav-bar/nav-bar.component';
import {NavBarSpacerComponent} from './tabs/parent/nav-bar/nav-bar-spacer/nav-bar-spacer.component';
import {BattleComponent} from './tabs/battle/battle.component';
import {SkillsComponent} from './tabs/skills/skills.component';
import {InventoryComponent} from './tabs/inventory/inventory.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {HealthDialogComponent} from './base/dialog/health-dialog/health-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SkillElementComponent} from './base/skill-element/skill-element.component';
import {AppRoutingModule} from './app-routing.module';
import {StatElementComponent} from './base/stat-element/stat-element.component';
import {AddDialogComponent} from './base/dialog/add-dialog/add-dialog.component';
import {MatMenuModule} from "@angular/material/menu";
import {TrackersComponent} from './tabs/battle/trackers/trackers.component';
import {WeaponsComponent} from './tabs/battle/weapons/weapons.component';
import {LearnedSkillsComponent} from './tabs/skills/learned-skills/learned-skills.component';
import {HomeComponent} from './home/home.component';
import {CreatorComponent} from './creator/creator.component';
import {TabsParentComponent} from './tabs/parent/tabs-parent.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import { PassivesComponent } from './tabs/passives/passives.component';

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
    InventoryComponent,
    HealthDialogComponent,
    SkillElementComponent,
    StatElementComponent,
    AddDialogComponent,
    TrackersComponent,
    WeaponsComponent,
    LearnedSkillsComponent,
    HomeComponent,
    CreatorComponent,
    TabsParentComponent,
    PassivesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MatDialogModule,
    FormsModule,
    AppRoutingModule,
    MatMenuModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {appearance: 'outline', hideRequiredMarker: true},
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
