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
                // Can't take friendly pieces
                let sq = Square.at(currentSquare.row + i, currentSquare.col + j);
                if (sq.withinBoard() && board.getPiece(sq)?.player != board.currentPlayer) {
                    moves.push(Square.at(currentSquare.row + i, currentSquare.col + j));
                }
                sq = Square.at(currentSquare.row + j, currentSquare.col + i);
                if (sq.withinBoard() && board.getPiece(sq)?.player != board.currentPlayer) {
                    moves.push(Square.at(currentSquare.row + j, currentSquare.col + i));
                }
            }
        }
        // Only return moves that are within the board (and not the opponent's king)
        return moves.filter(move => move.withinBoard() && !(board.getPiece(move) instanceof King));
    }
}
