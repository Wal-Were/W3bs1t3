document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-btn');
  const tabs = document.querySelectorAll('.tab-content');
  const body = document.body;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      tabs.forEach(t => t.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(btn.dataset.target).classList.add('active');

      body.style.backgroundColor = btn.dataset.color;
    });
  });

  // === Project Tab Switching ===
  const projBtns = document.querySelectorAll('.proj-btn');
  const projGroups = document.querySelectorAll('.project-group');

  projBtns.forEach(pbtn => {
    pbtn.addEventListener('click', () => {
      projBtns.forEach(pb => pb.classList.remove('active'));
      projGroups.forEach(pg => pg.classList.remove('active'));

      pbtn.classList.add('active');
      document.getElementById(pbtn.dataset.project).classList.add('active');
    });
  });
});
