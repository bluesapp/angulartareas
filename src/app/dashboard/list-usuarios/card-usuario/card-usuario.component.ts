import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  @Input() user: any;
  imgUrl: string;
  firstName: string;
  email: string;
  id: number;
  constructor() { }

  ngOnInit(): void {
    this.firstName = this.user.first_name;
    this.email = this.user.email;
    this.imgUrl = this.user.avatar;
    this.id = this.user.id;
  }

}
