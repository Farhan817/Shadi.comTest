const isLogin = () => {
    if (window.sessionStorage.getItem("isLogin")) {
        return true
    }
    else {
        return false
    }
}
export default isLogin