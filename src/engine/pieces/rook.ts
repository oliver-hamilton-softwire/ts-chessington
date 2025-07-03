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
        return [
            // Horizontal
            Square.at(currentSquare.row, 0),
            Square.at(currentSquare.row, 1),
            Square.at(currentSquare.row, 3),
            Square.at(currentSquare.row, 4),
            Square.at(currentSquare.row, 5),
            Square.at(currentSquare.row, 6),
            Square.at(currentSquare.row, 7),
            // Vertical
            Square.at(0, currentSquare.col),
            Square.at(2, currentSquare.col),
            Square.at(3, currentSquare.col),
            Square.at(4, currentSquare.col),
            Square.at(5, currentSquare.col),
            Square.at(6, currentSquare.col),
            Square.at(7, currentSquare.col)
        ];
    }
}
