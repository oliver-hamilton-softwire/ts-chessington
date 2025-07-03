import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        // Allow lateral and diagonal moves, and no other moves
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

        // Bottom-right of diagonal
        for (let i = 1; i <= currentSquare.row && i <= 7 - currentSquare.col && board.getPiece(Square.at(currentSquare.row - i, currentSquare.col + i)) == undefined; i++) {
            moves.push(Square.at(currentSquare.row - i, currentSquare.col + i));
        }

        // Bottom-left of diagonal
        for (let i = 1; i <= currentSquare.row && i <= currentSquare.col && board.getPiece(Square.at(currentSquare.row - i, currentSquare.col - i)) == undefined; i++) {
            moves.push(Square.at(currentSquare.row - i, currentSquare.col - i));
        }

        // Top-right of diagonal
        for (let i = 1; i <= 7 - currentSquare.row && i <= 7 - currentSquare.col && board.getPiece(Square.at(currentSquare.row + i, currentSquare.col + i)) == undefined; i++) {
            moves.push(Square.at(currentSquare.row + i, currentSquare.col + i));
        }

        // Top-left of diagonal
        for (let i = 1; i <= 7 - currentSquare.row && i <= currentSquare.col && board.getPiece(Square.at(currentSquare.row + i, currentSquare.col - i)) == undefined; i++) {
            moves.push(Square.at(currentSquare.row + i, currentSquare.col - i));
        }

        return moves;
    }
}
