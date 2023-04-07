
//METODO GET
function ajaxGET(config) {
    let xhr = new XMLHttpRequest;
    xhr.open(config.metodo, config.url);
    
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            config.load(JSON.parse(xhr.response));
        }
    })
    xhr.send(config.data);
    }

    /* EJEMPLO DE USO
    ajaxGET({
        metodo:"GET",
        url: urluser,
        load: usuarios =>{
            
            for (let index = 0; index < usuarios.length; index++) {

                var usuariocorrecto = usuarios[index].email;
                var passcorrecto = usuarios[index].address.zipcode;
                var idusuario = usuarios[index].id;

                if (usuarioingresado == usuariocorrecto) {
                    if (passingresado == passcorrecto) {
                        sessionStorage.setItem("usuario",usuarioingresado);
                        sessionStorage.setItem("id",idusuario);
                        window.location.href ="aplicacion.html";
                    }else{
                        alert("Usuario o contraseña mal colocado");
                    }
                }
            }
        }
    })

    */





//METODO POST
function ajaxPOST(url) {
    //TOMAMOS LA VARIABLE GENERAL DEL FORM PARA DESPUES TOMAR SUS DATOS
    //var form = document.getElementById("myForm");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("name=" + form.name.value + "&email=" + form.email.value);
  }

 