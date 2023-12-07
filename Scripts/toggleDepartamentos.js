document.addEventListener('DOMContentLoaded', function() {
    var miBoton = document.getElementById('miBoton');
    var panelIzquierdo = document.querySelector('.panel-izquierdo');
  
    miBoton.addEventListener('click', function() {
      if (panelIzquierdo.style.display === 'none' || panelIzquierdo.style.display === '') {
        panelIzquierdo.style.display = 'block';
      } else {
        panelIzquierdo.style.display = 'none';
      }
    });
  });
  