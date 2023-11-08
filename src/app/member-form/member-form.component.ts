import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']

})
export class MemberFormComponent {
form :FormGroup;
ngOnInit(): void{
  this.initForm();
}
initForm(){

}
}
