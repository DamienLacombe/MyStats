export const activeNav = (clicked) => {

    const active = document.querySelector("nav")
    const resize = document.querySelectorAll(".resized")

    if (clicked === true) {

        active.classList.remove("hidden")
        setTimeout(() => {
            active.classList.add("active")
        }, 0)

        Array.from(resize).map(element => {

            element.classList.remove("hidden")
            setTimeout(() => {
                element.classList.add("resize")
            }, 0)
            return 0
        })
    } else {

        active.classList.remove("active")
        setTimeout(() => {
            active.classList.add("hidden")
        }, 0)

        Array.from(resize).map(element => {

            element.classList.remove("resize")
            setTimeout(() => {
                element.classList.add("hidden")
            }, 0)
            return 0
        })
    }





}