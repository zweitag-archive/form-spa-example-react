// @flow
let index : number = 0;

export default function getNextId() : number {
    index += 1;
    return index;
}

export function resetId() {
    index = 0;
}
