// =======================================================
// BASE DE DATOS DE PRODUCTOS (Actualizada con 'nota')
// =======================================================
const productos = [
    { id: 1, nombre: "Cinto 001", categoria: "accesorios", genero: "caballeros", precio: 1500, fotos: ["assets/accesorios/cinto-001.jpg"], nota: "Cuero Legítimo" }, // <--- Ejemplo de nota
    { id: 2, nombre: "Cinto 002", categoria: "accesorios", genero: "caballeros", precio: 1500, fotos: ["assets/accesorios/cinto-002.jpg"] },
    { id: 3, nombre: "Touch 36 Pcs", categoria: "arteypinceles", genero: "unisex", precio: 2500, fotos: ["assets/arteypinceles/touch-36pcs.jpg"], nota: "Oferta" },
    { id: 4, nombre: "Touch 48 Pcs", categoria: "arteypinceles", genero: "unisex", precio: 3200, fotos: ["assets/arteypinceles/touch-48pcs.jpg"] },
    { id: 5, nombre: "Salida 001", categoria: "baño", genero: "damas", precio: 3500, fotos: ["assets/baño/salida-001.jpg"] },
    { id: 11, nombre: "Camiseta Cerro 24/25", categoria: "camisetas", genero: "caballeros", precio: 4500, fotos: ["assets/camisetas/cam-cerro2425-001.jpg"], nota: "Nueva Temporada" },
    { id: 12, nombre: "Camiseta Paraguay 24/25", categoria: "camisetas", genero: "caballeros", precio: 4500, fotos: ["assets/camisetas/cam-paraguay2425-001.jpg"] },
    { id: 23, nombre: "Oversize M001", categoria: "remeras", genero: "caballeros", precio: 3500, fotos: ["assets/remeras/oversize-m001-frente.jpg", "assets/remeras/oversize-m001-atras.jpg"], nota: "Solo en Negro" },
    { id: 24, nombre: "Oversize M002", categoria: "remeras", genero: "caballeros", precio: 3500, fotos: ["assets/remeras/oversize-m002-frente.jpg", "assets/remeras/oversize-m002-atras.jpg"], nota: "Stock Limitado" },
    { id: 27, nombre: "Set Stanley Rojo", categoria: "termos", genero: "unisex", precio: 12000, fotos: ["assets/termos/set-stanley-rojo.jpg"], nota: "Importado" },
    // ... Agrega "nota: 'Tu texto'" a cualquier producto que desees resaltar
];

// Variables globales
let fotosActuales = [];
let indiceActual = 0;
let productosMostrados = [...productos]; 
let carrito = JSON.parse(localStorage.getItem('carrito_tessa')) || [];

