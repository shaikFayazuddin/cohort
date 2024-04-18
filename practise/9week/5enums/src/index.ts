//enums
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed : Direction){
    if(keyPressed == Direction.Right){
        console.log("Right arrow key was pressed")
    }
}

doSomething(Direction.Down)
doSomething(Direction.Up)
console.log(Direction.Left)
console.log(Direction.Right) //these print the numerical values and to changes this we can define the values in the enum as
enum Navigation {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}

//common use case of enums is while creating the response status in express server, like
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}



//generic
type input = string | number

function getFirstElement(arr : input[]){
    return arr[0]
}
const value = getFirstElement(['Fayazuddin', 'shaik'])

//there are two issues here, first is if I give toUpperCase to the string, I will be getiing an errow which shouldn't happen as it's a string.
//but ts is not able to understand that it's string and giving error
/*
console.log(value.toUpperCase()) 
*/
//this need to be fixed

//other error is what if I give mixed input but I am strict and need only one type
//looks like ts has no problem with it
const result = getFirstElement(['a','b',1,2,3]) //as you can see no error
//to fix this we can define at the function level like this
//function getFirstElement(arr : string[] | number[]) but this is not the ideal solution
//the soln is to use generics and it goes like this

function giveBack<T>(take : T){
    return take
}
const value1 = giveBack<string>("Hello")
const value2 = giveBack<number>(23)

console.log(value1.toUpperCase())

//solution to original problem
function firstElement<T>(arr : T[]){
    return arr[0]
}
const element = firstElement<string>(['bye', 'world'])
console.log(element.toUpperCase)