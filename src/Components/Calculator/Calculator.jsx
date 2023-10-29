import React, { useState } from "react";
import './Calculator.css'
import Button from "../Button/Button";
import Display from "../Display/Display";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}

let state;

export default function (props){
    const [displayValue, setDisplayValue] = useState('0');
    const [clearDisplay, setClearDisplay] = useState(false);
    const [operation, setOperationValue]       = useState(null);
    const [valueOne, setValueOne] = useState(0);
    const [valueTwo, setValueTwo] = useState(0);
    const [values, setValues] = useState([0,0]);
    const [current, setCurrent] = useState(0);

    function clearMemory(){
        setDisplayValue('0');
        setClearDisplay(false);
        setOperationValue(null);
        setValues([0,0]);
        setCurrent(0);
    }
    
    function setOperation(operationSelect){
        console.log(operationSelect);
        if(current === 0){
            setOperationValue(operationSelect);
            setCurrent(1);
            setClearDisplay(true);
        }
        else{
            const equals = operationSelect === '=';
            const cCurrentOperation = operation;

            const cValues = [...values];
            try{
                cValues[0] = eval(`${cValues[0]} ${cCurrentOperation} ${cValues[1]}`);
                values[1] = 0;
            }
            catch(err){
                cValues[0] = values[0]
            }

            setDisplayValue(cValues[0]);
            setOperationValue(equals ? null : operationSelect);
            setCurrent(equals ? 0 : 1);
            setClearDisplay(!equals);
            setValues(cValues);
        }
    }
    
    function addDigit(n){
        console.log(displayValue);
        if(n ==='.' && displayValue.includes('.')){
            console.log("já possi!")
            return
        }
        
        const cClearDisplay = displayValue === '0' || clearDisplay;
        const cCurrentValue = cClearDisplay ? '' : displayValue;
        const cDisplayValue = cCurrentValue + n;

        setDisplayValue(cDisplayValue);
        setClearDisplay(false);

        if(n !== '.'){
            const i = current;
            const cNewValue = parseFloat(cDisplayValue);
            let cValues = [...values];
            cValues[i] = cNewValue;
            setValues(cValues);
            setValues(cValues);
            
        }
        console.log(values)
    }

    return(
        <>
            <h2 style={{textAlign:"center", marginTop:'0'}}>Calculadora</h2>
            <div className="calculator">
                <Display value={displayValue}></Display>
                <Button label='AC' click={() => clearMemory()} triple></Button>
                <Button label='/'  click={op => setOperation(op)} operation></Button>
                <Button label='7'  click={n => addDigit(n)}></Button>
                <Button label='8'  click={n => addDigit(n)}></Button>
                <Button label='9'  click={n => addDigit(n)}></Button>
                <Button label='*'  click={op => setOperation(op)} operation></Button>
                <Button label='4'  click={n => addDigit(n)}></Button>
                <Button label='5'  click={n => addDigit(n)}></Button>
                <Button label='6'  click={n => addDigit(n)}></Button>
                <Button label='-'  click={op => setOperation(op)} operation></Button>
                <Button label='1'  click={n => addDigit(n)}></Button>
                <Button label='2'  click={n => addDigit(n)}></Button>
                <Button label='3'  click={n => addDigit(n)}></Button>
                <Button label='+'  click={op => setOperation(op)} operation></Button>
                <Button label='0'  click={n => addDigit(n)} double></Button>
                <Button label='.'  click={n => addDigit(n)}></Button>
                <Button label='='  click={op => setOperation(op)} operation></Button>
            </div>
        </>
    )
}

