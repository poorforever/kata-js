/**
  Le but de cet exercice est d'écrire une fonction prenant en entrée une chaine de caractère correspondant au code morse
  d'une lettre de l'alphabet, et renvoyer un chiffre correspondant à l'indice de l'une des trois rangées de lettre
  sur un clavier (AZERTY).

  Les différents rangées sont les suivants:
  - AZERTYUIOP => 1
  - QSDFGHJKLM => 2
  - WXCVBN => 3

  Exemple: `_.__` correspond à la lettre Y en morse, lettre qui se trouve sur la rangée 1 d'un clavier AZERTY.
  Donc find(`_.__`) = 1

  Ne pas hésister à créer de nouvelles méthodes, ainsi que des constantes.

  Bonus: Gérer le cas d'un clavier QWERTY. Ne pas hésiter à modifier la signature de la méthode.

 * @param morseLetter
 * @param isAzerty
 * @return number keyrow
 */

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