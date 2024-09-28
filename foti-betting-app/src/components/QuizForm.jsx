import React, { useState } from 'react';
import heroimage from '../assets/heroimage.svg';

// Move the questions array to the top of the component
const questions = ["Name the Big 5"];

const QuizForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState({
    animal1: '',
    animal2: '',
    animal3: '',
    animal4: '',
    animal5: ''
  });
  const [message, setMessage] = useState('');

  // Correct answers for the quiz
  const correctAnswers = ['lion', 'Lion','elephant','Elephant', 'buffalo',  'Buffalo','rhino','Rhino','Leopard', 'leopard'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert user answers to lowercase for comparison
    const userAnswers = Object.values(answers).map(ans => ans.toLowerCase());

    // Normalize correct answers to lowercase for case-insensitive comparison
    const normalizedCorrectAnswers = correctAnswers.map(answer => answer.toLowerCase());

    // Check if all correct answers are included in user input
    if (normalizedCorrectAnswers.every(answer => userAnswers.includes(answer))) {
      setMessage('Correct! You stand a chance to win a trip to Masai Mara. A winner will be randomly chosen.');
    } else {
      setMessage('Wrong! Try again next time.');
    }

    // Clear answers after submission
    setAnswers({
      animal1: '',
      animal2: '',
      animal3: '',
      animal4: '',
      animal5: ''
    });

    // Call the onSubmit function with the user answers if needed
    onSubmit(userAnswers);
  };

  return (
    <div 
      className="flex justify-center items-center h-full" 
      style={{
        backgroundImage: `url(${heroimage})`, // Background image applied outside the form
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Ensure the full viewport height is used
      }}
    >
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
       

        {Object.keys(answers).map((key, index) => (
          <input
            key={key}
            name={key}
            type="text"
            value={answers[key]}
            onChange={handleChange}
            className="border-2 border-fotiOrange p-2 mb-4 w-full"
            placeholder={`Enter animal ${index + 1}`}
          />
        ))}
        <button type="submit" className="bg-fotiOrange text-white px-4 py-2 rounded w-full hover:bg-fotiOrange-dark transition">
          Submit Answers
        </button>
        {message && (
          <div className="mt-4 text-center text-fotiBrown">
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default QuizForm;
