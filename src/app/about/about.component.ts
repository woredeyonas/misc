import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  messageForm: FormGroup;
  submitted=false;
  success=false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm=this.formBuilder.group({
      name:['', Validators.required],
      email:['', Validators.required],
      phone:['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      message:['', Validators.required]      
    })
  }

  onSubmit(){
    this.submitted=true;
    if(this.messageForm.invalid){
      return;
    }

    this.success=true;
  
  }

    

}
