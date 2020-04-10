// const person:{
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "Arkadiusz",
//     age: 38,
//     hobbies: ['Sport', 'Cooking'],
//     role: [2, 'author']
// }

enum Role { ADMIN, READ_ONLY, AUTHOR};
const person = {
  name: "Arkadiusz",
  age: 38,
  hobbies: ["Sport", "Cooking"],
  role: Role.ADMIN
}

console.log(Role.ADMIN);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    
}
