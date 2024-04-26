
let editBtn=document.getElementsByClassName('editBtn')

for (let elem of editBtn) {
    elem.addEventListener('click', function(e) {
        let fila = document.getElementById(this.parentElement.parentElement.id)

        fila.innerHTML = `
        <td>${fila.children[0].innerText}</td>
        <td>
        <input id="inputNombre" value="${fila.children[1].innerText}" name="nombre" class="form-control"></input>
        </td>
        <td><input id="inputRut" value="${fila.children[2].innerText}" name="rut" class="form-control"></input></td>
        <td><input id="inputEmail" value="${fila.children[3].innerText}" name="email" class="form-control"></input></td>
        <td><input id="inputTelefono" value="${fila.children[4].innerText}" name="telefono" class="form-control"></input></td>
        <td><input id="inputServicio" value="${fila.children[5].innerText}" name="servicio" class="form-control"></input></td>
        <td id="td{{id}}">
        
        <button type="submit" title="Actualizar" class="btn actBtn m-1 btn-primary d-inline-block"><i class="bi bi-check-lg"></i></button>
        </td>
        `

        let actBtn=document.getElementsByClassName('actBtn')
        for (let elem of actBtn){
            elem.addEventListener('click', async function(e){
            let fila = document.getElementById(this.parentElement.parentElement.id)
            actData = {
                id: fila.children[0].innerText,
                nombre: fila.children[1].children[0].value,
                rut: fila.children[2].children[0].value,
                email: fila.children[3].children[0].value,
                telefono: fila.children[4].children[0].value,
                servicio: fila.children[5].children[0].value
            }

            response = await fetch('/api/v1/clientes', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(actData)
            })
            window.location.href = '/'
            })
        }
    });
}
