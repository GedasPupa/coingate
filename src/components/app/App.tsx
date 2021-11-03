import React, { useState, useEffect } from 'react';
import { BuySell } from '../main/Main';
import axios from 'axios';
import { Header } from '../header/Header';
import CoinsList from '../Lists/CoinsList';
import FiatList from '../Lists/FiatList';

const paymentMethods = ['Credit/Debit Card', 'Bank Transfer', 'Paypal', 'Mobile Account'];

function App() {
    let [inputPay, setInputPay] = useState('');
    let [inputBuy, setInputBuy] = useState('');
    let [payCoin, setPayCoin] = useState('EUR');
    let [buyCoin, setBuyCoin] = useState('BTC');
    let [results, setResults] = useState('');
    let [payment, setPayment] = useState(paymentMethods[0]);
    let [toggle, setToggle] = useState(false);
    let [toggleCoin, setToggleCoin] = useState(false);
    
    let [rate, setRate] = useState(1);
    let [inp, setInp] = useState('');
    let [focus, setFocus] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            // 'https://api.coingate.com/v2/rates',
            'http://localhost:3000/merchant',
          );
            setResults(result.data[buyCoin]);              
        };     
        fetchData();
    }, [payCoin, buyCoin]); 

    useEffect(() => {
        if (results === '') return;
        const asArray = Object.entries(results);
        const rate = +asArray.filter(coin => coin[0] === payCoin)[0].splice(1)[0];
        setRate(rate);
        // eslint-disable-next-line
    }, [results]);

    useEffect(() => {
        setInputBuy((prev: string): string => {
            if ( +inputPay * rate === +prev ) {
                    return prev;
                } else {                
                    return focus ? Number(+inputPay / rate).toFixed(8) : inp;
                }
        });
        // eslint-disable-next-line
    }, [inputPay, rate]);

    useEffect(() => {            
            setInputPay((prev: string): string => {
                setInp(inputBuy);
                if (+inputBuy / rate === +prev ) {
                    return prev.toString();
                } else {
                    
                    return +Number(+inputBuy * rate).toFixed(2) % 1 === 0
                    ? Number(+inputBuy * rate).toFixed(0)
                    : Number(+inputBuy * rate).toFixed(2);
                }                  
            });
        // eslint-disable-next-line
    }, [inputBuy]);

    function toggleFunc() {
        if (toggleCoin) {
            setToggleCoin(!toggleCoin);
        }
        setToggle(!toggle);
    }

    function toggleCoinFunc() {
        if (toggle) {
            setToggle(!toggle);
        }
        setToggleCoin(!toggleCoin);
    }

    function focusToggle():void {
        setFocus(!focus);
        console.log('this is FOCUS');
        
    }

    return(
      <>
        <Header />
        <BuySell
            handleInputPay={({target}) => setInputPay(target.value)}
            handleInputBuy={({target}) => setInputBuy(target.value)}
            handlePayment={({target}) => setPayment(target.value)}
            toggleFunc={toggleFunc}
            toggleCoinFunc={toggleCoinFunc}
            inputPay={inputPay}
            inputBuy={inputBuy}
            pay={payCoin}
            buy={buyCoin}
            paymentMethods={paymentMethods}
            payment={payment}
            focusToggle={focusToggle} 
        />
        <CoinsList
            toggleCoin={toggleCoin}
            toggleCoinFunc={toggleCoinFunc} 
            handleBuy={({currentTarget}) => {
                let ttt = currentTarget.getAttribute("name");
                if (!ttt) {
                    ttt = "BTC";
                }
                setBuyCoin(currentTarget.getAttribute("name") ? ttt : "BTC");
            }} 
        />
        <FiatList
            toggle={toggle}
            toggleFunc={toggleFunc}
            // handlePay={handlePay}
            handlePay={({currentTarget}) => {
                console.log('TARGET', currentTarget.getAttribute("name")); 
                let ttt = currentTarget.getAttribute("name");
                if (!ttt) {
                    ttt = "EUR";
                }
                setPayCoin(currentTarget.getAttribute("name") ? ttt : "EUR");
            }} 
        />
      </>
    )
}

export default App;
