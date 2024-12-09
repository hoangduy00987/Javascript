class Account{
    constructor(username, password){
        this.username = username,
        this.password = password
    }
    login(){
        console.log("logging in...");
    }
}

class AdminAccount extends Account{
    constructor(username, password, permission){
        super(username,password);
        this.permission = permission
    }
    login(){
        console.log("Admin Logging in...");
    }
}

class UserAccount extends Account{
    constructor(username, password, subscriptionType){
        super(username,password);
        this.subscriptionType = subscriptionType
    }
    login(){
        console.log("User logging in...");
    }
}

const admin = new AdminAccount("hoangduy",'duy1234',["add_user","delete_user"]);
admin.login();
console.log(admin.permission);
const user = new UserAccount("hoangduy",'duy1234',"free");
user.login();

const guest = new Account("guess",'duy1234');
guest.login();