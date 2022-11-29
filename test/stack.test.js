class Stack {
    constructor() {
        this.top = -1;
        this.items = {}; // Empty object because we're avoiding using an array to solve the problem
    }

    get peek() {
        return this.items[this.top];
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }

    pop (value) {
        this.top -= 1;
        this.items[this.top] = value;
    }
}


describe('My Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('is created empty', () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can push to top', () => {
        stack.push('🥑');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('🥑');

        stack.push('🌽');
        expect(stack.top).toBe(1);
        expect(stack.peek).toBe('🌽');
    });

    it('can pop off', () => {
        stack.pop('🥑');
        expect(stack.top).toBe(-2);
        expect(stack.peek).toBe('🥑');

        stack.pop('🌽');
        expect(stack.top).toBe(-3);
        expect(stack.peek).toBe('🌽');
    });
})