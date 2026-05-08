// =======================================================
// BASE DE DATOS DE PRODUCTOS
// =======================================================
const productos = [
    { id: 1,  nombre: "Cinto 001",              categoria: "accesorios",      genero: "caballeros", precio: 1500,  fotos: ["assets/accesorios/cinto-001.jpg"], nota: "Cuero Leg\u00edtimo" },
    { id: 2,  nombre: "Cinto 002",              categoria: "accesorios",      genero: "caballeros", precio: 1500,  fotos: ["assets/accesorios/cinto-002.jpg"] },

    { id: 3,  nombre: "Touch 36 Pcs",           categoria: "arteypinceles",   genero: "unisex",     precio: 2500,  fotos: ["assets/arteypinceles/touch-36pcs.jpg"], nota: "Oferta" },
    { id: 4,  nombre: "Touch 48 Pcs",           categoria: "arteypinceles",   genero: "unisex",     precio: 3200,  fotos: ["assets/arteypinceles/touch-48pcs.jpg"] },

    { id: 5,  nombre: "Salida 001",             categoria: "baño",          genero: "damas",      precio: 3500,  fotos: ["assets/baño/salida-001.jpg"] },
    { id: 6,  nombre: "Salida 002",             categoria: "baño",          genero: "damas",      precio: 3500,  fotos: ["assets/baño/salida-002.jpg"] },
    { id: 7,  nombre: "Set Baño 001",           categoria: "baño",          genero: "damas",      precio: 4500,  fotos: ["assets/baño/set3-001.jpg"] },

    { id: 8,  nombre: "Set Guampa 001",         categoria: "bazzarytradicion",genero: "unisex",     precio: 5500,  fotos: ["assets/bazzarytradicion/setguampa-001.jpg"] },
    { id: 9,  nombre: "Set Guampa 002",         categoria: "bazzarytradicion",genero: "unisex",     precio: 5500,  fotos: ["assets/bazzarytradicion/setguampa-002.jpg"] },

    { id: 11, nombre: "Camiseta Cerro 24/25",   categoria: "camisetas",       genero: "caballeros", precio: 4500,  fotos: ["assets/camisetas/cam-cerro2425-001.jpg"], nota: "Nueva Temporada" },
    { id: 12, nombre: "Camiseta Paraguay 24/25",categoria: "camisetas",       genero: "caballeros", precio: 4500,  fotos: ["assets/camisetas/cam-paraguay2425-001.jpg"] },

    { id: 13, nombre: "Conjunto 001",           categoria: "conjuntos",       genero: "damas",      precio: 6500,  fotos: ["assets/conjuntos/conjunto-001.jpg"] },
    { id: 14, nombre: "Conjunto 002",           categoria: "conjuntos",       genero: "damas",      precio: 6500,  fotos: ["assets/conjuntos/conjunto-002.jpg"] },
    { id: 15, nombre: "Conjunto 003",           categoria: "conjuntos",       genero: "damas",      precio: 6500,  fotos: ["assets/conjuntos/conjunto-003.jpg"] },

    { id: 16, nombre: "Mochila Dama 001",       categoria: "mochilas",        genero: "damas",      precio: 7500,  fotos: ["assets/mochilas/mochi-dam-001.jpg"] },
    { id: 17, nombre: "Mochila Dama 002",       categoria: "mochilas",        genero: "damas",      precio: 7500,  fotos: ["assets/mochilas/mochi-dam-002.jpg"] },
    { id: 18, nombre: "Mochila Pikachu",        categoria: "mochilas",        genero: "niños", precio: 6000,  fotos: ["assets/mochilas/mochi-pikachu-001.jpg"] },

    { id: 19, nombre: "Peluche Angel",          categoria: "peluches",        genero: "niños", precio: 4000,  fotos: ["assets/peluches/angel-sv.jpg"] },
    { id: 20, nombre: "Peluche Stitch",         categoria: "peluches",        genero: "niños", precio: 4000,  fotos: ["assets/peluches/stitch-sv.jpg"] },

    { id: 23, nombre: "Oversize M001",          categoria: "remeras",         genero: "caballeros", talles: ["S","M","L","XL"], precio: 3500, fotos: ["assets/remeras/oversize-m001-frente.jpg","assets/remeras/oversize-m001-atras.jpg"], nota: "Solo en Negro" },
    { id: 24, nombre: "Oversize M002",          categoria: "remeras",         genero: "caballeros", talles: ["S","M","L","XL"], precio: 3500, fotos: ["assets/remeras/oversize-m002-frente.jpg","assets/remeras/oversize-m002-atras.jpg"], nota: "Stock Limitado" },

    { id: 25, nombre: "Short Dama M001",        categoria: "shorts",          genero: "damas",      talles: ["S","M","L","XL"], precio: 3000, fotos: ["assets/shorts/short-dama-m001.jpg"] },
    { id: 26, nombre: "Short Dama M002",        categoria: "shorts",          genero: "damas",      talles: ["S","M","L","XL"], precio: 3000, fotos: ["assets/shorts/short-dama-m002.jpg"] },

    { id: 27, nombre: "Set Stanley Rojo",       categoria: "termos",          genero: "unisex",     precio: 12000, fotos: ["assets/termos/set-stanley-rojo.jpg"], nota: "Importado" },
    { id: 28, nombre: "Set Stanley Violeta",    categoria: "termos",          genero: "unisex",     precio: 12000, fotos: ["assets/termos/set-stanley-violeta.jpg"] },

    { id: 29, nombre: "Vestido M01",            categoria: "vestidos",        genero: "damas",      precio: 5500,  fotos: ["assets/vestidos/vestido-m01.jpg"] },
    { id: 30, nombre: "Vestido M02",            categoria: "vestidos",        genero: "damas",      precio: 5500,  fotos: ["assets/vestidos/vestido-m02.jpg"] },

    { id: 31, nombre: "Dama Marrón",      categoria: "zapateria",       genero: "damas",      precio: 8000,  fotos: ["assets/zapateria/dama-m001-marron.jpg"] },
    { id: 32, nombre: "Dama Negro",             categoria: "zapateria",       genero: "damas",      precio: 8000,  fotos: ["assets/zapateria/dama-m001-negro.jpg"] },
];

