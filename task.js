document.addEventListener("DOMContentLoaded", function () {
    // Находим все элементы с классом "has-tooltip"
    const tooltips = document.querySelectorAll(".has-tooltip");
  
    // Перебираем найденные элементы
    tooltips.forEach((tooltip) => {
      // Создаем элемент подсказки
      const tooltipElement = document.createElement("div");
      tooltipElement.className = "tooltip";
  
      // Устанавливаем текст подсказки из атрибута "title"
      tooltipElement.textContent = tooltip.getAttribute("title");
  
      // Скрываем подсказку по умолчанию
      tooltipElement.style.display = "none";
  
      // Добавляем подсказку к элементу
      tooltip.appendChild(tooltipElement);
  
      // Добавляем обработчик события клика на элемент
      tooltip.addEventListener("click", function (event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
  
        // Переключаем видимость подсказки при клике
        if (tooltipElement.style.display === "none" || tooltipElement.style.display === "") {
          tooltipElement.style.display = "block";
        } else {
          tooltipElement.style.display = "none";
        }
      });
  
      // Удаляем атрибут "title", чтобы браузер не показывал стандартную подсказку
      tooltip.removeAttribute("title");
    });
  });