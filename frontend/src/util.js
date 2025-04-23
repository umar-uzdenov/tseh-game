function launch(asyncFun) {
    setTimeout(asyncFun, 0)
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
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/auth');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = () => {
                // if (xhr.status >= 200 && xhr.status < 300) {
                    const data = JSON.parse(xhr.responseText);
                    // if (data.success) {
                    //     console.log('Authenticated as:', data.user);
                    // }
                    resolve(data.success);
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
