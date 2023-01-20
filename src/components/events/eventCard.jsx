import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
export default function EventCard({ data }) {
    return (
        <div className='event-card'>
            <h1>Our single Event</h1>
            <Image src={data.image} alt={data.title} width={1000} height={500} />
            <h2>{data.title}</h2>
            <p>
                {data.description}
            </p>
        </div>)
}
