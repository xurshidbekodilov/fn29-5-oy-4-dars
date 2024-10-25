// Bir nechta odatiy xususiyatlarga va bitta Symbol bilan yaratilgan xususiyatga ega bo'lgan ob'ekt yarating. Object.keys va
//   Object.getOwnPropertySymbols metodlaridan foydalanib, ob'ektdagi oddiy xususiyatlar
//      va Symbol bilan yaratilgan xususiyatlarni alohida-alohida oling.
// const id = Symbol('id');
// const myObject = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     [id]: 12345
// };
// console.log(myObject);
// const simpleKeys = Object.keys(myObject);
// console.log('Oddiy xususiyatlar:', simpleKeys);
// const symbolKeys = Object.getOwnPropertySymbols(myObject);
// console.log('Symbol bilan yaratilgan xususiyatlar:', symbolKeys);



//Rekursiv funksiyaga oid  

// 1. **Sonlarni yig'indisi:**
//    - Berilgan musbat butun sonni argument sifatida qabul qiladigan rekursiv funksiya yozing.
//      Funksiya 1 dan boshlab berilgan songacha bo'lgan barcha sonlarning yig'indisini qaytarsin
// function sum(num){
//     if(num == 0){
//         return 0;
//     }
//     return num+sum(num-1);
// }
// console.log(sum(3));

// 2. **Faktoriyal hisoblash:**
//    - Berilgan musbat butun son uchun rekursiv funksiya yozing. Funksiya ushbu sonning faktoriyalini
//     (n!) hisoblab, qaytarsin. Masalan, 5 uchun natija 5 * 4 * 3 * 2 * 1 bo'lishi kerak
// function factorial(num){
//     if(num==1){
//         return 1;
//     }
//     return num*factorial(num-1)
// }
// console.log(factorial(5));

// 3. **Fibonnachi sonini topish:**
//    - Berilgan n-chi son uchun Fibonacci ketma-ketligi qiymatini hisoblaydigan rekursiv funksiya yozing.
//     Fibonnachi ketma-ketligi: F(0) = 0, F(1) = 1 va F(n) = F(n-1) + F(n-2).
// function fibonacci(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(6));



//Class ga oid.

// 1. **Class yordamida avtomobil yaratish:**
//    - `Car` nomli class yarating. Bu class avtomobilning modelini, yili va rangi kabi xususiyatlarga ega bo'lsin.
//     Keyin ushbu class asosida avtomobil obyektini yarating va uning xususiyatlarini konsolga chiqaring
// class Car{
//     constructor(model,year,color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }
// let gm = new Car('Cobalt',2023, 'white');
// console.log(Object.entries(gm));

// 2. **Classda metod qo'shish:**
//    - `Rectangle` nomli class yarating. Bu class ikkita xususiyatga ega bo'lsin: uzunlik va kenglik. `Rectangle`
//     classida maydonni hisoblab qaytaruvchi `getArea` nomli metod yozing. Keyin ushbu classdan foydalanib, to'rtburchakning maydonini hisoblang.
// class Rectangle {
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;
//     }
//         getArea() {
//         return this.length * this.width;
//     }
// }
// let myRectangle = new Rectangle(10, 5);
// console.log("Maydon: " + myRectangle.getArea());




// String metodlariga oid


//### 1. `charAt`

// 1. Berilgan stringdan `charAt` yordamida indeksiga ko'ra belgini olib, uni qaytaring.
//  Agar indeks string uzunligidan katta bo'lsa, bo'sh qiymat qaytaring
// function findchar(string, index) {
//     if (index >= 0 && index < string.length) {
//         return string.charAt(index);
//     } else {
//         return "";
//     }
// }
// console.log(findchar("Hello, world!", 20));

// 2. `charAt` metodidan foydalanib, stringning oxirgi belgisini qaytaring
// function returnLastChar(string){
//     return string.charAt(string.length-1);
// }
// console.log("salom");

// 3. Berilgan stringning har bir belgisini konsolga chiqarish uchun `charAt` yordamida sikl (loop) yozing
// function allsymbols(string) {
//     for (let i = 0; i < string.length; i++) {
//         console.log(string.charAt(i));
//     }
// }
// allsymbols('salom');


//### 2. `charCodeAt

// 1. Berilgan stringning ixtiyoriy indeksida turgan belgining Unicode qiymatini `charCodeAt` yordamida qaytaring.
// function findCharCodeAt(string, index) {
//     return string.charCodeAt(index);
// }
// console.log(findCharCodeAt("hello world!", 8));

