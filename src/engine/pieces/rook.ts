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
        // Squares below
        for (let i = currentSquare.row - 1; i >= 0 && board.getPiece(Square.at(i, currentSquare.col)) == undefined; i--) {
            moves.push(Square.at(i, currentSquare.col));
        }
        // Squares to the right
        for (let j = currentSquare.col + 1; j <= 7 && board.getPiece(Square.at(currentSquare.row, j)) == undefined; j++) {
            moves.push(Square.at(currentSquare.row, j));
        }
        // Squares above
        for (let i = currentSquare.row + 1; i <= 7 && board.getPiece(Square.at(i, currentSquare.col)) == undefined; i++) {
            moves.push(Square.at(i, currentSquare.col));
        }
        // Squares to the left
        for (let j = currentSquare.col - 1; j >= 0 && board.getPiece(Square.at(currentSquare.row, j)) == undefined; j--) {
            moves.push(Square.at(currentSquare.row, j));
        }
        return moves;
    }
}
