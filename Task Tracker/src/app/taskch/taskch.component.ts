import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'app-taskch',
  templateUrl: './taskch.component.html',
  styleUrls: ['./taskch.component.css']
})
export class TaskchComponent implements OnInit {
  uname: string = ""
  uid: string = ""
  unum: string = ""
  uadd: string = ""
  employee: Array<Employee> = new Array()
  constructor() { }

  ngOnInit(): void {
  }
  det(tid: any, tnam: any, ttask: any, tdate: any) {
    this.uname = tid.value
    this.uid = tnam.value
    this.unum = ttask.value
    this.uadd = tdate.value
    console.log(this.uid)
    let emp1 = new Employee(this.uname, this.uid, this.unum, this.uadd)
    this.employee.push(emp1)
    console.log(this.employee)
  }
}
