import React, { useState } from 'react'
import { uppercaseLetters, lowercaseLetters, symbols, numbersStore } from './passswordObj'
import './PasswordGenerator.css'
export default function PasswordGenerator() {
const[upper,upperFun] = useState(false)
const[lower,lowerFun] = useState(false)
const[numbers,numbersFun] = useState(false)
const[symbol,symbolFun] = useState(false)
const[passlength,passlengthFun] = useState(10)
const[password,passwordFun] = useState("generating password...")
let generatePassword = ()=>{
  let finalPass = ''
  let data = ""
  if(upper||lower||numbers||symbol)
  {
if(upper) data+=uppercaseLetters;
if(lower) data+=lowercaseLetters;
if(numbers) data+=numbersStore;
if(symbol) data+=symbols;
}

for(let i=0; passlength>i; i++){
  finalPass += data.charAt(Math.floor(Math.random()*data.length))
}
passwordFun(finalPass)
}


  return (
   <div className='container'>
<div className='content'>

    <ul>
<li><h1>Password Generator</h1></li>
<li className='length'>GENERATE PASSWORD</li>
<li className='bgChange'><label>{password}</label></li>
<li className='length'>Character length:<input type='number' value={passlength} min={'10'} max={"20"} onChange={(event)=>{passlengthFun(event.target.value)}}/></li>
  <li><h2>Setting </h2></li>
 <li className='bgChange'>Include uppercase letters <input type='checkbox' checked={upper} onChange={()=>{upperFun(!upper)}}/></li>
<li className='bgChange'>Include lowercase letters <input type='checkbox' checked={lower} onChange={()=>{lowerFun(!lower)}}/></li>
<li className='bgChange'>Include numbers <input type='checkbox' checked={numbers} onChange={()=>{numbersFun(!numbers)}}/></li>
<li className='bgChange'>Include symbols <input type='checkbox' checked={symbol} onChange={()=>{symbolFun(!symbol)}}/></li>
<li><button onClick={generatePassword}>Generate Password</button></li>

    </ul>
</div>




   </div>  )
}
