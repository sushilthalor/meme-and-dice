document.addEventListener('DOMContentLoaded', () => {
    const rollButton = document.getElementById('roll-button');
    const dice1Image = document.getElementById('dice1-image');
    const dice2Image = document.getElementById('dice2-image');
    const resultParagraph = document.getElementById('result');

    // Array of dice face images
    const diceFaces = [
        'dice1.jpg',
        'dice2.jpg',
        'dice3.jpg',
        'dice4.jpg',
        'dice5.jpg',
        'dice6.jpg'
    ];

    rollButton.addEventListener('click', () => {
        // Generate random numbers for dice rolls
        const rollDice = () => Math.floor(Math.random() * diceFaces.length);

        // Get random dice rolls
        const dice1Roll = rollDice();
        const dice2Roll = rollDice();

        // Update dice images
        dice1Image.src = diceFaces[dice1Roll];
        dice2Image.src = diceFaces[dice2Roll];

        // Determine the winner
        if (dice1Roll > dice2Roll) {
            resultParagraph.textContent = `Dice 1 wins with a ${dice1Roll + 1} against Dice 2's ${dice2Roll + 1}!`;
        } else if (dice1Roll < dice2Roll) {
            resultParagraph.textContent = `Dice 2 wins with a ${dice2Roll + 1} against Dice 1's ${dice1Roll + 1}!`;
        } else {
            resultParagraph.textContent = `It's a tie with both dice showing ${dice1Roll + 1}!`;
        }
    });
});
