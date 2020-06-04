import { Component, OnInit } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-headerprof',
  templateUrl: './headerprof.component.html',
  styleUrls: ['./headerprof.component.css']
})
export class HeaderprofComponent implements OnInit {

  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  constructor() { }

  ngOnInit(): void {
  }

}
