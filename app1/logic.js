
/*
function checkBlankSpaces(parameter){
    //como decirle a JS que lea lo que escribes
    var name = arguments[0]
    if (!parameter.trim().length) throw new Error(name + 'is empty')
}
*/

function registerUser(name, email, password) {

    validateText(name, 'name')
    validateText(email, 'email')
    validatePassword(password, 'password')

    var user = findUserByEmail(email)

    if (user)
        throw new Error('user already exists')

    createUser(name, email, password)
}

function authenticateUser(email, password) {

    validateText(email, 'email')
    validatePassword(password, 'password')

    var user = findUserByEmail(email)

    if (!user || user.password !== password)
        throw new Error('wrong credentials')
}

function retrieveUser(email) {

    validateText(email, 'email')

    var user = findUserByEmail(email)

    if (!user)
        throw new Error('user not found')

    return user
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