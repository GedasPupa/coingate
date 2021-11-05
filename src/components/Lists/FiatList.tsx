import React, { MouseEventHandler } from 'react';
import './icon.css';

// USD, GBP, EUR, JPY, CNY, RUB

export const iconUrls = [
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/usd.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/gbp.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/eur.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/jpy.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/cny.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/rub.png?raw=true)`,
]

const display = {
    display: "inline-block",
}
const none = {
    display: "none",
}

interface Props {
    handlePay: MouseEventHandler<HTMLButtonElement>,
    toggle: boolean,
    toggleFunc: MouseEventHandler<HTMLUListElement>
}

export const FiatList: React.FC<Props> = (props) => {
    let {handlePay, toggle, toggleFunc} = props;

    return(
        <ul className="fiat-list" style={toggle ? display : none} onMouseLeave={toggleFunc}>
            <li className="list"><button style={{backgroundImage: iconUrls[0]}} onClick={handlePay} name="USD" className="link-drop">United States Dollar (USD)</button></li>
            <li className="list"><button style={{backgroundImage: iconUrls[1]}} onClick={handlePay} name="GBP" className="link-drop">Pound Sterling (GBP)</button></li>
            <li className="list"><button style={{backgroundImage: iconUrls[2]}} onClick={handlePay} name="EUR" className="link-drop">Euro (EUR)</button></li>
            <li className="list"><button style={{backgroundImage: iconUrls[3]}} onClick={handlePay} name="JPY" className="link-drop">Japanese YEN (JPY)</button></li>
            <li className="list"><button style={{backgroundImage: iconUrls[4]}} onClick={handlePay} name="CNY" className="link-drop">Chinese Yuan (CNY)</button></li>
            <li className="list"><button style={{backgroundImage: iconUrls[5]}} onClick={handlePay} name="RUB" className="link-drop">Russian Ruble (RUB)</button></li>
        </ul>
    )
}