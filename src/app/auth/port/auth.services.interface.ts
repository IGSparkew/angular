import { Observable } from "rxjs";
import { User } from "../domain/user";


export interface IAuthService {

    getUsers(): Observable<User[]>;
    getUser(id: number): Observable<User> | undefined;
    createUser(user: User): Observable<User>;
    updateUser(id: number, user:User): Observable<User>;
    deleteUser(id:number): Observable<any>;
}