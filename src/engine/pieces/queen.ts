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
        for (let i = 0; i <= 7; i++) {
            if (!currentSquare.equals(Square.at(currentSquare.row, i))) {
                moves.push(Square.at(currentSquare.row, i));
            }
            if (!currentSquare.equals(Square.at(i, currentSquare.col))) {
                moves.push(Square.at(i, currentSquare.col));
            }
           
        }

        // Bottom-right of diagonal
        for (let i = 1; i <= currentSquare.row && i <= 7 - currentSquare.col; i++) {
            moves.push(Square.at(currentSquare.row - i, currentSquare.col + i));
        }

        // Bottom-left of diagonal
        for (let i = 1; i <= currentSquare.row && i <= currentSquare.col; i++) {
            moves.push(Square.at(currentSquare.row - i, currentSquare.col - i));
        }

        // Top-right of diagonal
        for (let i = 1; i <= 7 - currentSquare.row && i <= 7 - currentSquare.col; i++) {
            moves.push(Square.at(currentSquare.row + i, currentSquare.col + i));
        }

        // Top-left of diagonal
        for (let i = 1; i <= 7 - currentSquare.row && i <= currentSquare.col; i++) {
            moves.push(Square.at(currentSquare.row + i, currentSquare.col - i));
        }

        return moves;
    }
}
