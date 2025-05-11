
class UserNameNotProvided extends Error{
    constructor(){
        super("User's name not provided");
        this.statusCode = 400;
    }
}

class UserSurnameNotProvided extends Error{
    constructor(){
        super("User's surname not provided");
        this.statusCode = 400;
    }
}

class UserSpecialityNotProvided extends Error{
    constructor(){
        super("User's speciality not provided");
        this.statusCode = 400;
    }
}

class UserTelephoneNotProvided extends Error{
    constructor(){
        super("User's telephone not provided");
        this.statusCode = 400;
    }
}

class UserNameProvided extends Error {
    constructor(){
        super("User name not provided");
        this.statusCode = 400;
    }
}

class UserMailProvided extends Error {
    constructor(){
        super("User email not provided");
        this.statusCode = 400;
    }
}

class UserPasswordNotProvided extends Error{
    constructor(){
        super("User password not provided");
        this.statusCode = 400;
    }
}

class UserRoleIncorrect extends Error{
    constructor(){
        super("User role is not correct, must be coach o User");
        this.statusCode = 400;
    }
}

class UserEmailAlreadyExists extends Error{
    constructor(){
        super("User email already exists");
        this.statusCode = 400;
    }
}

class UserInvalidCredentials extends Error{
    constructor(){
        super("Invalid credencials");
        this.statusCode = 401;
    }
}

export {
    UserNameNotProvided,
    UserSurnameNotProvided,
    UserSpecialityNotProvided,
    UserTelephoneNotProvided,
    UserNameProvided,
    UserMailProvided,
    UserPasswordNotProvided,
    UserRoleIncorrect,
    UserEmailAlreadyExists,
    UserInvalidCredentials
}