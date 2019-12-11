import { Component, OnInit } from '@angular/core';
import {faKey, faUserShield} from '@fortawesome/free-solid-svg-icons';
import {SideBarService} from '../../side-bar.service';


@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

  faKey = faKey;
  faSheild = faUserShield;

  constructor(
      public sidebar: SideBarService
  ) { }

  ngOnInit() {
  }

}
