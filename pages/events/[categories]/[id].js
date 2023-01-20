import Image from 'next/image'
import React from 'react'
import EventCard from '../../../src/components/events/eventCard'

function Page({ data }) {
    return (
        <EventCard data={data} />
    )
}

export default Page


export const getStaticProps = async (ctx) => {
    const id = ctx.params.id
    const { events_categories, allEvents } = await import('../../../data/data.json')
    const eventData = allEvents.filter(ev => (ev.id === id))
    console.log(eventData, '__________');
    return {
        props: {
            data: eventData[0]
        }
    }
}


export const getStaticPaths = async () => {
    const data = await import('../../../data/data.json')
    const allEvents = data.allEvents
    const allPaths = allEvents.map(path => {

        return {
            params: {
                categories: path.city,
                id: path.id
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false
    }
}