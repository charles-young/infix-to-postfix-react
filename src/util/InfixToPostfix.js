import Stack from "./Stack";

class InfixToPostfix {
    static prec(ch) {
        switch (ch) {
            default:
                return -1;
            case '+':
            case '-':
                return 1;

            case '*':
            case '/':
                return 2;

            case '^':
                return 3;
        }
    }

    static convert(exp) {
        exp = exp.replace(/ /g,'');
        let result = "";
        let stack = new Stack();

        for (let i = 0; i < exp.length; i++) {
            let c = exp.charAt(i);

            if (/[A-Za-z0-9]/i.test(c)) { // test if c is letter or digit
                result += c;
                console.log(result);
            } else if (c === '(') {
                stack.push(c);
            } else {
                if (c === ')') {
                    while (!stack.isEmpty() && stack.peek() !== '(') {
                        result += stack.pop();
                    }
                    if (!stack.isEmpty() && stack.peek() !== '(') {
                        return "Invalid Expression";
                    } else {
                        stack.pop();
                    }
                } else {
                    while (!stack.isEmpty() && this.prec(c) <= this.prec(stack.peek())) {
                        result += stack.pop();
                    }
                    stack.push(c);
                }
            }
        }
        while (!stack.isEmpty()) {
            result += stack.pop();
        }

        return result;
    }
}
export default InfixToPostfix;