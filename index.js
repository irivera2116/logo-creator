// importing inquirer, fs, and shapes
const inquirer = require('inquirer');
const fs = require('fs');
const {square, circle, triangle} = require('./lib/shapes');
const { error } = require('console');

// questions array
const questions = [
    {
        // type in the letters for the logo
        type: 'input',
        name: 'text',
        message: 'Choose your three (3) letter characters for the logo.',
    },
    {
        // type in the color for the logo text
        type: 'input',
        name: 'text-color',
        message: 'Type in the color you would like for the text of your logo.',
    },
    {
        // choose the shape for the logo
        type: 'list',
        name: 'shape',
        message: 'Select one of the below shapes for your logo.',
        choices: ['square', 'circle', 'triangle'],
    },
    {
        // type in the color for the shape
        type: 'input',
        name: 'shape-color',
        message: 'Type in the color you would like for the shape of your logo.',
    },
]

// renders the logo
class logo {
    constructor() {
        this.textEl = '';
        this.shapeEl = '';
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`
    }
    setText(text, color) {
        if(text.length > 3 && text.length < 1) {
            throw new error('Please use 1 to 3 letters.')
        }
        this.textEl = `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape) {
        this.shapeEl = shape.render();
    }
}