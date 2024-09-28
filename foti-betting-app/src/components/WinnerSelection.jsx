import React from 'react';

const WinnerSelection = ({ pickWinner, winner }) => {
  return (
    <div>
    
      {winner && (
        <h3 className="text-fotiBrown text-2xl">Winner: {winner}</h3>
      )}
    </div>
  );
};

export default WinnerSelection;