//2. Stringdagi har bir belgi uchun Unicode qiymatini toping va uni yangi massivga saqlang.
// let findUnicode = function(string) {
//     let resultArray = [];
//     for (const char of string) {
//         resultArray.push(char.charCodeAt(0));
//     }
//     return resultArray;
// }
// console.log(findUnicode("salom hammaga"));

// 3. Belgilangan indeksdan keyingi uchta belgining Unicode qiymatlarini konsolga chiqaruvchi funksiya yozing.
// let fidUnicodeChar = (string, index) => {
//     let resultArray = [];
//         for (let i = index + 1; i < index + 4; i++) {
//         if (i < string.length) {
//             resultArray.push(string.charCodeAt(i));
//         }
//     }
//         console.log(resultArray);
// }
// fidUnicodeChar("salom hammaga", 2);


// ### 3. `at`

// 1. Berilgan stringning ixtiyoriy indeksida turgan belgini `at` yordamida qaytaring
// function findCharWithAt(string,index){
//     return string.at(index);
// }
// console.log(findCharWithAt("salom dunyo!",5));

// 2. `at` yordamida stringning oxirgi belgisi nima ekanligini aniqlang
// let findLastChar = function(string){
//     return string.at(string.length - 1);
// }
// console.log(findLastChar("Salomat"));

//3. Manfiy indeks berilgan holda, `at` yordamida stringning oxirgi qismidagi belgilardan birini oling
// const findChar = (string, negativeIndex) => {
//     return string.at(negativeIndex);
// }
// console.log(findChar('salomat',-5));


//### 4. `slice`

//1. `slice` yordamida stringning o'rtasidan bir qismini kesib oling va qaytaring.
// function cutHalfString(string){
//     return string.slice(Math.floor(string.length/2),string.length);
// }
// console.log(cutHalfString("Qondaysizlare"));

//2. Berilgan stringning birinchi 3 belgisini `slice` yordamida kesib oling.
// let returnAtTheBeginning = function(string) {
//     return string.slice(0, 3);
// }
// console.log(returnAtTheBeginning("salom hammaga!"));

// 3. `slice` yordamida stringning oxirgi 5 belgisini qaytaring.
// let returnAtTheFinishing = (string) => {
//     return string.slice(string.length - 5, string.length);
// }
// console.log(returnAtTheFinishing("salomat"));


//### 5. `substring`

//1. Berilgan stringning indeks oralig'iga ko'ra bir qismini `substring` yordamida oling.
// function cutWithSubstring(string,indexStart,indexEnd){
//     return string.substring(indexStart, indexEnd);
// }
// console.log(cutWithSubstring("Salom hammaga!",0,5));

// 2. `substring` yordamida stringning dastlabki 4 belgisini qaytaring.
// let cutFourChar = function(string){
//     return string.substring(0,4);
// }
// console.log(cutFourChar("Bormisizlareee!"));

// 3. `substring` yordamida stringning 5-chi belgidan boshlab oxirigacha bo'lgan qismni oling.
// let cutWithSubstring = (string) => {
//     return string.substring(4, string.length);
// }
// console.log(cutWithSubstring("Najot Talim"));


//### 6. `substr`

// 1. `substr` yordamida stringning biror joyidan boshlab 3 ta belgisini kesib oling.
// function cutWithSubstr(string,index){
//     return string.substr(index, 3);
// }
// console.log(cutWithSubstr("Salomattt!"));

// 2. Berilgan stringning o'rtasidan boshlab, 5 ta belgini `substr` yordamida qaytaring.
// let cutWithSubstr = function(string){
//     return string.substr(Math.floor(string.length/2), 5);
// }
// console.log(cutWithSubstr("lorem picsum arem dom"));

// 3. Stringning so'nggi 4 belgisini `substr` yordamida oling.
// let cutWithSubstr = (string) => {
//     return string.substr(string.length -4, 4);
// }
// console.log(cutWithSubstr("Hello Uzbekistan"));


// ### 7. `trim`, `trimStart`, `trimEnd`

//1. Foydalanuvchi tomonidan kiritilgan stringning boshidagi va oxiridagi bo'sh joylarni `trim` yordamida olib tashlang.
// function useTrim(string){
//     return string.trim();
// }
// console.log(useTrim('      Salom Namangan   '));

// 2. Stringning faqat boshidagi bo'sh joylarni `trimStart` yordamida oling.
// function useTrimStart(string){
//     return string.trimStart();
// }
// console.log(useTrimStart('      Salom Andijon   '));

//3. Stringning faqat oxiridagi bo'sh joylarni `trimEnd` yordamida olib tashlang.
// let useTrimEnd = function(string){
//     return string.trimEnd();
// }
// console.log(useTrimEnd('  Salom Toshkent    '));


