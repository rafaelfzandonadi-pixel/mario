const player = document.querySelector('.player');
const obstacle = document.querySelector('.obstacle');

const jump = () => {

    player.classList.add('jump');

    setTimeout(() => {
        player.classList.remove('jump');
    }, 500);

};

document.addEventListener('keydown', jump);

const loop = setInterval(() => {

    const obstaclePosition = obstacle.offsetLeft;
    const playerPosition = +window
        .getComputedStyle(player)
        .bottom
        .replace('px', '');

    // Verifica se houve colisão
    if (
        obstaclePosition <= 150 &&
        obstaclePosition > 0 &&
        playerPosition < 80
    ) {

        obstacle.style.animation = 'none';
        obstacle.style.left = `${obstaclePosition}px`;

        player.style.animation = 'none';
        player.style.bottom = `${playerPosition}px`;

        player.src = '';

        clearInterval(loop);

        alert('Game Over!');

    }

}, 10);
