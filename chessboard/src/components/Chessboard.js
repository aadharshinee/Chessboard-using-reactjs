
import React, { useState } from 'react';
import './Chessboard.css';
import { FaChessKing, FaChessQueen, FaChessRook, FaChessBishop, FaChessKnight, FaChessPawn } from 'react-icons/fa';

const initialBoard = () => {
  return [
    ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['Rook', 'Knight', 'Bishop', 'Queen', 'King', 'Bishop', 'Knight', 'Rook'],
  ];
};

const ChessBoard = () => {
  const [board, setBoard] = useState(initialBoard());

  const Piece = (piece) => {
    switch (piece) {
      case 'king': return <FaChessKing />;
      case 'queen': return <FaChessQueen />;
      case 'rook': return <FaChessRook />;
      case 'bishop': return <FaChessBishop />;
      case 'knight': return <FaChessKnight />;
      case 'p': return <FaChessPawn />;
      case 'King': return <FaChessKing style={{ color: 'white' }} />;
      case 'Queen': return <FaChessQueen style={{ color: 'white' }} />;
      case 'Rook': return <FaChessRook style={{ color: 'white' }} />;
      case 'Bishop': return <FaChessBishop style={{ color: 'white' }} />;
      case 'Knight': return <FaChessKnight style={{ color: 'white' }} />;
      case 'P': return <FaChessPawn style={{ color: 'white' }} />;
      default: return null;
    }
  };

  return (
    <div className="chess-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((piece, columnIndex) => (
            <div
              key={columnIndex}
              className={`square ${((rowIndex + columnIndex) % 2 === 0) ? 'light' : 'dark'}`}
            >
              {Piece(piece)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;