//### 8. `padEnd`, `padStart`

//1. Stringni `padEnd` yordamida uzunligi 10 bo'lgunga qadar "!" belgisi bilan to'ldiring.
// function usePadEnd(string) {
//     return string.padEnd(10, "!");
// }
// console.log(usePadEnd("salom"));

//2. Berilgan stringning boshiga `padStart` yordamida kerakli belgi qo'shib, umumiy uzunligini 15 ga yetkazing.
// let usePadStart = function(string, padString){
//     return string.padStart(15, padString);
// }
// console.log(usePadStart('hello', "h"));

//3. Telefon raqami formatini (masalan, "12345") `padStart` yordamida to'ldirib, "00012345" holiga keltiring.
// let usePadStart = (string) => string.padStart(8, "0");
// console.log(usePadStart("12345"));

//### 9. `repeat`

//1. Berilgan stringni 3 marta ketma-ket takrorlab, natijasini qaytaring.
// function useRepeat(string){
//     return string.repeat(3);
// }
// console.log(useRepeat("bye"));

// 2. `repeat` yordamida stringning har bir belgisini 2 marta takrorlangan yangi string hosil qiling.
// let useRepeat = function(string) {
//     let newString = '';
//     string.split('').forEach(char => {
//         newString += char.repeat(2);
//     });
//     return newString;
// }
// console.log(useRepeat("hello"));

//3. Belgilangan stringni `repeat` yordamida 5 marta takrorlab, har bir takrorlanishni vergul bilan ajratib qo'ying.
// let repeatFunction = (string) => {
//     return (string + ", ").repeat(5).slice(0, -2);
// }
// console.log(repeatFunction("Salom"));


// ### 10. `replace`

// 1. Berilgan stringdan `replace` yordamida faqat birinchi uchrayotgan belgini boshqasiga almashtiring.
// function useReplace(string, searchChar, newChar){
//     return string.replace(searchChar, newChar);
// }
// console.log(useReplace("Salom dunyo!", "!", "$"));

// 2. `replace` yordamida stringdagi birinchi uchragan so'zni boshqasiga o'zgartiring.
// function replaceFirstWord(string, newWord) {
//     string = string.trim();
//         let firstSpaceIndex = string.indexOf(" ");
//         if (firstSpaceIndex === -1) {
//         return newWord;
//     }
//     return newWord + string.slice(firstSpaceIndex);
// }
// console.log(replaceFirstWord("  Hello World!", "Bye"));

// 3. `replace` yordamida stringdagi birinchi uchragan raqamni yulduzcha bilan almashtiring.
// function replaceFirstNumberWithStar(string) {
//     return string.replace(/([0-9])/, '*');
// }
// console.log(replaceFirstNumberWithStar("Dunyo 3 katta, 2 dunyo qiziqarli!"));


// ### 11. `replaceAll`

// 1. `replaceAll` yordamida berilgan stringdagi barcha "a" harflarini "o" harflariga almashtiring.
// function useReplaceAll(string) {
//     return string.replaceAll("a", "o");
// }
// console.log(useReplaceAll("Salom, qandeysizlar?"));

// 2. Matnda bir xil so'z birikmalarini `replaceAll` yordamida boshqa so'zga almashtiring.
// function replaceAllPhrases(string, searchWord, newWord) {
//     return string.replaceAll(searchWord, newWord);
// }
// const result = replaceAllPhrases( "Salom, hamma yaxshimi. Salom!", "Salom", "Xayr");
// console.log(result);

// 3. Foydalanuvchi kirgizgan stringdagi barcha raqamlarni yulduzcha bilan `replaceAll` yordamida almashtiring.
// function replaceAllNumbersWithStar(string) {
//     return string
//         .replaceAll('0', '*')
//         .replaceAll('1', '*')
//         .replaceAll('2', '*')
//         .replaceAll('3', '*')
//         .replaceAll('4', '*')
//         .replaceAll('5', '*')
//         .replaceAll('6', '*')
//         .replaceAll('7', '*')
//         .replaceAll('8', '*')
//         .replaceAll('9', '*');
// }
// console.log(replaceAllNumbersWithStar("Dunyo 3 katta, 2 dunyo qiziqarli!"));


// ### 12. `split`

// 1. Berilgan stringni vergul orqali bo'linib ketadigan qismlarga ajrating va massiv shaklida qaytaring.
// function useSplit(String) {
//     return inputString.split(",");
// }
// const result = useSplit("Salom, dunyo, qiziqarli JavaScript");
// console.log(result); 

