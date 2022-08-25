import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  
  success = false

  ngOnInit(): void {
    this.route.queryParams.subscribe ( params => {
      this.success = ( params [ "status" ] == "success")
    } )
  }

}
