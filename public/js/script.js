let btnCrear = document.getElementById('btnCrear')
btnCrear.addEventListener('click', ()=>{
    obtenerDatos('/crear')
    .then(response=>response.text())
    .then(data => {
            document.getElementById('divVista').innerHTML = data
        })
        .catch(err => console.error(err))
})

btnVer.addEventListener('click', ()=>{
    window.location.href = '/verClientes';
})
btnActualizar.addEventListener('click', ()=>{
    window.location.href = '/actualizar';
})

formActualizar.addEventListener('submit', (event)=>{
    event.preventDefault();
    let id = inputID.value;
    let nombre = inputNombre.value;
    let rut = inputRut.value;
    let email = inputEmail.value;
    let telefono = inputTel.value;
    let servicio = inputServ.value;

    fetch('/api/v1/clientes', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, nombre, rut, email, telefono, servicio})
    })
    .then(response => {
        if(response.ok){
            window.location.href = '/clienteActualizado';
        }else{
            console.error('Error al actualizar al cliente')
        }
    })
    .catch(err => console.error(err))
})
function obtenerDatos(url){
    return fetch(url)
    .then(response => response )
    .catch(err => console.error(err))
}