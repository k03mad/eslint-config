/**
 * @param {...string} rulesArray
 * @returns {{[key: string]: 'off'}}
 */
export const turnOff = (...rulesArray) => rulesArray.reduce((acc, cur) => {
    acc[cur] = 'off';
    return acc;
}, {});
