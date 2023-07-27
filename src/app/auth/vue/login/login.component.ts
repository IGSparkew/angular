import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../../domain/user';
import { AuthDisplayService } from '../../data/facades/auth-display.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  readonly formBuilder = new FormBuilder();
  loginForm = this.formBuilder.nonNullable.group({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  constructor(private authDisplayService: AuthDisplayService) { }

  onSubmit() {
    const email = this.loginForm.get('email')!.value ?? undefined;
    const password = this.loginForm.get('password')!.value ?? undefined;


    this.authDisplayService.login(email, password).subscribe(
      (userFind) => {
        if(userFind) {
          Swal.fire(`Bienvenu(e) ${userFind.firstname} ${userFind.lastname}`, 'success')
        } else {
          Swal.fire('User not registred', '', 'error');
        }
      }
    );
  }
}
