import { Component } from '@angular/core';
import { User } from '../../domain/user';
import { AuthDisplayService } from '../../data/facades/auth-display.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  newUser:User = new User();
  readonly formBuilder = new FormBuilder();
  registerForm = this.formBuilder.nonNullable.group({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  isRegistred:boolean = false;
  submited:boolean = false;

  constructor(private authDisplayService: AuthDisplayService) { }


  onSubmit() {
    this.submited = true;
    this.newUser.email = this.registerForm.get('email')!.value ?? undefined;
    this.newUser.firstname = this.registerForm.get('firstname')!.value ?? undefined;
    this.newUser.lastname = this.registerForm.get('lastname')!.value ?? undefined;
    this.newUser.password = this.registerForm.get('password')!.value ?? undefined;

    console.log(this.newUser);
    this.isRegistred = this.authDisplayService.register(this.newUser);
    console.log(this.isRegistred);
  }


}
