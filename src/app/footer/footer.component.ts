import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbUtilityService } from '../db-utility.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  queryForm= new FormGroup({
    queryBox: new FormControl("", [Validators.required])
  });

  public wait= false

  constructor(private myDb:DbUtilityService) { }
  ngOnInit(): void {
  }


  sendQuery(){
    if(!this.queryForm.valid){
      alert("Enter the query")
    }
    this.wait= true;
    console.log(this.queryForm.value)
    this.myDb.sendQuery(this.queryForm.value).subscribe((res: any)=>{
      console.log(res)
      this.wait=false
    })
  }
}