const categorias = [
    { id: "accesorios",       nombre: "Accesorios",        imagen: "assets/accesorios/cinto-001.jpg" },
    { id: "arteypinceles",    nombre: "Arte y Pinceles",   imagen: "assets/arteypinceles/touch-36pcs.jpg" },
    { id: "baño",        nombre: "Baño",         imagen: "assets/baño/salida-001.jpg" },
    { id: "bazzarytradicion", nombre: "Bazar y Tradición", imagen: "assets/bazzarytradicion/setguampa-001.jpg" },
    { id: "camisetas",        nombre: "Camisetas",         imagen: "assets/camisetas/cam-cerro2425-001.jpg" },
    { id: "conjuntos",        nombre: "Conjuntos",         imagen: "assets/conjuntos/conjunto-001.jpg" },
    { id: "mochilas",         nombre: "Mochilas",          imagen: "assets/mochilas/mochi-dam-001.jpg" },
    { id: "peluches",         nombre: "Peluches",          imagen: "assets/peluches/stitch-sv.jpg" },
    { id: "remeras",          nombre: "Remeras",           imagen: "assets/remeras/oversize-m001-frente.jpg" },
    { id: "shorts",           nombre: "Shorts",            imagen: "assets/shorts/short-dama-m001.jpg" },
    { id: "termos",           nombre: "Termos",            imagen: "assets/termos/set-stanley-rojo.jpg" },
    { id: "vestidos",         nombre: "Vestidos",          imagen: "assets/vestidos/vestido-m01.jpg" },
    { id: "zapateria",        nombre: "Zapater\u00eda",    imagen: "assets/zapateria/dama-m001-marron.jpg" },
];

let fotosActuales = [];
let indiceActual = 0;
let productosMostrados = [];
let carrito = JSON.parse(localStorage.getItem('carrito_tessa')) || [];
let vistaActual = "categorias";

