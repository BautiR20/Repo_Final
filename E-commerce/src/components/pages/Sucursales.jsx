import React from 'react'
import "../../styles/sucursales.css"
import { Carousel } from "bootstrap"
import { useEffect } from 'react'


function Sucursales() {
  
    useEffect(() => {
        const element = document.getElementById("carouselExampleCaptions");
        if (element) {
        new Carousel(element);
        }
    }, []);
    return (
      <>
        <div className="locales">
          <h2>Donde encontrarnos</h2>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <iframe
                  className="d-block w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41358.91515530851!2d-46.7727821674031!3d-23.617008532553164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51a2b1caa32f%3A0xad8433182c04ab0c!2sNBA%20Store%20Arena!5e0!3m2!1ses-419!2sar!4v1759936916130!5m2!1ses-419!2sar"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="carousel-caption d-none d-md-block">
                  <h5>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>{" "}
                    Brasil, Sao Pablo
                  </h5>
                  <p>¡El NBA Store más grande de Sudamérica!</p>
                </div>
              </div>
              <div className="carousel-item">
                <iframe
                  className="d-block w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8527.672739777709!2d-58.5375602659208!3d-34.50624994992991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb10006219c11%3A0x1e5f956be823af8!2sNBA%20Store!5e0!3m2!1ses-419!2sar!4v1759937047370!5m2!1ses-419!2sar"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="carousel-caption d-none d-md-block">
                  <h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>{" "}
                    Martínez, Buenos Aires
                  </h5>
                  <p>¡La pasión del mejor basquet ahora en Argentina!</p>
                </div>
              </div>
              <div className="carousel-item">
                <iframe
                  className="d-block w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391749.8438095967!2d-71.32407810278006!3d-33.22592933815249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d10052f56a81%3A0x211d454c2eee134a!2sNBA%20Store!5e0!3m2!1ses-419!2sar!4v1759936683319!5m2!1ses-419!2sar"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="carousel-caption d-none d-md-block">
                  <h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>{" "}
                    Chile, Santiago de Chile
                  </h5>
                  <p>¡El primer NBA Store de Sudamerica!</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
            crossorigin="anonymous"
          ></script>
        
        <h2>¡Entérate de las ultimas novedades en nuestro canal de Youtube!</h2>
        <div class="masInfoContainer">
          <div class="flex-item">
            <p>
              La NBA continúa expandiendo su presencia global con la apertura de
              una nueva NBA Store en Argentina, un espacio dedicado a los
              fanáticos del básquetbol y de la cultura deportiva. Ubicada en una
              zona estratégica de la ciudad, la nueva tienda ofrece una amplia
              selección de productos oficiales de la liga, incluyendo camisetas
              de jugadores, indumentaria, accesorios y artículos exclusivos de
              las franquicias más emblemáticas. Este nuevo local no solo
              representa un punto de venta, sino también un lugar de encuentro
              para los aficionados, donde se podrá vivir la pasión por el
              baloncesto a través de un ambiente interactivo y experiencias
              únicas. La apertura reafirma el compromiso de la NBA con sus
              seguidores argentinos y su apuesta por acercar la marca y su
              estilo de vida al público local. Con un diseño moderno y una
              propuesta adaptada a las tendencias actuales, la NBA Store en
              Argentina busca convertirse en un referente para la comunidad de
              fanáticos, ofreciendo productos oficiales, novedades de cada
              temporada y un espacio para celebrar la cultura del deporte más
              allá de las canchas.
            </p>
          </div>

          <div class="flex-item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/LVJQakrXYac?si=CpWmP9nuO2kXn3Ee"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

        </div>
        </div>
      </>
    );
}

export default Sucursales
