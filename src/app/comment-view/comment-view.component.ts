import { Component, OnInit } from '@angular/core';
// import {NgForm} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent implements OnInit {

  myForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: '',
      email: ''
    })

    this.myForm.valueChanges.subscribe(console.log);
  }

  logThis(param: any): void {
    // debugger;
    console.log(param);
  }

}
