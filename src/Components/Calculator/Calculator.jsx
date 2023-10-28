import React from "react";
import './Calculator.css'
import Button from "../Button/Button";
import Display from "../Display/Display";

export default function (props){
    return(
        <>
            <h2 style={{textAlign:"center", marginTop:'0'}}>Calculadora</h2>
            <div className="calculator">
                <Display value='250'></Display>
                <Button label='AC' click={() => clearMemory()} triple></Button>
                <Button label='/'  click={op => setOperation(op)} operation></Button>
                <Button label='7'  click={n => addDigit(n)}></Button>
                <Button label='8'  click={n => addDigit(n)}></Button>
                <Button label='9'  click={n => addDigit(n)}></Button>
                <Button label='*'  click={n => addDigit(n)} operation></Button>
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

function clearMemory(){
    console.log('limpar');
}

function setOperation(operation){
    console.log(operation)
}

function addDigit(n){
    console.log(n)
}