import React, { Component } from 'react';
import pkoLogo from '../../assets/img/pko-bp.png'

class CreditInfo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <section className="row credit">
                    <div className="col-md-12 credit__company">
                        <img src={pkoLogo} className="img img-fluid credit__logo" alt="logo bank"/>
                            <h4 className="text-left credit__title">Kredyt mieszkaniowy Własny Kąt</h4>
                            <span className="text-left credit__bank_name">PKO Bank Polski </span>
                            <span className="credit__raiting"></span>
                    </div>
                    <br/>

                    <div className="credit__info col-md-12">
                        <ul className="credit__info__list">
                            <li className="credit__info__list__item">Kwota kredytu: <strong>25000 zł</strong></li>
                            <li className="credit__info__list__item">Okres spłaty: <strong>25 lat</strong></li>
                            <li className="credit__info__list__item">Rata: <strong>1227.02 zł</strong>/mie</li>
                        </ul>
                    </div>
                    <hr className="credit__hr" />
                </section>
            </div>
        )
    }
}


export default CreditInfo;