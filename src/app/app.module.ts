import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardFormateurComponent } from './board-formateur/board-formateur.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeDialogComponent } from './theme-dialog/theme-dialog.component';
import { FormateurDialogComponent } from './formateur-dialog/formateur-dialog.component';
import { FormateurComponent } from './formateur/formateur.component';
import { FormationComponent } from './formation/formation.component';
import { FormationDialogComponent } from './formation-dialog/formation-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { ProfileComponent } from './profile/profile.component';
import { MailDialogComponent } from './mail-dialog/mail-dialog.component';
import { MailComponent } from './mail/mail.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ParticipantsComponent } from './participants/participants.component';
import { NgChartsModule } from 'ng2-charts';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import {NgxPaginationModule} from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    BoardAdminComponent,
    BoardFormateurComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    SidenavComponent,
    ThemeComponent,
    ThemeDialogComponent,
    FormateurDialogComponent,
    FormateurComponent,
    FormationComponent,
    FormationDialogComponent,
    ProfileComponent,
    MailDialogComponent,
    MailComponent,
    InscriptionComponent,
    ParticipantsComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    FormationDetailComponent,
    FormationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    NgxMatFileInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgChartsModule,
    NgxPaginationModule
  ],
  providers: [authInterceptorProviders,{
    provide: MatDialogRef,
    useValue: {}
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
