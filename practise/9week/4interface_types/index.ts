//implementing interface

interface Associate {
    name : string,
    age : number,
    greet(phrase : string) : void
}

class Intern implements Associate{
    name: string
    age: number

    constructor(n:string,a:number){
        this.name =n
        this.age = a
    }

    greet(phrase: string){
        console.log(`${phrase} ${this.name}`)
        
    }
}

const x = new Intern("Fayaz", 56)
console.log(x)
//need to explore a little bit about this

//types


//how to declare a type
type User = {
    name : string,
    age : number
}

//there are few other things that can be done with types
//1 unions

type StringOrNumber = string | number

function printId(id : StringOrNumber){
    console.log(`Your ID is: ${id}`)
}

printId("TYPESCRIPT")
printId(67452)

//intersection

type Officer = {
    name : string,
    age : number,
    rank : string,
    academy : string,
}

interface JCO{
    name : string,
    age : number,
    rank : string,


}


//arrays in typescript
//to find the largest number in the give array
type NumberArr = number[]

function maxValue(arr : NumberArr){
    let max = 0
    for(let i =0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

console.log(maxValue([3,5,8,9]))

//give a list of array, filter the users who are legal

interface Person {
    firstName : string,
    lastName : string,
    age : number
}

function filteredUsers(users : Person[]){
    return users.filter(x => x.age >=18)
}

let data = filteredUsers([{
    firstName : "fayaz",
    lastName : "shaik",
    age : 24
},{
    firstName : "Harry",
    lastName : "Potter",
    age : 30
}])

console.log(data)
