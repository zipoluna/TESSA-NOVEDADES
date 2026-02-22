// BASE DE DATOS DE PRODUCTOS
//talles: ["S", "M", "L"]
const productos = [
    { id: 1, nombre: "Cinto 001", categoria: "accesorios", precio: 1500, fotos: ["assets/accesorios/cinto-001.jpg"] },
    { id: 2, nombre: "Cinto 002", categoria: "accesorios", precio: 1500, fotos: ["assets/accesorios/cinto-002.jpg"] },
    { id: 3, nombre: "Touch 36 Pcs", categoria: "arteypinceles", precio: 2500, fotos: ["assets/arteypinceles/touch-36pcs.jpg"] },
    { id: 4, nombre: "Touch 48 Pcs", categoria: "arteypinceles", precio: 3200, fotos: ["assets/arteypinceles/touch-48pcs.jpg"] },
    { id: 5, nombre: "Salida 001", categoria: "baño", precio: 3500, fotos: ["assets/baño/salida-001.jpg"] },
    { id: 6, nombre: "Salida 002", categoria: "baño", precio: 3500, fotos: ["assets/baño/salida-002.jpg"] },
    { id: 7, nombre: "Set 3 Piezas 001", categoria: "baño", precio: 4000, fotos: ["assets/baño/set3-001.jpg"] },
    { id: 8, nombre: "Set 3 Piezas 002", categoria: "baño", precio: 4000, fotos: ["assets/baño/set3-002.jpg"] },
    { id: 9, nombre: "Set Guampa 001", categoria: "bazzarytradicion", precio: 2800, fotos: ["assets/bazzarytradicion/setguampa-001.jpg"] },
    { id: 10, nombre: "Set Guampa 002", categoria: "bazzarytradicion", precio: 2800, fotos: ["assets/bazzarytradicion/setguampa-002.jpg"] },
    { id: 11, nombre: "Camiseta Cerro 24/25", categoria: "camisetas", precio: 4500, fotos: ["assets/camisetas/cam-cerro2425-001.jpg"] },
    { id: 12, nombre: "Camiseta Paraguay 24/25", categoria: "camisetas", precio: 4500, fotos: ["assets/camisetas/cam-paraguay2425-001.jpg"] },
    { id: 13, nombre: "Conjunto 001", categoria: "conjuntos", precio: 6000, fotos: ["assets/conjuntos/conjunto-001.jpg"] },
    { id: 14, nombre: "Conjunto 002", categoria: "conjuntos", precio: 6000, fotos: ["assets/conjuntos/conjunto-002.jpg"] },
    { id: 15, nombre: "Conjunto 003", categoria: "conjuntos", precio: 6000, fotos: ["assets/conjuntos/conjunto-003.jpg"] },
    { id: 16, nombre: "Conjunto 004", categoria: "conjuntos", precio: 6000, fotos: ["assets/conjuntos/conjunto-004.jpg"] },
    { id: 17, nombre: "Mochi Dama 001", categoria: "mochilas", precio: 5000, fotos: ["assets/mochilas/mochi-dam-001.jpg"] },
    { id: 18, nombre: "Mochi Dama 002", categoria: "mochilas", precio: 5000, fotos: ["assets/mochilas/mochi-dam-002.jpg"] },
    { id: 19, nombre: "Mochi Pikachu 001", categoria: "mochilas", precio: 5500, fotos: ["assets/mochilas/mochi-pikachu-001.jpg"] },
    { id: 20, nombre: "Mochi Pikachu 002", categoria: "mochilas", precio: 5500, fotos: ["assets/mochilas/mochi-pikachu-002.jpg"] },
    { id: 21, nombre: "Angel SV", categoria: "peluches", precio: 3000, fotos: ["assets/peluches/angel-sv.jpg"] },
    { id: 22, nombre: "Stitch SV", categoria: "peluches", precio: 3000, fotos: ["assets/peluches/stitch-sv.jpg"] },
    { id: 23, nombre: "Oversize M001", categoria: "remeras", precio: 3500, fotos: ["assets/remeras/oversize-m001-frente.jpg", "assets/remeras/oversize-m001-atras.jpg"] },
    { id: 24, nombre: "Oversize M002", categoria: "remeras", precio: 3500, fotos: ["assets/remeras/oversize-m002-frente.jpg", "assets/remeras/oversize-m002-atras.jpg"] },
    { id: 25, nombre: "Short Dama 001", categoria: "shorts", precio: 2000, fotos: ["assets/shorts/short-dama-m001.jpg"] },
    { id: 26, nombre: "Short Dama 002", categoria: "shorts", precio: 2000, fotos: ["assets/shorts/short-dama-m002.jpg"] },
    { id: 27, nombre: "Set Stanley Rojo", categoria: "termos", precio: 12000, fotos: ["assets/termos/set-stanley-rojo.jpg"] },
    { id: 28, nombre: "Set Stanley Violeta", categoria: "termos", precio: 12000, fotos: ["assets/termos/set-stanley-violeta.jpg"] },
    { id: 29, nombre: "Vestido M01", categoria: "vestidos", precio: 8000, fotos: ["assets/vestidos/vestido-m01.jpg"] },
    { id: 30, nombre: "Vestido M02", categoria: "vestidos", precio: 8000, fotos: ["assets/vestidos/vestido-m02.jpg"] },
    { id: 31, nombre: "Dama Marrón", categoria: "zapateria", precio: 9500, fotos: ["assets/zapateria/dama-m001-marron.jpg"] },
    { id: 32, nombre: "Dama Negro", categoria: "zapateria", precio: 9500, fotos: ["assets/zapateria/dama-m001-negro.jpg"] },
];

