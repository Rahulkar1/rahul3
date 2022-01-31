import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  number:any="";
  amount:any="";
  totalAmount:any="";
  availableAmount:any=""

  pay(){
    if(this.number == localStorage.getItem("myNumber")){
      this.totalAmount = localStorage.getItem("myaBalance")
      this.availableAmount = this.totalAmount-this.amount
      localStorage.setItem("myaBalance",this.availableAmount);
      // this.route.navigate(['/']);
    }

  }

}
