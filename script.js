const display = document.getElementById('display');
 buttons = document.querySelectorAll('.button');
// 1. bu button click bolganda hisoblaydi, yozadi.
document.querySelectorAll('.button').forEach((button) => { 
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C': display.innerText = ''; break;
            case '←': if (display.innerText) { display.innerText = display.innerText.slice(0, -1) } break;
            case '=':
                try {
                    display.innerText = eval(display.innerText); // eval hisoblash barcha amallarni.
                }
                catch{
                    display.innerText = 'Error!'
                    setTimeout(() => {
                        display.innerText = ''
                    }, 800)
                }
                break;
            default: display.innerText += e.target.innerText;
        };
    });
});

// keydown event, keypress event, keyup event.

// 2. bu Kampiyutor klaviyaturasi bosilganda ishlaydigan kod
document.addEventListener("keydown", (e) => {

    let a = e.keyCode // key yozza ham boladi. N/P 1 1 deb olib ketamiz 

    switch (a) {
        case 67: // C
            display.innerText = ' ';
            break;
        case 8:   // ←
            if (display.innerText) {
                display.innerText = display.innerText.slice(0, -1);
            }
            break;
        case 187: // =
        case 13:
            try {
                display.innerText = eval(display.innerText); // eval hisoblash barcha amallarni.
            }
            catch{
                display.innerText = 'Error!'
                setTimeout(() => {
                    display.innerText = ''
                }, 800)
            }
            break;
        case 97:
            {
                display.innerText += 1;
                break;
            }
        case 98: display.innerText += 2; break;
        case 99: display.innerText += 3; break;
        case 100: display.innerText += 4; break;
        case 101: display.innerText += 5; break;
        case 102: display.innerText += 6; break;
        case 103: display.innerText += 7; break;
        case 104: display.innerText += 8; break;
        case 105: display.innerText += 9; break;
        case 96: display.innerText += 0; break;
        case 107: display.innerText += `+`; break;
        case 109: display.innerText += `-`; break;
        case 110:
        case 190: display.innerText += `.`; break;
        case 106: display.innerText += `*`; break;
        case 111:
        case 191: display.innerText += `/`; break;
        case 48: display.innerText += `)`; break;
        case 57: display.innerText += `(`; break;
        default:
            let a = e.cancelable;
            a = display.innerText;
            display.innerText = a;
    }
})
//  3. bu Klaviyatura bosilganda backgroun hosil bo'lib o'chadi
document.addEventListener("keydown", (e) => {
    console.log(e.keyCode);
    
    buttons.forEach(button => {
        if (button.textContent == e.key)
            button.style.background = "#1ab914";
        setTimeout(() => {
            button.style.background = '';
        }, 200);
    });
});