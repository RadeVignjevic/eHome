import React from 'react'
import Fade from 'react-reveal/Fade';
import FadeIn from 'react-fade-in';
import { Link, animateScroll as scroll } from "react-scroll";

class TitleFlex extends React.Component {

    constructor() {
        super()
        this.state = {
            color: false,
            visible: true,
        }
    }


    showBox = (e) => {
        document.querySelector('.rightBox').classList.add('displayBlock')
    }

    sliderFn = (e) => {


    }

    componentDidMount() {

        window.onscroll = () => {

            var pageWidth = window.innerWidth
            console.log(pageWidth)

            if (window.scrollY > 0){
                this.setState({
                    visible: false,
                })
            }

            // if (pageWidth === 1366) {
            //     if (window.scrollY >= 490) {
            //         document.querySelector('.titleDiv').classList.remove('fixed')
            //         document.querySelector('.titleDiv').classList.add('absolute')
            //         this.setState({
            //             color: true,
            //         })

            //     }
            //     if (window.scrollY <= 440) {
            //         document.querySelector('.titleDiv').classList.add('fixed')
            //         document.querySelector('.titleDiv').classList.remove('absolute')
            //         this.setState({
            //             color: false,
            //             visible: false,
            //         })
            //     }
            // }




        }
    }

    scrollBottom = () => {
        scroll.scrollToBottom()
    }

    

    





    render() {
        return (
            <div>
                <div className='bgImage'>
                    <div className="container">
                        <div className="logosDiv">
                            <div className="logoDiv">
                                <img src="logo.png" alt="" />
                            </div>
                            <div className="mailDiv">
                                <img src="mail.png" alt="" onClick={this.scrollBottom}/>
                            </div>
                        </div>
                        <div className="titleDiv">
                            <FadeIn><p className='colorWhite'>PRVI SMART HOME SISTEM KOJI JE SPOJ IOT I UMJETNE INTELIGENCIJE</p></FadeIn>
                        </div>
                        <Fade right when={this.state.visible}>

                        <div className="descText">
                            <p>eHome - prvi koi nude spoj dvije trenutno najmodernije tehnologije - iOt i umjetna inteligencija</p>
                        </div>
                        </Fade>
                        <div id='section-2'>

                        </div>
                    </div>
                </div>
                <div className="boxesDiv">
                    <div className="leftBox">
                        <p>eHome - prvi koji nude spoj dvije trenutno najmodernije tehnologije - iOt i umjetna inteligencija. Mi vam omogucujemo kontrolu svih uredjaja iz nase ponude pomocu jednostavnog upravljanja nase mobilne aplikacije.</p>
                    </div>
                    <img src="arrow.png" alt="" className='arrowIcon' onClick={this.showBox} />
                    <div className="rightBox">
                        <p>Da li zelite da u vasem domu imate spoj ugodnosti, te mogucnosti da identifikujete najvece potrosace, a samim tim i ostvarite ustedu? Nasim naprednim tehnickim rjesenjima cemo vam omoguciti upravo to.</p>
                    </div>
                </div>

                <div className="sliderDiv">
                    {/* <img src="leftArrow.png" className='arrowSlider' alt="" onClick={this.sliderFn} /> */}
                    <div className="marginBottom">
                        <div className="houseIcon">
                            <img src="house.png" alt="" />
                        </div>
                        <div className="no-padding">
                            <p className='firstText'>Pametne sijalice</p>
                            <p className='secondText'>Since we don’t have actual photos of these it would</p>
                        </div>
                    </div>
                    <div className="marginBottom">
                        <div className="lockIcon">
                            <img src="lock.png" alt="" />
                        </div>
                        <div className="no-padding">
                            <p className='firstText'>Pametne brave</p>
                            <p className='secondText'>Since we don’t have actual photos of these it would</p>
                        </div>
                    </div>
                    <div className="marginBottom">
                        <div className="houseIcon">
                            <img src="house.png" alt="" />
                        </div>
                        <div className="no-padding">
                            <p className='firstText'>Pametne utcnice</p>
                            <p className='secondText'>Since we don’t have actual photos of these it would</p>
                        </div>
                    </div>
                    <div className="marginBottom">
                        <div className="houseIcon">
                            <img src="house.png" alt="" />
                        </div>
                        <div className="no-padding">
                            <p className='firstText'>Pametne kamere</p>
                            <p className='secondText'>Since we don’t have actual photos of these it would</p>
                        </div>
                    </div>
                </div>

            </div>

        )
    }

}

export default TitleFlex