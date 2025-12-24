export function array_sqrt(elements) {
    return elements.map(element => Math.sqrt(element));
}

export function array_integer(elements) {
    return elements.filter(element => element === Math.round(element));
}

export function array_sum(elements) {
    return elements.reduce((sum, element) => sum + element, 0);
}