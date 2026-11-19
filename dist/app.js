document.querySelectorAll('.stage').forEach((stage) => {
  stage.addEventListener('toggle', () => {
    if (stage.open) stage.querySelector('summary').setAttribute('aria-expanded', 'true');
    else stage.querySelector('summary').setAttribute('aria-expanded', 'false');
  });
});
