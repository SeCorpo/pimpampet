require('@testing-library/jest-dom');
const fs = require('fs');
const path = require('path');

const HTML_FILE_PATH = path.resolve(__dirname, './index.html');
const JS_FILE_PATH = path.resolve(__dirname, './stringChecker.js');

const GET_QUESTION_BUTTON_ID = 'get_question_button';
const QUESTION_FIELD_ID = 'question_field';

let GET_QUESTION_BUTTON;
let QUESTION_FIELD;

describe('StringChecker', () => {
    test('checks if the HTML and JS files exist', () => {
        expect(fs.existsSync(HTML_FILE_PATH)).toBe(true);
        expect(fs.existsSync(JS_FILE_PATH)).toBe(true);
    });

    beforeEach(() => {
        document.documentElement.innerHTML = fs.readFileSync(HTML_FILE_PATH, 'utf8');

        require(JS_FILE_PATH);

        GET_QUESTION_BUTTON = document.getElementById(GET_QUESTION_BUTTON_ID);
        QUESTION_FIELD = document.getElementById(QUESTION_FIELD_ID);
    });

    test('checks if the button and field exist', () => {
        expect(GET_QUESTION_BUTTON).not.toBeNull();
        expect(QUESTION_FIELD).not.toBeNull();
    });

    test('displays a string in the question field when the get_question_button is pressed', () => {
        expect(QUESTION_FIELD.textContent).toBe('');

        GET_QUESTION_BUTTON.click();

        expect(QUESTION_FIELD.textContent).toMatch(/\S+/);
    });

    test('always passes (test check)', () => {
        expect(true).toBe(true);
    });
});
