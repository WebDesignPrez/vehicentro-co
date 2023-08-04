import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react";

import env from './config';
import SearchBar from "./components/Search";


export default function NavBar() {
    var auxMovil = 0;
    let control = 0;
    let urlMedia = env.url

    useEffect(() => {
        window.scrollTo(0, 0);

        //pop up politicas
        let the_button = document.getElementById('js-btn')
        let modaldos = document.getElementById("modaldos")
        let closeBtn = document.getElementById("closedos")
        


        the_button.addEventListener("click", handleClick)


        function handleClick(event) {
            modaldos.style.display = "block";
            closeBtn.addEventListener("click", () => {
                modaldos.style.display = "none"
            })
        }




        const navSlideClickH = () => {
            const burger = document.querySelector(".burger");
            const navLinks = document.querySelectorAll(".nav-links-h a");

            document.querySelector(".searchHome").addEventListener('click', function () {
                document.querySelector(".navSearch").classList.toggle("inputDisplay");
                document.getElementById("global-search-input").focus();
                document.getElementById("global-search-input").select();
            })


            navLinks.forEach((link, index) => {
                link.addEventListener("click", (ev) => {
                    //burger.click()

                    switch (ev.target.getAttribute('option')) {
                        case "concesionarios":
                            menuSelect("concesionarios")
                            break;
                        case "sinotruk":
                            menuSelect("sinotruk")
                            break;
                        case "sunward":
                            menuSelect("sunward")
                            break;
                        case "compania":
                            menuSelect("compania")
                            break;
                        case "tecnologia":
                            burger.click()
                            menuSelect("tecnologia")
                            break;
                    }
                })
            })
        }


        const menuSelect = (varTest) => {
            switch (varTest) {
                case "sinotruk":
                    document.querySelector(".item-level-0").classList.remove("nav-header-h")
                    document.querySelector(".item-level-0").classList.add("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-1").classList.remove("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-h")

                    document.querySelector(".item-level-3").classList.remove("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-h")

                    document.querySelector(".item-level-6").classList.remove("nav-header-s")
                    document.querySelector(".item-level-6").classList.add("nav-header-h")

                    document.querySelector(".item-level-7").classList.remove("nav-header-s")
                    document.querySelector(".item-level-7").classList.add("nav-header-h")
                    break;
                case "sunward":
                    document.querySelector(".item-level-1").classList.remove("nav-header-h")
                    document.querySelector(".item-level-1").classList.add("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-0").classList.remove("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-h")

                    document.querySelector(".item-level-3").classList.remove("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-h")

                    document.querySelector(".item-level-6").classList.remove("nav-header-s")
                    document.querySelector(".item-level-6").classList.add("nav-header-h")

                    document.querySelector(".item-level-7").classList.remove("nav-header-s")
                    document.querySelector(".item-level-7").classList.add("nav-header-h")
                    break;

                case "concesionarios":
                    document.querySelector(".item-level-3").classList.remove("nav-header-h")
                    document.querySelector(".item-level-3").classList.add("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-0").classList.remove("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-h")

                    document.querySelector(".item-level-1").classList.remove("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-h")

                    document.querySelector(".item-level-6").classList.remove("nav-header-s")
                    document.querySelector(".item-level-6").classList.add("nav-header-h")

                    document.querySelector(".item-level-7").classList.remove("nav-header-s")
                    document.querySelector(".item-level-7").classList.add("nav-header-h")
                    break;
                case "compania":
                    document.querySelector(".item-level-6").classList.remove("nav-header-h")
                    document.querySelector(".item-level-6").classList.add("nav-header-s")
                    document.querySelector(".item-level-6").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-0").classList.remove("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-h")

                    document.querySelector(".item-level-1").classList.remove("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-h")

                    document.querySelector(".item-level-3").classList.remove("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-h")

                    document.querySelector(".item-level-7").classList.remove("nav-header-s")
                    document.querySelector(".item-level-7").classList.add("nav-header-h")
                    break;
                case "tecnologia":
                    document.querySelector(".item-level-7").classList.remove("nav-header-h")
                    document.querySelector(".item-level-7").classList.add("nav-header-s")
                    document.querySelector(".item-level-7").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-0").classList.remove("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-h")

                    document.querySelector(".item-level-1").classList.remove("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-h")

                    document.querySelector(".item-level-3").classList.remove("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-h")

                    document.querySelector(".item-level-6").classList.remove("nav-header-s")
                    document.querySelector(".item-level-6").classList.add("nav-header-h")
                    break;

            }

        }

        const resetMenu = () => {
            document.querySelector(".item-level-0").classList.remove("nav-header-h")
            document.querySelector(".item-level-0").classList.add("nav-header-s")
            document.querySelector(".item-level-1").classList.remove("nav-header-s")
            document.querySelector(".item-level-1").classList.add("nav-header-h")
            document.querySelector(".item-level-6").classList.remove("nav-header-s")
            document.querySelector(".item-level-6").classList.add("nav-header-h")
            document.querySelector(".item-level-7").classList.remove("nav-header-s")
            document.querySelector(".item-level-7").classList.add("nav-header-h")
        }

        const navSlide = () => {
            const burger = document.querySelector(".burger");
            const sinotruk = document.querySelector(".sinotruk");
            const sunward = document.querySelector(".sunward");
            /*const keyton = document.querySelector(".keyton"); */
            const concesionarios = document.querySelector(".concesionarios");
            const compania = document.querySelector(".compania");
            const tecnologia = document.querySelector(".tecnologia");


            const nav = document.querySelector(".nav-links");
            const navh = document.querySelector(".nav-links-h");

            const navLinks = document.querySelectorAll(".nav-links a");
            const navSearch = document.querySelectorAll("div.navSearch");

            burger.addEventListener("click", () => {
                nav.classList.toggle("nav-active");
                //navSearch[0].classList.toggle("nav-search-active");

                document.querySelector('.logoHome').classList.toggle("logoNav");
                navh.classList.toggle("nav-inactive");

                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = "";
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards 0.5s `;
                    }
                });

                document.querySelector(".menu1").classList.add("logob")

                if (auxMovil == 0)
                    resetMenu();

                burger.classList.toggle("toggle");
                if (burger.classList.contains('toggle')) {

                } else {
                    document.querySelector(".menu1").classList.remove("logob")
                }
            });
            /* sinotruk.addEventListener("click", () => {
                nav.classList.toggle("nav-active");
                navSearch[0].classList.toggle("nav-search-active");

                document.querySelector('.logoHome').classList.toggle("logoNav");
                navh.classList.toggle("nav-inactive");

                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = "";
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards 0.5s `;
                    }
                });

                document.querySelector(".menu1").classList.add("logob")

                if (auxMovil == 0)
                    resetMenu();

                burger.classList.toggle("toggle");
                if (burger.classList.contains('toggle')) {

                } else {
                    document.querySelector(".menu1").classList.remove("logob")
                }
            }); */

           /*  sunward.addEventListener("click", () => {
                nav.classList.toggle("nav-active");
                navSearch[0].classList.toggle("nav-search-active");

                document.querySelector('.logoHome').classList.toggle("logoNav");
                navh.classList.toggle("nav-inactive");

                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = "";
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards 0.5s `;
                    }
                });

                document.querySelector(".menu1").classList.add("logob")

                if (auxMovil == 0)
                    resetMenu();

                burger.classList.toggle("toggle");
                if (burger.classList.contains('toggle')) {

                } else {
                    document.querySelector(".menu1").classList.remove("logob")
                }
            }); */

            concesionarios.addEventListener("click", () => {
                nav.classList.toggle("nav-active");
                navSearch[0].classList.toggle("nav-search-active");

                document.querySelector('.logoHome').classList.toggle("logoNav");
                navh.classList.toggle("nav-inactive");

                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = "";
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards 0.5s `;
                    }
                });

                document.querySelector(".menu1").classList.add("logob")

                if (auxMovil == 0)
                    resetMenu();

                burger.classList.toggle("toggle");
                if (burger.classList.contains('toggle')) {

                } else {
                    document.querySelector(".menu1").classList.remove("logob")
                }
            });

            if (tecnologia != null) {
                tecnologia.addEventListener("click", () => {
                    console.log("Tecnologia")
                    nav.classList.toggle("nav-active");
                    navSearch[0].classList.toggle("nav-search-active");

                    document.querySelector('.logoHome').classList.toggle("logoNav");
                    navh.classList.toggle("nav-inactive");

                    navLinks.forEach((link, index) => {
                        if (link.style.animation) {
                            link.style.animation = "";
                        } else {
                            link.style.animation = `navLinkFade 0.5s ease forwards 0.5s `;
                        }
                    });

                    document.querySelector(".menu1").classList.add("logob")

                    if (auxMovil == 0)
                        resetMenu();

                    burger.classList.toggle("toggle");
                    if (burger.classList.contains('toggle')) {

                    } else {
                        document.querySelector(".menu1").classList.remove("logob")
                    }
                });
            }


            /* compania.addEventListener("click", () => {
                 nav.classList.toggle("nav-active");
                 navSearch[0].classList.toggle("nav-search-active");
 
                 document.querySelector('nav > .logo').classList.toggle("logoNav");
                 navh.classList.toggle("nav-inactive");
 
                 navLinks.forEach((link, index) => {
                     if (link.style.animation) {
                         link.style.animation = "";
                     } else {
                         link.style.animation = `navLinkFade 0.5s ease forwards 0.5s `;
                     }
                 });
 
                 document.querySelector(".menu1").classList.add("logob")
 
                 if (auxMovil == 0)
                     resetMenu();
 
                 burger.classList.toggle("toggle");
                 if (burger.classList.contains('toggle')) {
 
                 } else {
                     document.querySelector(".menu1").classList.remove("logob")
                 }
             });*/
            //INI PARAMS


            /*             const searchBtn = document.querySelector(".searchIcon");
                        searchBtn.addEventListener("click", () => {
                            burger.click()
                        }) */

            const closeBtnMovil = document.querySelectorAll(".closeMovil");
            for (var i = 0; i < closeBtnMovil.length; ++i) {
                let dataId = closeBtnMovil[i].getAttribute('data-id')
                closeBtnMovil[i].addEventListener("click", () => {
                    resetMenuMovil(dataId)
                    auxMovil = 1
                })
            }

            /*   const motorPlayer = document.getElementById('audioMotor')
              motorPlayer.src = './motor.mp3' */
        }

        const resetMenuMovil = (opt) => {
            switch (opt) {
                case "0":
                    document.querySelector(".item-level-0").classList.toggle("nav-header-h")
                    document.querySelector(".item-level-0").classList.toggle("nav-header-s")
                    break;
                case "1":
                    document.querySelector(".item-level-1").classList.toggle("nav-header-h")
                    document.querySelector(".item-level-1").classList.toggle("nav-header-s")
                    break;
                case "3":
                    document.querySelector(".item-level-3").classList.toggle("nav-header-h")
                    document.querySelector(".item-level-3").classList.toggle("nav-header-s")
                    break;
                case "6":
                    document.querySelector(".item-level-6").classList.toggle("nav-header-h")
                    document.querySelector(".item-level-6").classList.toggle("nav-header-s")
                    break;
                case "7":
                    document.querySelector(".item-level-7").classList.toggle("nav-header-h")
                    document.querySelector(".item-level-7").classList.toggle("nav-header-s")
                    break;
                default:
                    break;
            }
        }

        /*  const modalVideo = (vid, poster) => {
              const para = document.createElement("div");
              para.classList.add("modal");
              document.querySelector("body").appendChild(para);
  
              para.addEventListener('click', () => {
                  para.remove()
              })
  
              //CLOSE BTN
              var img = document.createElement('img');
              img.src = './images/close-icon.png';
              img.addEventListener("click", () => {
                  para.remove()
              })
              img.classList.add("modalClose");
              para.appendChild(img);
  
              //VIDEO ELEMENT
              var video = document.createElement('video');
              video.classList.add("modalVideo");
              video.src = './images/' + vid;
              video.poster = './images/' + poster
              video.autoplay = true;
              video.controls = true;
              video.muted = false;
              para.appendChild(video);
  
              video.addEventListener('click', (event) => {
                  event.stopPropagation();
              })
          }*/

        const navSlideClick = () => {
            const navLinks = document.querySelectorAll(".nav-links a");

            navLinks.forEach((link, index) => {
                link.addEventListener("click", (ev) => {

                    switch (ev.target.getAttribute('option')) {
                        case "concesionarios":
                            menuSelect("concesionarios")
                            break;
                        case "sinotruk":
                            menuSelect("sinotruk")
                            break;
                        case "sunward":
                            menuSelect("sunward")
                            break;
                        case "compania":
                            menuSelect("compania")
                            break;
                        case "tecnologia":
                            menuSelect("tecnologia")
                            break;
                    }
                })
            })
        };


        // call the function
        navSlide()
        navSlideClick()
        navSlideClickH()

        // make sure to catch any error

        const keyDownHandler = event => {
            if (event.key === 'Escape') {
                document.getElementsByClassName('navSearch')[0].classList.remove("inputDisplay");
            }
        };

        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };




    });






    return <nav className="menu1 internal">
        <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <SearchBar />

        {/*         <div className="navSearch">
            <input className="search-nav-input" data-testid="search-input" type="search" title="Search" placeholder="Buscar..." id="global-search-input" onChange={handleChange} />
            {menuBusqueda.length > 0 &&
                <div className="result">
                    {menuBusqueda.map((item, index) => (
                        <li>
                            <NavLink to={item.url}>
                                {item.desc}
                            </NavLink>
                        </li>
                    ))}
                </div>
            }
        </div> */}

        <ul className="nav-links">
            <li>
                <a className="" href="#" option="sinotruk">CAMIONES</a>
                <div className="item-level-0 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="0"></div>
                        <p className="tituloMenu">CAMIONES</p>
                        <img className="imgnMenu" src={urlMedia + "home/logo-sinotruk-negro.png"} width="637" height="147" alt="Sinotruck" />
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colTitle">Serie 100</p>
                            <p className="colItem meniu"><NavLink to="/camiones/FRS">FRS</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/NQS" >NQS</NavLink></p>
                            {/* <p className="colItem meniu"><NavLink to="/camiones/camion-de-5-toneladas-1067">1067 / 5 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-6-toneladas-1067">1067 / 6 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-8-toneladas-1147">1147 / 8 ton</NavLink></p> */}

                        </div>

                        <div className="colMenu">
                            <p className="colTitle">Serie T5G</p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-40500">40.500</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-40500-AMT">40.500 AMT</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-17000">17.000</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-17000-AMT">17.000 AMT</NavLink></p>
                          {/*   <p className="colItem meniu"><NavLink to="/camiones/camion-13-toneladas-t5g-1167-330hp">1167 / 13 ton - <b>330HP</b></NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-18-toneladas-t5g-1257">1257 / 18 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-19-toneladas-t5g-1257">1257 / 19.5 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-t5g-4187">4187 / 24 ton</NavLink></p>
 */}
                        </div>
                        <div className="colMenu">
                            <p className="colTitle">Serie T7H</p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-40500">40.500</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-40500-AMT">40.500 AMT</NavLink></p>
                            {/* <p className="colItem meniu"><NavLink to="/cabezales/cabezal-t7h-390-42-toneladas">390 / 42 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-t7h-430-45-toneladas">430 / 45 ton</NavLink></p> */}

                        </div>
                        <div className="colMenu">
                            <p className="colTitle">Serie C7H</p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-52000">52.000</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-52000-AMT">52.000 AMT</NavLink></p>
                            {/* <p className="colItem meniu"><NavLink to="/cabezales/cabezal-c7h-540-catalinas-48-toneladas">540 / 48 ton - catalinas</NavLink></p> */}
                        </div>
                    </div>
                    {/* <div className="rowMenu espaciomenu">
                        <div className="colMenu">
                            <p className="colTitle">Volquetas</p>
                            <p className="colItem meniu"><NavLink to="/volquetas/volqueta-t5g-280">T5G-330 8-9m3</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/volquetas/volqueta-t7h-430">T7H-430 10-14m3</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/volquetas/volqueta-c7h-540">C7H-540 20m3</NavLink></p>
                            <div>
                            </div>
                        </div>

                        <div className="colMenu">
                            <p className="colTitle">Mixer</p>
                            <p className="colItem meniu"><NavLink to="/mixer/mixer-a7-1257">A7-1257</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/proximamente">C7H 12 m3</NavLink></p>
                            <div>
                            </div>
                        </div>
                    </div>
 */}
                </div>
            </li>
            {/* <li>
                <a className="" href="#" option="sunward">MAQUINARIA</a>
                <div className="item-level-1 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="1"></div>
                        <p className="tituloMenu">MAQUINARIA</p>
                        <img className="imgnMenu" src={urlMedia + "logo-sunward.webp"} alt="sunward" width="100" height="32" />
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colItem meniu"><NavLink to="/excavadoras/swe210">Excavadora SWE210</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/excavadoras/swe365e">Excavadora SWE365E</NavLink></p>

                        </div>

                    </div>
                </div>
            </li> */}

           {/*  <li className="item-level-5">
                <a href="/proximamente">VEHÍCULOS</a>
                <div className="item-level-5 nav-header nav-header-h" >
                </div>
            </li> */}

            <li>
                <a href="#" option="tecnologia">TECNOLOGÍA</a>
                <div className="item-level-7 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="7"></div>
                        <p>TECNOLOGÍA</p>
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colItem meniu"><NavLink to="/requisitos-de-calidad">Requisitos de calidad</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabina">Cabina</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/motor-mc">Motor MC</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/bastidor-o-chasis">Bastidor o Chasis</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/ejes-man">Ejes Man</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/sistema-evb">Sistema Evb</NavLink></p>
                        </div>
                    </div>
                </div>
            </li>

            <li className="item-level-5">
                <a href="/camion-en-uso/camion-de-48-toneladas">CAMIONES EN USO</a>
                <div className="item-level-5 nav-header nav-header-h" >
                </div>
            </li>

            <li>
                <a href="/concesionarios" >CONCESIONARIOS</a>
                <div className="item-level-3 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="3"></div>
                        <p>CONCESIONARIOS</p>
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colTitle">Ambato</p>
                            <p className="colTitle2">Matriz</p>
                            <p className="colItem">Av. Indoamérica Km 3-1/2</p>
                            <p className="colTitle2">Ficoa</p>
                            <p className="colItem">Av. Los Guaytambos</p>
                            <p className="colTitle">Machala</p>
                            <p className="colItem">Av 25 de junio km 3 y medio vía a pasajemax</p>
                            <p className="colTitle">Ibarra</p>
                            <p className="colItem">Panamericana Sur Km1 y calle los Andes</p>
                            <p className="colTitle">Manta</p>
                            <p className="colItem">Vía Manta- Rocafuerte - Sin Calle Secundaria, Vía al Aeropuerto</p>
                        </div>

                        <div className="colMenu">
                            <p className="colTitle">Quito</p>
                            <p className="colTitle2">Carapungo</p>
                            <p className="colItem">Av. Simón Bolivar S/N diagonal al Supermercado Santa María.</p>
                            <p className="colTitle2">Los Chillos</p>
                            <p className="colItem">Av. General Rumiñahui 8-40 y Av. San Luis (frente al San Luis Shopping)</p>
                            <p className="colTitle2">Sur</p>
                            <p className="colItem">Av. Maldonado y Romero Barberis</p>
                            <p className="colTitle2">El Colibrí</p>
                            <p className="colItem">E35 y Av. General Pintag</p>
                            <p className="colTitle2">Galo Plaza</p>
                            <p className="colItem">Av. Galo Plaza Lasso N66-106 y De las Avellanas</p>
                        </div>

                        <div className="colMenu">
                            <p className="colTitle">Guayaquil</p>
                            <p className="colTitle2">Samborondón</p>
                            <p className="colItem">Samborondón, vía el puente alterno norte, Ofc. Almax 2.</p>
                            <p className="colTitle2">Norte</p>
                            <p className="colItem">Autopista. Narcisa. De Jesús km1. Junto. a ATM. Agencia de tránsito municipal</p>
                            <p className="colTitle">Cuenca</p>
                            <p className="colItem">Av. Gil Ramírez Dávalos 3-80 y Mario Rizzini (Junto a la Gasolinera Primax)</p>
                        </div>

                        <div className="colMenu">
                            <p className="colTitle">Riobamba</p>
                            <p className="colItem">Av. Lizarzaburu entre Monseñor L. Proaño y Padre M. Orozco</p>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <a href="#" option="compania">COMPAÑÍA</a>
                <div className="item-level-6 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="6"></div>
                        <p>COMPAÑÍA</p>
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colItem meniu"><NavLink to="/compania">Nosotros</NavLink></p>
                            <a href="https://bdc.vehicentro.com:9443/ords/ws_vehicentro/r/crm/login" className="colItem meniu negro">BDC</a>
                            <p className="colItem meniu"><NavLink to="/trabaja-con-nosotros">Trabaja con nosotros</NavLink></p>
                            <a href="repuestos" className="colItem meniu negro">Repuestos</a><br></br>
                            <a className="colItem meniu negro" id="js-btn">Políticas</a>
                        </div>
                    </div>
                </div>
            </li>

            <li className="item-level-8 linkContact">
            </li>
        </ul>

        <div className="menuHome">
            <div className="titleHome"></div>
            <div className="logoHome">
                <NavLink to="/"><img src={urlMedia + "vehicentro-logo-blanco.png"} width="230" height="80" alt="Vehicentro" /></NavLink>
            </div>
            <div className="searchHome"><img src={urlMedia + "search.png"} alt="Buscar" width="100" height="100" /></div>
        </div>

        <div class="modaldos" id="modaldos">
            <div class="modaldos_content">
                <span class="closedos" id="closedos">&times;</span>
                <b><h2>Vehicentro Ecuador</h2> - <h2>Comercialización de camiones Sinotruk</h2> - <h2>Sinotruk Ecuador</h2></b><br></br><br></br>
                <h3>Venta de Camiones Sinotruk a nivel Nacional</h3><br></br><br></br>
                <p>En Vehicentro tenemos el camión que necesitas</p><br></br><br></br>
                <p>Los precios de nuestros <h4>camiones</h4>, <h4>volquetas</h4>, <h4>mixer</h4>, <h4>excavadoras</h4>, <h4>volquetas</h4> incluyen IVA y cualquier otro impuesto aplicable y están sujetos a cambios sin previo aviso.</p> <br></br><br></br>
                <p>Vehicentro con sus sucurales en Ecuador de dedica a la <h2>venta de Camiones en Ambato</h2>, <h2>venta de Camiones en Quito</h2>, <h2>venta de Camiones en Guayaguil</h2>, <h2>venta de Camiones en Riobamba</h2>, <h2>venta de Camiones en Machala</h2>, <h2>venta de Camiones en Ibarra</h2> y <h2>venta de Camiones en Manta</h2></p>
                <br></br><br></br>
                <p>Vehicentro no será responsable de los retrasos en la entrega causados por circunstancias imprevistas o que esten fuera de control.</p><br></br><br></br>
                <p>Vehicentro no será responsable de los daños directos, indirectos, incidentales o consecuentes causados el uso del camión después de la venta.</p><br></br><br></br>
                <p>Vehicentro se compromete a proteger la privacidad de los clientes y sus datos personales.</p><br></br>
                <p>Los datos personales del cliente se utilizarán solo para fines relacionados con la venta del camión.</p>
            </div>
        </div>

    </nav>


}
