import { Component, OnInit } from '@angular/core';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare , faGitlab, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  faFacebook = faFacebookSquare;
  faGithub = faGithub;
  faGitlab = faGitlab;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faMail = faPaperPlane;

  ngOnInit() {
  }

}
