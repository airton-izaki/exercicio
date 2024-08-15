const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')

function Encontrar_Lampada_Quebrada()
{
    return lampada.src.indexOf('quebrada') > -1
}

function Ligar_Lampada()
{
    if (!Encontrar_Lampada_Quebrada())
    {
        lampada.src = 'imagem/acesa.jpg'
    }
}

function Desligar_Lampada()
{
    if (!Encontrar_Lampada_Quebrada())
    {
        lampada.src = 'imagem/apagada.jpg'
    }
}

function Quebrar_lampada()
{
    lampada.src = 'imagem/quebrada.jpg'
}

ligar.addEventListener('click', Ligar_Lampada)
desligar.addEventListener('click', Desligar_Lampada)
lampada.addEventListener('mouseover',Ligar_Lampada)
lampada.addEventListener('mouseleave', Desligar_Lampada)
lampada.addEventListener('dblclick', Quebrar_lampada)