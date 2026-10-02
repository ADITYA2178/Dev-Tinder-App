const validator = require("validator");

const validateSignupData = (req) => {
    const {firstName,lastName,email,password} = req.body;

    if(!firstName || !lastName){
        throw new Error("First name and last name are required"); 
    }

    else if (!validator.isLength(firstName, { min: 5 }) || !validator.isLength(lastName, { min: 5 })){
        throw new Error("First name and last name must be at least 5 characters");
    }

    else if (!validator.isEmail(email)){
        throw new Error("Invalid email");
    }

    else if (!validator.isStrongPassword(password)){
        throw new Error("Password is not strong");
    }
};

module.exports = { validateSignupData };
