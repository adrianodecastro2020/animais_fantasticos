export default class Modal {

  constructor(containerModal, botaoAbrir, botaoFechar) {
    this.containerModal = document.querySelector(containerModal);
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar  = document.querySelector(botaoFechar);

    // bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }
  // abre ou fehca o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }
  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }
  // fecha o modal ao clicar do lado de fora
  clickForaModal(event) {
    if (event.target === this.containerModal)
      this.toggleModal();
  }
  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickForaModal);
  }
  init() {
    if (this.containerModal && this.botaoAbrir && this.botaoFechar) {
      this.addModalEvents();
    }
    return this;
  }    
}