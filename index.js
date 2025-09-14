document.addEventListener("DOMContentLoaded", () => {
  // 1. Обработка отправки формы
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", handleFormSubmit);

  // 2. Плавная прокрутка
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => link.addEventListener("click", smoothScroll));
});

// Функции:
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('input[placeholder="Ваше имя"]').value;
  const phone = form.querySelector('input[placeholder="Телефон"]').value;
  const problem = form.querySelector('input[placeholder="опишите проблему"]').value;

  if (!name || !phone || !problem) {
    alert("Заполните все поля!");
    return;
  }

  console.log({ name, phone, problem });
  alert("Заявка отправлена!");
  form.reset();
}

function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href").substring(1);
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

