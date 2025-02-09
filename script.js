document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const cover = document.querySelector('.cover');
    const letter = document.querySelector('.letter');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Play background music after user interaction
    envelope.addEventListener('click', () => {
        backgroundMusic.play();
        cover.style.transform = 'translateY(-100%)';
        letter.style.transform = 'translateY(0)';
        letter.classList.add('open');
    });

    // Handle Yes button click
    yesBtn.addEventListener('click', () => {
        letter.classList.remove('open');
        letter.classList.add('show-page2');
    });

    // Handle No button hover
    noBtn.addEventListener('mouseover', () => {
        noBtn.style.animation = 'bounce 2s infinite';
    });

    // Handle No button click
    noBtn.addEventListener('click', () => {
        const newYesBtn = yesBtn.cloneNode(true);
        const randomOffset = () => Math.floor(Math.random() * 50) - 25; // Random offset between -25 and 25
        newYesBtn.style.position = 'absolute';
        newYesBtn.style.left = `${yesBtn.offsetLeft + randomOffset()}px`;
        newYesBtn.style.top = `${yesBtn.offsetTop + randomOffset()}px`;
        newYesBtn.addEventListener('click', () => {
            letter.classList.remove('open');
            letter.classList.add('show-page2');
        });
        document.querySelector('.buttons').appendChild(newYesBtn);
    });
});