function checkUserPassword (one, two){
    if (one === two)
    return true
}


function registerUser(name, email, password){
    var userExists = userExitsByEmail(email)

    if (userExists)
    return false

    createUser(name, email, password)

    return true // esto es para comprobar que se ha registrado?

}

var wrongPassword = false


function authenticateUser(email,password){ // tengo los datos de peterpan

  

    for (var i = 0; i < users.length; i++){
        var user = userExitsByEmailRetornUser
    }

    return null// si no lo encuentra me retorna falso
}






function retrieveUser(email){ //recuperar

}

/*
function correctPassword(email,password){

    var userExists = userExitsByEmailRetornUser(email) // es como que me lo coge otra vez

    var checkCredentials = checkUserPassword(userExists.password,password)

    if (checkCredentials == false){
        return false

    }

    return


}
*/