class App {
    constructor() {
        const registerHomeBtn = document.getElementById('registerHomeBtn')

        if (this.isDarkMode()) {
            const bg = document.body.style.getPropertyValue('--bg')
            alert(bg)
        } else {
            const bg = document.body.style.getPropertyValue('--bg')
            alert(bg)
        }
        
        // 집 등록하기
        registerHomeBtn.onclick = () => {
            alert('현재 위치가 집으로 등록되었습니다.')
        }
    }
    



    isDarkMode() {
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    }
}

window.onload(() => new App())