let botao = document.getElementById('btn')
botao.addEventListener('click', () => {
    let resultado = document.getElementById('res')

    let temperaturas = []
    let temperatura = document.querySelectorAll('.temp')
    temperatura.forEach(temp => {
        temperaturas.push(Number(temp.value))
    })

    let somaTemps = temperaturas.reduce((valor, indice) => {
        return valor + indice
    })

    let mediaAnual = somaTemps / 12
    resultado.innerHTML = `A média anual das temperaturas é <strong>${mediaAnual.toFixed(1)}°C</strong> <br>`

    let tempAcima = []
    temperaturas.forEach(tempAcimaMedia => {
        if(tempAcimaMedia > mediaAnual) {
            tempAcima.push(tempAcimaMedia)
        }
    })
    resultado.innerHTML += `As temperaturas acima da média anual são: <strong>${tempAcima}</strong> <br>`

    let tempMax = Math.max(...temperaturas)
    let tempMin = Math.min(...temperaturas)
    resultado.innerHTML += `A menor temperatura foi <strong>${tempMin}°C</strong> <br>A maior temperatura foi<strong> ${tempMax}°C</strong>`
    
})