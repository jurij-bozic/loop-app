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
    //saves comment value to service
    this.myForm.valueChanges.subscribe(item => this.userDataService.submissionComment = item.comment);
  }

  
  submitMessage() {
    if(!this.userDataService.submissionSubject || !this.userDataService.submissionUsers || !this.userDataService.submissionComment){
      confirm('Please fill out all fields before sharing the message.');
    }
    else {
      confirm('The following message has been sent.\n\n\n' + 'SUBJECT: ' + this.userDataService.submissionSubject + '\n\n' +  'SENT TO: ' + 
          this.userDataService.submissionUsers + '\n\n' + 'MESSAGE: ' + this.userDataService.submissionComment);
    }
  }
}


