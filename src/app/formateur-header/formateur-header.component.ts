import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-formateur-header',
  templateUrl: './formateur-header.component.html',
  styleUrls: ['./formateur-header.component.css']
})
export class FormateurHeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showFormateurBoard = false;
  currentUser: any;
  
  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showFormateurBoard = this.roles.includes('ROLE_Formateur');
    }
    this.currentUser = this.tokenStorageService.getUser();
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}

