const btnFunc = document.getElementById('btnFun');

btnFunc.addEventListener('click', () => {
  const local = document.getElementById('Carousel');
  const FistButton = document.getElementById("Card1");

  local.scrollIntoView({ behavior: 'smooth' });

  FistButton.classList.add("highlight")
  setTimeout(() => {
    FistButton.classList.remove("highlight");
  }, 3000);
});
/*---------------------------------------------------------*/
const ViewMore = document.getElementById("view")
const Hidden = document.getElementById("hidden")

let visible = false
ViewMore.addEventListener("click", () => {
  if (!visible) {
    Hidden.style.display = 'block';
    ViewMore.textContent = 'Ver Menos';
    visible = true;
  } else {
    Hidden.style.display = 'none';
    ViewMore.textContent = "Ver Mais";
    visible = false
  }
})
/*---------------------------------------------------------*/
const btnpage = document.getElementById('topage')
btnpage.addEventListener('click', function () {
  window.open('https://rocampos.github.io/aulas/designweb-2025/projetos/projeto1.html', '_blank');
})
