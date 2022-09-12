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
        registerHomeBtn.onclick = async () => {
            // 위치 정보 가져올 수 있는지
            if (!('geolocation' in navigator)) {
                alert('현재 위치 정보를 가져올 수 없습니다.')
                return
            }
            navigator.geolocation.getCurrentPosition((position) => {
                alert(position.coords.latitude + ' ' + position.coords.longitude)
                alert('현재 위치가 집으로 등록되었습니다.')
            })
        }
    }

    isDarkMode() {
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    }
}

window.onload(() => new App())