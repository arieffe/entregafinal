import React from "react";
import imagen from '../IMG_2407.JPG'
import { useState } from "react";


function Main() {
    const [mostrarInfo, setMostrarInfo] = useState(false)
    const manejarClickBoton = () => {
      setMostrarInfo(!mostrarInfo)
    }
    return (
        <div>
            <article className="art1"> 
                <p>Bienvenidos a nuestro PET SHOP</p>
                <p>acá encontrarás lo mejor para tu amigo peludo</p>
                <button className="boton" onClick={manejarClickBoton}>Quiero saber más sobre ustedes! </button>
            </article>
            <article className="art2" style={{ display: mostrarInfo ? 'block' : 'none' }}>
                <p>Draco's Pet Shop es un emprendimiento familiar que nace con el objetivo de brindar el mejor cuidado para nuestras mascostas. Les presentamos a Draco.</p>
                <img src={imagen} alt="foto draco inicio" width="100%"></img>
            </article>
            {/* <article className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1642.8139197965681!2d-58.48544233720862!3d-34.56297709677144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1716144231136!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </article> */}
        </div>
    )
}
export default Main