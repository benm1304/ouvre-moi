
function startFromGame() {
  const music = document.getElementById("music");
  music.volume = 0.28;
  music.play().catch(() => {});
  makePetals(40);
  goToPage(1);
}

const petals = ["🌸", "🌷", "✿", "❀", "💮"];
let typed = false;

const letter = [
  "Alors voilà.",
  "",
  "Depuis le début de cette page, j’essaie de faire comme si ce n’était pas évident.",
  "",
  "J’ai posé des questions.",
  "J’ai parlé de fleurs.",
  "J’ai tourné autour du sujet.",
  "J’ai même créé un site entier alors qu’un simple message aurait probablement fait l’affaire.",
  "",
  "Franchement, quand j’y pense, c’est un peu ridicule.",
  "",
  "Mais bon.",
  "",
  "On est déjà arrivés jusqu’ici, alors autant continuer.",
  "",
  "La vérité, c’est que tu me plais.",
  "",
  "Et ce qui est drôle, c’est que je ne saurais même pas te dire exactement quand c’est arrivé.",
  "",
  "Je n’ai pas eu un moment de cinéma avec de la musique dramatique en arrière-plan.",
  "Je n’ai pas vu une lumière tomber du ciel.",
  "Je n’ai pas entendu une voix me dire :",
  "",
  "“Ben, c’est elle.”",
  "",
  "Non.",
  "",
  "C’est arrivé doucement.",
  "",
  "Comme beaucoup de choses importantes finalement.",
  "",
  "Au début, tu étais simplement toi.",
  "",
  "Puis tu es devenue la personne que je remarquais un peu plus que les autres.",
  "",
  "Puis la personne avec qui j’aimais discuter.",
  "",
  "Puis la personne que j’étais content de voir apparaître.",
  "",
  "Et un jour, sans vraiment m’en rendre compte, je me suis retrouvé à penser à toi plus souvent que prévu.",
  "",
  "Et crois-moi, j’ai essayé d’agir normalement.",
  "",
  "J’ai vraiment essayé.",
  "",
  "Mais mon cerveau est devenu un peu bizarre.",
  "",
  "Parfois je prépare une conversation avec toi dans ma tête.",
  "",
  "Puis quand je te vois, j’oublie la moitié de ce que j’avais prévu de dire.",
  "",
  "Parfois je me dis :",
  "",
  "“Bon, aujourd’hui tu te comportes normalement.”",
  "",
  "Et cinq minutes plus tard je suis là à analyser une interaction de quinze secondes comme si j’étais détective dans une série policière.",
  "",
  "C’est grave docteur.",
  "",
  "Mais malgré tout ça, il y a une chose que je n’ai jamais voulu faire.",
  "",
  "Te mettre mal à l’aise.",
  "",
  "Parce que ce n’est pas le but.",
  "",
  "Le but, c’était juste d’être sincère une fois, sans faire trop, sans jouer un rôle, sans transformer ça en épisode dramatique de Netflix.",
  "",
  "Alors aujourd’hui, je le dis simplement.",
  "",
  "Tu me plais.",
  "",
  "Beaucoup même.",
  "",
  "J’aime ton sourire.",
  "J’aime ta personnalité.",
  "J’aime ta façon d’être toi, tout simplement.",
  "",
  "Et même si je n’ai jamais vraiment trouvé le courage de faire le premier pas, je me suis dit que je pouvais au moins trouver le courage de te dire la vérité.",
  "",
  "Alors voilà.",
  "",
  "Maintenant tu sais.",
  "",
  "Et honnêtement ?",
  "",
  "C’est déjà un énorme progrès pour quelqu’un qui a préféré créer tout un site internet plutôt que d’envoyer un simple message.",
  "",
  "🌸"
];

function startSite() {
  const music = document.getElementById("music");
  music.volume = 0.28;
  music.play().catch(() => {});
  makePetals(35);
  goToPage(2);
}

function goToPage(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + n).classList.add("active");
  makePetals(12);
}

function openLetter() {
  goToPage(8);
  typeLetter();
}

function typeLetter() {
  if (typed) return;
  typed = true;

  const box = document.getElementById("letterText");
  const btn = document.getElementById("nextBtn");
  const fullText = letter.join("\n");
  let i = 0;

  const timer = setInterval(() => {
    box.textContent += fullText[i] || "";
    i++;

    if (i >= fullText.length) {
      clearInterval(timer);
      btn.classList.remove("hidden");
    }
  }, 26);
}

function toggleMusic() {
  const music = document.getElementById("music");
  const btn = document.getElementById("musicBtn");

  if (music.paused) {
    music.play().catch(() => {});
    btn.textContent = "Pause";
  } else {
    music.pause();
    btn.textContent = "Musique";
  }
}

function makePetals(count = 12) {
  const container = document.getElementById("petalContainer");

  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "petal";
    p.textContent = petals[Math.floor(Math.random() * petals.length)];
    p.style.left = Math.random() * 100 + "vw";
    p.style.fontSize = (18 + Math.random() * 20) + "px";
    p.style.opacity = (0.5 + Math.random() * 0.35).toString();
    p.style.animationDuration = (7 + Math.random() * 6) + "s";
    p.style.animationDelay = Math.random() * 2 + "s";

    container.appendChild(p);

    setTimeout(() => p.remove(), 14000);
  }
}

setInterval(() => makePetals(3), 1100);
makePetals(24);
