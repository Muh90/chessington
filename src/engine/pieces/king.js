import Piece from './piece';
import GameSettings from "../gameSettings";

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        const availableSquares = [];
        const distances = [-1, 0, 1];
        for (let i = 0; i < distances.length; i++) {
            for (let j = 0; j < distances.length; j++) {
                if (i !== 1 || j !== 1) {
                    let newSquare = Object.create(currentSquare);
                    newSquare.row = currentSquare.row + distances[i];
                    newSquare.col = currentSquare.col + distances[j];
                    if (newSquare.row >= 0 && newSquare.row < 8 && newSquare.col >= 0 && newSquare.col < 8) {
                        availableSquares.push(newSquare);
                    }
                }
            }
        }
        return availableSquares;
    }
}
