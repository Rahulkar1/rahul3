import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  price:any=""
  month:any=""
  rate:any=""
  total:any=""
  interest:any=""


  calculate(){
    // this.interest = (this.price * (this.rate * 0.01))/this.month;
    // this.total = ((this.price/this.month) + this.interest);
     this.interest = (this.price * (this.rate * 0.01)) / this.month;
    this.total = ((this.price / this.month) + this.interest).toFixed(2);

  }

  clearValue(){
    this.price='';
    this.month='';
    this.rate='';
    this.total='';
    this.interest='';
  }
}
