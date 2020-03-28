function Compare(todos, pom2) {
    todos.sort(sortovanieNazov)
    function sortovanieNazov(a, b) {
        const A = a.name.toLowerCase()
        const B = b.name.toLowerCase()
        if (pom2) {
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

export default Compare
