export class User {
    private id?: number;
    private firstname: string;
    private lastname: string;
    private password: string;

    constructor(firstname: string, lastname:string, password: string, id?:number) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
    }

    public getId() {
        return this.id;
    }

    public getFirstname() {
        return this.firstname;
    }

    public getLastname() {
        return this.lastname;
    }

    public getPassword() {
        return this.password;
    }

    public setFirstname(firstname: string) {
        this.firstname = firstname;
    }

    public setLastname() {
        this.lastname = this.lastname;
    }

    public setPassword() {
        this.password = this.password;
    }


}