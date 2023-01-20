import Image from 'next/image'
import Link from 'next/link'

export const HomePage = ({ data }) => {
    return (
        <div className='home-body'>
            {data?.map((ev, i) => (
                <Link href={`/events/${ev.id}`} key={i} legacyBehavior>
                    <a className='card'>
                        <div className='image'>
                            <Image src={ev.image} alt={ev.title} width={400} height={300} />
                        </div>
                        <div className='content'>
                            <h2>{ev.title}</h2>
                            <p>
                                {ev.description}
                            </p>
                        </div>
                    </a>
                </Link>
            )
            )}
        </div>
    )
}