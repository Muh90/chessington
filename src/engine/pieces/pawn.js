import Piece from './piece';
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let direction = 1;
        let startingRow = 1;
        if (this.player === Player.BLACK) {
            direction = -1;
            startingRow = 6;
        }
        const availableSquares = []
        let newSquare;
        if (currentSquare.row === startingRow) {
            newSquare = currentSquare;
            newSquare.row += 2 * direction;
            availableSquares.push(newSquare);
            currentSquare = board.findPiece(this);
        }
        newSquare = currentSquare;
        newSquare.row += direction;
        availableSquares.push(newSquare);
        return availableSquares;
    }
}
