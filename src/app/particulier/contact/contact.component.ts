import { Component, OnInit } from '@angular/core';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faMobileAlt = faMobileAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  faEnvelopeOpenText = faEnvelopeOpenText;
  constructor() { }

  ngOnInit(): void {
  }

}
