import React, { useState } from 'react';
import QuizForm from './components/QuizForm';
import WinnerSelection from './components/WinnerSelection';
import Header from './components/Header';
import Hero from './components/Hero';

const questions = ["Name the Big 5"];

const App = () => {
  const [participants, setParticipants] = useState([]);
  const [winner, setWinner] = useState(null);

  const handleAddParticipant = (answer) => {
    setParticipants([...participants, answer]);
  };

  const pickWinner = () => {
    const randomIndex = Math.floor(Math.random() * participants.length);
    setWinner(participants[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-fotiGreen text-center">
      <header className="bg-fotiBlue text-white p-4">
        <h1 className="text-3xl">FoTI Quiz App</h1>
      </header>
      
      <main className="mt-8">
        <h2 className="text-2xl mb-4 text-fotiBrown">{questions[0]}</h2>

        <QuizForm onSubmit={handleAddParticipant} />
        <WinnerSelection pickWinner={pickWinner} winner={winner} />
      </main>
    </div>
  );
};

export default App;
