const x:number = 119
console.log(x)

////////////////
function greet(firstName:any, lastName : string){
    console.log("Hello " + firstName + " " + lastName)
}

greet("32","user")

////////////////
function sum(a:number, b:number) : number {
    return a + b
}

const value = sum(56,34)
console.log(value)

/////////////
function isLegal(age : number) : boolean{
    if(age>18){
        return true
    }
    return false
}

const answer = isLegal(28)
console.log(answer)


///////////////
//create a funtion that takes another funtion as input and run after one second

function mainFunction(argumentAsFunction : ()=>void){
    setTimeout(argumentAsFunction,1000)
}

function afterOneSecond(){
    console.log("this fucntion will be run after one second")
}


mainFunction(afterOneSecond)

/////interface- setting type for object

const user = {
    firstName : "Fayazuddin",
    lastName : "Shaik",
    age : 24
}

interface User{
    firstName : string,
    lastName : string,
    age : number,
    email ?: string
}

function isAdult(user : User){
    if(user.age > 18){
        return true
    }else{
        return false
    }
}

const result = isAdult(user)
console.log(result)