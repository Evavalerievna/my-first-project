'use strict';

/**
 * @param {string} age
 */
export const getNextAge = age => {
    if(age === "") {
        return 0;
    }
    return parseInt(age, 10) + 1;
};