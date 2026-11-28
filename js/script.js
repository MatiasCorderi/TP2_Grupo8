// Esperar a que el DOM esté completamente cargado (Clase 07)
document.addEventListener('DOMContentLoaded', function() {
    // 1\. CAPTURA DE ELEMENTOS DEL DOM (Clase 07)
    
    let modal = document.querySelector('#modal-obra');
    let modalTitulo = document.querySelector('#modal-titulo');
    let modalDescripcion = document.querySelector('#modal-descripcion'); 
    let modalImagen = document.querySelector('#modal-imagen');
    let btnCerrarModal = document.querySelector('#btn-cerrar-modal');
    let botonesDetalle = document.querySelectorAll('.btn-detalle');
    let botonesFiltro = document.querySelectorAll('.boton-filtro');
    let tarjetasObra = document.querySelectorAll('.tarjeta-obra');
    
    // 2\. ESTRUCTURA DE DATOS PARA LAS OBRAS (Clases 09 y 10)
    
    let obras = [ { titulo: 'La Cordillera (1999)',
        descripcion: 'Óleo monumental adquirido por el Banco Central de Austria (OeNB) que marcó un hito en su consagración europea.',
        imagen: 'img/cordillera.jpg',
        esMontana: true,
        esMar: false,
        esMonumental: true },
        
        { titulo: 'El Mar II (2005)',
            descripcion: 'Pintura monumental basada en el Océano Atlántico. Vendida por USD 865.000 en 2010 a un grupo español.',
            imagen: 'img/mar_2.jpg',
            esMontana: false,
            esMar: true,
            esMonumental: true },
            
            { titulo: 'Cosmigonon (2016)',
                descripcion: 'Considerada su obra cumbre, fue adquirida en Europa por USD 1.500.000 marcando la cotización más alta para un artista argentino vivo.',
                imagen: 'img/cosmigonon.jpg',
                esMontana: true,
                esMar: false,
                esMonumental: true },
                
                { titulo: 'Glaciar Perito Moreno (2017)',
                    descripcion: 'Lienzo monumental de 12 x 2 metros que retrata la inmensidad del glaciar patagónico.',
                    imagen: 'img/perito_moreno.webp',
                    esMontana: true,
                    esMar: false,
                    esMonumental: true },
                    
                    { titulo: 'Point Of No Return II (2005)',
                        descripcion: 'Pintada tras una larga expedición en la cordillera austríaca de Nordkette en los Alpes del Tirol.',
                        imagen: 'img/retorno_2.jpg',
                        esMontana: true,
                        esMar: false,
                        esMonumental: false },
                        
                        { titulo: 'The Triumph Of Nature (2005)',
                            descripcion: 'Exposición emblemática que reúne grandes lienzos sobre agua, hielo y desiertos expuestos en Viena.',
                            imagen: 'img/naturaleza.jpg',
                            esMontana: false,
                            esMar: true,
                            esMonumental: false } ];
                            
                            // 3\. EVENTOS DE LA VENTANA MODAL (Clases 07 y 11)
                            
                            if (botonesDetalle.length > 0) {
                                botonesDetalle.forEach(function(boton, indice) {
                                    boton.addEventListener('click', function() {
                                        let obra = obras[indice];
                                        if (obra) {
                                            if (modalTitulo) {
                                                modalTitulo.innerText = obra.titulo; }
                                                
                                                if (modalDescripcion) {
                                                    modalDescripcion.innerText = obra.descripcion; }
                                                    if (modalImagen) { modalImagen.src = obra.imagen; }
                                                    if (modal) {
                                                        modal.style.display = 'flex';
                                                    }
                                                }
                                            });
                                        });
                                    }
                                    
                                    if (btnCerrarModal) {
                                        btnCerrarModal.addEventListener('click', function() {
                                            if (modal) {
                                                modal.style.display = 'none';
                                            }
                                        });
                                    }
                                    
                                    window.addEventListener('click', function(evento) {
                                        if (modal && evento.target === modal) {
                                            modal.style.display = 'none';
                                        }
                                    });
                                    
                                    // 4\. FILTRADO DE CATEGORÍAS (Clases 08, 09, 11 y 14)
                                    
                                    if (botonesFiltro.length > 0) {
                                    botonesFiltro.forEach(function(boton, indiceBoton) {
                                    boton.addEventListener('click', function() {
                                    botonesFiltro.forEach(function(b) {
                                    b.classList.remove('activo');
                                    });
                                    
                                    this.classList.add('activo');
                                    tarjetasObra.forEach(function(tarjeta, indiceTarjeta) {
                                        
                                        let obra = obras[indiceTarjeta];

                                        if (obra) {
                                            if (indiceBoton === 0) {
                                            tarjeta.style.display = 'flex';
                                        } else if (indiceBoton === 1 && obra.esMontana) {
                                            tarjeta.style.display = 'flex';
                                        } else if (indiceBoton === 2 && obra.esMar) { 
                                            
                                            tarjeta.style.display = 'flex';
                                            } else if (indiceBoton === 3 && obra.esMonumental) {
                                                tarjeta.style.display = 'flex';
                                            } else {
                                                tarjeta.style.display = 'none';
                                            }
                                        }
                                    });
                                });
                            });
                        } // 5\. VALIDACIÓN DEL FORMULARIO DE CONTACTO (Clases 07, 08, 14 y 22)
                        
                        let formulario = document.querySelector('#formulario-contacto');
                        
                        if (formulario) {
                            formulario.addEventListener('submit', function(evento) {
                                evento.preventDefault();
                                // Evita que la página se recargue (Clases 07 y 22)

                                let inputNombre = document.querySelector('#campo-nombre');
                                let inputCorreo = document.querySelector('#campo-correo');
                                let inputAsunto = document.querySelector('#campo-asunto');
                                let inputMensaje = document.querySelector('#campo-mensaje');
                                let alertaError = document.querySelector('#alerta-error');
                                let alertaExito = document.querySelector('#alerta-exito');
                                let nombre = inputNombre ? inputNombre.value.trim() : '';
                                let correo = inputCorreo ? inputCorreo.value.trim() : '';
                                let asunto = inputAsunto ? inputAsunto.value.trim() : '';
                                let mensaje = inputMensaje ? inputMensaje.value.trim() : '';
                                let errores = [];
                                if (nombre === '') {
                                    errores.push('El campo Nombre es obligatorio.');
                                }
                                if (correo === '' || !correo.includes('@') || !correo.includes('.com')) {
                                    errores.push('Ingresa un correo electrónico válido (debe contener "@" y ".com").');
                                }
                                if (asunto === '') {
                                    errores.push('El campo Asunto no puede estar vacío.');
                                }
                                if (mensaje.length < 10) {
                                    errores.push('El mensaje debe contener al menos 10 caracteres.');
                                }
                                if (errores.length > 0) {
                                    if (alertaError) {
                                        alertaError.innerHTML = errores.join('<br />');
                                        alertaError.classList.remove('oculta');
                                    }
                                    if (alertaExito) {
                                        alertaExito.classList.add('oculta');
                                    }
                                } else {
                                    if (alertaExito) {
                                        alertaExito.classList.remove('oculta');
                                    }
                                    if (alertaError) {
                                        alertaError.classList.add('oculta');
                                    }
                                    formulario.reset();
                                }
                            });
                        }
                    })