import { match } from "path-to-regexp"
import { EVENTS } from "../utils/constants"
import { useState, useEffect, Children } from "react"
import { getCurrentPath } from "../utils/constants"

//Vamos a iterar los childrens para manejar cada ruta y también leer sus props
// eslint-disable-next-line react/prop-types
export function Router({ children, routes = [], defaultComponet: DefaultComponent = () => <h1>404</h1> }) {

    const [currentPath, setCurrentPath] = useState(getCurrentPath())

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(getCurrentPath())
        }
        window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.addEventListener(EVENTS.POPSTATE, onLocationChange)

        return () => {
            window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
            window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
        }
    }, [])

    let routeParams = {}

    //add routes from children <Route /> components
    const routesFromChildren = Children.map(children, ({ props, type }) => {

        const { name } = type
        const isRoute = name === 'Route'
        //Esto para devolver una ruta en caso de que lo sea
        //sino, devolvemos las propiedades en caso de que no sea null          
        return isRoute ? props : null
    })

    //Concatenamos las rutas que se nos pasan por props
    //con las rutas que se nos pasan por children
    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

    // Para que sepa que componente va a renderizar o que ruta va a encontrar
    //path del array comparado con el (window.location.pathname)
    const Page = routesToUse.find(({ path }) => {

        // Si el path del array coincide con el path de la url
        if (path === currentPath) return true

        //hemos usado path-to-regexp
        //para defectar rutas dinámicas como por ejemplo
        // /search/:query <- :query es una ruta dinámica
        // y la url es /search/javascript
        // matched.params.query === 'javascript'
        const matcherUrl = match(path, { decode: decodeURIComponent })
        const matched = matcherUrl(currentPath)
        //Si no e encuentra el match retorna false
        if (!matched) return false

        // guardar los parámetros de la url que eran dinámicos
        // y que hemos extraído con path-to-regexp
        // por ejemplo, si la ruta es /search/:query
        // y la url es /search/javascript
        // matched.params.query === 'javascript'
        routeParams = matched.params
        return true // { query: 'javascript' } //search/javascrips
    })?.Component


    //Si no encuentra la ruta, renderiza el componente por defecto
    return Page
        ? <Page routeParams={routeParams} />
        : <DefaultComponent routeParams={routeParams} />

}