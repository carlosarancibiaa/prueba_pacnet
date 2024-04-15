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



function obtenerDatos(url){
    return fetch(url)
    .then(response => response )
    .catch(err => console.error(err))
}