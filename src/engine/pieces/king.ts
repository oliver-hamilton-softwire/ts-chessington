import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        const moves = [];
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const newSquare = Square.at(currentSquare.row + i, currentSquare.col + j);
                if ((i != 0 || j != 0) && newSquare.withinBoard()) {
                    moves.push(newSquare);
                }
            }
        }
        return moves;
    }
}
