const calcSection = document.querySelector('#secCalc');
const calcBtn = document.querySelector('#btnCalc');

const cambSection = document.querySelector('#secCamb');
const cambBtn = document.querySelector('#btnCamb');

const convSection = document.querySelector('#secConv');
const convBtn = document.querySelector('#btnConv');

var widthBtnCalc = calcBtn.clientWidth;
var widthBtnCamb = cambBtn.clientWidth;
var widthBtnConv = convBtn.clientWidth;
var currentSection = 1;

console.log(widthBtnCalc);
var sliderWidth = document.querySelector('.sectionSlider');

var changeActive = () => {
    if (currentSection === 1) {
        //animando botoes sessões
        calcBtn.classList.add('btnFocus');
        cambBtn.classList.remove('btnFocus');
        convBtn.classList.remove('btnFocus');
        //animando slider
        anime({
            targets: sliderWidth,
            width: widthBtnCalc + 'px',
            left: 0,
        });
        //escondendo sessões
        calcSection.classList.remove('displayNone');
        cambSection.classList.add('displayNone');
        convSection.classList.add('displayNone');
    } else if (currentSection === 2) {
        //animando botoes sessões
        calcBtn.classList.remove('btnFocus');
        cambBtn.classList.add('btnFocus');
        convBtn.classList.remove('btnFocus');
        //animando slider
        anime({
            targets: sliderWidth,
            width: widthBtnCamb + 'px',
            left: 142,
        });
        //escondendo sessões
        calcSection.classList.add('displayNone');
        cambSection.classList.remove('displayNone');
        convSection.classList.add('displayNone');
    } else if (currentSection === 3) {
        //animando botoes sessões
        calcBtn.classList.remove('btnFocus');
        cambBtn.classList.remove('btnFocus');
        convBtn.classList.add('btnFocus');
        // animando slider
        anime({
            targets: sliderWidth,
            width: widthBtnConv + 'px',
            left: 253,
        });
        //escondendo sessões
        calcSection.classList.add('displayNone');
        cambSection.classList.add('displayNone');
        convSection.classList.remove('displayNone');
    }
};

//CLIQUES DOS BOTOES

calcBtn.addEventListener('click', () => {
    currentSection = 1;
    changeActive();
    console.log('clicou no calculadora');
});
cambBtn.addEventListener('click', () => {
    currentSection = 2;
    changeActive();
    console.log('clicou no cambio');
});
convBtn.addEventListener('click', () => {
    currentSection = 3;
    changeActive();
    console.log('clicou no conversor');
});

// SLIDER DA SECTION COMEÇA NA MEDIDA CERTA
anime({
    targets: sliderWidth,
    width: widthBtnCalc + 'px',
});
