export function array_sqrt(elements) {
    return elements.map(element => Math.sqrt(element));
}

export function array_integer(elements) {
    return elements.filter(element => element === Math.round(element));
}