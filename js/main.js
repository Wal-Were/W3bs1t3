document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-btn');
  const tabs = document.querySelectorAll('.tab-content');
  const body = document.body;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Clear active state
      buttons.forEach(b => b.classList.remove('active'));
      tabs.forEach(t => t.classList.remove('active'));

      // Activate clicked tab
      btn.classList.add('active');
      document.getElementById(btn.dataset.target).classList.add('active');

      // Change background color
      body.style.backgroundColor = btn.dataset.color;
    });
  });
});
