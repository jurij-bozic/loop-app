import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDataService } from '../user-data.service';


@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})


export class CommentViewComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      comment: ''
    })
    //saves comment values to service
    this.myForm.valueChanges.subscribe(item => this.userDataService.submissionComment = item.comment);
    
  }

  submitMessage() {
    if(confirm('MESSAGE with subject' + this.userDataService.submissionSubject +  'sent to ' + this.userDataService.submissionUsers + ': ' + this.userDataService.submissionComment)) {
      console.log("Message shared");
    }
  }

}


