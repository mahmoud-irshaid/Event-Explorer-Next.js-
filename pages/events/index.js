import Image from 'next/image';
import React from 'react'
import Link from 'next/link'

export default function index({ data }) {
    return (
        <div>
            <h1>Events Page</h1>
            <div>
                {data.map((ev, i) => (
                    <Link href={`/events/${ev.id}`} key={i} legacyBehavior>
                        <a>
                            <Image src={ev.image} alt={ev.title} width={200} height={200} />
                            <h2>{ev.title}</h2>
                        </a>
                    </Link>
                )
                )}

            </div>
        </div>
    )
}


export const getStaticProps = async (ctx) => {

    const { events_categories } = await import('../../data/data.json')

    console.log(events_categories);
    return {
        props: {
            data: events_categories
        }
    }
}

