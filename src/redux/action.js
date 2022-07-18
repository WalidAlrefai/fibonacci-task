
export function fibonacci(payload) {
    const number = payload;
    let n1 = 0, n2 = 1, nextTerm;
    let array = [];
    for (let i = 1; i <= number; i++) {
        array.push(n2);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return array;
}