export function calculateArea(input) {
    switch(input.length) {
        case 0:
            return 0
        case 1:
            return circleArea(input)
        case 6:
            return triangleArea(input)
        case 8:
            return rectangleArea(input)
    }
}

function circleArea(input) {
    return Math.round(Math.PI * Math.pow(input[0], 2));
}

function triangleArea(input) {
    const [xA, yA, xB, yB, xC, yC] = input

    return 0.5 * Math.abs(xA * (yB - yC) + xB * (yC - yA) + xC * (yA - yB))
}

function rectangleArea(input) {
    const [xA, yA, xB, yB, xC, yC] = input

    const dAB = Math.sqrt((xA-xB)**2+(yA-yB)**2)
    const dBC = Math.sqrt((xB-xC)**2+(yB-yC)**2)

    return dAB * dBC;
}