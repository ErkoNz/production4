function CompareCislo(todos, casSort) {
    todos.sort(compareNum)
    function compareNum(a, b) {
        const A = a.time
        const B = b.time
        if (casSort) {
            if (A > B) {
                return 1
            } else if (A < B) {
                return -1
            } else return 0;
        }
        else {
            if (B > A) {
                return 1
            } else if (B < A) {
                return -1
            } else return 0;
        }
    }
}

export default CompareCislo 