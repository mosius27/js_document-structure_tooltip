document.addEventListener("DOMContentLoaded", function () {
  // Находим все элементы с классом "has-tooltip"
  const tooltips = document.querySelectorAll(".has-tooltip");

  // Перебираем найденные элементы
  tooltips.forEach((tooltip) => {
    // Создаем элемент подсказки
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "tooltip";
    tooltipElement.textContent = tooltip.getAttribute("title");

    // Удаляем атрибут "title", чтобы браузер не показывал стандартную подсказку
    tooltip.removeAttribute("title");

    // Добавляем обработчик события клика на элемент
    tooltip.addEventListener("click", function (event) {
      event.preventDefault(); // Предотвращаем переход по ссылке

      // Получаем позицию ссылки
      const linkRect = tooltip.getBoundingClientRect();

      // Устанавливаем позицию подсказки рядом с ссылкой
      tooltipElement.style.position = "absolute";
      tooltipElement.style.left = linkRect.left + "px";
      tooltipElement.style.top = linkRect.bottom + "px";

      // Добавляем класс для отображения подсказки
      tooltipElement.classList.toggle("tooltip_active");
    });

    // Добавляем подсказку к body вне ссылки
    document.body.appendChild(tooltipElement);
  });
});