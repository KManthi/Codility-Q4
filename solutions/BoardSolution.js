function boardSolution(A) {
    A.sort((a,b) => a - b) 
    
    let l = 1
    let r = A[A.length - 1] - A[0];
    
    while(l < r) {
        let mid  = Math.floor((l+r)/2)
        if(canCoverWithBoards(A, mid)) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    return l
}

function canCoverWithBoards(A, len) {
    let count = 1;
    let firstBoardEnd = A[0] + len;
    
    for (let  i = 0; i < A.length; i++) {
        if (A[i] > firstBoardEnd) {
            count++
            firstBoardEnd = A[i] + len
        }
        if (count > 2) {
            return false
        }
    }
    return true
}

