import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        // Allow diagonal moves, and no other moves
        const moves = [];

        for (let i of [1, -1]) {
            for (let j of [1, -1]) {
                moves.push(...board.getMovesInDirection(currentSquare, [i, j]));
            }
        }
        
        return moves.filter(square => !(board.getPiece(square) instanceof King));
    }
}
