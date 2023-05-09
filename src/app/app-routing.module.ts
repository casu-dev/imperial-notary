import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BattleComponent} from "./tabs/battle/battle.component";
import {SkillsComponent} from "./tabs/skills/skills.component";
import {InventoryComponent} from "./tabs/inventory/inventory.component";
import {CreatorComponent} from "./creator/creator.component";
import {HomeComponent} from "./home/home.component";
import {TabsParentComponent} from "./tabs/parent/tabs-parent.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreatorComponent},
  {path: 'index.html', redirectTo: '/', pathMatch: "full"},
  {
    path: 'char',
    component: TabsParentComponent,
    children: [
      {path: 'battle', component: BattleComponent},
      {path: 'skill', component: SkillsComponent},
      {path: 'inv', component: InventoryComponent},
      {path: 'create', component: CreatorComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
