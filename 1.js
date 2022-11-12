// 1. Дан массив [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6](может быть любым числовым)
// - Удалить все повторяющиеся элементы из массива, используя Map
// - Вывести результат в консоль

const arr = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];
const uniqueArray = [...new Set(arr)];

console.log("Source array:", arr);
console.log("Unique array:", uniqueArray);
