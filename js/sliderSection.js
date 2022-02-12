const calcSection = document.querySelector('#secCalc');
const calcBtn = document.querySelector('#btnCalc');

const cambSection = document.querySelector('#secCamb');
const cambBtn = document.querySelector('#btnCamb');

const convSection = document.querySelector('#secConv');
const convBtn = document.querySelector('#btnConv');

var btnUnderlined = document.querySelector('.btnUnderlined');
var widthBtnCalc = calcBtn.clientWidth;
var widthBtnCamb = cambBtn.clientWidth;
var widthBtnConv = convBtn.clientWidth;

const sectionList = document.querySelector('#sectionList');
const widthSectionItem = calcSection.clientWidth;
console.log(-widthSectionItem * 2);
var currentSection = 1;

var changeActive = () => {
    var btnUnderlined = document.querySelector('.btnUnderlined');
    switch (currentSection) {
        case 1:
            //Animação Slider
            anime({
                targets: sectionList,
                translateX: 0,
            });
            // Animação Botões
            anime({
                targets: btnUnderlined,
                width: widthBtnCalc + 'px',
                translateX: 0,
                easing: 'easeOutElastic',
            });
            calcBtn.classList.add('btnActive');
            cambBtn.classList.remove('btnActive');
            convBtn.classList.remove('btnActive');
            break;

        case 2:
            //Animação Slider
            anime({
                targets: sectionList,
                translateX: -widthSectionItem - 50,
            });
            // Animação Botões
            anime({
                targets: btnUnderlined,
                width: widthBtnCamb + 'px',
                translateX: 142,
                easing: 'easeOutElastic',
            });
            calcBtn.classList.remove('btnActive');
            cambBtn.classList.add('btnActive');
            convBtn.classList.remove('btnActive');
            break;

        case 3:
            //Animação Slider
            anime({
                targets: sectionList,
                translateX: -widthSectionItem * 2 - 100,
            });
            // Animação Botões
            anime({
                targets: btnUnderlined,
                width: widthBtnConv + 'px',
                translateX: 253,
                easing: 'easeOutElastic',
            });
            calcBtn.classList.remove('btnActive');
            cambBtn.classList.remove('btnActive');
            convBtn.classList.add('btnActive');
            break;

        default:
            alert('deu ruim');
            break;
    }
};

//Botoes Selecionar Section

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
    targets: btnUnderlined,
    width: widthBtnCalc + 'px',
});
