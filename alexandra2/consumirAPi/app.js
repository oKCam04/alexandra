listaComentario=document.querySelector('#comentario')
fetch('http://jsonplaceholder.typicode.com/posts/1/comments')
    .then(respuesta=>respuesta.json())
.then(datos=>{
    console.log(datos);
    datos.forEach(dato => {
        let item=document.createElement('li');
        item.innerHTML=`<p>${dato.name}</p>
        <p>${dato.body}</p>
        <p>${dato.email}</p>`

        listaComentario.appendChild(item)
        
    });
})