// variables globales
let fotosActuales = [];
let indiceActual = 0;
let productosMostrados = [...productos]; 
let carrito = JSON.parse(localStorage.getItem('carrito_tessa')) || []; // 1 & 3: Cargar del LocalStorage al inicio

// mostrar productos
function mostrarProductos(lista) {
    productosMostrados = lista; 
    const contenedor = document.getElementById("contenedor-productos");
    if(!contenedor) return;
    
    contenedor.innerHTML = "";
    
    if (lista.length === 0) {
    contenedor.innerHTML = `
        <div class="col-12 d-flex justify-content-center align-items-center mensaje-no-resultados">
            <div class="text-center py-5">
                <i class="bi bi-search text-muted" style="font-size: 3rem; display: block; margin-bottom: 15px;"></i>
                <h3 class="fw-bold">No se encontraron productos</h3>
                <p class="text-muted">Intenta con otra palabra o categoría</p>
                <button class="btn btn-danger rounded-pill mt-3" onclick="volverInicio()">Ver todo el catálogo</button>
            </div>
        </div>`;
    return;
}
    
    lista.forEach((p, i) => {
        let selectTalles = "";
        if (p.talles && p.talles.length > 0) {
            selectTalles = `
                <select id="talle-${p.id}" class="form-select form-select-sm mb-2 border-danger-subtle shadow-sm" style="font-size: 0.8rem;">
                    <option value="" selected disabled>Elegir talle...</option>
                    ${p.talles.map(t => `<option value="${t}">${t}</option>`).join('')}
                </select>`;
        } else {
            selectTalles = `<div style="height: 31px;"></div>`; 
        }

        const card = `
            <div class="col">
                <div class="card shadow-sm h-100">
                    <img src="${p.fotos[0]}" class="card-img-top" onclick="abrirGaleria(${i})">
                    <div class="card-body p-3">
                        <small class="text-muted fw-bold text-uppercase" style="font-size: 0.7rem;">${p.categoria}</small>
                        <h6 class="fw-bold my-1 text-truncate">${p.nombre}</h6>
                        <p class="fw-bold fs-5 mb-2 text-danger">${Number(p.precio).toLocaleString('es-PY')} Gs.</p>
                        ${selectTalles}
                        <button class="btn btn-sm w-100 fw-bold border-danger text-danger bg-white btn-agregar" 
                                onclick="agregarAlCarritoConTalle(${p.id}, this)">
                            + AGREGAR
                        </button>
                    </div>
                </div>
            </div>`;
        contenedor.innerHTML += card;
    });
}

// carrito con talles
function agregarAlCarritoConTalle(id, elementoBtn) {
    const producto = productos.find(p => p.id === id);
    const select = document.getElementById(`talle-${id}`);
    let talleElegido = "N/A";

    if (select && select.options.length > 1) {
        if (select.value === "") {
            mostrarAviso("Por favor, selecciona un talle.");
            return;
        }
        talleElegido = select.value;
    }

    elementoBtn.classList.add('animar-click');
    setTimeout(() => elementoBtn.classList.remove('animar-click'), 400);

    carrito.push({ ...producto, talleSeleccionado: talleElegido });
    
    localStorage.setItem('carrito_tessa', JSON.stringify(carrito));
    
    actualizarBarraCarrito();
}

function actualizarBarraCarrito() {
    const barra = document.getElementById("barra-carrito");
    const cantidad = document.getElementById("cantidad-items");
    
    const modalAbierto = document.getElementById('modalCarrito').classList.contains('show');

    if (carrito.length > 0) {
        cantidad.innerText = carrito.length;
        
        if (!modalAbierto) {
            barra.style.display = "flex";
            setTimeout(() => barra.classList.add("activa"), 10);
        } else {
            // Si el modal está abierto, mantenemos la barra oculta
            barra.classList.remove("activa");
            barra.style.display = "none";
        }
    } else {
        // Si el carrito está vacío, ocultamos todo
        barra.classList.remove("activa");
        setTimeout(() => barra.style.display = "none", 300);
    }
}

