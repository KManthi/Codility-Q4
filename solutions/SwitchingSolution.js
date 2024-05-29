function switchingSolution (A) {
    const n = A.length;
    if (n === 1) return 1;

    let maxLen = 0;
    let start = 0;
    let evenEx = A[0];
    let oddEx = A[1];

    for (let i = 2; i < n; i++) {
        if((i % 2 === 0 && A[i] !== evenEx) || (i % 2 === 1 && A[i] !== oddEx)) {
            maxLen = Math.max(maxLen, i - start);
            start = i - 1;
            [evenEx, oddEx] = [A[start], A[i]];
        }
    }
    return Math.max(maxLen, n - start);
}

