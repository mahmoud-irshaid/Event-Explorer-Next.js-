import React, { useRef } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router'
export default function EventCard({ data }) {
    const inputEmail = useRef()
    const router = useRouter()
    const [message, setMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        const emailValue = inputEmail.current.value
        const eventId = router?.query?.id

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!emailValue.match(validRegex)) {
            setMessage('Please introduce a correct email address.')
        }


        try {
            //POST fetch request 
            // body emailValue and eventId

            const res = await fetch('/api/email-regester', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: emailValue, eventId })
            })

            if (!res.ok)
                throw new Error(`Error : ${res.status}`)
            const data = await res.json()
            setMessage(data.message)
            inputEmail.current.value = ''
            console.log(data, '????');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='event-card'>
            <h1>Our single Event</h1>
            <Image src={data.image} alt={data.title} width={1000} height={500} />
            <h2>{data.title}</h2>
            <p>
                {data.description}
            </p>

            <form onSubmit={onSubmit} className='email-regesiter'>
                <label>Get Registered for this event!</label>
                <input ref={inputEmail} type='email' id='email' placeholder='please insert ur email here' />
                <button type='submit'>Submit</button>
            </form>
            <p>{message}</p>
        </div>)
}
