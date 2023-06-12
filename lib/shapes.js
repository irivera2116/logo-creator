class shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
};

class square extends shape {
    render() {
        return `<rect x='50' fill='${this.color}'/>`
    };
};

class circle extends shape {
    render() {
        return `<circle cx='50%' cy='50%' r='100' fill='${this.color}'/>`
    };
};

class triangle extends shape {
    render() {
        return `<polygon points='0, 200 300, 200 150, 0' fill='${this.color}'/>`
    };
};

module.exports = {square, circle, triangle};