// 2. `split` yordamida stringni har bir belgisiga ajratib, massiv hosil qiling.
// function useSplit(useSplit) {
//     return string.split("");
// }
// const result = useSplit("Salom");
// console.log(result); 

// 3. Berilgan stringni bo'sh joylardan ajratib, har bir so'zni alohida massiv elementiga oling.
// function useSplit(string) {
//     return string.split(" ");
// }
// const result = useSplit("Salom dunyo, qiziqarli JavaScript!");
// console.log(result); 


// ### 13. `indexOf`

// 1. Berilgan stringdagi birinchi uchragan belgi yoki so'zning indeksini `indexOf` yordamida toping.
// function useIndexOf(string, searchChar) {
//     return string.indexOf(searchChar);
// }
// console.log(useIndexOf("Salom, dunyo!", "o"));

// 2. Stringda ma'lum bir so'z qayerda ekanligini toping. Agar so'z mavjud bo'lmasa, -1 qaytaring.
// function useIndexOf(string, searchWord) {
//     return string.indexOf(searchWord);
// }
// console.log(useIndexOf("Salom, dunyo! JavaScript qiziqarli JavaScript")); 

// 3. Stringdagi qidirilayotgan belgi birinchi marta nechanchi indeksda uchrayotganligini toping.
// function findCharacterIndex(string, searchChar) {
//     return string.indexOf(searchChar);
// }
// console.log(findCharacterIndex("Salom, dunyo!", "o")); 


// ### 14. `lastIndexOf`

// 1. Berilgan stringdagi belgi yoki so'zning oxirgi marta uchragan joyini `lastIndexOf` yordamida toping.
// function useLastIndexOf(string, searchElement) {
//     const index = string.lastIndexOf(searchElement);
//     return index !== -1 ? index : "Topilmadi";
// }
// console.log(useLastIndexOf("Salom, dunyo! Salom!", "o")); 

// 2. `lastIndexOf` yordamida stringdagi oxirgi bo'sh joyni toping.
// function useLastIndexOf(string) {
//     const index = string.lastIndexOf(" ");
//     return index !== -1 ? index : "Bo'sh joy topilmadi";
// }
// console.log(useLastIndexOf("Salom, dunyo! Salom!"));

// 3. Stringdagi oxirgi marta uchragan raqamning indeksini toping.
// function useLastIndexOf(string) {
//     for (let i = string.length - 1; i >= 0; i--) {
//         if (string[i] >= '0' && string[i] <= '9') {
//             return i;
//         }
//     }
//     return "Raqam topilmadi";
// }
// console.log(useLastIndexOf("Salom 123 dunyo!"));


// ### 15. `includes`

// 1. Berilgan string ichida ma'lum bir so'z yoki belgi borligini `includes` yordamida tekshiring va natijani qaytaring.
// function useIncludes(string, searchWord) {
//     return string.includes(searchWord);
// }
// console.log(useIncludes("Salom, dunyo!", "dunyo"));

// 2. Foydalanuvchi kiritgan stringda raqamlar bor-yo'qligini tekshiring.
// function useIncludes(string) {
//     for (let char of string) {
//         if (char >= '0' && char <= '9') {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(useIncludes("Salom, dunyo!"));

// 3. Stringda kichik yoki katta harflarning biron bir shakli bor-yo'qligini tekshiring.
// function useIncludes(string) {
//     return string.includes("a") || string.includes("b") || string.includes("c") || 
//            string.includes("d") || string.includes("e") || string.includes("f") || 
//            string.includes("g") || string.includes("h") || string.includes("i") || 
//            string.includes("j") || string.includes("k") || string.includes("l") || 
//            string.includes("m") || string.includes("n") || string.includes("o") || 
//            string.includes("p") || string.includes("q") || string.includes("r") || 
//            string.includes("s") || string.includes("t") || string.includes("u") || 
//            string.includes("v") || string.includes("w") || string.includes("x") || 
//            string.includes("y") || string.includes("z") ||
//            string.includes("A") || string.includes("B") || string.includes("C") || 
//            string.includes("D") || string.includes("E") || string.includes("F") || 
//            string.includes("G") || string.includes("H") || string.includes("I") || 
//            string.includes("J") || string.includes("K") || string.includes("L") || 
//            string.includes("M") || string.includes("N") || string.includes("O") || 
//            string.includes("P") || string.includes("Q") || string.includes("R") || 
//            string.includes("S") || string.includes("T") || string.includes("U") || 
//            string.includes("V") || string.includes("W") || string.includes("X") || 
//            string.includes("Y") || string.includes("Z");
// }
// console.log(useIncludes("12345"));