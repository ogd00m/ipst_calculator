import {print} from './utils/print.js'


const main = () => {
    let actions = ''
    let numb1 = ''
    let getNumber = ''
    return (state) => {

        if (state >= 0 || state == '.') {
            if (getNumber == '' && actions == '') {
                numb1 += state
                print(numb1)
                console.log('numb1', numb1,)
            }
            if (numb1 !== '' && actions !== '') {
                getNumber += state
                print(getNumber)
                console.log('getNumber', getNumber,)
            }
        }

        if (state == '+' || state == '-' || state == 'x' || state == '/') {
            actions = state
        } else if (state == '=') {
            if (actions == '+') {
                print(Number(getNumber) + Number(numb1))
                numb1 = getNumber
            } else if (actions == '-') {
                print(Number(numb1) - Number(getNumber))
                numb1 = getNumber
            } else if (actions == 'x') {
                print(Number(getNumber) * Number(numb1))
                numb1 = getNumber
            } else if (actions == '/') {
                print(numb1 / getNumber)
                numb1 = getNumber
            }
        } else if (state == 'С') {
            getNumber = ''
            print(0)
        } else if (state == 'АС') {
            numb1 = '';
            actions = '';
            getNumber = '';
            print(0)
        }

    }
}

export default main