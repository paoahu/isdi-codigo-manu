var users = [
    {
        name: 'Wendy Darling',
        email: 'wendy@darling.com',
        password: '123123123'
    },
    {
        name: 'Peter Pan',
        email: 'peter@pan.com',
        password: '123123123'
    }
]

function createUser(name, email, password) {
    var user = {}

    user.name = name
    user.email = email
    user.password = password

    users.push(user)
}

var index1
var index2

function findUserByEmail(email) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email)
            return user
    }

    return null
}


function findUserId(email) {
    for (var i = 0; i < users.length; i++) {

        if (users[i].email === email)
            
            return i
    }

    return null
}

function isUserPassword (password){
    if (users[index1].password === password){
        return true
    }
    return false
    
}


function isDifferent (parameter1, parameter2){
    if (parameter1 !== parameter2){
        return true
    }
    return false
}


function isEqual (parameter1, parameter2){
    if (parameter1 === parameter2){
        return true
    }
    throw new Error('this is not your email')
}


function isEqual2 (parameter1, parameter2){
    if (parameter1 === parameter2){
        return true
    }
    return false
}