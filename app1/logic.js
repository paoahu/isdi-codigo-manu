
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
    validateText(password, 'password')

    var user = findUserByEmail(email)

    if (user)
        throw new Error('user already exists')

    createUser(name, email, password)
}

function authenticateUser(email, password) {

    validateText(email, 'email')
    validateText(password, 'password')

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

function compareLoginUser(loginMail, inputMail){

}


function changeEmail (users, currentEmail, newEmail){

    var checkEmail = isDifferent(currentEmail,newEmail)

    if (checkEmail === false)
    throw new Error('same email')

    var index = findUserId(currentEmail)

    users[index].email = newEmail

    alert(`Your new email is ${newEmail}`)

}



function changePassword (users, currentPassword, newPassword, repeatNewPassword){

    var checkUserPassword = isUserPassword(currentPassword)
    if (checkUserPassword === false)
    throw new Error('this is not your original password')

    var checkPassword = isDifferent(currentPassword,newPassword)

    if (checkPassword === false)
    throw new Error('same password')

    var checkNewPasswordTwice = isEqual2(newPassword, repeatNewPassword)
    if (checkNewPasswordTwice === false)
    throw new Error('please write the same new password')

    var index = index1

    users[index].password = newPassword

    alert(`Your new password is ${newPassword}`)

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