// =======================================================
// TOAST (notificaciones flotantes)
// =======================================================
function mostrarToast(mensaje, tipo) {
    tipo = tipo || "info";
    var colores = { success: "#25d366", danger: "#e63946", info: "#343a40" };
    var iconos  = { success: "\u2713", danger: "\u2715", info: "i" };
    var toast = document.createElement("div");
    toast.style.cssText =
        "position:fixed;bottom:85px;left:50%;transform:translateX(-50%) translateY(20px);" +
        "background:" + colores[tipo] + ";color:white;padding:12px 24px;" +
        "border-radius:30px;font-size:0.88rem;font-weight:600;" +
        "opacity:0;transition:all 0.3s ease;z-index:999999;" +
        "pointer-events:none;white-space:nowrap;box-shadow:0 4px 15px rgba(0,0,0,0.2);";
    toast.innerText = iconos[tipo] + "  " + mensaje;
    document.body.appendChild(toast);
    setTimeout(function() {
        toast.style.opacity = "1";
        toast.style.transform = "translateX(-50%) translateY(0)";
    }, 10);
    setTimeout(function() {
        toast.style.opacity = "0";
        setTimeout(function() { toast.remove(); }, 300);
    }, 2500);
}

// =======================================================
// VISTA DE CATEGORÍAS
// =======================================================
function mostrarCategoriasInicio(filtroGenero) {
    filtroGenero = filtroGenero || null;
    vistaActual = "categorias";
    var contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;

    var categoriasAMostrar = categorias;
    if (filtroGenero) {
        var ids = [];
        productos.forEach(function(p) {
            if ((p.genero === filtroGenero || p.genero === "unisex") && ids.indexOf(p.categoria) === -1) {
                ids.push(p.categoria);
            }
        });
        categoriasAMostrar = categorias.filter(function(c) { return ids.indexOf(c.id) !== -1; });
    }

    contenedor.innerHTML = '<div class="col-12 mb-2"><h5 class="fw-bold text-uppercase text-muted" style="font-size:0.8rem;letter-spacing:2px;">' +
        (filtroGenero ? 'Para: <span class="text-danger text-capitalize">' + filtroGenero + '</span>' : 'Todas las Categor\u00edas') +
        '</h5></div>';

    categoriasAMostrar.forEach(function(cat) {
        var card = '<div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">' +
            '<div class="card-categoria" onclick="abrirCategoria(\'' + cat.id + '\',' + (filtroGenero ? '\'' + filtroGenero + '\'' : 'null') + ')">' +
            '<div class="card-categoria-img-wrap"><img src="' + cat.imagen + '" alt="' + cat.nombre + '"></div>' +
            '<div class="card-categoria-nombre">' + cat.nombre + '</div>' +
            '</div></div>';
        contenedor.innerHTML += card;
    });
}

function abrirCategoria(categoriaId, filtroGenero) {
    filtroGenero = filtroGenero || null;
    vistaActual = "productos";
    var lista = productos.filter(function(p) { return p.categoria === categoriaId; });
    if (filtroGenero) {
        lista = lista.filter(function(p) { return p.genero === filtroGenero || p.genero === "unisex"; });
    }
    var cat = categorias.find(function(c) { return c.id === categoriaId; });
    var nombreCat = cat ? cat.nombre : categoriaId;
    mostrarProductosConBreadcrumb(lista, nombreCat, filtroGenero);
}

