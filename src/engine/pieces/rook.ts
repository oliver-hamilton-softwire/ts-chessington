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
        // Squares below

        for (let i = currentSquare.row - 1; i >= 0 && board.getPiece(Square.at(i, currentSquare.col))?.player != board.currentPlayer; i--) {
            moves.push(Square.at(i, currentSquare.col));

            // If this piece is an opposing piece, then there are no more pieces to be considered in this direction
            if (board.getPiece(Square.at(i, currentSquare.col)) != undefined) {
                break;
            }
        }
        // Squares to the right
        for (let j = currentSquare.col + 1; j <= 7 && board.getPiece(Square.at(currentSquare.row, j))?.player != board.currentPlayer; j++) {
            moves.push(Square.at(currentSquare.row, j));

            // If this piece is an opposing piece, then there are no more pieces to be considered in this direction
            if (board.getPiece(Square.at(currentSquare.row, j)) != undefined) {
                break;
            }
        }
        // Squares above
        for (let i = currentSquare.row + 1; i <= 7 && board.getPiece(Square.at(i, currentSquare.col))?.player != board.currentPlayer; i++) {
            moves.push(Square.at(i, currentSquare.col));

            // If this piece is an opposing piece, then there are no more pieces to be considered in this direction
            if (board.getPiece(Square.at(i, currentSquare.col)) != undefined) {
                break;
            }
        }
        // Squares to the left
        for (let j = currentSquare.col - 1; j >= 0 && board.getPiece(Square.at(currentSquare.row, j))?.player != board.currentPlayer; j--) {
            moves.push(Square.at(currentSquare.row, j));

            // If this piece is an opposing piece, then there are no more pieces to be considered in this direction
            if (board.getPiece(Square.at(currentSquare.row, j)) != undefined) {
                break;
            }
        }
        // Can't take the opposing king
        return moves.filter(square => !(board.getPiece(square) instanceof King));
    }
}
