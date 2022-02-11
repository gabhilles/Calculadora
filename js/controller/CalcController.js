class CalcController {
    constructor() {
        this._displayCalcEl = document.querySelector('.mathQuestion');

        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {}

    addEventListenerAll(element, events, fn) {
        console.log(events.split(' ') + '.split transforma string em array');
        events.split(' ').forEach((event) => {
            element.addEventListener(event, fn, false);
        });
    }
    initButtonsEvents() {
        let buttons = document.querySelectorAll('.calculatorGrid > button');
        buttons.forEach((btn) => {
            this.addEventListenerAll(btn, 'click drag', (e) => {
                console.log(btn.value);
            });
        });
    }

    get displayCalc() {
        return this._displayCalcEl.value;
    }
    set displayCalc(value) {
        this._displayCalcEl.value = value;
    }

    get currentDate() {
        return new Date();
    }
    set currentDate(value) {
        this._currentDate = value;
    }
}
