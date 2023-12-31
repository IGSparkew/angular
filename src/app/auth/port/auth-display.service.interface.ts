import { Observable } from "rxjs";
import { User } from "../domain/user";

export interface IAuthDisplayService {

    register(user: User): Observable<boolean>;
    login(email?: string, password?: string): Observable<User>;
    isAuthenticated(): boolean;
    logout(): void;
}