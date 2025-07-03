import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        const moves = [];
        const direction = this.player === Player.WHITE ? 1 : -1;
        // Square ahead must be free (to move either 1 or 2 spaces), and within the bounds of the board
        if (currentSquare.row + direction >= 0 && currentSquare.row + direction < GameSettings.BOARD_SIZE && board.getPiece(Square.at(currentSquare.row + direction, currentSquare.col)) == undefined) {
            moves.push(Square.at(currentSquare.row + direction, currentSquare.col));
            const startingRow = this.player === Player.WHITE ? 1 : 6;
            // If the pawn hasn't yet moved, then it can move two spaces (if the square two spaces ahead is free and within the bounds)
            if (currentSquare.row + 2 * direction >= 0 && currentSquare.row + 2 * direction < GameSettings.BOARD_SIZE && currentSquare.row == startingRow && board.getPiece(Square.at(currentSquare.row + 2 * direction, currentSquare.col)) == undefined) {
                moves.push(Square.at(currentSquare.row + 2 * direction, currentSquare.col));
            }
        }
        return moves;
    }
}
