import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        // Allow a combination of moving one space in one direction and two spaces in the perpendicular direction
        const moves = []
        for (let i of [1, -1]) {
            for (let j of [2, -2]) {
                // Consider both possible orderings of coordinates, reflecting the symmetry of possible moves for a knight
                let possibleSquares = [
                    Square.at(currentSquare.row + i, currentSquare.col + j),
                    Square.at(currentSquare.row + j, currentSquare.col + i)
                ];
                for (let sq of possibleSquares) {
                    // Can't take friendly pieces
                    if (sq.withinBoard() && board.getPiece(sq)?.player != board.currentPlayer) {
                        moves.push(sq);
                    }
                }
            }
        }
        // Only return moves that don't take the opponent's king
        return moves.filter(move => !(board.getPiece(move) instanceof King));
    }
}
