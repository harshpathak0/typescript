
interface userType{
    name:string,
    age:number,
    getName:()=>string
}


var person:userType = {
    name: "harsh",
    age: 21,
    getName: function(){
        return "harsh pathak"
    }
};
var person1:userType = {
    name: "yash gupta",
    age: 21,
    getName: function(){
        return "harsh pathak"
    }
};
console.log(person1);
