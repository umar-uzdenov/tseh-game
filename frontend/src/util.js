function launch(asyncFun, timeout = 0) {
    setTimeout(asyncFun, timeout)
}

function launchLoop(fun, interval = 1000, immediate = true) {
    if (immediate) { setTimeout(fun, 0) }
    setInterval(fun, interval)
}

const tg = window.Telegram.WebApp
window.Telegram.WebApp.requestFullscreen()
if (parseFloat(tg.version) > 6) tg.disableVerticalSwipes()
if (["ios", "android"].includes(tg.platform.toLowerCase())) tg.requestFullscreen()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function minuteSpell(minutes) {
    // return right spelling for russian word "минута" according to given minutes
    const lastDigit = minutes % 10;
    const lastTwoDigits = minutes % 100;
    // console.log({lastDigit, lastTwoDigits})

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return 'минут';
    }

    if (lastDigit === 1) {
        return 'минута';
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
        return 'минуты';
    }

    return 'минут';
}

Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
}

function get(url, params) {
    return new Promise((resolve, reject) => {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `${url}?${new URLSearchParams(params).toString()}`)
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject(`Request failed with status ${xhr.status}`)
                }
            };
            xhr.onerror = () => {
                reject('Network error')
            };
            xhr.send()
        } catch (error) {
            reject(`Error: ${error}`)
        }
    })   
}

function authTg(initData) {
    return new Promise((resolve, reject) => {
        try {
            // return resolve(true)
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/auth');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = () => {
                // if (xhr.status >= 200 && xhr.status < 300) {
                    const data = JSON.parse(xhr.responseText);
                    // if (data.success) {
                    //     console.log('Authenticated as:', data.user);
                    // }
                    resolve(data);
                // } else {
                //     reject(`Request failed with status ${xhr.status}`);
                // }
            };
            // xhr.onerror = () => {
            //     reject('Network error');
            // };
            xhr.send(JSON.stringify(initData))
        } catch (error) {
            reject(`Error: ${error}`);
        }
    });
}

function post(url, data) {
    // return console.log(data)
    return new Promise((resolve, reject) => {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', `/api${url}`);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = () => {
                // console.log(xhr.responseText)
                const data = JSON.parse(xhr.responseText);
                resolve(data);
            };
            xhr.send(JSON.stringify({
                tgId: window.Telegram.WebApp.initDataUnsafe?.user?.id ?? 0,
                hash: window.Telegram.WebApp.initDataUnsafe?.hash ?? 0,
                data,
            }))
        } catch (error) {
            reject(`Error: ${error}`);
        }
    });
}
let count = 0
function getUser() {
        return new Promise((resolve, reject) => {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', `/api/get-user`);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = () => {
                // console.log(xhr.responseText)
                const data = JSON.parse(xhr.responseText);
                resolve(data);
            };
            // let data = {
            //     tgId: window.Telegram.WebApp.initDataUnsafe?.user?.id ?? 0,
            //     hash: window.Telegram.WebApp.initDataUnsafe?.hash ?? 0
            // }
            // if (count++ < 5) window.alert({where: "util get user", data})
            xhr.send(JSON.stringify({
                tgId: window.Telegram.WebApp.initDataUnsafe?.user?.id ?? 0,
                hash: window.Telegram.WebApp.initDataUnsafe?.hash ?? 0
            }))
        } catch (error) {
            reject(`Error: ${error}`);
        }
    });
}