// ver carrito
function verResumen() {
    if (carrito.length === 0) return;
    const lista = document.getElementById("lista-carrito-resumen");
    const totalTxt = document.getElementById("total-resumen");
    const barra = document.getElementById("barra-carrito");
    
    barra.classList.remove("activa");
    lista.innerHTML = ""; 
    let total = 0;

    carrito.forEach((p, index) => {
        total += p.precio;
        let talleDisplay = p.talleSeleccionado !== "N/A" ? `<small class="d-block text-muted">Talle: ${p.talleSeleccionado}</small>` : "";
        
        lista.innerHTML += `
            <div class="d-flex justify-content-center align-items-center mb-3 border-bottom pb-2">
                <div class="d-flex align-items-center flex-grow-1">
                    <img src="${p.fotos[0]}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px;" class="me-3 border">
                    <div>
                        <span class="fw-bold d-block" style="font-size: 0.9rem;">${p.nombre}</span>
                        ${talleDisplay}
                        <small class="text-danger fw-bold">${p.precio.toLocaleString('es-PY')} Gs.</small>
                    </div>
                </div>
                <button class="btn btn-sm" onclick="eliminarDelCarrito(${index}); event.stopPropagation();">
                    <i class="bi bi-trash3 text-danger"></i>
                </button>
            </div>`;
    });

    totalTxt.innerText = total.toLocaleString('es-PY') + " Gs.";
    const myModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('modalCarrito'));
    myModal.show();

    // Evento para devolver la barra al cerrar
    const modalEl = document.getElementById('modalCarrito');
    modalEl.removeAllListeners && modalEl.removeAllListeners('hidden.bs.modal');
    modalEl.addEventListener('hidden.bs.modal', function () {
        if (carrito.length > 0) {
            actualizarBarraCarrito();
        }
    });
}

// eliminar del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito_tessa', JSON.stringify(carrito));
    
    actualizarBarraCarrito(); 
    
    if (carrito.length > 0) {
        verResumen(); 
    } else {
        const modalEl = document.getElementById('modalCarrito');
        const modalInst = bootstrap.Modal.getInstance(modalEl);
        if(modalInst) modalInst.hide();
    }
}

// finalizar pedido
function finalizarPedido() {
    if (carrito.length === 0) return;

    const btnFinalizar = document.querySelector(".btn-finalizar-ws");
    const regexSeguro = /[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ. ]/g;
    const nombre = document.getElementById("nombre-cliente").value.replace(regexSeguro, "").trim();
    const ciudad = document.getElementById("ciudad-cliente").value.replace(regexSeguro, "").trim();
    const metodo = document.querySelector('input[name="metodoEntrega"]:checked').value;

    if (!nombre) {
        mostrarAviso("Por favor, completa tu nombre 😊");
        return;
    }

    if (metodo === "Envío a domicilio" && !ciudad) {
        mostrarAviso("Indica la ciudad para el envío 🚚");
        return;
    }

    if(btnFinalizar) btnFinalizar.innerHTML = '<span class="spinner-border spinner-border-sm" role="status"></span> Enviando...';

    const tel = "595981229871";
    let mensaje = "✨ *NUEVO PEDIDO TESSA* ✨\n\n";
    mensaje += `👤 *Cliente:* ${nombre}\n`;
    mensaje += `🚚 *Entrega:* ${metodo}\n`;
    if(ciudad) mensaje += `📍 *Ciudad:* ${ciudad}\n`;
    mensaje += "--------------------------\n\n";
    
    let total = 0;
    const urlBase = window.location.href.split('index.html')[0];

    carrito.forEach((p) => {
        let talleInfo = p.talleSeleccionado !== "N/A" ? ` [Talle: ${p.talleSeleccionado}]` : "";
        mensaje += `🛒 *${p.nombre}${talleInfo}*\n💰 ${p.precio.toLocaleString('es-PY')} Gs.\n🔗 ${urlBase}${p.fotos[0]}\n\n`;
        total += p.precio;
    });

    mensaje += `🛍️ *TOTAL:* ${total.toLocaleString('es-PY')} Gs.\n\n`;
    mensaje += "Me gustaría confirmar disponibilidad. ¡Gracias! ✨";

    setTimeout(() => {
        window.open(`https://wa.me/${tel}?text=${encodeURIComponent(mensaje)}`, '_blank');
        
        carrito = [];
        localStorage.removeItem('carrito_tessa');
        actualizarBarraCarrito();
        
        if(btnFinalizar) btnFinalizar.innerHTML = 'WhatsApp <i class="bi bi-whatsapp"></i>';
        const modalInst = bootstrap.Modal.getInstance(document.getElementById('modalCarrito'));
        if(modalInst) modalInst.hide();
        
        mostrarAviso("¡Pedido enviado con éxito! 🚀");
    }, 1200);
}

