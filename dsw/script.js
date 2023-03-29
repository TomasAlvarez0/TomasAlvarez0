console.log('Hola mundo');

window.addEventListener('load', ()=>{ //funcion que se ejecuta luego de la carga del documento
    const submitButton = document.querySelector('#submit'); /*referencia a submit por id*/
    submitButton?.addEventListener('click',(event)=> { //el ? es como un if, que pregunta si el elemnto existe

        event.preventDefault(); /*para que no se muestren los param en la url*/
        //alert('Click en enviar');
        const name= document.querySelector('#name').value;
        const email= document.querySelector('#email').value;
        const message= document.querySelector('#message').value;

        if (name!=='' && email!=='' && message!==''){
           //console.log(name, email, message); 
            document.querySelector('#user-name').innerHTML = name;
            document.querySelector('#user-email').innerHTML = email;
            document.querySelector('#user-message').innerHTML = message;
        }else{
            //alert('Debes completar todos los campos');
            document.querySelector('#error').classList.add('show-error');
        }
        
    }); 

    document.querySelector('#get-user').addEventListener('click', getUser) //cuando se hace click en el boton se ejecuta la funcion getUser
});

function getUser(){
    fetch('https://randomuser.me/api/') //fetch llama a esa url
    .then((data)=> {
        //console.log(data.json()); //obtenemos la promesa
        return data.json();
    })
    .then((response) => { //el return de la funcion anidada anterior es la entrada de esta (response)
        console.log(response);

        const userData = response.results[0].name;
        document.querySelector('#user-name').innerHTML = `${userData.title} ${userData.first} ${userData.last} ` ;
    })
}

