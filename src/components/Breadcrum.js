import React from 'react'
import { Link, useLocation, useParams } from "react-router-dom"

const Breadcrum = () => {//Breadcrum que sirve para indicarle al usuario en qué parte del sitio está ubicado. 
    //Se implementaron elementos de react-router-dom para imprimir las rutas en el componente.
    const { category } = useParams()
    let location = useLocation()
    let translatedCategory

    switch (category) {
        case 'nuts':
            translatedCategory = 'Frutos secos'
            break;
        case 'breakfast':
            translatedCategory = 'Desayuno'
            break;
        case 'celiac':
            translatedCategory = 'Celíacos'
            break;
        case 'vegan':
            translatedCategory = 'Vegano'
            break;
        case 'frozen':
            translatedCategory = 'Congelados'
            break;
        default:
            translatedCategory = 'Todo'
    }
    return (

        <div className="alert alert-success shadow-lg">

            <div className="text-sm breadcrumbs flex justify-center w-full">
                <ul>
                    <li><Link to={'/'}>Inicio</Link></li>{/* Dos operadores ternarios anidados */}
                    {location.pathname == `/category/${category}` || location.pathname == '/'
                        ? <><li> Productos</li> <li><a>{translatedCategory}</a></li></>
                        : <>{location.pathname == '/locations' ? <li>Sucursales</li> : <li>Contacto</li>}</>
                    }
                </ul>
            </div>

        </div>

    )
}

export default Breadcrum