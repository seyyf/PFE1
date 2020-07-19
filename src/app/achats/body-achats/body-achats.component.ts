import { OrderService } from './../../order.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-body-achats',
  templateUrl: './body-achats.component.html',
  styleUrls: ['./body-achats.component.css']
})
export class BodyAchatsComponent implements OnInit {

  orders$;

  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) {
    
      this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
    
   }

  ngOnInit() {
  }


}
