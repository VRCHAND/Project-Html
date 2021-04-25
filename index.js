const read = require('readline-sync');
const name = read.question('What is your name?\n');
let question_number = 0 , option_number =0 ,sum=0
console.log(`Hi ${name}, welcome to badminton quiz below has five questions on badmiton and each correct answer will give you 20 points\n`);
read.question('Please click enter button\n');
const quiz_questions = [
  {
    question : "When a badminton player wins a rally, how many points can he or she get??",
    options  : ["\"1 Point\"" , "\"2 Point\"" , "\"3 Point\"","\"4 Point\""],
    correct  : 1
  },
  {
    question : "Which country has won the largest number of gold medals in badminton the Summer Olympic Games?",
    options  : ["India" , "China" , "Indonesia" , "Korea"],
    correct  : 2
  },
  {
    question : "What can be the maximum number of games in a badminton match??",
    options  : [3,5,7,2],
    correct  : 1
  },
  {
    question : "The first serve in a badminton game is started from which side of the court??",
    options  : [ "left hand side" , "at middle","right hand side" ,"none of the above"],
    correct  : 3
  },
  {
    question : "The head of a shuttlecock is made of which material?",
    options  : ["Cork" , "Plastic" , "rubber" , "Oak"],
    correct  : 1
  }  
];
quiz_questions.forEach(each_question)
function each_question(eachquestion){
     question_number+=1
     console.log(question_number,")" , eachquestion.question);
     console.log("  Options:")
     eachquestion.options.forEach(iterate_options);
     const readLineSync = require('readline-sync');
     const name = readLineSync.question('Type the option \n');
     if (name == eachquestion.correct ){
       console.log('correct , you got 20 points')
       sum+=20
       console.log(`Total points ${sum}\n`)

     }
     else{
       console.log("incorrect")
       console.log(`Correct option is ${eachquestion.correct}\n`)
       console.log(`Total points ${sum}\n`)
     }
     
     option_number = 0;

}
function iterate_options(each_options){
option_number+=1
console.log("   ",option_number,")" ,each_options);
}
console.log(`Thanks for participating quiz. Your total score is ${sum}`)