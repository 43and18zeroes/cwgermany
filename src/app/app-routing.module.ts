import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { SectionHeroComponent } from './section-hero/section-hero.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', component: SectionHeroComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
