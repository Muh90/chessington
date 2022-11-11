import Piece from './piece';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        const availableSquares = [];
        for (let row = 0; row < GameSettings.BOARD_SIZE; row++) {
            if (row !== currentSquare.row) {
                let newSquare = Object.create(currentSquare);
                newSquare.row = row;
                availableSquares.push(newSquare);
            }
        }
        for (let col = 0; col < GameSettings.BOARD_SIZE; col++) {
            if (col !== currentSquare.col) {
                let newSquare = Object.create(currentSquare);
                newSquare.col = col;
                availableSquares.push(newSquare);
            }
        }
        return availableSquares;
    }
}
