import React, { MouseEventHandler } from 'react';
import './icon.css';

const coinIcons = [
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/btc.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/ltc.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/eth.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/xrp.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/bch.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/trx.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/nano.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/dash.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/dai.png?raw=true)`,
    `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/usdt.png?raw=true)`,
]

const display = {
    display: "inline-block",
}
const none = {
    display: "none",
}

interface Props {
    handleBuy: MouseEventHandler<HTMLButtonElement>,
    toggleCoin: boolean,
    toggleCoinFunc: MouseEventHandler<HTMLUListElement>
}

export const CoinsList: React.FC<Props> = (props) => {
    const {handleBuy, toggleCoin, toggleCoinFunc} = props;

    return(
        <ul className="coin-list" style={toggleCoin ? display : none} onMouseLeave={toggleCoinFunc}>
            <li className="list"><button name="BTC" style={{backgroundImage: coinIcons[0]}} onClick={handleBuy} className="link-drop">Bitcoin (BTC)</button></li>
            <li className="list"><button name="LTC" style={{backgroundImage: coinIcons[1]}} onClick={handleBuy} className="link-drop">Litecoin (LTC)</button></li>
            <li className="list"><button name="ETH" style={{backgroundImage: coinIcons[2]}} onClick={handleBuy} className="link-drop">Ethereum (ETH)</button></li>
            <li className="list"><button name="XRP" style={{backgroundImage: coinIcons[3]}} onClick={handleBuy} className="link-drop">Ripple (XRP)</button></li>
            <li className="list"><button name="BCH" style={{backgroundImage: coinIcons[4]}} onClick={handleBuy} className="link-drop">Bitcoin Cash (BCH)</button></li>
            <li className="list"><button name="TRX" style={{backgroundImage: coinIcons[5]}} onClick={handleBuy} className="link-drop">TRON (TRX)</button></li>
            <li className="list"><button name="NANO" style={{backgroundImage: coinIcons[6]}} onClick={handleBuy} className="link-drop">"NANO (NANO)</button></li>
            <li className="list"><button name="DASH" style={{backgroundImage: coinIcons[7]}} onClick={handleBuy} className="link-drop">"Dash (DASH)</button></li>
            <li className="list"><button name="DAI" style={{backgroundImage: coinIcons[8]}} onClick={handleBuy} className="link-drop">Dai Stablecoin (DAI)</button></li>
            <li className="list"><button name="USDT" style={{backgroundImage: coinIcons[9]}} onClick={handleBuy} className="link-drop">"Tether (USDT)</button></li>
        </ul>
    )
}