import React from 'react'
import '../index.css';
import { useState } from 'react';

function Card() {
const [data,setData]=useState({
    accNumber:"",
    accName:"",
    cvv:""

})
const [exMonth,setExMonth]=useState("12");
const [exYear,setExYear]=useState("2030");

  const handleChange=(e)=>{
     const name=e.target.name;
     const value=e.target.value;
    console.log(name,value);
   
    setData((prev)=>{
        return{
            ...prev,[name]:value
        }
    });
    e.preventDefault();
  }
  return (  
    <div className="container">

    <div className="card-container">

        <div className="front">
            <div className="image">
                <img src="/Images/chip.png" alt=""/>
                <img src="Images/visa.png" alt=""/>
            </div>
            <div className="card-number-box">{data.accNumber}</div>
            <div className="flexbox">
                <div className="box">
                    <span>card holder</span>
                    <div className="card-holder-name" >{data.accName}</div>
                </div>
                <div className="box">
                    <span>expires</span>
                    <div className="expiration">
                        <span className="exp-month">{exMonth}</span>/
                        <span className="exp-year">{exYear}</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="back">
            <div className="stripe"></div>
            <div className="box">
                <span>cvv</span>
                <div className="cvv-box">{data.cvv}</div>
                <img src="/images/visa.png" alt=""/>
            </div>
        </div>

    </div>
    <form action="">
        <div className="inputBox">
            <span>card number</span>
            <input type="text" maxlength="16" className="card-number-input"
             id="inputCardNum" onChange={handleChange} name='accNumber' />
        </div>
        <div className="inputBox">
            <span>card holder</span>
            <input type="text" className="card-holder-input" onChange={handleChange} name='accName'/>
        </div>
        <div className="flexbox">
            <div className="inputBox">
                <span>expiration mm</span>
                <select name="" id="" className="month-input" onChange={(e)=>setExMonth(e.target.value)}>
                    <option value="month" selected disabled>Month</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            </div>
            <div className="inputBox">
                <span>expiration yy</span>
                <select name="" id="" class="year-input" onChange={(e)=>setExYear(e.target.value)}>
                    <option value="year" selected disabled>year</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                </select>
            </div>
            <div className="inputBox">
                <span>cvv</span>
                <input type="text" maxlength="3" className="cvv-input" onChange={handleChange} name="cvv"/>
            </div>
        </div>
        <input type="submit" value="submit" className ="submit-btn"/>
    </form>

</div>   
    
  )
}

export default Card;