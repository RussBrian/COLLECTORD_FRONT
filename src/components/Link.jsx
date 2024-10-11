/* eslint-disable react/prop-types */
import { BUTTONS, EVENTS } from "../utils/constants"

// eslint-disable-next-line react-refresh/only-export-components
export function navigate(href) {
    window.history.pushState({}, '', href)
    // crear un evento personalizado 
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
}

export function Link({ target, to, ...props }) {

    const handleClcik = (event) => {

        //Si es el evento principal y el boton principal
        const isMainEvent = event.button === BUTTONS.primary // primary click o click izquierdo
        //si se pulsa la letra meta, alt , control o shift o sea el e vento esta modificado
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        //si se tiene que abrir en si mismo o el target sea indefinido
        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault()
            navigate(to) //navegacion SPA
        }

    }

    return <a onClick={handleClcik} href={to} target={target} {...props} />
}