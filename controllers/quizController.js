const Quiz = require('../models/Quiz');

const createQuiz = async (req, res) => {
  try {
    const { title, questions } = req.body;
    const quiz = new Quiz({ title, questions, creator: req.user.userId });
    await quiz.save();
    res.status(201).json({ message: 'Quiz created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().select('title');
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getQuizDetails = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body;
    const quiz = await Quiz.findById(req.params.id);
    let score = 0;
    quiz.questions.forEach((q, index) => {
      if (q.correctAnswer === answers[index]) {
        score++;
      }
    });
    res.json({ score, total: quiz.questions.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createQuiz, getAllQuizzes, getQuizDetails, submitQuiz };