// =======================================================
// FUNCION: MOSTRAR PRODUCTOS (CORREGIDA PARA ALINEACIÓN)
// =======================================================
function mostrarProductos(lista) {
    productosMostrados = lista; 
    const contenedor = document.getElementById("contenedor-productos");
    if(!contenedor) return;
    
    contenedor.innerHTML = "";
    
    if (lista.length === 0) {
        contenedor.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
                <h3 class="fw-bold mt-3">No se encontraron productos</h3>
                <button class="btn btn-danger rounded-pill mt-3" onclick="location.reload()">Ver todo</button>
            </div>`;
        return;
    }
    
    lista.forEach((p, i) => {
        // Lógica de Talles
        let selectTalles = "";
        if (p.talles && p.talles.length > 0) {
            selectTalles = `
                <select id="talle-${p.id}" class="form-select form-select-sm mb-2 border-danger-subtle">
                    <option value="" selected disabled>Elegir talle...</option>
                    ${p.talles.map(t => `<option value="${t}">${t}</option>`).join('')}
                </select>`;
        } else {
            selectTalles = `<div style="height: 38px;"></div>`; // Espacio vacío para mantener alineación
        }

        // Lógica de Notas (Stock Limitado, etc) - <--- NUEVO
        const badgeHTML = p.nota ? `<span class="badge-nota">${p.nota}</span>` : `<div style="height: 22px;"></div>`;

        const card = `
            <div class="col">
                <div class="card shadow-sm">
                    <img src="${p.fotos[0]}" class="card-img-top" onclick="abrirGaleria(${i})" alt="${p.nombre}">
                    <div class="card-body">
                        <small class="text-muted fw-bold text-uppercase" style="font-size: 0.65rem;">${p.categoria}</small>
                        ${badgeHTML} 
                        <h6 class="card-title">${p.nombre}</h6>
                        <p class="precio-producto">${Number(p.precio).toLocaleString('es-PY')} Gs.</p>
                        ${selectTalles}
                        <button class="btn btn-sm w-100 fw-bold border-danger text-danger bg-white" 
                                onclick="agregarAlCarritoConTalle(${p.id}, this)">
                            + AGREGAR
                        </button>
                    </div>
                </div>
            </div>`;
        contenedor.innerHTML += card;
    });
}

// =======================================================
// LÓGICA DEL CARRITO
// =======================================================
function agregarAlCarritoConTalle(id, elementoBtn) {
    const producto = productos.find(p => p.id === id);
    const select = document.getElementById(`talle-${id}`);
    let talleElegido = "N/A";

    if (select && select.options.length > 1) {
        if (select.value === "") {
            alert("Por favor, selecciona un talle.");
            return;
        }
        talleElegido = select.value;
    }

    carrito.push({ ...producto, talleSeleccionado: talleElegido });
    localStorage.setItem('carrito_tessa', JSON.stringify(carrito));
    actualizarBarraCarrito();
    
    // Animación simple de feedback
    elementoBtn.innerText = "¡AÑADIDO!";
    elementoBtn.classList.replace("text-danger", "text-success");
    setTimeout(() => {
        elementoBtn.innerText = "+ AGREGAR";
        elementoBtn.classList.replace("text-success", "text-danger");
    }, 1000);
}

function actualizarBarraCarrito() {
    const barra = document.getElementById("barra-carrito");
    const cantidad = document.getElementById("cantidad-items");
    if (!barra || !cantidad) return;

    if (carrito.length > 0) {
        cantidad.innerText = carrito.length;
        barra.style.display = "flex";
        setTimeout(() => barra.classList.add("activa"), 10);
    } else {
        barra.classList.remove("activa");
        setTimeout(() => barra.style.display = "none", 300);
    }
}

// =======================================================
// FINALIZAR PEDIDO (WHATSAPP)
// =======================================================
function finalizarPedido() {
    if (carrito.length === 0) return;

    const nombre = document.getElementById("nombre-cliente").value.trim();
    if (!nombre) { alert("Tu nombre es necesario 😊"); return; }

    let total = 0;
    let mensaje = `✨ *NUEVO PEDIDO TESSA* ✨\n\n👤 *Cliente:* ${nombre}\n--------------------------\n`;

    carrito.forEach((p) => {
        let talle = p.talleSeleccionado !== "N/A" ? ` [Talle: ${p.talleSeleccionado}]` : "";
        mensaje += `• ${p.nombre}${talle} - ${p.precio.toLocaleString('es-PY')} Gs.\n`;
        total += p.precio;
    });

    mensaje += `\n🛍️ *TOTAL:* ${total.toLocaleString('es-PY')} Gs.\n\n¡Espero tu confirmación!`;
    
    window.open(`https://wa.me/595981229871?text=${encodeURIComponent(mensaje)}`, '_blank');
}

// =======================================================
// GALERÍA Y CIERRE
// =======================================================
function abrirGaleria(indice) {
    const producto = productosMostrados[indice];
    fotosActuales = producto.fotos; 
    indiceActual = 0;
    document.getElementById("modal-imagen").style.display = "flex";
    document.getElementById("caption").innerText = producto.nombre;
    actualizarModal();
}

function actualizarModal() {
    document.getElementById("img-grande").src = fotosActuales[indiceActual];
    const puntos = document.getElementById("modal-puntos-contenedor");
    puntos.innerHTML = fotosActuales.length > 1 ? fotosActuales.map((_, i) => 
        `<div class="punto-nav ${i === indiceActual ? 'activo' : ''}" onclick="indiceActual=${i};actualizarModal()"></div>`
    ).join('') : "";
}

function cerrarModal() { document.getElementById("modal-imagen").style.display = "none"; }

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos(productos);
    actualizarBarraCarrito();
});



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

    mostrarCategoriasInicio();

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
    volverProductosInicio();
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
