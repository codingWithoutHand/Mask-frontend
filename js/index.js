class App {
    constructor() {
        const registerHomeBtn = document.getElementById('registerHomeBtn')

        // 다크 모드
        if (this.isDarkMode()) this.changeTheme(true)
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

    changeTheme(dark) {
        const themeColors = { '--bg': '#0f1421', '--btn': '#272b38', '--txt': '#cfcfcf', '--border': '#303540', '--section': '#191f2c' }
        if (!dark) themeColors = { '--bg': '#D8DEE9', '--btn': '#D8DEE9', '--txt': '#2E3440', '--border': '#AAB2CD', '--section': '#E5E9F0' }
        const root = document.querySelector(':root')
        for (const key in themeColors) root.style.setProperty(key, themeColors[key])
    }

    isDarkMode() {
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    }
}

window.onload = () => new App()