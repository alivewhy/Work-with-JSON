const fs = require("fs");
const path = require("path");

const newPerson = {
  name: "Ancel",
  age: 28,
};

try {
  fs.writeFileSync(
    path.join(__dirname, "info.json"),
    JSON.stringify(newPerson, null, 2),
    "utf8",
  );
  console.log("Файл info.json успешно записан");
} catch (error) {
  console.error("Ошибка при записи файла:", error.message);
}