function mostrarProductosConBreadcrumb(lista, nombreCategoria, filtroGenero) {
    filtroGenero = filtroGenero || null;
    productosMostrados = lista;
    var contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    var volver = filtroGenero ? "volverCategorias('" + filtroGenero + "')" : "volverCategorias()";
    var badgeGenero = filtroGenero ? '<span class="badge bg-danger-subtle text-danger small ms-1">' + filtroGenero + '</span>' : '';
    contenedor.innerHTML =
        '<div class="col-12 mb-3"><div class="d-flex align-items-center gap-2">' +
        '<button class="btn btn-sm btn-outline-danger rounded-pill" onclick="' + volver + '">' +
        '<i class="bi bi-arrow-left"></i> Categor\u00edas</button>' +
        '<span class="text-muted small">\u203a</span>' +
        '<span class="fw-bold small text-uppercase">' + nombreCategoria + '</span>' + badgeGenero +
        '</div></div>';

    if (lista.length === 0) {
        contenedor.innerHTML += '<div class="col-12 text-center py-5">' +
            '<i class="bi bi-box-seam text-muted" style="font-size:3rem;"></i>' +
            '<h5 class="fw-bold mt-3 text-muted">Sin productos en esta categor\u00eda</h5>' +
            '<button class="btn btn-danger rounded-pill mt-3" onclick="volverCategorias()">Ver Categor\u00edas</button></div>';
        return;
    }

    lista.forEach(function(p, i) {
        var selectTalles = "";
        if (p.talles && p.talles.length > 0) {
            selectTalles = '<select id="talle-' + p.id + '" class="form-select form-select-sm mb-2 border-danger-subtle">' +
                '<option value="" selected disabled>Elegir talle...</option>' +
                p.talles.map(function(t) { return '<option value="' + t + '">' + t + '</option>'; }).join('') +
                '</select>';
        } else {
            selectTalles = '<div style="height:38px;"></div>';
        }
        var badgeHTML = p.nota ? '<span class="badge-nota">' + p.nota + '</span>' : '<div style="height:22px;"></div>';
        contenedor.innerHTML +=
            '<div class="col-6 col-md-4 col-lg-3"><div class="card shadow-sm h-100">' +
            '<img src="' + p.fotos[0] + '" class="card-img-top" onclick="abrirGaleria(' + i + ')" alt="' + p.nombre + '">' +
            '<div class="card-body">' +
            '<small class="text-muted fw-bold text-uppercase" style="font-size:0.65rem;">' + p.categoria + '</small>' +
            badgeHTML +
            '<h6 class="card-title">' + p.nombre + '</h6>' +
            '<p class="precio-producto">' + Number(p.precio).toLocaleString('es-PY') + ' Gs.</p>' +
            selectTalles +
            '<button class="btn btn-sm w-100 fw-bold border-danger text-danger bg-white" onclick="agregarAlCarritoConTalle(' + p.id + ', this)">+ AGREGAR</button>' +
            '</div></div></div>';
    });
}

function volverCategorias(filtroGenero) {
    filtroGenero = filtroGenero || null;
    document.getElementById("input-busqueda").value = "";
    mostrarCategoriasInicio(filtroGenero);
}

// =======================================================
// FILTROS
// =======================================================
function filtrarMenu(cat) {
    document.querySelectorAll('.dropdown-menu').forEach(function(m) { m.classList.remove('show'); });
    document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(function(b) { b.setAttribute('aria-expanded','false'); });
    if (cat === "todos") { mostrarCategoriasInicio(); } else { abrirCategoria(cat); }
}

function filtrarPublico(genero) {
    document.querySelectorAll('.dropdown-menu').forEach(function(m) { m.classList.remove('show'); });
    document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(function(b) { b.setAttribute('aria-expanded','false'); });
    mostrarCategoriasInicio(genero);
}

// =======================================================
// BÚSQUEDA
// =======================================================
function buscarProducto() {
    var texto = document.getElementById("input-busqueda").value.trim().toLowerCase();
    var btnLupa = document.getElementById("boton-lupa-icono");
    if (texto.length === 0) {
        if (btnLupa) btnLupa.className = "bi bi-search";
        mostrarCategoriasInicio();
        return;
    }
    if (btnLupa) btnLupa.className = "bi bi-x-lg";
    var resultados = productos.filter(function(p) {
        return p.nombre.toLowerCase().indexOf(texto) !== -1 ||
               p.categoria.toLowerCase().indexOf(texto) !== -1 ||
               (p.nota && p.nota.toLowerCase().indexOf(texto) !== -1);
    });
    vistaActual = "productos";
    mostrarProductosConBreadcrumb(resultados, 'B\u00fasqueda: "' + texto + '"');
}

function limpiarBusqueda() {
    var input = document.getElementById("input-busqueda");
    var btnLupa = document.getElementById("boton-lupa-icono");
    input.value = "";
    if (btnLupa) btnLupa.className = "bi bi-search";
    mostrarCategoriasInicio();
}

