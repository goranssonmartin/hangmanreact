const words = ["hej", "hejsan", "hallå"];
let charArray = () => words[Math.floor(Math.random() * 3)].split("");
//let correctWord = (word) => word.join("");

export {charArray};
