import { Component } from '@angular/core';
import { GLOBAL } from './app-config';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
dataSource:any[]=GLOBAL._DB.members;
displayedColumns =["id","cin","name","createdDate","cv","type","action"];
}
