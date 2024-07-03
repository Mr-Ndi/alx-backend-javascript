export default function setFromArray(arr){
    if (!Array.isArray(arr)) {
        return new set();
    }
    return new Set(arr);
}