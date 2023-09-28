function userExitsByEmailRetornUser(email){
    for (var i = 0; i < users.length; i++){
        var user = users[i]

        if (user.email === email)
        return user  // aqui me devuelve todos los datos de peter pan
    }

    return false// si no lo encuentra me retorna falso
}
