function CompareCislo(data, sorting, stlpec) {

    // const [stlpcek, setStlpcek] = useState(stlpec)
    // if (stlpec === "females") {
    //     data.sort(compareNum)
    //     function compareNum(b, a) {
    //         const A = a.females
    //         const B = b.females
    //         if (sorting) {
    //             if (A > B) {
    //                 return 1
    //             } else if (A < B) {
    //                 return -1
    //             } else return 0;
    //         }
    //         else {
    //             if (B > A) {
    //                 return 1
    //             } else if (B < A) {
    //                 return -1
    //             } else return 0;
    //         }
    //     }
    // }
    // else if (stlpec === "males") {
    //     data.sort(compareNum)
    //     function compareNum(b, a) {
    //         const A = a.males
    //         const B = b.males
    //         if (sorting) {
    //             if (A > B) {
    //                 return 1
    //             } else if (A < B) {
    //                 return -1
    //             } else return 0;
    //         }
    //         else {
    //             if (B > A) {
    //                 return 1
    //             } else if (B < A) {
    //                 return -1
    //             } else return 0;
    //         }
    //     }
    // }
    if (stlpec === "amountRecovered") {
        data.sort(compareNum)
        function compareNum(b, a) {
            const A = a.amount.recovered
            const B = b.amount.recovered
            if (!sorting) {
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
    // else if (stlpec === "amountDelta") {
    //     data.sort(compareNum)
    //     function compareNum(b, a) {
    //         const A = a.amount.infected_delta
    //         const B = b.amount.infected_delta
    //         if (sorting) {
    //             if (A > B) {
    //                 return 1
    //             } else if (A < B) {
    //                 return -1
    //             } else return 0;
    //         }
    //         else {
    //             if (B > A) {
    //                 return 1
    //             } else if (B < A) {
    //                 return -1
    //             } else return 0;
    //         }
    //     }
    // }
    // else {
    //     data.sort(compareNum)
    //     function compareNum(a, b) {
    //         const A = a.amount.infected
    //         const B = b.amount.infected
    //         if (sorting) {
    //             if (A > B) {
    //                 return 1
    //             } else if (A < B) {
    //                 return -1
    //             } else return 0;
    //         }
    //         else {
    //             if (B > A) {
    //                 return 1
    //             } else if (B < A) {
    //                 return -1
    //             } else return 0;
    //         }
    //     }
    // }
    else {
        if (JSON.parse(localStorage.getItem("zoradenieLocalStorage")) === "amountDelta") {
            data.sort(compareNum)
            function compareNum(a, b) {
                const A = a.amount.infected_delta
                const B = b.amount.infected_delta
                if (!sorting) {
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
        else if (JSON.parse(localStorage.getItem("zoradenieLocalStorage")) === "amountInfected") {
            data.sort(compareNum)
            function compareNum(a, b) {
                const A = a.amount.infected
                const B = b.amount.infected
                if (!sorting) {
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

        else {
            data.sort(compareNum)
            function compareNum(a, b) {
                const A = a.amount.infected
                const B = b.amount.infected
                if (!sorting) {
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


    }
}

export default CompareCislo 