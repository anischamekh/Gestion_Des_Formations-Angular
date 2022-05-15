import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardFormateurComponent } from './board-formateur/board-formateur.component';
import { FormateurComponent } from './formateur/formateur.component';
import { FormationComponent } from './formation/formation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ThemeComponent } from './theme/theme.component';
import { MailComponent } from './mail/mail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'formateurBoard', component: BoardFormateurComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'theme', component: ThemeComponent },
  { path: 'formateur', component:FormateurComponent },
  { path: 'formation', component:FormationComponent },
  { path: 'profile', component:ProfileComponent },
  { path: 'mail', component:MailComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
