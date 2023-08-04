import './styles.css';
import './responsive.css'
import { NavLink } from "react-router-dom"
import { useEffect } from "react";

import env from './config';

export default function NavBarTop() {
    var auxMovil = 0;

    let urlMedia = env.url

    useEffect(() => {
        window.scrollTo(0, 0);
        const navSlideClickH = () => {
            const burger = document.querySelector(".burger");
            const navLinks = document.querySelectorAll(".nav-links-h a");
            const navLinksIn = document.querySelectorAll(".rowMenu .colItem");

            navLinksIn.forEach((link, index) => {
                link.addEventListener("click", (ev) => {
                    burger.click()
                })
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
            const tecnologia = document.querySelector(".tecnologia");
            // const keyton = document.querySelector(".keyton");
            //const concesionarios = document.querySelector(".concesionarios");

            const nav = document.querySelector(".nav-links");
            const navh = document.querySelector(".nav-links-h");

            const navLinks = document.querySelectorAll(".nav-links a");
            const navSearch = document.querySelectorAll("div.navSearch");

            /*             burger.removeEventListener("click", ()=>{
            
            
            
                        }) */

            const burgerEvent = () => {
                nav.classList.toggle("nav-active");
                navSearch[0].classList.toggle("nav-search-active");

                document.querySelector('nav > .logo').classList.toggle("logoNav");
                navh.classList.toggle("nav-inactive");

                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = "";
                    } else {
                        link.style.animation = `navLinkFade 0.4s ease forwards 0.5s `;
                    }
                });

                document.querySelector(".internal").classList.add("logob")
                if (auxMovil == 0)
                    resetMenu();

                if (burger.classList.contains('toggle')) {

                } else {
                    document.querySelector(".internal").classList.remove("logob")
                }
            }
            burger.addEventListener("click", burgerEvent);
           /*  sinotruk.addEventListener("click", burgerEvent);
            sunward.addEventListener("click", burgerEvent); */

            if(tecnologia!=null){
            tecnologia.addEventListener("click", burgerEvent);}
            // keyton.addEventListener("click", burgerEvent);
            // concesionarios.addEventListener("click", burgerEvent);

            //INI PARAMS
            /*         const playBtn = document.querySelector(".boxesIni .c7h");
                      playBtn.addEventListener("click", () => {
                          modalVideo("c7h.mp4", "1.webp")
                      })
                      
                    const playBtn2 = document.querySelector(".boxesIni .t5g");
                      playBtn2.addEventListener("click", () => {
                          modalVideo("t5g.mp4", "4.webp")
                      })
                      
                    const playBtn3 = document.querySelector(".boxesIni .tecnologia");
                      playBtn3.addEventListener("click", () => {
                          modalVideo("tecnologia.mp4", "5.webp")
                      })  
              
                    const searchBtn = document.querySelector(".searchIcon");
                        searchBtn.addEventListener("click", () => {
                          burger.click()
                    })   */

            const closeBtnMovil = document.querySelectorAll(".closeMovil");
            for (var i = 0; i < closeBtnMovil.length; ++i) {
                let dataId = closeBtnMovil[i].getAttribute('data-id')
                closeBtnMovil[i].addEventListener("click", () => {
                    resetMenuMovil(dataId)
                    auxMovil = 1
                })
            }


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
    }, []);


    return <nav className="internal">
        <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <div className="logo">
            <a href="/"><img src={urlMedia+"vehicentro-logo-blanco.png"} width="230" height="80" /></a>
        </div>
       

        <ul className="nav-links-h">
            <li><NavLink to="/">INICIO</NavLink></li>
           {/*  <li ><a className="sinotruk mouseA" option="sinotruk">CAMIONES</a></li>
            <li ><a className="sunward mouseA" option="sunward">MAQUINARIA</a></li> */}
            <li className="tecnologiaCss" option="tecnologia">TECNOLOGÍA</li>
            <li className="camionesCss"><NavLink to="/camion-en-uso/camion-de-48-toneladas">CAMIONES EN USO</NavLink></li>
            <li className="concesionarios camionesCss"><NavLink to="/concesionarios">CONCESIONARIOS</NavLink></li>
            <li className="companiaCss"><NavLink to="/compania">COMPAÑIA</NavLink></li>
        </ul>

        <div className="navSearch">
            <input className="search-nav-input" data-testid="search-input" type="search" title="Search" placeholder="Buscar..." id="global-search-input" aria-controls="searchNavSuggestions" aria-autocomplete="list" aria-expanded="false" aria-activedescendant="search-suggestion-null" role="combobox" aria-describedby="searchBoxHelpText" />
        </div>
    </nav>
} 