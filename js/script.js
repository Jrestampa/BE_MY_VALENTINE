// Create hearts effect
function createHearts() {
    const hearts = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHearts, 300);

// Move "No" button function with viewport constraints
function moveButton(button) {
    const padding = 20;
    const maxWidth = window.innerWidth - button.offsetWidth - padding;
    const maxHeight = window.innerHeight - button.offsetHeight - padding;

    const x = Math.max(padding, Math.random() * maxWidth);
    const y = Math.max(padding, Math.random() * maxHeight);

    button.style.position = 'fixed';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.style.zIndex = '999';
}

// Navigation functions
function goToStep2() {
    console.log("Navigating to Step 2");
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    if (step1 && step2) {
        step1.classList.remove('active');
        step2.classList.add('active');
        triggerConfetti();
    }
}

function goToStep3() {
    console.log("Navigating to Step 3");
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    if (step2 && step3) {
        step2.classList.remove('active');
        step3.classList.add('active');
        triggerConfetti();
    }
}

function finalStep() {
    console.log("Entering Final Step");
    const step3 = document.getElementById('step3');
    const finalMsg = document.getElementById('finalMessage');
    const fbBtn = document.getElementById('facebookBtn');

    if (step3) step3.classList.remove('active');
    if (finalMsg) finalMsg.style.display = 'block';
    if (fbBtn) fbBtn.style.display = 'inline-block';

    // Celebration confetti storm
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff4d6d', '#ff85a1', '#ffecf2']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff4d6d', '#ff85a1', '#ffecf2']
            });
        }

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function triggerConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else {
        console.warn("Confetti library not loaded yet.");
    }
}