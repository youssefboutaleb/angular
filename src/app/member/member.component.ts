import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
dataSource:any[]=[
  {id:"1234587",
  cin:"13454645",
name:"youssef",
createdDate:"12/12/12",
cv:"lien",
type:"teacher"},
  {id:"5555555",
  cin:"13454645",
name:"youssef",
createdDate:"12/12/12",
cv:"lien",
type:"teacher"},
  {id:"156465",
  cin:"13454645",
name:"youssef",
createdDate:"12/12/12",
cv:"lien",
type:"teacher"},
]
}
