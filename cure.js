function alertt() {
  alert("Please put on your earphones/headphones for better experience. Make sure your surrounding is quiet and calm.");
}

const dmusic = new Audio('bensound-memories.mp3');
const bimusic = new Audio('bensound-relaxing.mp3');
const smusic = new Audio('bensound-pianomoment.mp3');

const editable = document.querySelector('.changing-text');

const dwords = [
  'I’m here for you.',
  'You’re not alone in this.',
  'You matter. You are important to me.',
  'Let me help you.',
  'There is always hope.',
  'We are not on this earth to see through one another,',
  'but to see one another through.',
  'You can survive this.',
  'You are still you, with hopes and',
  'dreams you can attain.',
  'I can’t really understand what you are feeling,',
  'but I’ll do my best to understand.',
  'You won’t drive me away.',
  'We’ll get through this together.'
];
const biwords = [
  "I am here. We will make it through this together.",
  'You and your life are important to everyone.',
  'You are not alone.',
  'Whenever you feel like giving up, tell yourself to hold on',
  'for another minute, hour, day whatever you feel you can do.',
  "Your illness doesn't define who you are.",
  "You're still you, with hopes and'",
  "dreams you can attain.",
  "You’re not alone in this. I’m here for you.",
  "I understand that it’s your illness that",
  "causes these thoughts and feelings.",
  "<p>You may not believe it now,",
  "but the way you’re feeling can and will change.",
  "I may not be able to understand exactly how you feel",
  "but I care about you and want to help and support you."

];
const swords = [
  "I want you to know that, no matter where you are in life",
  "No matter how low you have sunk",
  "No matter how bleak your situation",
  "This is NOT THE END.",
  "This is not the final chapter of your life.",
  "I know it may be hard right now",
  "But if you just hang in there",
  "Stay with me for a little while",
  "You will find, that this tough moment will pass",
  "if you are committed to USING this pain",
  "using it to build your character,",
  "finding a greater MEANING for the pain,",
  "you will find that, in time,",
  "you can turn your life around,",
  "and help others going through the same strugge."
];
var words=[];

function update() {
  var select = document.getElementById('purpose');
  var option = select.options[select.selectedIndex];
  document.getElementById("purpose").style.display ="none";
  document.getElementById("title").style.display ="none";
  document.getElementById("stars").style.animationPlayState = "running";
  document.getElementById("stars2").style.animationPlayState = "running";
  document.getElementById("stars3").style.animationPlayState = "running";
  document.getElementById("codes").style.display ="block";
  if (option.value == '1'){
    words=dwords;
    writeWords();
    dmusic.play()
  }
  else if (option.value == '2') {
    words=biwords;
    writeWords();
    bimusic.play();
  }
  else{
    words=swords;
    writeWords();
    smusic.play();
  }
}


const animationTimeInms = 60;
const delayInms = 5000;

function close(index) {
  editable.textContent = words[index % words.length];
  const interval = setInterval(function() {
    const text = editable.textContent;
    if (!text) {
      clearInterval(interval);
      setTimeout(function() {
        if(index==(words.length-1)){
          alert("Do you feel good now ? Remember I am here for you.")
          location.reload();
        }
        open(++index);
      }, 100);
    }
    editable.textContent = text.slice(0, -1);
  }, animationTimeInms);
}

function open(index) {
  const initialText = words[index % words.length];
  let i = 1;
  editable.textContent = '';
  const interval = setInterval(function() {
    const text = editable.textContent;
    console.log(text.length === initialText.length);
    if (text.length === initialText.length) {
      clearInterval(interval);
      setTimeout(function() {
        close(index);
      }, delayInms);
    }
    editable.textContent = initialText.slice(0, i++);
  }, animationTimeInms);
}

function writeWords() {
  const i = 0;
  open(i);
}

