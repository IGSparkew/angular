import { Observable } from "rxjs";
import { User } from "../domain/user";

export interface IAuthDisplayService {

    register(user: User): Observable<boolean>;
    
}