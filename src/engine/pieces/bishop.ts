import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        // Allow diagonal moves, and no other moves
        const moves = [];

        // Bottom-right of diagonal
        moves.push(...board.getMovesInDirection(currentSquare, [-1, 1]));
        // Bottom-left of diagonal
        moves.push(...board.getMovesInDirection(currentSquare, [-1, -1]));
        // Top-right of diagonal
        moves.push(...board.getMovesInDirection(currentSquare, [1, 1]));
        // Top-left of diagonal
        moves.push(...board.getMovesInDirection(currentSquare, [1, -1]));

        return moves.filter(square => !(board.getPiece(square) instanceof King));
    }
}
