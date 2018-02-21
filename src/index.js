/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0,
        watched = [];

    for (let i = 0; i < preferences.length; i++) {
        let first = preferences[i],
            second = preferences[preferences[i] - 1],
            third = preferences[preferences[preferences[i] - 1] - 1];
        if (i === preferences[preferences[preferences[i] - 1] - 1] - 1 && 
            (first !== second || second !== third) && !watched.includes(first) && !watched.includes(second) 
            && !watched.includes(third)) {
            count++;
            watched.push(first, second, third);
        }
    }

    return count;
};
