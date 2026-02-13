console.log("App iniciada...");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => console.log("Datos cargados:", data))
  .catch((error) => console.error("Error cargando data.json:", error));
