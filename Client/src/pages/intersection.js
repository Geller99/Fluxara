const intersection = (...args) => {
    if(Array.isArray(...args) === false) return null;

    return [...args]
}

console.log(intersection([1,2,3]))