import React, { FormEvent, useState } from 'react'
import { BackgroundBeams } from './UI/background-beams'
function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("submitted:", {email, message})
  }


  return (
    <div className="min-h-screen bg-black py-12 pt-36">
            <h1 className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">Contact Us</h1>
            <p></p>
            <div>
              <form className='flex flex-col gap-4 items-center ' onSubmit={handleSubmit}>
                <input
                className='bg-black outline outline-white/60 outline-1 focus:outline-white/80 w-[80%] md:max-w-md text-white/80 my-2 py-2 px-4 rounded-lg z-10'
                placeholder='enter your email'
                type="email" name="email" id="email" 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
                required />
                <textarea 
                className='bg-black outline outline-white/60 outline-1 focus:outline-white w-[80%] md:max-w-md text-white/80 my-2 p-4 rounded-lg z-10'
                placeholder="drop a message"
                rows={5} 
                value={message}
                onChange={e => setMessage(e.target.value)}>
                </textarea>
                <button className="z-10 shadow-[inset_0_0_0_2px_#616467] text-black px-8 py-3 rounded-xl tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200" type="submit">Submit</button>
                
              </form>
            </div>
            <BackgroundBeams/>
    </div>
  )
}

export default ContactForm