//  Преобразование объекта в JSON
const character = {
  name: "Alice",
  age: 23,
  profession: "Dragon knight",
  isKnight: false,
  hobbies: ["sword", "dragons", "dungeons fighting"],
  login: "Alice_dragon2002",
  password: "4314124512",
};
const json = JSON.stringify(character);

//  Преобразование JSON в объект (deserialization)
const obj = JSON.parse(json);

// Фильтрация данных при сериализации
const filteredJson = JSON.stringify(character, (key, value) => {
  if (key === "password") {
    return undefined;
  } else {
    return value;
  }
});

// сериализация с преобразованием значений
const laptop = {
  brand: "Apple",
  model: "MacBook Pro",
  price: 1999.99,
  releaseDate: new Date("2023-01-01"),
};
const jsonWithReplacer = JSON.stringify(laptop, (key, value) => {
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value;
});
