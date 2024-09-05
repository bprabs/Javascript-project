/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let brr = [
  { id: 4, name: "Rohan", age: "12", profession: "Gamer" },
  { id: 5, name: "Hemant", age: "42", profession: "Banker" },
  { id: 6, name: "Deepak", age: "31", profession: "Cricketer" },
]

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let prof = arr.map((item)=>{
    if(item.profession === "developer")
        console.log(item.profession)
  })

}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  let prof = arr.forEach((item)=>{
    if(item.profession === "developer")
        console.log(item.profession)
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
 console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
 let filter = arr.filter((item)=>{
   if(item.profession !== "developer"){
     console.log(item)
   }
 })
}

function concatenateArray() {
  //Write your code here, just console.log
  let concatenateArray = arr.concat(brr)
  console.log(concatenateArray)
}
