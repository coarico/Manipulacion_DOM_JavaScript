const imagenes = [];

const crearEstilos = () => {
    const estilo = document.createElement('style');
    estilo.textContent = `
        body { 
            font-family: sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            display: flex;
            min-height: 100vh;
        }
        .sidebar {
            width: 200px;
            background: #f0f0f0;
            padding: 20px;
        }
        .main-content {
            flex: 1;
            padding: 20px;
        }
        .header {
            background: #333;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            padding: 20px;
        }
        .gallery-item {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: center;
        }
        .gallery-item img {
            max-width: 100%;
            height: auto;
        }
        .footer {
            background: #333;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .form-container {
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
        }
        .form-field {
            margin-bottom: 15px;
        }
        input, textarea {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
        }
    `;
    document.head.appendChild(estilo);
};

const crearEncabezado = () => {
    const encabezado = document.createElement('header');
    encabezado.className = 'header';
    encabezado.innerHTML = '<h1>Galería de Imágenes</h1>';
    return encabezado;
};

const crearBarraLateral = () => {
    const barraLateral = document.createElement('div');
    barraLateral.className = 'sidebar';
    
    const botonAgregar = document.createElement('button');
    botonAgregar.textContent = 'Registrar nueva imagen';
    botonAgregar.onclick = () => mostrarPaginaRegistro();
    
    barraLateral.appendChild(botonAgregar);
    return barraLateral;
};

const crearGaleria = () => {
    const galeria = document.createElement('div');
    galeria.className = 'gallery';
    
    imagenes.forEach(imagen => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imagen.url;
        img.alt = imagen.descripcion;
        
        const descripcion = document.createElement('p');
        descripcion.textContent = imagen.descripcion;
        
        item.appendChild(img);
        item.appendChild(descripcion);
        galeria.appendChild(item);
    });
    
    return galeria;
};

const crearPiePagina = () => {
    const piePagina = document.createElement('footer');
    piePagina.className = 'footer';
    piePagina.innerHTML = '<p>© 2024 Galería de Imágenes</p>';
    return piePagina;
};

const crearFormularioRegistro = () => {
    const formulario = document.createElement('form');
    formulario.className = 'form-container';
    
    formulario.innerHTML = `
        <div class="form-field">
            <label for="url">URL de la imagen:</label>
            <input type="url" id="url" required>
        </div>
        <div class="form-field">
            <label for="descripcion">Descripción:</label>
            <textarea id="descripcion" required minlength="3"></textarea>
        </div>
        <button type="submit">Guardar Imagen</button>
    `;
    
    formulario.onsubmit = (e) => {
        e.preventDefault();
        const url = document.getElementById('url').value;
        const descripcion = document.getElementById('descripcion').value;
        
        imagenes.push({ url, descripcion });
        mostrarPaginaPrincipal();
    };
    
    return formulario;
};

const mostrarPaginaPrincipal = () => {
    document.body.innerHTML = '';
    document.body.appendChild(crearEncabezado());
    
    const contenedor = document.createElement('div');
    contenedor.className = 'container';
    
    contenedor.appendChild(crearBarraLateral());
    
    const contenidoPrincipal = document.createElement('div');
    contenidoPrincipal.className = 'main-content';
    contenidoPrincipal.appendChild(crearGaleria());
    
    contenedor.appendChild(contenidoPrincipal);
    document.body.appendChild(contenedor);
    document.body.appendChild(crearPiePagina());
};

const mostrarPaginaRegistro = () => {
    document.body.innerHTML = '';
    document.body.appendChild(crearEncabezado());
    
    const contenedor = document.createElement('div');
    contenedor.className = 'container';
    
    contenedor.appendChild(crearBarraLateral());
    
    const contenidoPrincipal = document.createElement('div');
    contenidoPrincipal.className = 'main-content';
    contenidoPrincipal.appendChild(crearFormularioRegistro());
    
    contenedor.appendChild(contenidoPrincipal);
    document.body.appendChild(contenedor);
    document.body.appendChild(crearPiePagina());
};

document.addEventListener('DOMContentLoaded', () => {
    crearEstilos();
    mostrarPaginaPrincipal();
});
