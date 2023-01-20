import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
function CatEvent({ data, city }) {
    return (
        <div className='cat-event'>
            <h1>Events in {city}</h1>

            <div className='content'>
                {data.map(ev => (
                    <Link href={`/events/${city}/${ev.id}`} key={ev.id} legacyBehavior>
                        <a className='card'>
                            <Image src={ev.image} alt={ev.title} width={300} height={300} />
                            <h2>{ev.title}</h2>
                            <p>
                                {ev.description}
                            </p>
                        </a>
                    </Link>
                ))
                }
            </div>


        </div >
    )
}

export default CatEvent