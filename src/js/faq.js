document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const currentItem = question.closest('.faq-list-item');

    // Закриваємо всі інші
    document.querySelectorAll('.faq-list-item').forEach(item => {
      if (item !== currentItem) {
        item.classList.remove('active');
      }
    });

    // Перемикаємо поточний
    currentItem.classList.toggle('active');
  });
});
