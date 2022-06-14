import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Formation } from '../_models/Formation';
import { User } from '../_models/User';
import { FormationService } from '../_services/formation.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-formateur',
  templateUrl: './board-formateur.component.html',
  styleUrls: ['./board-formateur.component.css']
})
export class BoardFormateurComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  content?: string;
  user: User = new User();
  formation: Formation = new Formation();
  formations: Formation[] = [];
  currentUser: any;
  isLoggedIn=false;
  sideBarOpen = true;


  public searchTerm !: string;

  constructor(private userService: UserService,
              private tokenStorageService: TokenStorageService,
              private formationService: FormationService) { }

  ngOnInit(): void {
    this.formationService.getFormationList().subscribe({next:(res)=>{this.formations = res}})
    this.currentUser = this.tokenStorageService.getUser();

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
    }
    this.currentUser = this.tokenStorageService.getUser();
  }
  
  public logout() {
    this.tokenStorageService.signOut();
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}