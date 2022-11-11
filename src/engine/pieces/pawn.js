import Piece from './piece';
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        let direction = 1;
        if (this.player === Player.BLACK) {
            direction = -1;
        }
        currentSquare.row += direction;
        return [currentSquare];
    }
}
