class AudioController {
  constructor() {
    this.bgMusic = new Audio(
      "https://github.com/jasonrouss/Christmas-Kids-Game/blob/master/audio/backgroundMusic.m4a?raw=true"
    );
    this.flipSound = new Audio(
      "https://raw.githubusercontent.com/WebDevSimplified/Mix-Or-Match/master/Assets/Audio/flip.wav"
    );
    this.matchSound = new Audio(
      "https://github.com/jasonrouss/Christmas-Kids-Game/blob/master/audio/cheeringAudio.mp3?raw=true"
    );
    this.victorySound = new Audio(
      "https://raw.githubusercontent.com/WebDevSimplified/Mix-Or-Match/master/Assets/Audio/victory.wav"
    );
    this.gameOverSound = new Audio("Assets/Audio/gameOver.wav");
    this.bgMusic.volume = 0.5;
    this.bgMusic.loop = true;
  }
  startMusic() {
    this.bgMusic.play();
  }
  stopMusic() {
    this.bgMusic.pause();
    this.bgMusic.currentTime = 0;
  }
  flip() {
    this.flipSound.play();
  }
  match() {
    this.matchSound.play();
  }
  victory() {
    this.stopMusic();

    this.victorySound.play();
  }
  gameOver() {
    this.stopMusic();

    this.gameOverSound.play();
  }
}

class MixOrMatch {
  constructor(totalTime, cards) {
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById("time-remaining");
    this.ticker = document.getElementById("flips");
    this.audioController = new AudioController();
  }

  startGame() {
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.cardToCheck = null;
    this.matchedCards = [];
    this.busy = true;
    this.audioController.startMusic();
    setTimeout(() => {
      this.shuffleCards(this.cardsArray);
      this.countdown = this.startCountdown();
      this.busy = false;
    }, 500);
    this.hideCards();
    this.timer.innerText = this.timeRemaining;
    this.ticker.innerText = this.totalClicks;
  }
  startCountdown() {
    return setInterval(() => {
      this.timeRemaining--;
      this.timer.innerText = this.timeRemaining;
      if (this.timeRemaining === 0) this.gameOver();
    }, 1000);
  }
  gameOver() {
    clearInterval(this.countdown);

    document.getElementById("game-over-text").classList.add("visible");
  }
  victory() {
    clearInterval(this.countdown);
    this.audioController.victory();
    document.getElementById("victory-text").classList.add("visible");
  }
  hideCards() {
    this.cardsArray.forEach((card) => {
      card.classList.remove("visible");
      card.classList.remove("matched");
    });
  }
  flipCard(card) {
    if (this.canFlipCard(card)) {
      this.audioController.flip();
      this.totalClicks++;
      this.ticker.innerText = this.totalClicks;
      card.classList.add("visible");

      if (this.cardToCheck) {
        this.checkForCardMatch(card);
      } else {
        this.cardToCheck = card;
      }
    }
  }
  checkForCardMatch(card) {
    if (this.getCardType(card) === this.getCardType(this.cardToCheck))
      this.cardMatch(card, this.cardToCheck);
    else this.cardMismatch(card, this.cardToCheck);

    this.cardToCheck = null;
  }
  cardMatch(card1, card2) {
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);
    card1.classList.add("matched");
    card2.classList.add("matched");
    this.audioController.match();
    if (this.matchedCards.length === this.cardsArray.length) this.victory();
  }
  cardMismatch(card1, card2) {
    this.busy = true;
    setTimeout(() => {
      card1.classList.remove("visible");
      card2.classList.remove("visible");
      this.busy = false;
    }, 1000);
  }
  shuffleCards(cardsArray) {
    for (let i = cardsArray.length - 1; i > 0; i--) {
      const randIndex = Math.floor(Math.random() * (i + 1));
      [cardsArray[i], cardsArray[randIndex]] = [
        cardsArray[randIndex],
        cardsArray[i],
      ];
    }
    cardsArray = cardsArray.map((card, index) => {
      card.style.order = index;
    });
  }
  getCardType(card) {
    return card.getElementsByClassName("card-value")[0].src;
  }
  canFlipCard(card) {
    return (
      !this.busy &&
      !this.matchedCards.includes(card) &&
      card !== this.cardToCheck
    );
  }
}

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let overlays = Array.from(document.getElementsByClassName("overlay-text"));
  let cards = Array.from(document.getElementsByClassName("card"));
  let game = new MixOrMatch(100, cards);

  overlays.forEach((overlay) => {
    overlay.addEventListener("click", () => {
      overlay.classList.remove("visible");
      game.startGame();
    });
  });

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      game.flipCard(card);
    });
  });
}
function playAudioMai() {
  var main = document.getElementById("main");
  main.play();
}
function playAudioMai1() {
  var main1 = document.getElementById("main1");
  main1.play();
}

function playAudioVen() {
  var ventre = document.getElementById("ventre");
  ventre.play();
}
function playAudioVen1() {
  var ventre1 = document.getElementById("ventre1");
  ventre1.play();
}

function playAudioTet() {
  var tete = document.getElementById("tete");
  tete.play();
}
function playAudioTet1() {
  var tete1 = document.getElementById("tete1");
  tete1.play();
}

function playAudioPie() {
  var pieds = document.getElementById("pieds");
  pieds.play();
}
function playAudioPie1() {
  var pieds1 = document.getElementById("pieds1");
  pieds1.play();
}

function playAudioOrt() {
  var orteilles = document.getElementById("orteilles");
  orteilles.play();
}

function playAudioOrt1() {
  var orteilles1 = document.getElementById("orteilles1");
  orteilles1.play();
}

function playAudioOng() {
  var ongles = document.getElementById("ongles");
  ongles.play();
}
function playAudioOng1() {
  var ongles1 = document.getElementById("ongles1");
  ongles1.play();
}

function playAudioBra() {
  var bras = document.getElementById("bras");
  bras.play();
}
function playAudioBra1() {
  var bras1 = document.getElementById("bras1");
  bras1.play();
}
function playAudioDoi() {
  var doigts = document.getElementById("doigts");
  doigts.play();
}
function playAudioDoi1() {
  var doigts1 = document.getElementById("doigts1");
  doigts1.play();
}

function playAudioDos() {
  var dos = document.getElementById("dos");
  dos.play();
}
function playAudioDos1() {
  var dos1 = document.getElementById("dos1");
  dos1.play();
}
function playAudioJam() {
  var jambe = document.getElementById("jambe");
  jambe.play();
}
function playAudioJam1() {
  var jambe1 = document.getElementById("jambe1");
  jambe1.play();
}
function playAudioGen() {
  var genoux = document.getElementById("genoux");
  genoux.play();
}
function playAudioGen1() {
  var genoux1 = document.getElementById("genoux1");
  genoux1.play();
}
function playAudioCoud() {
  var coude = document.getElementById("coude");
  coude.play();
}
function playAudioCoud1() {
  var coude1 = document.getElementById("coude1");
  coude1.play();
}
