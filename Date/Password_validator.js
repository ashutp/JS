function passval(password){
    const error=[];
    if(password.length<8){
        error.push("Enter at least 8 character ");
    }
     
    if(password===password.toUpperCase()){
        error.push("Enter at least one lowercase character");
    }
    
    if(password===password.toLowerCase()){
        error.push("Enter at least one upper case character");
    }

    if(!/\d/.test(password)){
        error.push("Enter at least one number");
    }

       if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        error.push("Password must contain at least one special character");
    }

    return (error.length===0)?"valid password":error.join("\n");
}
console.log(passval("Ashu@1234"));