var vita = 3 
console.log('ciao')
var words = []; // lista di parole
var container = document.getElementById("wordContainer");

fetch('https://gist.githubusercontent.com/jesseditson/1e6b2b524814320515ccfe7e2f856eda/raw/17d61fa1e80e14b13c4525b09f84148772586b59/words.json')
  .then(response => response.json())
  .then(data => words=data.words);





function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function start(){
document.getElementById('comincia').style.display="none";
let count = 0;


var x = 0
let creaparola = setInterval(function (){
    
    var word = document.createElement('div');
    word.className = 'word has-text-weight-bold';
    topvalue = getRandomNumber(3, 45)
    word.style.top = `${topvalue}vh`
    num = String(x)
    aid =  `parola${num}`
    x = x+1
    parola = words[Math.floor(Math.random() * words.length)];
    word.id = parola
    word.textContent = parola 
    container.appendChild(word);
    word.addEventListener("animationend",avvisa);
    

    function avvisa(){
        vita = vita-1
        //console.log(vita)
        word.remove()
        
    }
}, 1000);


 document.getElementById('inp').addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Perform the action here
      console.log("Enter key pressed");
      var value = event.target.value;
      var element = document.getElementById(value);
      var letters = String(value).length
      
      document.getElementById('inp').value="";
       if (element) {
          
          
          
          count += letters;
          
          document.getElementById('punteggio').textContent = count 
          element.remove();
       }

    }
  });







const timer = document.getElementById("timer");

// Set the initial time to 120 seconds (2 minutes)
let seconds = 120;
const interval = setInterval(() => {
  // Decrement the seconds
  seconds--;
  if (seconds == 0) {
      clearInterval(creaparola);
      document.getElementById('punteggiofinale').textContent=`il tuo punteggio finale è di ${count} lettere`
      document.getElementById('modal').className="modal is-active is-fullscreen";
      
      clearInterval(interval);}


  // Check if the timer has ended
  if (seconds <= 0) {
    // Stop the timer
    clearInterval(interval);

    // Update the timer element with the final time
    timer.innerHTML = "00:00";
  } else {
    // Format the time string
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;

    // Update the timer element
    timer.innerHTML = timeString;
  }
}, 1000);

}
