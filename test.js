/**
 * 1.输入间隔N，根据间隔N生成数组，要求数组相邻元素之差为间隔N。
 *  2.输入数字X（数字范围在0-数组长度），要求数字正好是数组中的某一个元素 
 * 3.如果数字不是数组中的某个元素，则取与数字X最接近的元素
 * @param {*} start 
 * @param {*} end 
 * @param {*} interval 
 * @returns 
 */

function generateArray(start, end, interval) {
    // 生成一个数组，数组的相邻元素之差为interval
    let array = [];
    for (let i = start; i <= end; i += interval) {
        array.push(i);
    }
    return array;
}

function findClosestElement(array, x) {
    // 找到与数字X最接近的数组元素
    let closest = array[0];
    let minDiff = Math.abs(x - closest);

    for (let i = 1; i < array.length; i++) {
        let diff = Math.abs(x - array[i]);
        if (diff < minDiff) {
            minDiff = diff;
            closest = array[i];
        }
    }
    return closest;
}

// 示例使用
let start = 0;
let end = 50;
let interval = 0.3;
let array = generateArray(start, end, interval);
console.log("生成的数组:", array);

let x = 23.369; // 输入的数字X，范围在0到数组长度之间
if (x < 0 || x > array.length) {
    console.error(`数字${x}不在范围0到${array.length}之间`);
} else {
    let closestElement = findClosestElement(array, x);
    console.log(`与数字${x}最接近的数组元素是:`, closestElement);
}