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

        // Bottom-right of diagonal
        moves.push(...board.getMovesInDirection(currentSquare, [-1, 1]));
        // Bottom-left of diagonal
        moves.push(...board.getMovesInDirection(currentSquare, [-1, -1]));
        // Top-right of diagonal
        moves.push(...board.getMovesInDirection(currentSquare, [1, 1]));
        // Top-left of diagonal
        moves.push(...board.getMovesInDirection(currentSquare, [1, -1]));
        //  // Squares below
        moves.push(...board.getMovesInDirection(currentSquare, [-1, 0]));
        // // Squares to the right
        moves.push(...board.getMovesInDirection(currentSquare, [0, 1]));
        // // Squares above
        moves.push(...board.getMovesInDirection(currentSquare, [1, 0]));
        // // Squares to the left
        moves.push(...board.getMovesInDirection(currentSquare, [0, -1]));
        // Can't take the opposing king
        return moves.filter(square => !(board.getPiece(square) instanceof King));
    }
}
