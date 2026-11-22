// =========================================================
// 1\. GALERÍA INTERACTIVA (MODAL DE OBRAS)
// =========================================================

function mostrarModal(tituloObra, descripcionObra) {
    document.getElementById('modal-titulo').innerText = tituloObra;
    document.getElementById('modal-descripcion').innerText = descripcionObra;

    let ventanaModal = document.getElementById('modal-obra');
    ventanaModal.style.display = 'flex';
    }
    
function cerrarModal() {
    let ventanaModal = document.getElementById('modal-obra');
    ventanaModal.style.display = 'none';
} // Cerrar el modal haciendo clic fuera de la caja


window.onclick = function(evento) {
    let ventanaModal = document.getElementById('modal-obra');
    if (evento.target === ventanaModal) {
        ventanaModal.style.display = 'none';
    }
}
// ========================================================= //
// 2\. FILTRO DE CATEGORÍAS DE LA GALERÍA //
// ========================================================= 

function filtrarObras(categoriaElegida) {
    let tarjetas = document.querySelectorAll('.obra-tarjeta');
    let botones = document.querySelectorAll('.boton-filtro'); // Cambiar estado activo en los botones de filtro
    
    botones.forEach(boton => {
    boton.classList.remove('activo');
});

event.target.classList.add('activo');

// Ocultar o mostrar las tarjetas de obras según la categoría

tarjetas.forEach(tarjeta => {
    if (categoriaElegida === 'todas' || tarjeta.classList.contains(categoriaElegida)) {
        tarjeta.style.display = 'flex';
    } else {
        tarjeta.style.display = 'none';
    }
});

}

// =========================================================
// 3\. VALIDACIÓN DEL FORMULARIO DE CONTACTO //
// ========================================================= //

function validarFormulario(evento) {
    evento.preventDefault();
    let nombre = document.getElementById('campo-nombre').value.trim();
    let correo = document.getElementById('campo-correo').value.trim();
    let asunto = document.getElementById('campo-asunto').value.trim();
    let mensaje = document.getElementById('campo-mensaje').value.trim();
    
    let contenedorError = document.getElementById('alerta-error');
    let contenedorExito = document.getElementById('alerta-exito');
    
    contenedorError.classList.add('oculta');
    contenedorExito.classList.add('oculta');
    contenedorError.innerHTML = '';
    
    let listaErrores = [];
    
    if (nombre === '') {
        listaErrores.push('• El campo Nombre es obligatorio.');
    }
    
    if (correo === '' || !correo.includes('@') || !correo.includes('.')) {
        listaErrores.push('• Debes ingresar un correo electrónico válido (ej: usuario@dominio.com).');
    }
    
    if (asunto === '') {
        listaErrores.push('• El campo Asunto es obligatorio.');
    }
    
    if (mensaje.length < 10) {
        listaErrores.push('• El mensaje debe contener al menos 10 caracteres.');
    }
    
    if (listaErrores.length > 0) {
        contenedorError.innerHTML = listaErrores.join('<br />');
        contenedorError.classList.remove('oculta');
    } else {
        contenedorExito.classList.remove('oculta');
        document.getElementById('formulario-contacto').reset();
    }
}