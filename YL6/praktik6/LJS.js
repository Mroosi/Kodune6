var kuvaNpp = document.getElementById('kuvaVorm');
var lisaVorm = document.getElementById('vorm');
var paragrahv = document.getElementById('kuvaVormNupp');
var peidaNupp = document.getElementById('peidaVorm');
kuvaNpp.addEventListener('click', function(event) {
    lisaVorm.style.display = 'block';
    paragrahv.style.display = 'none';
});
peidaNupp.addEventListener('click', function(event) {
    lisaVorm.style.display = 'none';
    paragrahv.style.display = 'block';
});
lisaVorm.addEventListener('submit', function(event) {
    event.preventDefault();
    var nimetusElement = document.getElementById('nimetus');
    var kogusElement = document.getElementById('kogus');
    
    if( ! nimetusElement.value || ! kogusElement.value ){
        alert('Väljad täitmata!');
        return;
    }
    
    lisaRida(nimetusElement.value, kogusElement.value);
    nimetusElement.value = '';
    kogusElement.value = '';
})
function lisaRida(nimetus, kogus) {
    var laotabel = document.querySelector('#laotabel tbody');
    var rida = document.createElement('tr');
    var nimetusTd = document.createElement('td');
    var kogusTd = document.createElement('td');
    var tegevusTd = document.createElement('td');
    
    var kustutaNupp = document.createElement('input');
    kustutaNupp.setAttribute('type', 'button');
    kustutaNupp.value = 'Kustuta rida';

    tegevusTd.appendChild(kustutaNupp);
    nimetusTd.textContent = nimetus;
    kogusTd.textContent = kogus;
    rida.appendChild(nimetusTd);
    rida.appendChild(kogusTd);
    rida.appendChild(tegevusTd);
    laotabel.appendChild(rida);
    
    kustutaNupp.addEventListener('click', function(event) {
        if(confirm('Kas oled kindel?')){
            rida.parentNode.removeChild(rida);
        }
    });
};