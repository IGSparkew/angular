import { User } from "../domain/user";

export interface IAuthDisplayService {

    register(user: User): boolean;
    
}