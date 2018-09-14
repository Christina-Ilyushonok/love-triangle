/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
        let count=0;
        let x=0;
        let y=0;

        for (let i = 0; i < preferences.length; i++) {
            let value = preferences[i];
            x = preferences[value-1];
            y = preferences[x-1];
            if ((i+1) == y && (i+1)!==value) {
                count++;
            }
        }
        return count/3;
    };

