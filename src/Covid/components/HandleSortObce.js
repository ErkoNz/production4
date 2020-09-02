
function HandleSortObce(stlpec, CompareCislo, data, sorting, setStylesArrows, setSorting) {
    const LOCAL_STORAGE_KEY = 'zoradenieLocalStorage'
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stlpec))

    if (stlpec === "amountInfected") {
        CompareCislo(data, sorting.desc, "amountInfected")
        if (sorting.desc)
            setStylesArrows({
                sipkaNakazeni: {
                    transform: 'rotate(0deg)'
                },
                sipkaPoslednyden: {
                    display: 'none',
                }
            })
        else
            setStylesArrows({
                sipkaNakazeni: {
                    transform: 'rotate(180deg)'
                },
                sipkaPoslednyden: {
                    display: 'none',
                }
            })
    }
    if (stlpec === "amountDelta") {
        CompareCislo(data, !sorting.desc, "amountDelta")
        if (!sorting.desc)
            setStylesArrows({
                sipkaNakazeni: {
                    display: 'none'
                },
                sipkaPoslednyden: {
                    transform: 'rotate(0deg)',
                }
            })
        else
            setStylesArrows({
                sipkaNakazeni: {
                    display: 'none'
                },
                sipkaPoslednyden: {
                    transform: 'rotate(180deg)',
                }
            })
    }
    setSorting({
        desc: !sorting.desc
    })
}

export default HandleSortObce
