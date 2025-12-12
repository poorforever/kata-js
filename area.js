export function calculateArea(shape) {
    if(shape.length < 1){
        return 0;
    }

    if (shape.length == 1) {
        return Math.round(Math.PI * Math.pow(shape[0], 2));
    }

    if(shape.length == 6){
        const xA = shape[0];
        const yA = shape[1];
        const xB = shape[2];
        const yB = shape[3];
        const xC = shape[4];
        const yC = shape[5];

        return 0.5 * Math.abs(xA * (yB - yC) + xB * (yC - yA) + xC * (yA - yB))
    }

    if(shape.length == 8){
        const xA = shape[0];
        const yA = shape[1];
        const xB = shape[2];
        const yB = shape[3];
        const xC = shape[4];
        const yC = shape[5];

        const dAB = Math.sqrt((xA-xB)**2+(yA-yB)**2)
        const dBC = Math.sqrt((xB-xC)**2+(yB-yC)**2)

        return dAB * dBC;
    }
}