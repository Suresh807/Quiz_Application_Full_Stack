const express = require('express');
const router = express.Router();

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6", "7"],
        correctAnswer: "4"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Seoul", "Beijing", "Bangkok", "Hanoi"],
        correctAnswer: "Tokyo"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn", "Venus"],
        correctAnswer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "CO2", "H2O", "NaCl", "C6H12O6"],
        correctAnswer: "H2O"
    },
];

router.get('/', (req, res) => {
    res.json(quizData);
});

module.exports = router;
