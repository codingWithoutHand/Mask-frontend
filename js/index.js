class App {
    latitude = 0.0
    longitude = 0.0
    locationOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    constructor() {
        const registerHomeBtn = document.getElementById('registerHomeBtn')

        // 다크 모드
        if (this.isDarkMode()) this.changeTheme(true)

        navigator.geolocation.getCurrentPosition(async (position) => {
            const container = document.getElementById('map')
            const options = {
                center: new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude),
                level: 3
            }
            const map = new kakao.maps.Map(container, options)
            this.latitude = position.coords.latitude
            this.longitude = position.coords.longitude
            console.log(this.latitude, this.longitude)
        },this.error, this.locationOptions)

        // 집 등록하기
        registerHomeBtn.onclick = async () => {
            // 위치 정보 가져올 수 있는지
            if (!('geolocation' in navigator)) {
                alert('현재 위치 정보를 가져올 수 없습니다.')
                return
            }
            localStorage.setItem('latitude', this.latitude)
            localStorage.setItem('longitude', this.longitude)
            alert('집 등록이 완료되었습니다.')
        }
    }

    error(err) {
        console.log(err)
    }

    changeTheme(dark) {
        let themeColors = { '--bg': '#0f1421', '--btn': '#272b38', '--txt': '#cfcfcf', '--border': '#303540', '--section': '#191f2c' }
        if (!dark) themeColors = { '--bg': '#D8DEE9', '--btn': '#D8DEE9', '--txt': '#2E3440', '--border': '#AAB2CD', '--section': '#E5E9F0' }
        const root = document.querySelector(':root')
        for (const key in themeColors) root.style.setProperty(key, themeColors[key])
    }

    isDarkMode() {
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    }
}

window.onload = () => new App()