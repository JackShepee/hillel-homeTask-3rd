const hours = prompt("Введіть кількість годин");

if (isNaN(hours) || hours < 0 || !hours) {
  alert("Введіть вірну кількість годин!");
} else {
  let seconds = hours * 3600;
  alert(`У ${hours} годинах ${seconds} секунд!`);
}
