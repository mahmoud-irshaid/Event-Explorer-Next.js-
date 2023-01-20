import Image from 'next/image';
import React from 'react'
import Link from 'next/link'

export default function EventsPage({ data }) {
    return (
        <div className='events-page'>
            {/* <h1>Events Page</h1> */}
            {data.map((ev, i) => (
                <Link href={`/events/${ev.id}`} key={i} legacyBehavior>
                    <a className='card'>
                        <Image src={ev.image} alt={ev.title} width={350} height={350} />
                        <h2>{ev.title}</h2>
                    </a>
                </Link>
            )
            )
            }

        </div >
    )
}
