const personas = [
    new Persona('Josué', 'Andrade'),
    new Persona('Santos', 'Barbosa'),
];

function mostrarPersonas() {
    let texto = '';
    for (let persona of personas) {
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona() {
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if (nombre.value != '' && apellido.value != '') {
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        nombre.value = '';
        apellido.value = '';
        mostrarPersonas();
    } else {
        alert('No seas wey, llena los campos');
    }
}
