const text = "Important insights from students about balancing work and studies...";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('realTimeText').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Adjust the speed of the typing effect
    }
}

window.onload = typeWriter;
