function carregar(){
    var horaDia = window.document.getElementById('horaDia')
    var img = window.document.getElementById('img')

    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()

    horaDia.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if (hora > 0 && hora <= 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#eabb85'
    }else if (hora > 12 && hora <= 18){
        img.src = 'img/tarde2.png'
        document.body.style.background = '#a7bac8'
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#181216'
    }
}