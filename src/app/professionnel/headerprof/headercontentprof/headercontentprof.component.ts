import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-headercontentprof',
  templateUrl: './headercontentprof.component.html',
  styleUrls: ['./headercontentprof.component.css']
})
export class HeadercontentprofComponent implements OnInit {

  faArrowAltCircleLeft = faArrowAltCircleLeft;
  faArrowAltCircleRight = faArrowAltCircleRight;
  constructor() { }

  ngOnInit(): void {
  }

}
