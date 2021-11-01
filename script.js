function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('image');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    if(hora >= 0 && hora < 12){
        img.src = 'images/manha.jpg';
        msg.innerHTML = `Bom dia! </br> Agora são ${hora}:${minuto} horas.`;
        document.body.style.background = '#20b2aa';
    } else if(hora >= 12 && hora <= 18){
        img.src = 'images/tarde.jpg';
        msg.innerHTML = `Boa Tarde! </br> Agora são ${hora}:${minuto} horas.`;
        document.body.style.background = '#ffa500';
    }else{
        img.src = 'images/noite.jpg';
        msg.innerHTML = `Boa Noite! </br> Agora são ${hora}:${minuto} horas.`;
        document.body.style.background = '#08304b';
    }
}



