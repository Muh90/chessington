import Piece from './piece';
import GameSettings from "../gameSettings";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        const availableSquares = [];
        const distances = [-2, -1, 1, 2];
        for (let i = 0; i < distances.length; i++) {
            let newSquare = Object.create(currentSquare);
            newSquare.row = currentSquare.row + distances[i]
            newSquare.col = currentSquare.col + (Math.abs(distances[i]) % 2 + 1);
            if (newSquare.row >= 0 && newSquare.row < 8 && newSquare.col >= 0 && newSquare.col < 8) {
                availableSquares.push(newSquare);
            }
            newSquare = Object.create(currentSquare);
            newSquare.row = currentSquare.row + distances[i]
            newSquare.col = currentSquare.col - (Math.abs(distances[i]) % 2 + 1);
            if (newSquare.row >= 0 && newSquare.row < 8 && newSquare.col >= 0 && newSquare.col < 8) {
                availableSquares.push(newSquare);
            }
        }
        return availableSquares;
    }
}