// =======================================================
// CARRITO
// =======================================================
function agregarAlCarritoConTalle(id, elementoBtn) {
    var producto = productos.find(function(p) { return p.id === id; });
    var select = document.getElementById("talle-" + id);
    var talleElegido = "N/A";

    if (select && select.options.length > 1) {
        if (select.value === "") {
            mostrarToast("Selecion\u00e1 un talle primero", "danger");
            return;
        }
        talleElegido = select.value;
    }

    carrito.push(Object.assign({}, producto, { talleSeleccionado: talleElegido }));
    localStorage.setItem('carrito_tessa', JSON.stringify(carrito));
    actualizarBarraCarrito();
    mostrarToast("\u00a1Agregado al carrito!", "success");

    elementoBtn.innerText = "\u00a1A\u00d1ADIDO!";
    elementoBtn.classList.replace("text-danger", "text-success");
    setTimeout(function() {
        elementoBtn.innerText = "+ AGREGAR";
        elementoBtn.classList.replace("text-success", "text-danger");
    }, 1000);
}

function actualizarBarraCarrito() {
    var barra   = document.getElementById("barra-carrito");
    var cantidad = document.getElementById("cantidad-items");
    if (!barra || !cantidad) return;
    cantidad.innerText = carrito.length;
    if (carrito.length > 0) {
        barra.classList.add("activa");
    } else {
        barra.classList.remove("activa");
    }
}

function verResumen() {
    var lista = document.getElementById("lista-carrito-resumen");
    var total = document.getElementById("total-resumen");
    if (!lista || !total) return;

    var totalPrecio = 0;
    lista.innerHTML = "";

    if (carrito.length === 0) {
        lista.innerHTML = '<p class="text-muted text-center py-3">Tu carrito est\u00e1 vac\u00edo.</p>';
        total.innerText = "0 Gs.";
    } else {
        carrito.forEach(function(p, i) {
            var talle = (p.talleSeleccionado && p.talleSeleccionado !== "N/A")
                ? ' <small class="text-muted">\u2014 Talle: ' + p.talleSeleccionado + '</small>'
                : "";
            lista.innerHTML +=
                '<div class="d-flex justify-content-between align-items-center mb-2 p-2 bg-light rounded gap-2">' +
                '<img src="' + p.fotos[0] + '" style="width:48px;height:48px;object-fit:cover;border-radius:8px;flex-shrink:0;">' +
                '<div class="flex-grow-1"><span class="fw-bold small">' + p.nombre + '</span>' + talle + '</div>' +
                '<div class="d-flex align-items-center gap-2">' +
                '<span class="text-danger fw-bold small">' + Number(p.precio).toLocaleString('es-PY') + ' Gs.</span>' +
                '<button class="btn btn-sm btn-outline-danger rounded-circle" style="width:26px;height:26px;padding:0;line-height:1;" ' +
                'onclick="quitarDelCarrito(' + i + ')">\u00d7</button>' +
                '</div></div>';
            totalPrecio += p.precio;
        });
        total.innerText = totalPrecio.toLocaleString('es-PY') + " Gs.";
    }

    var modalEl = document.getElementById("modalCarrito");
    if (!modalEl) return;
    try {
        var inst = bootstrap.Modal.getInstance(modalEl);
        if (inst) inst.dispose();
        new bootstrap.Modal(modalEl, { backdrop: true, keyboard: true }).show();
    } catch(err) {
        mostrarToast("Error al abrir el carrito", "danger");
    }
}

function quitarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito_tessa', JSON.stringify(carrito));
    actualizarBarraCarrito();
    mostrarToast("Producto eliminado", "danger");
    verResumen();
}

