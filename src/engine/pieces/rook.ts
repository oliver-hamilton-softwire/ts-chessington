import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        // Allow lateral moves, and no other moves
        const moves = [];
        
        // Generate only direction vectors corresponding to lateral moves
        // Namely, [1, 0], [-1, 0], [0, -1] and [0, 1]
        for (let i of [1, -1]) {
            moves.push(...board.getMovesInDirection(currentSquare, [i, 0]));
            moves.push(...board.getMovesInDirection(currentSquare, [0, i]));
        }

        // Can't take the opposing king
        return moves.filter(square => !(board.getPiece(square) instanceof King));
    }
}
