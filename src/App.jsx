import React, { useState } from 'react'

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmiValue, setBmiValue] = useState(0);
  const [message, setMessage] = useState('');
  const bmiCalculator = () => {
    const bmi = (weight / (height*height)).toFixed(2);
    setBmiValue(bmi);
    // alert(bmi);
    if(bmi<18.5){
      setMessage("Underweight");
    }
    else if(bmi>18.5 && bmi<24.9){
      setMessage("Normal weight");
    }
    else if(bmi>25 && bmi<29.9){
      setMessage("Overweight");
    }
    else{
      setMessage("Obesity");
    }
    setHeight(0);
    setWeight(0);
  }


  return (
    <div className='h-screen w-screen flex justify-center items-center bg-gradient-to-br from-teal-400 to-teal-900 text-white'>
      <div className='w-2/8'>
        <h1 className='text-4xl text-center font-bold'>BMI CALCULATOR</h1>

        
        <div className='p-8 rounded-2xl bg-gradient-to-br from-gray-600 to-black mt-4 shadow-lg shadow-black'>
          <div className='flex flex-col'>
            <label htmlFor="weight" className='text-2xl mb-2 font-bold'>Weight (Kg)</label>
            <input type="number" className='bg-gray-200 rounded-md px-8 py-2 text-black focus:outline-none' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
        
          <div className='mt-4 flex flex-col'>
            <label htmlFor="height" className='font-bold text-2xl my-2'>Height (Mtr)</label>
            <input type="number" className='bg-gray-200 rounded-md px-8 py-2 focus:outline-none text-black' value={height} onChange={(e)=>setHeight(e.target.value)}/>
          </div>

          <div className=''>
            <button className='mt-8 w-full text-2xl py-2 rounded-md bg-gradient-to-br from-orange-500 to-red-600 font-semibold transition duration-300 ease-in-out hover:from-red-500 hover:to-orange-500' onClick={bmiCalculator}>Calculate</button>
          </div>
        </div>
        <div className='mt-7 text-xl bg-gradient-to-br from-gray-700 to-black rounded-md px-4 py-4 shadow-lg shadow-black'>
          <h2 className='text-center font-semibold'>BMI Value : {bmiValue?bmiValue:"Value Pending..."}</h2>

          <h2 className='font-semibold text-center'>{bmiValue?message:"Calculation Pending..."}</h2>
        </div>
      </div>
    </div>
  )
}

export default App