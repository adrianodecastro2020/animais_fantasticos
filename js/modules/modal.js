export default function initModal() {
   
  const containerModal = document.querySelector('[data-modal="container"]');
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar  = document.querySelector('[data-modal="fechar"]');
  
  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }
  function clickForaModal(event) {
    if (event.target === this)
      toggleModal(event);
  }
  if (containerModal && botaoAbrir && botaoFechar){ 
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickForaModal);
  }
}