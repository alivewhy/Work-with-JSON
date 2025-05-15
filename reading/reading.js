const fs = require("fs");
const path = require("path");

try {
  const jsonContent = fs.readFileSync(
    path.join(__dirname, "info.json"),
    "utf8",
  );
  const data = JSON.parse(jsonContent);
  console.log("Содержимое файла info.json:", data);
} catch (error) {
  console.error("Ошибка при чтении файла:", error.message);
}
