// 3. Дан массив ['spaghetti','pizza', 'risotto', ‘lasagna’];
// - Добавить посередине элемент ‘carbonara’ и вывести в консоль (console.log) результат

const arr = ["spaghetti", "pizza", "risotto", "lasagna"];
const item = "carbonara";

console.log("Source array:", arr);
arr.splice(2, 0, item);
console.log("Array with new item:", arr);
