const calcSection = document.querySelector('#secCalc');
const calcBtn = document.querySelector('#btnCalc');

const cambSection = document.querySelector('#secCamb');
const cambBtn = document.querySelector('#btnCamb');

const convSection = document.querySelector('#secConv');
const convBtn = document.querySelector('#btnConv');

var currentSection = 1;

var changeActive = () => {
    switch (currentSection) {
        case 1:
            calcBtn.classList.add('sectionActive'); // calculadora
            cambBtn.classList.remove('sectionActive');
            convBtn.classList.remove('sectionActive');

            calcSection.classList.remove('displayNone');
            cambSection.classList.add('displayNone');
            convSection.classList.add('displayNone');
            break;
        case 2:
            calcBtn.classList.remove('sectionActive');
            cambBtn.classList.add('sectionActive'); // cambio
            convBtn.classList.remove('sectionActive');

            calcSection.classList.add('displayNone');
            cambSection.classList.remove('displayNone');
            convSection.classList.add('displayNone');
            break;
        case 3:
            calcBtn.classList.remove('sectionActive');
            cambBtn.classList.remove('sectionActive');
            convBtn.classList.add('sectionActive'); // conversor

            calcSection.classList.add('displayNone');
            cambSection.classList.add('displayNone');
            convSection.classList.remove('displayNone');
            calcBtn.ps;
            break;

        default:
            break;
    }
};

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
