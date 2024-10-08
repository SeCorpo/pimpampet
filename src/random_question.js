const random_questions_array = require('../src/random_questions_array');

function random_question() {
    const random_questions = random_questions_array()
    return random_questions[Math.floor(Math.random() * random_questions.length)];;
}

module.exports = random_question;