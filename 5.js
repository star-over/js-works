// . Дана строка “ННе ттттолльккккко лишшшшььььь всссссе могуттттт сделллллать этттто”
// - Удалить из строки все все повторяющиеся символы
// - Объединить все символы в строку чтобы получилось: “Н е т о л ь к и ш в с м г у д а э”
// - Вывести результат в консоль

const str = "ННе ттттолльккккко лишшшшььььь всссссе могуттттт сделллллать этттто";
const withoutSpaces = str.replaceAll(" ", "");
const uniqueArray = [...new Set(withoutSpaces.split(""))];
const uniqueSymbols = uniqueArray.join(" ");

console.log("Source string:", str);
console.log("Unique symbols:", uniqueSymbols);