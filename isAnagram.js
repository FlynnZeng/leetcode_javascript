/**
 * 判断两个字符串是否是 异位词
 * @param str1
 * @param str2
 * @returns {boolean}
 */
function isAnagram(str1, str2) {
    // 判断字符串长度是否相等
    if (str1.length !== str2.length) return false;
    // 将字符串转为小写后转换为数组并排序
    const s1 = str1.toLowerCase().split('').sort().join('');
    const s2 = str2.toLowerCase().split('').sort().join('');
    // 比较排序后的字符串
    return s1 === s2;
}

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))