import { Component } from '@angular/core';
import { User } from '../../domain/user';
import { AuthDisplayService } from '../../data/facades/auth-display.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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


  constructor(private authDisplayService: AuthDisplayService, private router: Router) { }


  onSubmit() {
    this.newUser.email = this.registerForm.get('email')!.value ?? undefined;
    this.newUser.firstname = this.registerForm.get('firstname')!.value ?? undefined;
    this.newUser.lastname = this.registerForm.get('lastname')!.value ?? undefined;
    this.newUser.password = this.registerForm.get('password')!.value ?? undefined;

    this.authDisplayService.register(this.newUser).subscribe((response) => {
      if(response) {
        Swal.fire('User created', '', 'success');
        this.router.navigate(['/login'],  { skipLocationChange: true });
      } else {
        Swal.fire('User not registred', '', 'error');
      }

    });
  }


}
