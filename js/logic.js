import {print, getNumber} from './utils/print.js'

const main = () => {
    let actions = ''
    let numb1 = ''

    return (state) => {
        let res = []
        if (state >= 0 || state == '.') {
            if (getNumber() == 0) {
                print(state)
            }else if (state == '.'){
                print(0 + '.')
            }
            else {
                print(getNumber() + state)
            }


        } else if (state == '+') {
            numb1 = getNumber()
            actions = '+'
            print(0)

        } else if (state == '-') {
            numb1 = getNumber()
            actions = '-'
            print(0)

        } else if (state == 'x') {
            numb1 = getNumber()
            actions = '*'
            print(0)

        } else if (state == '/') {
            numb1 = getNumber()
            actions = '/'
            print(0)
        }else if(state == '.'){
            print(0)
        }else if (state == '=') {
            console.log(numb1)
            if (actions == '+') {
                print(Number(getNumber()) + Number(numb1))
                numb1 = getNumber()
            } else if (actions == '-') {
                print(Number(numb1) - Number(getNumber()))
                numb1 = getNumber()
            } else if (actions == '*') {
                print(Number(getNumber()) * Number(numb1))
                numb1 = getNumber()
            } else if (actions == '/') {
                let test = numb1 / getNumber()
                print(test)
                numb1 = getNumber()
            }
        } else if (state == 'С'){
            console.log('asd')
            print(0)
        } else if (state == 'АС'){
            numb1 = '';
            actions = '';
            print(0)
        }

    }
}

export default main