export function find(morseLetter, isAzerty) {
    const letter = fromMorseLetter(morseLetter);
    const rows = isAzerty ? azerty_keyrows : qwerty_rows
    return findKeyrow(letter, rows);
}

export function fromMorseLetter(morseLetter) {
    switch (morseLetter) {
        case "._": return "A"
        case "_...": return "B"
        case "_._.": return "C"
        case "_..": return "D"
        case ".": return "E"
        case ".._.": return "F"
        case "__.": return "G"
        case "....": return "H"
        case "..": return "I"
        case "__": return "M"
        case "__._": return "Q"
        case ".__": return "W"
        case "__..": return "Z"
    }
}

export function findKeyrow(letter, rows) {
    for(let i = 0; i < rows.length; i++) {
        if(rows[i].includes(letter.toLowerCase()))
            return i + 1
    }
    throw new Error("Invalid letter " + letter)
}

export const azerty_keyrows = [
    "azertyuiop",
    "qsdfghjklm",
    "wxcvbn",
]

export const qwerty_rows = [
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm",
]