import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BuySell } from '../main/Main';
import { Header } from '../header/Header';
import { CoinsList } from '../Lists/CoinsList';
import { FiatList } from '../Lists/FiatList';

const paymentMethods: string[] = ['Credit/Debit Card', 'Bank Transfer', 'Paypal', 'Mobile Account'];

export const App: React.FC = () => {
    const [inputPay, setInputPay] = useState<string>('');
    const [inputBuy, setInputBuy] = useState<string>('');
    const [payCoin, setPayCoin] = useState<string>('EUR');
    const [buyCoin, setBuyCoin] = useState<string>('BTC');
    const [results, setResults] = useState<string | null>(null);
    const [payment, setPayment] = useState<string>(paymentMethods[0]);
    const [toggle, setToggle] = useState<boolean>(false);
    const [toggleCoin, setToggleCoin] = useState<boolean>(false);
    
    const [rate, setRate] = useState<number | null>(null);
    const [inp, setInp] = useState<string>('');
    const [focus, setFocus] = useState<boolean>(true);
    
    useEffect(() => {
        const fetchData = () => {
            const result = axios(
            'https://api.coingate.com/v2/rates',
            // 'http://localhost:3000/merchant', // for json-server
            );          
            result.then(d => setResults(d.data.merchant[buyCoin]))
            .catch(err => console.log(err));
        };
        fetchData();
    }, [payCoin, buyCoin]);

    useEffect(() => {
        if (results === null) return;
        const asArray = Object.entries(results);
        const rate = +asArray.filter(coin => coin[0] === payCoin)[0].splice(1)[0];
        setRate(rate);
        // eslint-disable-next-line
    }, [results]);

    useEffect(() => {
        setInputBuy((prev: string): string => {
            setInp(inputPay);
            if ( rate && +inputPay * rate === +prev ) {
                return prev;
            } else if (rate) {                
                return focus ? (+Number(+inputPay / rate).toFixed(8) === 0 ? '' : Number(+inputPay / rate).toFixed(8)) : inp;
            } else return '';
        });
        // eslint-disable-next-line
    }, [inputPay, rate]);

    useEffect(() => {            
            setInputPay((prev: string): string => {
                setInp(inputBuy);
                if ( rate && +inputBuy / rate === +prev ) {
                    return prev;
                } else if ( rate ) {                    
                    return !focus ? (+Number(+inputBuy * rate).toFixed(2) % 1 === 0
                    ? Number(+inputBuy * rate).toFixed(0)
                    : Number(+inputBuy * rate).toFixed(2)) : inp;
                } else return '';           
            });
        // eslint-disable-next-line
    }, [inputBuy]);

    function toggleFunc(): void {
        if (toggleCoin) {
            setToggleCoin(!toggleCoin);
        }
        setToggle(!toggle);
    }

    function toggleCoinFunc(): void {
        if (toggle) {
            setToggle(!toggle);
        }
        setToggleCoin(!toggleCoin);
    }

    function focusToggle(): void {
        setFocus(!focus);    
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
                setBuyCoin(currentTarget.getAttribute("name") ? currentTarget.getAttribute("name")! : "BTC");
            }} 
        />
        <FiatList
            toggle={toggle}
            toggleFunc={toggleFunc}
            handlePay={({currentTarget}) => {
                setPayCoin(currentTarget.getAttribute("name") ? currentTarget.getAttribute("name")! : "EUR");
            }}
        />
      </>
    )
}