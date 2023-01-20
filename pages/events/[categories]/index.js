import Image from 'next/image';
import React from 'react'
import Link from 'next/link'
import CatEvent from '../../../src/components/events/catEvent';
function index({ data, city }) {
    return (
        <CatEvent data={data} city={city} />
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