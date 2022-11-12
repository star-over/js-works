// 4. Есть массив ['apple pie', ‘texas barbecue’, ‘tacos’, ‘hot dogs’]

// - Сделать из него новый массив
// ['apple pie', ‘fish’, ‘chips’, ‘churros’, ‘bbq ribs’, ‘meatloaf’, ‘hot dogs’, ‘hamburger’ ]
// - Вывести в консоль все удаленные элементы (!Одним массивом)

const arr = ["apple pie", "texas barbecue", "tacos", "hot dogs"];
const middles = ["fish", "chips", "churros", "bbq ribs", "meatloaf"];
const last = "hamburger";

const newArray = [arr.at(0), ...middles, arr.at(-1), last];

console.log("Source array:", arr.join(", "));
console.log("New array:", newArray.join(", "));
