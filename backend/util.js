function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
function launch(asyncFun, timeout = 0) {
    setTimeout(asyncFun, timeout)
}

function now() {
    return new Date().getTime()
}

export {
    sleep, launch, now
}