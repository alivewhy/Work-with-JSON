const person = {
  name: "Alice",
  age: 23,
  profession: "Dragon knight",
  isKnight: false,
  hobbies: ["sword", "dragons", "dungeons fighting"],
};

function prettyJsonStringify(obj, indent = 2) {
  return JSON.stringify(obj, null, indent);
}

// безопасный парсинг JSON
function safeJsonParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
}

// проверка на валидность JSON
function isValidJson(jsonString) {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (error) {
    return false;
  }
}
