import Fade from 'react-reveal/Fade';
import * as React from 'react'
import axios from 'axios'

class OfferFlex extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            message: '',
            newsletter: false,
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.handleChangeEmailOnly = this.handleChangeEmailOnly.bind(this)
        this.handleSubmitEmail = this.handleSubmitEmail.bind(this)
    }

    handleChangeEmailOnly = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmitEmail(e) {
        e.preventDefault()
        const { email, message } = this.state
        const form = await axios.post('/api/email', {
            email,
            message
        })
    }



    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()
        const { name, email, message, } = this.state
        const form = await axios.post('/api/form', {
            name,
            email,
            message,
        })
    }

    signUp = (e) => {

        this.setState({
            newsletter: !this.state.newsletter,
            signInBtn: !this.state.signIn,
        })
    }

    closeForm = (e) => {
        this.setState({
            newsletter: !this.state.newsletter,
            signInBtn: true,
            confirmation: true,
        })
    }

    showBox = (e) => {
        document.querySelector('.rightBoxOffer').classList.remove('displayNone')
        document.querySelector('.rightBoxOffer').classList.add('displayBlock')
        this.setState({
            arrow: false,
        })
    }

    hideBox = (e) => {
        document.querySelector('.rightBoxOffer').classList.remove('displayBlock')
        document.querySelector('.rightBoxOffer').classList.add('displayNone')
        this.setState({
            arrow: true,
        })
    }

    render() {
        return (
            <div>
                <div className="offerDiv">
                    <p>O NAMA I NASOJ PONUDI</p>
                </div>
                <div className="boxesDivOffer">
                    <div className="leftBox">
                        <p>Nasa ponuda se sastoji u implementiranju pametnog sistema u vas dom sa kojim cete pored modernog doma dobiti uvid i u vase troskove i savjete kako iste smanjiti.</p>
                    </div>
                    {this.state.arrow ? <img src="arrow.png" alt="" className='arrowIconOffer' onClick={this.showBox} /> : <i className="fa  fa-times fa-2x" onClick={this.hideBox}></i>}


                    <div className="rightBoxOffer">
                        <p>Pored navedenog, mozete nam poslati i prijedlog sa vasim potrebama a mi cemo uraditi sve da ponudimo i njih u sklopu naseg sistema koji pravimo za vas.</p>
                    </div>
                </div>
                <div className='flexNewsletter'>
                    <div className="newsletter">



                        <form className='form' onSubmit={this.handleSubmitEmail}>
                            {this.state.newsletter ?
                                <div>
                                    <p className='newsLetterSignUp'>Prijavom na nas newsletter, dodacemo vas u grupu, te redovno obavjestavati o nasoj ponudi!</p>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" onChange={this.handleChangeEmailOnly} />
                                </div>
                                : null}



                            {this.state.signInBtn ? <button className='submitBtn' onClick={this.closeForm}>PRIJAVI SE</button> : <button className='submitBtn' onClick={this.signUp}>PRIJAVI SE</button>}
                        </form>

                    </div>
                    {this.state.confirmation ? <Fade left><div className="confirmation">
                        <p className='confirmation'>Hvala sto ste se prijavili na newsletter, bicete obavjesteni o svim novim ponudama</p>
                    </div>
                    </Fade> : null}

                </div>
                <div className="offerSecondDiv">
                    <p className='offerP'>Nasa mobilna aplikacija ce vam biti dostupna nakon kupovine, te cete pomocu nje moci upravljati sa svim navedenim uredjajima. Pored toga imacete pristup detaljnoj analizi potrosaca na osnovu koje cete shodno tome moci reagovati kako bi smanjili troskove.</p>
                </div>
                <div className="bottomForm">
                    <div className="divFormBottom">
                        <div className="leftForm">
                            <form action="POST"
                                onSubmit={this.handleSubmit}
                            >
                                <p className='callUs'>JAVITE SE</p>

                                <label htmlFor="firstlast">Ime i Prezime</label>
                                <input type="text" name="name" id="text" onChange={this.handleChange} />

                                <label htmlFor="email" >Email</label>
                                <input type="email" name="email" id="emailBottom" onChange={this.handleChange} />

                                <label htmlFor="message">Poruka</label>
                                <input type="text" name="message" id="messageBottom" onChange={this.handleChange} />

                                <button className='submitBtn'>SALJI</button>
                            </form>
                        </div>
                        <div className="rightForm">
                            <p className='callUs contactCall'>KONTAKT</p>
                            <h1 className='emailContactBottom'>kontakt@ehome.ba</h1>
                            <p className='basicInfo'>+38761335240</p>
                            <p className='basicInfo'>+222 Place Ernest Granier</p>
                            <p className='basicInfo'>&copy; eHome, 2020</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}

export default OfferFlex