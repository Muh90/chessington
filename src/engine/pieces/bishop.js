import Piece from './piece';
import GameSettings from "../gameSettings";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        const availableSquares = [];
        for (let row = 0; row < GameSettings.BOARD_SIZE; row++) {
            if (row !== currentSquare.row) {
                let newSquare = Object.create(currentSquare);
                newSquare.col = currentSquare.col - currentSquare.row + row;
                if (newSquare.col >= 0 && newSquare.col < 8) {
                    newSquare.row = row;
                    availableSquares.push(newSquare);
                }
                newSquare = Object.create(currentSquare);
                newSquare.col = currentSquare.col + currentSquare.row - row;
                if (newSquare.col >= 0 && newSquare.col < 8) {
                    newSquare.row = row;
                    availableSquares.push(newSquare);
                }
            }
        }
        return availableSquares;
    }
}
