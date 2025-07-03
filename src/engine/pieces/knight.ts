import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

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
                moves.push(Square.at(currentSquare.row + i, currentSquare.col + j));
                moves.push(Square.at(currentSquare.row + j, currentSquare.col + i));
            }
        }
        // Only return moves that are within the board
        return moves.filter(move => move.withinBoard());
    }
}
