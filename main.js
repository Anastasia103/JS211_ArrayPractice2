let num = 0
do {
 num += 1;
 console.log(num)
} while (num < 1000)

const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  };
  const person2 = {
    firstName: "Elijah",
    lastName: "Barret",
    birthDate: "June 5, 1993",
    gender: "male"
  };
  const person3 = {
    firstName: "Allie",
    lastName: "Wheeler",
    birthDate: "Aug 2, 2002",
    gender: "female"
  };
  const person4 = {
    firstName: "Ayden",
    lastName: "Blanchard",
    birthDate: "Dec 22, 1946",
    gender: "male"
  };
  console.log(Object.keys(person))
  console.log(Object.entries(person))
  const arrayOfPersons= [person, person2, person3, person4]
  // For People Born in an Odd Year
  for (people of arrayOfPersons){
    let birthSections = people.birthDate.split(" ")
    let birthYear = birthSections.pop()
    if (birthYear%2 != 0){
      console.log("This person was born in an odd year")  
      console.log(people.birthDate)
    }
}
//Mapping
let map1 = arrayOfPersons.map(obj => ({ ...obj, validPerson: 'True' }))
console.log('Map of New Array')
console.log(map1)

// For Only Males
let malePersons = arrayOfPersons.filter(people => people.gender ==="male")
console.log('These are males')
console.log(malePersons)
//For People born before Jan 1, 1990 using Filter
console.log ('Old People')
youngPeople = arrayOfPersons.filter(people => 
 new Date(people.birthDate) < new Date ("January 1 1990")
)      
console.log(youngPeople)
//For People born before Jan 1, 1990 using forEach
for (people of arrayOfPersons){
    var date = new Date(people.birthDate)
    let youngDate = new Date ("January 1 1990")
    if(date > youngDate){
      console.log(`This is a young person`)
      console.log(people)
      console.log(false)
    }
    else{
    console.log('This is an old person')
    console.log(people)
    console.log(true)
    }
}

// Is the date older than 21
function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

function canYouDrink(dateString){
let age = getAge(dateString)
if (age >= 21) {
  console.log(true)
    return true
}
else{
  console.log(false)
    return false 
}
}
let notDrinkingPersons = arrayOfPersons.filter(people => canYouDrink(people.birthDate) === false)
console.log("These people can't drink")
console.log(notDrinkingPersons)