//  Преобразование объекта в JSON
const person = {
  name: "Alice",
  age: 23,
  profession: "Dragon knight",
  isKnight: false,
  hobbies: ["sword", "dragons", "dungeons fighting"],
};
const json = JSON.stringify(person);

//  Преобразование JSON в объект (deserialization)
const obj = JSON.parse(json);
