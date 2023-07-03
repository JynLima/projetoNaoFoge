const botaoNao = document.getElementById('nao');

botaoNao.addEventListener('mouseover', moverBotao);

function moverBotao() {
  const parentWidth = this.parentNode.clientWidth;
  const parentHeight = this.parentNode.clientHeight;
  
  const newLeft = Math.random() * (parentWidth - this.clientWidth);
  const newTop = Math.random() * (parentHeight - this.clientHeight);
  
  this.style.left = `${newLeft}px`;
  this.style.top = `${newTop}px`;
}
