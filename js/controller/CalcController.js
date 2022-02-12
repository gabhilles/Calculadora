class CalcController {
    constructor() {
        this._displayCalcEl = document.querySelector('.mathQuestion');
        this._operation = [];
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {}

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach((event) => {
            element.addEventListener(event, fn, false);
        });
    }

    clearAll() {
        this._operation = [];
    }

    clearEntry() {
        this._operation.pop();
    }
    setLastOperation(value) {
        this._operation[this._operation.length - 1] = value;
    }

    getLastOperation() {
        return this._operation[this._operation.length - 1];
    }
    isOperator(value) {
        return ['+', '-', '*', '%', '/'].indexOf(value) > -1;
    }
    pushOperator(value) {
        this._operation.push(value);

        if (this._operation.length > 3) {
            let last = this._operation.pop();
            console.log(this._operation);
        }
    }
    addOperation(value) {
        if (isNaN(this.getLastOperation())) {
            if (this.isOperator(value)) {
                console.log('deu TRUE para operador ');
                this.setLastOperation(value);
            } else if (isNaN(value)) {
                console.log(value + 'é o primeiro número? true');
            } else {
                this.pushOperator(value);
            }
        } else {
            if (this.isOperator(value)) {
                this.pushOperator(value);
            } else {
                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(parseInt(newValue));
            }
        }
    }

    setError() {
        this.displayCalc = 'ERROR';
    }

    execBtn(value) {
        switch (value) {
            case 'ce':
                this.clearAll();
                console.log('apagou tudo');
                break;
            case 'ac':
                this.clearEntry();
                console.log('apagou ultima entrada');
                break;

            case '*':
                this.addOperation('*');
                console.log('multiplicação');
                break;
            case '/':
                this.addOperation('/');
                console.log('divisão');
                break;
            case '+':
                this.addOperation('+');
                console.log('soma');
                break;
            case '-':
                this.addOperation('-');
                console.log('subtração');
                break;
            case '.':
                this.addOperation('.');
                console.log('ponto');
                break;
            case '%':
                this.addOperation('%');

                break;
            case '=':
                console.log('resultado');
                break;
            case '00':
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;
        }
    }

    initButtonsEvents() {
        let buttons = document.querySelectorAll('.calculatorGrid > button');
        buttons.forEach((btn) => {
            this.addEventListenerAll(btn, 'click drag', (e) => {
                let textBtn = btn.value;
                console.log(textBtn);
                this.execBtn(textBtn);
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
