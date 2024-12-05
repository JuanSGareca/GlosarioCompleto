// Configuración de los audios por letra
const audioData = {
    A: [
        { name: 'Accion', path: 'Audios/Accion.m4a' },
        { name: 'Ajuste', path: 'Audios/Ajuste.m4a' },
        { name: 'Anillo', path: 'Audios/Anillo.m4a' }
    ],
    B: [
        { name: 'Backdrop', path: 'Audios/Backdrop.m4a' },
        { name: 'Barra de estado', path: 'Audios/Barra de estado.m4a' },
        { name: 'Barra de menus', path: 'Audios/Barra de menus.m4a' }
    ],
    C: [
        { name: 'Cache', path: 'Audios/Cache.m4a' },
        { name: 'Camino', path: 'Audios/Camino.m4a' },
        { name: 'Campo', path: 'Audios/Campo.m4a' }
    ],
    D: [
        { name: 'Dato', path: 'Audios/Dato.m4a' },
        { name: 'Deformacion', path: 'Audios/Deformacion.m4a' },
        { name: 'Defragmentacion', path: 'Audios/Defragmentacion.m4a' }
    ],
    E: [
        { name: 'E-mail', path: 'Audios/E-mail.m4a' },
        { name: 'EGA', path: 'Audios/EGA.m4a' },
        { name: 'ENIAC', path: 'Audios/ENIAC.m4a' }
    ],
    F: [
        { name: 'FAT', path: 'Audios/FAT.m4a' },
        { name: 'FDDI', path: 'Audios/FDDI.m4a' },
        { name: 'Fila', path: 'Audios/Fila.m4a' }
    ],
    G: [
        { name: 'GIF', path: 'Audios/GIF.m4a' },
        { name: 'GIGABYTE', path: 'Audios/GIGABYTE.m4a' },
        { name: 'Guia', path: 'Audios/Guia.m4a' }
    ],
    H: [
        { name: 'Home Page', path: 'Audios/Home Page.m4a' },
        { name: 'HTM', path: 'Audios/HTM.m4a' },
        { name: 'Hub', path: 'Audios/Hub.m4a' }
    ],
    I: [
        { name: 'Icono de documento', path: 'Audios/Icono de documento.m4a' },
        { name: 'Icono de grupo', path: 'Audios/Icono de grupo.m4a' },
        { name: 'Icono', path: 'Audios/Icono.m4a' }
    ],
    J: [
        { name: 'Java', path: 'Audios/Java.m4a' },
        { name: 'Joystick', path: 'Audios/Joystick.m4a' },
        { name: 'JPG', path: 'Audios/JPG.m4a' }
    ],
    K: [
        { name: 'Kilobyte', path: 'Audios/Kilobyte.m4a' },
    ],
    L: [
        { name: 'LAN', path: 'Audios/LAN.m4a' },
        { name: 'LAN Server', path: 'Audios/LAN Server.m4a' },
        { name: 'LANstaic', path: 'Audios/LANstaic.m4a' }
    ],
    M: [
        { name: 'MAN', path: 'Audios/MAN.m4a' },
        { name: 'MAU', path: 'Audios/MAU.m4a' },
        { name: 'Maximizar', path: 'Audios/Maximizar.m4a' }
    ],
    N: [
        { name: 'Navegador', path: 'Audios/Navegador.m4a' },
        { name: 'NetBIOS', path: 'Audios/NetBIOS.m4a' },
        { name: 'Netiquette', path: 'Audios/Netiquette.m4a' }
    ],
    O: [
        { name: 'Objeto', path: 'Audios/Objeto.m4a' },
        { name: 'Off-line', path: 'Audios/Off-line.m4a' },
        { name: 'On-line', path: 'Audios/On-line.m4a' }
    ],
    P: [
        { name: 'Path', path: 'Audios/Path.m4a' },
        { name: 'PC', path: 'Audios/PC.m4a' },
        { name: 'PCX', path: 'Audios/PCX.m4a' }
    ],
    Q: [
        { name: 'QT', path: 'Audios/QT.m4a' },
        { name: 'QWERTY', path: 'Audios/QWERTY.m4a' },
    ],
    R: [
        { name: 'Rango o bloqueo', path: 'Audios/Rango o bloqueo.m4a' },
        { name: 'Raton', path: 'Audios/Raton.m4a' },
        { name: 'RAM', path: 'Audios/RAM.m4a' }
    ],
    S: [
        { name: 'Subdirectorio', path: 'Audios/Subdirectorio.m4a' },
        { name: 'SuperComputadora', path: 'Audios/SuperComputadora.m4a' },
        { name: 'SVGA', path: 'Audios/SVGA.m4a' }
    ],
    T: [
        { name: 'Tabla de contenidos', path: 'Audios/Tabla de contenidos.m4a' },
        { name: 'Tabla', path: 'Audios/Tabla.m4a' },
        { name: 'Tag', path: 'Audios/Tag.m4a' }
    ],
    U: [
        { name: 'Unix', path: 'Audios/Unix.m4a' },
        { name: 'URL', path: 'Audios/URL.m4a' },
        { name: 'Usuario', path: 'Audios/Usuario.m4a' }
    ],
    V: [
        { name: 'Variable Global', path: 'Audios/Variable Global.m4a' },
        { name: 'Variable Local', path: 'Audios/Variable Local.m4a' },
        { name: 'Variable', path: 'Audios/Variable.m4a' }
    ],
    W: [
        { name: 'Windows', path: 'Audios/Windows.m4a' },
        { name: 'World Wide Web', path: 'Audios/World Wide Web.m4a' },
        { name: 'WWW', path: 'Audios/WWW.m4a' }
    ],
    X: [
        { name: 'XLS', path: 'Audios/XLS.m4a' },
        { name: 'XLW', path: 'Audios/XLW.m4a' },
    ],
    Y: [
        { name: 'Yellow pages', path: 'Audios/Accion.m4a' },
  
    ],
    // Agrega más letras y audios aquí...
};

// Referencias a elementos del DOM
const lettersContainer = document.getElementById('letters');
const audiosContainer = document.getElementById('audios');
const selectedLetter = document.getElementById('selected-letter');

// Generar botones del abecedario
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXY'; // Excluye la Z
alphabet.split('').forEach(letter => {
    const button = document.createElement('button');
    button.textContent = letter;
    button.addEventListener('click', () => showAudios(letter));
    lettersContainer.appendChild(button);
});

// Mostrar los audios al seleccionar una letra
function showAudios(letter) {
    selectedLetter.textContent = `Audios de la letra: ${letter}`;
    audiosContainer.innerHTML = '';

    const audios = audioData[letter];
    if (audios) {
        audios.forEach(audio => {
            const audioWrapper = document.createElement('div');
            audioWrapper.classList.add('audio-wrapper');

            const audioName = document.createElement('p');
            audioName.textContent = audio.name;

            const audioElement = document.createElement('audio');
            audioElement.controls = true;
            audioElement.src = audio.path;

            audioWrapper.appendChild(audioName);
            audioWrapper.appendChild(audioElement);
            audiosContainer.appendChild(audioWrapper);
        });
    } else {
        audiosContainer.innerHTML = `<p>No hay audios disponibles para la letra ${letter}.</p>`;
    }
}
