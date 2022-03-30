//bai1
let greetings = "lazy dog humps over brown fox";
let chars = [...greetings]; 
let result1 = document.getElementById('result1');
result1.innerHTML = chars.length;

//bai 2
//vidu1
let blog1Subscribers = ['billy@example.com', 'sally@gmail.com'];
let blog2Subscribers = ['timmy@gmail.com', 'tammy@example.com', 'tommy@gmail.com'];
let subscribers = [...blog1Subscribers, ...blog2Subscribers];
let result2 = document.getElementById('result2');
result2.innerHTML = subscribers;
console.log(subscribers);

//vidu2
const billing = { billingContact: '0987654321', billingAddress: 'street no 123, xyz city' };
const shipping = { shippingContact: '123456789', shippingAddress: 'street no 999, abc city' };
const custInfo = { ...billing, ...shipping };
console.log(custInfo);

//bai3
let students = ['John', 'Sofia', 'Bob'];
let copy_students = students;
console.log(copy_students);
students.push('Sally'); // Change students
console.log(students);