import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-regi',
  templateUrl: './regi.component.html',
  styleUrls: ['./regi.component.css']
})
export class RegiComponent implements OnInit {
  f1: boolean = false
  f2: boolean = true
  f3: boolean = false
  fname: string = ""
  fpass: string = ""
  lname: string = ""

  employee: Array<Employee> = new Array()
  tname: string = ""
  tmber: string = ""
  constructor() { }

  ngOnInit(): void {
  }
  changevalue(reference: any, nameref: any,first:any,re:any)
    {
    this.fname = reference.value
    this.fpass = nameref.value
    this.lname = first.value
   
    this.f1 = true
    this.f2 = false
  }
  fun(ref: any, Ref: any) {
    if (ref.value == this.fname && Ref.value == this.fpass) {
      this.f1 = false
      this.f2 = false
      this.f3 = true
    }
    else {
      alert("Enter correct credentials")
    }
    //is.lname =ref.value
  }
  Detail(pna: any, pnas: any)
  {
    this.tname = pna.value
    this.tmber = pnas.value
    var a = this.tmber
  
    let emp1 = new Employee(this.tname,this.tmber)
    this.employee.push(emp1)
    console.log(this.employee)

  }
}
