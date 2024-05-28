function brickSolution(A) {
    const N = A.length;
    const target = 10 * N;
    const totalBricks = A.reduce((accumulator, bricks) => accumulator + bricks, 0);

    if (totalBricks !== target) {
        return -1
    }

    let moves = 0;
    for (let i = 0; i< N-1; i++) {
        if (A[i] > 10) {
            let excess = A[i] - 10;
            A[i+1] += excess;
            A[i] -= excess;
            moves += excess;
        }

        else if (A[i] < 10) {
            let deficit = 10 - A[i];
            A[i+1] -= deficit;
            A[i] += deficit;
            moves += deficit;
        }
    }

    return moves;
}