const random_question = require('../src/random_question');
const random_questions_array = require('../src/random_questions_array');

test('test_if_random_question_is_not_null', () => {
    // Setup
    let random_question_return = random_question();

    // Tests
    expect(random_question_return).not.toBe(null);
});

test('test_if_random_question_exists_in_array', () => {
    // Setup
    const random_questions = random_questions_array();
    let random_question_return = random_question();
    let index = random_questions.indexOf(random_question_return)
    
    // Tests
    expect(index).not.toBe(-1);
});