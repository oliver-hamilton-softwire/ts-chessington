import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        // Allow lateral moves, and no other moves
        const moves = [];
        for (let i = 0; i <= 7; i++) {
            if (!currentSquare.equals(Square.at(currentSquare.row, i))) {
                moves.push(Square.at(currentSquare.row, i));
            }
            if (!currentSquare.equals(Square.at(i, currentSquare.col))) {
                moves.push(Square.at(i, currentSquare.col));
            }
        }
        return moves;
    }
}
