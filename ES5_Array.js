/**
 * Created by dllo on 17/8/1.
 */



//ES5中新增了写数组方法，如下：

// forEach (js v1.6)
// map (js v1.6)
// filter (js v1.6)
// some (js v1.6)
// every (js v1.6)
// indexOf (js v1.6)
// lastIndexOf (js v1.6)
// reduce (js v1.8)
// reduceRight (js v1.8)


/** 1.forEach
 *
 *forEach方法中的function回调支持3个参数，
 * 第1个是遍历的数组内容
 * 第2个是对应的数组索引
 * 第3个是数组本身
 * */
["a", "b", "c", "d"].forEach(console.log);

//结果 :
//a 0 [ 'a', 'b', 'c', 'd' ]
//b 1 [ 'a', 'b', 'c', 'd' ]
//c 2 [ 'a', 'b', 'c', 'd' ]
//d 3 [ 'a', 'b', 'c', 'd' ]

// 等同于
// var array = ["a", "b", "c", "d"];
// for (var i = 0; i < array.length; i++) {
// console.log(array[i]);
// }


/** 2.map
 *
 * 就是把原来的数组变成一个新的数组. 并且callback需要有return值，如果没有 就会是undefined
 * */

var arr2 = [1, 2, 3, 4, 5];
var array = arr2.map(function (item) {
    return item = "$";
});
console.log(array);
// 结果 :
//  [ '$', '$', '$', '$', '$' ]


/** 3.filter
 *  与.map极为相似 返回的是 filter之后的新数组
 * */
var arr3 = [1, 3, 5, 6, 7];
var newArray = arr3.filter(function (item) {
    return item > 3;
});
console.log(newArray);
//结果 :
//[ 5, 6, 7 ]


/** 4.some
 *  就是只要传入的函数对数组中的某一项返回true，就会返回true
 *
 * */
// var scores1 = [5, 8, 3, 10];
// var current1 = 9;
// function higherThanCurrent(score1) {
//     return score1 > current1;
// }
// if (scores1.some(higherThanCurrent)) {
//     console.log("true");
// } else {
//     console.log("false");
// }
// 结果 :  true
//       some要求至少有1个值让callback返回true就可以了


/** 5.every
 *  与some很相似  但传入的函数必须对每一项都返回true，这个方法才返回true
 * */
var scores2 = [5, 8, 3, 10];
var current2 = 2;
function higherThanCurrent(score2) {
    return score2 > current2;
}
if (scores2.some(higherThanCurrent)) {
    console.log("true");
} else {
    console.log("false");
}
// 结果 :  false
//       every每一项都返回true 就可以了


/** 6.indexOf
 *  indexOf方法返回在该数组中第一个找到的元素位置，如果它不存在则返回-1。
 * */
var arr6 = [1, 2, 3, 3, 4, 5];
var newArr6 = [];
for (var i = 0; i < arr6.length; i++) {
    if (newArr6.indexOf(i) == -1) {
        newArr6.push(i);
    }
}
console.log(newArr6);
// 结果 :
//      [ 0, 1, 2, 3, 4, 5 ]


/** 7.lastIndexOf
 *  lastIndexOf 与 indexOf 返回一个指定的字符串值最后出现的位置
 *  不同就是fromIndex的默认值是array.length - 1而不是0.
 * */
var array7 = [2, 23, 48, 66, 2];
console.log(array7.lastIndexOf(2, 10));
// 结果 : 4


/** 8.reduce
 *  方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。
 * */
//                                      以前的值 ,现在的值
var sum = [1, 2, 3, 4].reduce(function (previous, current) {
    return previous + current;
});
console.log(sum);
// 说明：
//      因为initialValue不存在，因此一开始的previous值等于数组的第一个元素。
//      从而current值在第一次调用的时候就是2.
//      最后两个参数为索引值index以及数组本身array.
// 结果:  10



/** 9.reduceRight
 *  reduceRight跟reduce相比，用法类似 ,实现上差异在于reduceRight是从数组的末尾开始实现
 * */
var data = [1, 2, 3, 4];
var specialDiff = data.reduceRight(function (previous, current, index) {
    return previous - current;
});
console.log(specialDiff);
//结果 : -2



