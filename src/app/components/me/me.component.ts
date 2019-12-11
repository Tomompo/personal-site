import { Component, OnInit } from '@angular/core';
import {faUserTie, faBuilding, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  faKey = faUserTie;
  faSheild = faBuilding;
  faSheild2 = faMapMarkedAlt;

  constructor() { }

  ngOnInit() {
  }

}
