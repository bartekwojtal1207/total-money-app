import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <section className="col-md-12 contact">
                    <h3 className="contact__title">
                        Poznaj szczegóły oferty dla Ciebie
                        <br/>
                            Już nawet w 10 minut !
                    </h3>
                    <span className="contact__subtitle">
                Wypełnij, formularz, a Doradca z wybranego przez Ciebie banku skontaktuje się z Tobą i dopasuje oferte do Twoich potrzeb.
            </span>
                    <form action="#" className="contact__form">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control contact__form__input" id="name"
                                    required />
                                <label htmlFor="name" className="contact__form__input_label">Imię</label>
                        </div>
                        <div className="form-group">
                            <input type="text" name="surname" className="form-control contact__form__input" id="surname"
                                   required />
                                <label htmlFor="surname" className="contact__form__input_label">Nazwisko</label>
                        </div>
                        <div className="form-group">
                            <input type="text" name="phone" className="form-control contact__form__input" id="phone"
                                   required />
                                <label htmlFor="phone" className="contact__form__input_label">Telefon</label>
                        </div>
                        <div className="form-group">
                            <input type="text" name="postCode" className="form-control contact__form__input"
                                   id="postCode" required />
                                <label htmlFor="postCode" className="contact__form__input_label">Kod pocztowy</label>
                        </div>
                        <div className="contact__form__check_wrapper">
                            <div className="form-check">
                                <label className="form-check-label contact__form__checkbox_label"
                                       htmlFor="agreementConsent">Wyrażam zgodę na przetwarzanie <span>[ więcej ]</span></label>
                                <input type="checkbox" className="form-check-input" id="agreementConsent" required />
                                    <span className="contact__form__check_wrapper__fake_checkbox"></span>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label contact__form__checkbox_label"
                                       htmlFor="ofertsConsent">Wyrażam zgodę na
                                    przetwarzanie <span>[ więcej ]</span></label>
                                <input type="checkbox" className="form-check-input" id="ofertsConsent" required />
                                    <span className="contact__form__check_wrapper__fake_checkbox"></span>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label contact__form__checkbox_label"
                                       htmlFor="contactConsent">Wyrażam zgodę na przetwarzanieWyrażam zgodę na
                                    przetwarzanieWyrażam zgodę na przetwarzanie<span>[ więcej ]</span></label>
                                <input type="checkbox" className="form-check-input" id="contactConsent" required />
                                    <span className="contact__form__check_wrapper__fake_checkbox"></span>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary contact__contact_form__submit">Wyślij</button>
                    </form>

                </section>
            </div>
        )
    }
}

export default Contact;