export default function GameOver({ winner, onRestart }) {
    return (
        <div id="game-over">
            <h2>"Game Over!"</h2>
            {winner && <p>{winner} gana!</p>}
            {!winner && <p>Empate!</p>}
            <p>
                <button onClick={onRestart}>
                    Jugar Otra Vez
                </button>
            </p>
        </div>
    );
}