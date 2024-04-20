import { PrismaClient } from '@prisma/client'     
const prisma = new PrismaClient()

async function insertUser(email : string, firstName : string, lastName : string, password : string) {
    const res = await prisma.user.create({
        data : {
            email,
            firstName,
            lastName,
            password,
        }
    })
    console.log(res)
}

// insertUser('shaikfayazuddin@gmail.com', 'fayazuddin','shaik','password')
// insertUser('shaik@gmail.com', 'fayazuddin','shaik','password')
// insertUser('fayazuddin@gmail.com', 'fayazuddin','shaik','password')


//code to update existing data

interface updateParams {
    firstName : string,
    lastName : string
}

async function updateUser(email : string, {
    firstName,
    lastName
} : updateParams) {
    const res = await prisma.user.update({
        where : {email},
        data : {
            firstName,
            lastName
        }
    })
    console.log(res)
}
// updateUser("shaik@gmail.com", {firstName :'harry', lastName : "potter"})


//intresting ...earlier there was typo(firstName) in schema, so I changed and updated, after that the earlie column was delted and a new coulumn was added with the name firstName...how to update the schema names without affecting data.
//now I want the firstName to be the 2nd column but not the last column

//now updating the firstName for shaikfayazuddin18@gmail.com as the firstName was deleted while updating schema

async function updateFirstUser(email : string, firstName : string){
    const res = await prisma.user.update({
        where : {email},
        data : {
            firstName
        }
    })
    console.log(res)
}
// updateFirstUser("shaikfayazuddin@gmail.com", "fayazuddin")
//the above op was successful :)

//now to find the user

async function getUser(email: string) {
    const res = await prisma.user.findFirst({
        where : {
            email
        }
    })
    console.log(res)
}

getUser("shaik@gmail.com")