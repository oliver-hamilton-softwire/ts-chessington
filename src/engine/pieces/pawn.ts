import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';
import King from './king';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        const moves = [];
        const direction = this.player === Player.WHITE ? 1 : -1;
        const sqAhead = Square.at(currentSquare.row + direction, currentSquare.col);
        // Square ahead must be free (to move either 1 or 2 spaces), and within the bounds of the board
        if (sqAhead.withinBoard() && board.getPiece(sqAhead) == undefined) {
            moves.push(sqAhead);
            const startingRow = this.player === Player.WHITE ? 1 : 6;
            // If the pawn hasn't yet moved, then it can move two spaces (if the square two spaces ahead is free and within the bounds)
            const sqAhead2 = Square.at(currentSquare.row + 2 * direction, currentSquare.col);
            if (sqAhead2.withinBoard() && currentSquare.row == startingRow && board.getPiece(sqAhead2) == undefined) {
                moves.push(sqAhead2);
            }
        }
        // Can move diagonally if there is a piece to take
        const diagonalMoves = [
            Square.at(currentSquare.row + direction, currentSquare.col + direction),
            Square.at(currentSquare.row + direction, currentSquare.col - direction)
        ];

        for (let sq of diagonalMoves) {
            if (sq.withinBoard() && board.getPiece(sq) != undefined && board.getPiece(sq)?.player != board.currentPlayer) {
                moves.push(sq);
            }
        }
        // Can't take the opposing king
        return moves.filter(square => !(board.getPiece(square) instanceof King));
    }
}