function finalizarPedido() {
    if (carrito.length === 0) { mostrarToast("Tu carrito est\u00e1 vac\u00edo", "danger"); return; }
    var nombre = document.getElementById("nombre-cliente").value.trim();
    if (!nombre) { mostrarToast("Escrib\u00ed tu nombre para continuar", "danger"); return; }

    var metodo = document.querySelector('input[name="metodoEntrega"]:checked');
    var metodoTexto = metodo ? metodo.value : "Env\u00edo a domicilio";
    var ciudadEl = document.getElementById("ciudad-cliente");
    var ciudad = ciudadEl ? ciudadEl.value.trim() : "";

    var baseUrl = "https://zipoluna.github.io/TESSA-NOVEDADES/";
    var total = 0;

    var msg = "\u2728 *NUEVO PEDIDO TESSA* \u2728\n\n";
    msg += "\uD83D\uDC64 *Cliente:* " + nombre + "\n";
    msg += "\uD83D\uDE9A *Entrega:* " + metodoTexto + "\n";
    if (ciudad) msg += "\uD83D\uDCCD *Ciudad:* " + ciudad + "\n";
    msg += "--------------------------\n";

    carrito.forEach(function(p) {
        var talle = (p.talleSeleccionado && p.talleSeleccionado !== "N/A")
            ? "\n\uD83D\uDC55 *Talle:* " + p.talleSeleccionado
            : "";
        msg += "\n\uD83D\uDED2 *" + p.nombre + "*\n";
        msg += "\uD83D\uDCB0 " + Number(p.precio).toLocaleString('es-PY') + " Gs." + talle + "\n";
        msg += "\uD83D\uDD17 " + baseUrl + p.fotos[0] + "\n";
        total += p.precio;
    });

    msg += "\n\uD83D\uDECD\uFE0F *TOTAL: " + total.toLocaleString('es-PY') + " Gs.*\n";
    msg += "\uD83D\uDCCC _\u00a1Envi\u00e1 tu ubicación exacta para el env\u00edo!_\n";
    msg += "Me gustar\u00eda confirmar disponibilidad. \u00a1Gracias! \u2728";

    var modalEl = document.getElementById("modalCarrito");
    var inst = bootstrap.Modal.getInstance(modalEl);
    if (inst) inst.hide();

    setTimeout(function() {
        window.open("https://wa.me/595981229871?text=" + encodeURIComponent(msg), '_blank');
    }, 300);
}

function toggleCiudad(mostrar) {
    var c = document.getElementById("contenedor-ciudad");
    if (c) c.style.display = mostrar ? "block" : "none";
}

// =======================================================
// GALERÍA
// =======================================================
function abrirGaleria(indice) {
    var producto = productosMostrados[indice];
    if (!producto) return;
    fotosActuales = producto.fotos;
    indiceActual = 0;
    document.getElementById("modal-imagen").style.display = "flex";
    document.getElementById("caption").innerText = producto.nombre;
    actualizarModal();
}

function actualizarModal() {
    document.getElementById("img-grande").src = fotosActuales[indiceActual];
    var puntos = document.getElementById("modal-puntos-contenedor");
    puntos.innerHTML = fotosActuales.length > 1
        ? fotosActuales.map(function(_, i) {
            return '<div class="punto-nav ' + (i === indiceActual ? 'activo' : '') +
                   '" onclick="indiceActual=' + i + ';actualizarModal()"></div>';
          }).join('')
        : "";
}

function cerrarModal() { document.getElementById("modal-imagen").style.display = "none"; }

// =======================================================
// NAVEGACIÓN
// =======================================================
function volverInicio() {
    document.getElementById("input-busqueda").value = "";
    mostrarCategoriasInicio();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// =======================================================
// HEADER SCROLL
// =======================================================
var headerEl = document.querySelector("header");
var ultimoScroll = 0;

window.addEventListener("scroll", function() {
    var actual = window.pageYOffset;
    if (actual > ultimoScroll && actual > 80) {
        headerEl.classList.add("header-oculto");
    } else {
        headerEl.classList.remove("header-oculto");
    }
    ultimoScroll = actual;
});

document.addEventListener("touchstart", function() {
    headerEl.classList.remove("header-oculto");
}, { passive: true });

// =======================================================
// INICIO
// =======================================================
document.addEventListener("DOMContentLoaded", function() {
    mostrarCategoriasInicio();
    actualizarBarraCarrito();
});

// =======================================================
// SEGURIDAD
// =======================================================
document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
document.onkeydown = function(e) {
    if (e.key === "F12") return false;
    if (e.ctrlKey && e.shiftKey && ["I","J","C","i","j","c"].indexOf(e.key) !== -1) return false;
    if (e.ctrlKey && ["U","u","S","s"].indexOf(e.key) !== -1) return false;
};
setInterval(function() {
    console.clear();
    console.log("%c\u00a1ALTO!", "color: red; font-size: 40px; font-weight: bold;");
    console.log("%cEsta zona es solo para administración de TESSA.", "font-size: 18px;");
}, 1000);
