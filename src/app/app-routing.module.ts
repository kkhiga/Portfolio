import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkComponent } from './work/work.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'work', pathMatch: 'full' },
  { path: 'work', component: WorkComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
