
// Бургер-меню
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}

// Галерея (горизонтальная прокрутка)
function scrollGallery(direction) {
  const slider = document.getElementById("gallerySlider");
  const card = slider.querySelector(".gallery-card");
  if (!card) return;
  const cardWidth = card.offsetWidth + 20;
  slider.scrollLeft += direction * cardWidth * 2;
}

// Отзывы (горизонтальная прокрутка)
function scrollReviews(direction) {
  const slider = document.getElementById("reviewsSlider");
  const card = slider.querySelector(".review-card");
  if (!card) return;
  const cardWidth = card.offsetWidth + 20;
  slider.scrollLeft += direction * cardWidth * 2;
}
function scrollReviews(direction) {
  const slider = document.getElementById("reviewsSlider");
  const card = slider.querySelector(".review-card");
  if (!card) return;
  const cardWidth = card.offsetWidth + 20;
  slider.scrollLeft += direction * cardWidth;
}
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('navMenu');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
//Quiz
const questions = [
  {
    text: "Какой у вас ковер?",
    options: [
      "Синтетика / Шерсть / Палаc",
      "Шёлк / Ручная работа",
      "Травка / Вискоза / Гобелен",
      "Не знаю — выберет технолог"
    ]
  },
  {
    text: "Какая площадь ковра?",
    options: [
      "До 5 м²", "5–10 м²", "10–20 м²", "Более 20 м²"
    ]
  },
  {
    text: "Какие пятна нужно удалить?",
    options: [
      "Жир / Еда", "Моча / Запах", "Краска / Кровь", "Обычное загрязнение"
    ]
  },
  {
    text: "Где вы находитесь?",
    options: [
      "Москва", "МО", "Другой город", "Неважно"
    ]
  },
  {
    text: "Какой способ получения услуги?",
    options: [
      "Самовывоз и доставка",
      "Приезжаете сами",
      "Нужно объяснение"
    ]
  }
];

let currentStep = 0;
const answers = [];

const questionStep = document.getElementById('question-step');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

function renderQuestion() {
  const question = questions[currentStep];

  let html = `<div class="question-title">Вопрос ${currentStep + 1} из ${questions.length}<br>${question.text}</div>`;
  html += '<div class="options">';
  question.options.forEach((opt, i) => {
    html += `<div class="option" data-index="${i}">${opt}</div>`;
  });
  html += '</div>';

  questionStep.innerHTML = html;

  document.querySelectorAll('.option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      answers[currentStep] = opt.innerText;
    });
  });

  backBtn.style.display = currentStep > 0 ? 'inline-block' : 'none';
  nextBtn.innerText = currentStep === questions.length - 1 ? 'Далее' : 'Следующий вопрос';
}

function renderForm() {
  questionStep.innerHTML = `
    <div class="question-title">Отлично, остался один шаг!<br>Оставьте свои данные:</div>
    <input type="text" id="name" placeholder="Имя">
    <input type="tel" id="phone" placeholder="Телефон">
    <small>Нажимая на кнопку, вы соглашаетесь с <a href="#" target="_blank">Политикой конфиденциальности</a>.</small>
  `;

  nextBtn.innerText = 'Отправить заявку';
  backBtn.style.display = 'inline-block';
}

nextBtn.addEventListener('click', () => {
  if (currentStep < questions.length) {
    if (answers[currentStep]) {
      currentStep++;
      if (currentStep < questions.length) {
        renderQuestion();
      } else {
        renderForm();
      }
    } else {
      alert('Пожалуйста, выберите вариант.');
    }
  } else {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (name && phone) {
      const text = `Здравствуйте! Хочу рассчитать цену:%0A` +
        questions.map((q, i) => `❓ ${q.text}%0A✅ ${answers[i]}`).join('%0A') +
        `%0A👤 Имя: ${name}%0A📞 Телефон: ${phone}`;

      const phoneNumber = "87077498423"; // например: 79876543210
      window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  }
});

backBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    renderQuestion();
  }
});

renderQuestion();