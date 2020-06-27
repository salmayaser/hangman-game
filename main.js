const letters ="abcdefghijklmnopqrstuvwxyz123456789";


//letters array ES6
let lettersArray = Array.from(letters);


//select letters container
let lettersContainer = document.querySelector(".letters")
//generate letters
lettersArray.forEach(letter => 
{
    //geerate span for each letter 
    let span = document.createElement("span");
    
    //create text node 
    let theLetter = document.createTextNode(letter)
    
    //append the letter to span 
    span.appendChild(theLetter)
    
    //add clase to span 
    span.className='letterBox';
    
    //add span to the conatiner 
    lettersContainer.appendChild(span);
    
});
//-----------------------------------------------------------------------------------------------------------
const words = 
{
   programming: ["php", "hyper text language", "object oriented programming ", "mysql", "databse" , "software engineering " , "scale" , "style sheet" , "function"],
    moviesOrSeriese:["up" , "incepion" , "lucifer" ,"prison Break" ,"breaking bad" ,"17 again"],
   people:["ahmed helmy" , "mona zaki"  ,"om colthom"],
    countries:["egypt", "algeria" ,"england" ,"united states of america" ,"syria"]
    
}
//get random property

let allkeys= Object.keys(words); //array that has all the keys 

let RandomPropertyNumber = Math.floor(Math.random()*allkeys.length); //random property index

let RandomPropertyName = allkeys[RandomPropertyNumber]; //random property

let RandomPropertyValues= words[RandomPropertyName]; //random value 

let RandomValueNumber =[Math.floor(Math.random()*RandomPropertyValues.length)]; //random value index

let RandomValueName = RandomPropertyValues[RandomValueNumber];
console.log(RandomValueNumber)

//set category info with the category name which is the property name 
document.querySelector(".game-info .category span").innerHTML=RandomPropertyName

//---------------------------------------------------------------------------------

//letter guess section 

//select the letter guess div 
let letterGuess = document.querySelector(".letters-guess")

//transfer the random value from a string to an array to compare 

let lettersAndSpace = Array.from(RandomValueName);


//create spans for each letter 
lettersAndSpace.forEach(letter =>{
//create empty span 
let span = document.createElement("span");
//if the letter is space add a class to the span so you can style it with css 
if(letter===" ")
    {
        span.className="space";
    };
//appending the span into the letter guess span
letterGuess.appendChild(span);

});


//---------------------------------------------------------------------------------

//select all the spans into the guess
let guessSpans = document.querySelectorAll(".letters-guess span")
console.log(guessSpans)

//set worng attemps
let wrongAtteps =0;
//select the draw 
let hangmanDraw = document.querySelector(".hangman-draw")



//handeling clicking on letters 
document.addEventListener("click" , (e)=>{
    //when it click make the status false 
    let status =false;
    let allSpanIndexes=0;
    let allLetterIndexes=0
    
    //if i clicked on a =n element that has a class called letterBox add an class called clicked so i can style it
    if (e.target.className==="letterBox")
        {
            e.target.classList.add("clicked");
    
    //select the the letter that i clicked on 
    let clickedLetter = e.target.innerHTML;
    //i have a variable called letters and spaces that has an array that have the solution word
    //looping on the array and if one of the clicked letters = on of the target display it on the guess 
    lettersAndSpace.forEach((wordLetter , WordIndex)=>{
        if(clickedLetter==wordLetter)
            {
                //let the status true noww   
                status=true;
                guessSpans.forEach((spanLetter , spanIndex)=>{
                    //display the letter in the span that has the same index of the word
                    if (WordIndex==spanIndex)
                        {
                            spanLetter.innerHTML=clickedLetter;
                            allLetterIndexes++;
                            allSpanIndexes++;
                            
                        }
                    
                })
            }
        
       
    })
    //if the clicked letter is wrong 
        if (status !== true)
            {
                //increase the wrong attemps
                 wrongAtteps++
                 //add class wrong on the draw 
                 hangmanDraw.classList.add("wrong-"+wrongAtteps);
                //play fail sound 
                document.getElementById("wrong").play();
               
                
            }
            else
                {
                     document.getElementById("right").play();
                    
                }
            
              if(wrongAtteps===8)
                {
                    endGame();
                    lettersContainer.classList.add("finished")
                      document.getElementById("fail").play();
                    
                }
            //if(allSpanIndexes==allLetterIndexes)
              
        }
    
})

 
       
//end game function 
function endGame(){
    //create popup
    let div =document.createElement("div");
    //create text inside the popup 
    let divText = document.createTextNode("Game Over The word is "+RandomValueName);
    div.appendChild(divText);
    //give it a class
    div.className="popup";
    //append to body 
    document.body.appendChild(div);

}




var x = null
var z = "sp"
if (x==true)
    {
        z+=1;
    }
console.log(z)

