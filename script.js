// FLOATING HEARTS
const heartsContainer = document.getElementById("hearts");

for(let i = 0; i < 20; i++) {
    let heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (6 + Math.random() * 8) + "s";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heartsContainer.appendChild(heart);
}

// MESSAGE
const text = `Happy 19th Birthday, Keyuri 🎂💖

It honestly feels so unreal how everything started on 24th August 2022…
and now it’s been 2 whole years since I last saw you.

But even after all this time and distance,
nothing has changed — you still mean the same
(if not more) to me 🫶✨

You’ve always been one of the most genuine,
comforting, and irreplaceable people in my life.

Every memory with you,
every late conversation,
every little moment…
I still carry all of it in my heart 💌

On your 19th birthday,
I just want you to know how truly special you are.

You deserve all the happiness,
success, love, and beautiful things
this world has to offer 🌙💫

No matter how far we are,
you’ll always be my person ❤️

I miss you more than I can ever explain…
and I’m just waiting for the day
we finally meet again 🥺✨

Happy Birthday once again, Keyuri —
my forever bestie 💕🎉`;

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("message").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    } else {
        setTimeout(startSlideshow, 2500);
    }
}

function start() {
    document.getElementById("envelope").style.display = "none";
    document.getElementById("message").style.display = "block";

    const music = document.getElementById("music");
    music.volume = 0.7;
    music.play();

    typeWriter();
}

// SLIDESHOW
const images = [
"pic1.jpg.jpeg",
"pic2.jpg.jpeg",
"pic3.jpg.jpeg",
"pic4.jpg.jpeg",
"pic5.jpg.jpeg",
"pic6.jpg.jpeg",
"pic7.jpg.jpeg",
"pic8.jpg.jpeg",
"pic9.jpg.jpeg"
];

let index = 0;
let slideshowInterval;

function startSlideshow() {
    document.getElementById("message").style.display = "none";

    const slideshow = document.getElementById("slideshow");
    slideshow.style.display = "flex";

    slideshowInterval = setInterval(() => {
        index = (index + 1) % images.length;

        const slide = document.getElementById("slide");
        slide.style.opacity = "0";

        setTimeout(() => {
            slide.src = images[index];
            slide.style.opacity = "1";
        }, 400);

    }, 3000);

    setTimeout(showFinalPage, 27000);
}

// FINAL PAGE
function showFinalPage() {

    clearInterval(slideshowInterval);

    document.getElementById("slideshow").style.display = "none";

    document.getElementById("finalPage").style.display = "flex";

    document.body.style.background =
    "url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1920')";

    document.body.style.backgroundSize = "cover";
}

// HEART MESSAGE
function readHeart() {

    const heartMessage =
    "Keyuri, every beat of my heart says your name. Distance means nothing when my heart beats for you. You're not just my bestie — you're my everything. 💕";

    document.getElementById("heartMessage").innerHTML = heartMessage;

    document.getElementById("heartMessage").style.opacity = "1";
}