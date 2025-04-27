function launch(asyncFun, timeout = 0) {
    setTimeout(asyncFun, timeout)
}

function launchLoop(fun, interval = 1000, immediate = true) {
    if (immediate) { setTimeout(fun, 0) }
    setInterval(fun, interval)
}

const tg = window.Telegram.WebApp

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

let db = null

launch(async () => {
    for (let i = 0; i < 99; i++) {
        if (window.database) {
            db = window.database
            return
        }
        sleep(10)
    }
    console.log("no database")
})

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
            xhr.send(JSON.stringify({ initData }));
        } catch (error) {
            reject(`Error: ${error}`);
        }
    });
}
