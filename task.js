function checkTasks() {
    const repostCheckbox = document.getElementById("repost-checkbox");
    const resultDiv = document.getElementById("result");

    let discount = 0;

    if (repostCheckbox.checked) {
      discount -= 4000;
      resultDiv.innerHTML = "Вы выполнили задание: репост -4000тг.";
    } else {
      resultDiv.innerHTML = "Необходимо выполнить задание: репост.";
      return; // Прерываем выполнение, так как другие задания зависят от репоста
    }

    // Дополнительные задания
    // ...

    // Отображаем общую скидку
    const totalPrice = 9000 + discount;
    resultDiv.innerHTML += `<br>Итоговая цена: ${totalPrice}тг.`;
  }