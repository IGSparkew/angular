import { Component } from '@angular/core';
import { User } from '../../domain/user';
import { IAuthDisplayService } from '../../port/auth-display.service.interface';
import { AuthDisplayService } from '../../data/facades/auth-display.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  newUser:User = new User();
  isRegistred:boolean = false;
  submited:boolean = false;

  constructor(private authDisplayService: AuthDisplayService) { }


  onSubmit() {
    this.submited = true;
    this.isRegistred = this.authDisplayService.register(this.newUser);
  }


}
