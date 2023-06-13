// importing the shapes
const { square, circle, triangle } = require('./shapes');

// test if the square element will render properly
describe('square', () => {
    test('rendered!', () => {
        const shape = new square();
        var color = ('green');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x='50' y='20' width='150' height='150' fill='${this.color}'/>`)
    })
})

// test if the circle element will render properly
describe('circle', () => {
    test('rendered!', () => {
        const shape = new circle();
        var color = ('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx='50%' cy='50%' r='100' fill='${this.color}'/>`)
    })
})

// test if the triangle element will render properly
describe('triangle' , () => {
    test('rendered!', () => {
        const shape = new triangle();
        var color = ('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points='0, 200 300, 200 150, 0' fill='${this.color}'/>`)
    })
})
