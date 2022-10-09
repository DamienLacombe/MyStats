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

export function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
            let paths = document.querySelectorAll(".path");
            let mode=repeat?'infinite':'forwards'
            for (let i = 0; i < paths.length; i++) {
                const path = paths[i];
                const length = path.getTotalLength();
                path.style["stroke-dashoffset"] = `${length}px`;
                path.style["stroke-dasharray"] = `${length}px`;
                path.style["stroke-width"] = `${strokeWidth}px`;
                path.style["stroke"] = `${strokeColor}`;
                path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
                path.style["animation-delay"] = `${i * delay}s`;
            }
        }

        
 