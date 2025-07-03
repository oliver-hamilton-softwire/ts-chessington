import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        // Allow lateral and diagonal moves, and no other moves
        const moves = [];

        // Generate all possible directions (diagonal + lateral)
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                moves.push(...board.getMovesInDirection(currentSquare, [i, j]));
            }
        }

        // Can't take the opposing king
        return moves.filter(square => !(board.getPiece(square) instanceof King));
    }
}
