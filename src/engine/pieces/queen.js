import Piece from './piece';
import GameSettings from "../gameSettings";

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        // Code obtained from rook.js and bishop.js
        // Can be made neater
        let currentSquare = board.findPiece(this);
        const availableSquares = [];
        for (let row = 0; row < GameSettings.BOARD_SIZE; row++) {
            if (row !== currentSquare.row) {
                let newSquare = Object.create(currentSquare);
                newSquare.row = row;
                availableSquares.push(newSquare);

                newSquare = Object.create(currentSquare);
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
        for (let col = 0; col < GameSettings.BOARD_SIZE; col++) {
            if (col !== currentSquare.col) {
                let newSquare = Object.create(currentSquare);
                newSquare.col = col;
                availableSquares.push(newSquare);
            }
        }

        for (let row = 0; row < GameSettings.BOARD_SIZE; row++) {
            if (row !== currentSquare.row) {

            }
        }
        return availableSquares;
    }
}
