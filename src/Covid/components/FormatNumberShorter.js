function FormatNumberShorter(x) {
    if (isNaN(x) || (x < 1000)) {
        return x
    }
    else if (x < 10000) {
        return (x / 1000).toFixed(2) + "k"
    }
    else if (x < 100000) {
        return (x / 1000).toFixed(1) + "k"
    }

    else if (x < 1000000) {
        // return (x / 1000).toFixed(1) + "k"
        return Math.round((x / 1000)) + "k"

    }
    else if (x < 10000000) {
        return (x / 1000000).toFixed(1) + "M"
    }

    else if (x < 1000000000) {
        return (x / 1000000).toFixed(1) + "M"
    }

    else if (x < 1000000000000) {
        return Math.round((x / 1000000000)) + "B"
    }
}

export default FormatNumberShorter
