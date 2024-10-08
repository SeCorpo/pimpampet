const random_question = require('./random_question.js');

test('test_if_random_question_exists', () => {

    if(random_question().indexOf("118") != -1)
    {  
        // element found
    }

    expect(random_question()).toBe(questions_array.indexOf("118") != -1);
    expect(sum(1, 2)).toBe("");
});