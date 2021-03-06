import React, { ChangeEventHandler, MouseEventHandler } from 'react';

interface Props {
    inputPay: string,
    inputBuy: string,
    handleInputPay: ChangeEventHandler<HTMLInputElement>,
    handleInputBuy: ChangeEventHandler<HTMLInputElement>,
    pay: string,
    buy: string, 
    paymentMethods: string[],
    payment: string,
    handlePayment: ChangeEventHandler<HTMLSelectElement>,
    toggleFunc: MouseEventHandler<HTMLButtonElement>,
    toggleCoinFunc: MouseEventHandler<HTMLButtonElement>,
    focusToggle: () => void;
}

export const BuySell: React.FC<Props> = (props) => {
    const {
        inputPay, inputBuy,
        handleInputPay, handleInputBuy,
        pay, buy, paymentMethods, payment, handlePayment, 
        toggleFunc, toggleCoinFunc, focusToggle
    } = props;
    return (
        <div className="main">
            <div className="background"></div>
            <div className="container">

                <div className="row">
                    <h1 className="main-title col-lg-6 col-12"><span className="green">Buy Bitcoin,</span> Ethereum, Litecoin and other crypto <span className="green">online</span></h1>
                    <div className="main-right-back col-lg-6 col-12">
                    <form className="form" >
                        <div className="form-row">
                            <label>Pay</label>
                            <input type="number" name="inputPay" id="inputPay" onChange={handleInputPay} value={inputPay} />
                            <div className="line"></div>
                            <button 
                                type="reset"
                                style={{backgroundImage: `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/${pay.toLowerCase()}.png?raw=true)`}}
                                onClick={toggleFunc}> {pay} <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                            </button>
                        </div>
                        <div className="form-row">
                            <label>Buy</label>
                            <input type="number" name="inputBuy" id="inputBuy" onChange={handleInputBuy} value={inputBuy} onFocus={focusToggle} onBlur={focusToggle}/>
                            <div className="line"></div>
                            <button 
                                type="reset" 
                                style={{backgroundImage: `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/${buy.toLowerCase()}.png?raw=true)`}}
                                onClick={toggleCoinFunc}>{buy} <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                            </button>
                        </div>
                        <p className="method">Payment method </p>
                        <div className="form-row">
                            <img src="./sepa.png" alt="logo" className="payment-img" />
                            <select name="payment" id="payment" onChange={handlePayment} value={payment}>
                                {
                                    paymentMethods.map((item: string) => {
                                        return (<option value={item} key={item}>{item}</option>);
                                    })
                                }
                            </select>
                        </div>
                        <a className="btn-buy" href="http://example.com/" target="_blank" rel="noreferrer">Buy {buy}</a>
                    </form>
                    </div>
                    <p className="text col-lg-6 col-12">Why bother going through complicated exchanges? Buy cryptocurrency with top payment methods like SEPA bank transfer, Credit and Debit Card, Apple Pay, Mobile balance or Klarna. You can buy Bitcoin, Ethereum or any other popular crypto directly to your personal wallet without making any initial deposits. It's as easy as it gets!
                    <br/><br/>
                    <a href="http://example.com/" target="_blank" className="start-now" rel="noreferrer">Start now<span className="entitie"><i className="fa fa-angle-right"></i></span></a>
                    </p>                    
                </div>
            </div>
        </div>
    );
};
