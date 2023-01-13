import Image from 'next/image';
import React from 'react'
import Link from 'next/link'
function index({ data, city }) {
    return (
        <div>
            <h1>Events in {city}</h1>



            {data.map(ev => (
                <div key={ev.id}>
                    <Link href={`/events/${city}/${ev.id}`} legacyBehavior>
                        <a>
                            <Image src={ev.image} alt={ev.title} width={200} height={200} />
                            <h2>{ev.title}</h2>
                            <p>
                                {ev.description}
                            </p>
                        </a>
                    </Link>
                </div>
            ))
            }


        </div >
    )
}

export default index




export const getStaticProps = async (ctx) => {
    console.log(ctx, '&&&&&&');
    const id = ctx.params.categories
    const { events_categories, allEvents } = await import('../../../data/data.json')
    const filteredEvents = allEvents.filter(ev => (ev.city === id))
    console.log(filteredEvents, 'filteredEvents');
    return {
        props: {
            data: filteredEvents,
            city: id
        }
    }
}


export const getStaticPaths = async () => {
    const { events_categories, allEvents } = await import('../../../data/data.json')
    const allPaths = events_categories.map(ev => {
        return {
            params: {
                categories: ev.id.toString()
            }
        }
    })
    console.log(allPaths);

    return {
        paths: allPaths,
        fallback: false
    }
}