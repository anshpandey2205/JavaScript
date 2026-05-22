
let obj={
    id:1,
    firstName:"anshu",
    LastName:"pandey",
    FullName:function(city, age){
        console.log(this.firstName+" "+this.LastName+" from "+city+" is "+age+" years old.");
    }
}
obj.FullName("delhi", 25);

let userone={
    id:2,
    firstName:"Coachroach",
    LastName:"janta party",
}
obj.FullName.call(userone,"delhi",51);















// const questions = [
//     {
//       question: "HTML ka full form kya hai?",
//       options: [
//         "Hyper Text Markup Language",
//         "High Text Machine Language",
//         "Hyper Tabular Markup Language",
//         "Home Tool Markup Language"
//       ],
//       answer: 0   
//     },
//     {
//       question: "CSS me color change karne ke liye kaunsi property use hoti hai?",
//       options: ["font-color", "text-color", "color", "background"],
//       answer: 2
//     },
//     {
//       question: "JavaScript me variable declare karne ke liye kaunsa keyword use hota hai?",
//       options: ["var", "int", "string", "declare"],
//       answer: 0
//     },
//     {
//       question: "Kaunsa HTML tag sabse bada heading banata hai?",
//       options: ["<h6>", "<heading>", "<h1>", "<head>"],
//       answer: 2
//     },
//     { 
//       question: "JavaScript me array ki length kaise pata karte hain?",
//       options: ["array.size()", "array.length", "array.count", "length(array)"],
//       answer: 1
//     }
//   ];

//     // we have to print all the options

//     for(let i=0;i<questions[i].options.length;i++){
//         console.log(questions[i].options[1]);
//     }

//     // // we have to print all questions
//     // for(let i=0;i<questions.length;i++){
//     //     console.log(questions[i].question);
//     // }

//     // // we have to print answer
//     // for(let i=0;i<questions.length;i++){
//     //     console.log(questions[i].options[questions[i].answer]);
//     // } 