import React, { useState , useRef } from 'react'

export default function Text() {
    const [state,setstate] = useState("")
    const uc = useRef()


    const uppercase=()=>{
        uc.current.style.textTransform="uppercase"
        console.log(uc.current);
    }

    const change=(e)=>{
         setstate(e.target.value)
    }

  return (

    <div>
        <h1>Enter the Text</h1>
        <textarea className=" h-96 w-96 border border-black"  ref={uc}>
                        
        </ textarea>
        <button onClick={uppercase} className=' p-2 bg-black text-white'>To UpperCase</button>
        <button onClick={()=>uc.current.value=""} className=' p-2 bg-black text-white'>clear</button>

        <br />
        <br />
        <input type="text" value={state} onChange={change} />
        <button onClick={()=>setstate('')}>Click Me</button>
        <h2>{state}</h2>
        <br />

        <h2>{state}</h2>
        <br />
        <button onClick={()=>setstate(state+1)}>+1</button>
        <br />
        <button onClick={()=>state>0 && setstate(state-1)}>-1</button>
      
    </div>
  )
}
