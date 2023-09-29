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


function isDifferent (parameter1, parameter2){
    if (parameter1 !== parameter2){
        return true
    }
    return false
}