// funciones de galería
function abrirGaleria(indice) {
    const producto = productosMostrados[indice];
    if (!producto || !producto.fotos) return;

    fotosActuales = producto.fotos; 
    indiceActual = 0;
    
    const modal = document.getElementById("modal-imagen");
    modal.style.display = "flex";
    
    document.getElementById("caption").innerText = producto.nombre;
    
    actualizarModal();
}

function actualizarModal() {
    const imgGrande = document.getElementById("img-grande");
    const puntosContenedor = document.getElementById("modal-puntos-contenedor");
    
    imgGrande.src = fotosActuales[indiceActual];
    
    puntosContenedor.innerHTML = "";
    
    if (fotosActuales.length > 1) {
        fotosActuales.forEach((_, i) => {
            const punto = document.createElement("div");
            punto.className = `punto-nav ${i === indiceActual ? 'activo' : ''}`;
            
            punto.onclick = (e) => {
                e.stopPropagation();
                indiceActual = i;
                actualizarModal();
            };
            puntosContenedor.appendChild(punto);
        });
    }
}

function cerrarModal() { document.getElementById("modal-imagen").style.display = "none"; }

function filtrar(e, cat) {
    const filtrados = cat === 'todos'
        ? productos
        : productos.filter(p => p.categoria === cat);

    mostrarProductos(filtrados);

    document.querySelectorAll('#filtros .btn').forEach(btn => {
        btn.classList.remove('btn-danger', 'active');
        btn.classList.add('btn-outline-secondary');
    });

    if (e && e.currentTarget) {
        e.currentTarget.classList.add('btn-danger', 'active');
        e.currentTarget.classList.remove('btn-outline-secondary');
    }
}

function buscarProducto() {
    const input = document.getElementById("input-busqueda");
    // .replace(/[^a-zA-Z0-9 ]/g, "") elimina comillas, símbolos de igual y barras
    let texto = input.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]/g, "").toLowerCase().trim();
    const btnLupa = document.getElementById("boton-lupa-icono");

    if (texto.length > 0) {
        if(btnLupa) btnLupa.className = "bi bi-x-lg text-danger";
    } else {
        if(btnLupa) btnLupa.className = "bi bi-search";
        mostrarProductos(productos);
        return;
    }

    const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(texto) ||
        p.categoria.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);
}

function toggleCiudad(mostrar) {
    const contenedor = document.getElementById("contenedor-ciudad");
    if(contenedor) contenedor.style.display = mostrar ? "block" : "none";
}











/* =======================================================
   SEGURIDAD Y PROTECCIÓN
   ======================================================= */


document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
    if (e.key === "F12") {
        return false;
    }
    
    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C" || e.key === "i" || e.key === "j" || e.key === "c")) {
        return false;
    }

    if (e.ctrlKey && (e.key === "U" || e.key === "u")) {
        return false;
    }
    if (e.ctrlKey && (e.key === "S" || e.key === "s")) {
        return false;
    }
};

setInterval(() => {
    console.clear();
    console.log("%c¡ALTO!", "color: red; font-size: 40px; font-weight: bold;");
    console.log("%cEsta zona es solo para administración de TESSA. El acceso no autorizado está bloqueado.", "font-size: 18px;");
}, 1000);

window.onload = () => { 
    const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
    mostrarProductos(productosOrdenados); 
    actualizarBarraCarrito();
};

let ultimaPosicionScroll = window.pageYOffset;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let posicionActualScroll = window.pageYOffset;

    if (posicionActualScroll <= 10) {
        header.classList.remove("header-oculto");
        header.classList.remove("header-scroll");
    } else {
        header.classList.add("header-oculto");
        header.classList.add("header-scroll");
    }
});

function limpiarBusqueda() {
    const input = document.getElementById("input-busqueda");
    const btnLupa = document.getElementById("boton-lupa-icono");
    input.value = "";
    if(btnLupa) btnLupa.className = "bi bi-search";
    mostrarProductos(productos);
}

function volverInicio() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
        window.location.reload();
    }, 300);
}

function mostrarAviso(mensaje) {
    const aviso = document.createElement("div");
    aviso.className = "aviso-tessa";
    aviso.innerText = mensaje;

    document.body.appendChild(aviso);

    setTimeout(() => {
        aviso.classList.add("visible");
    }, 10);

    setTimeout(() => {
        aviso.classList.remove("visible");
        setTimeout(() => aviso.remove(), 300);
    }, 2500);
}
