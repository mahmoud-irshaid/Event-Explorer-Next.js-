import Image from 'next/image'
import Link from 'next/link'
import { HomePage } from '../src/components/home/home-page'

export default function Home({ data }) {
  return (
    <>

      <HomePage data={data} />

    </>
  )
}
export const getServerSideProps = async (ctx) => {
  const { events_categories, allEvents } = await import('../data/data.json')


  return {
    props: {
      data: events_categories
    }
  }
}