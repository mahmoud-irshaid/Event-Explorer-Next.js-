import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header>
            <div>
                <div className='topNav'>
                    <Image src={'/images/old_school_station.jpg'} width={50} height={50} />
                    <nav>
                        <ul>
                            <li>
                                <Link href='/' legacyBehavior>
                                    <a>Home</a>
                                </Link>

                            </li>

                            <li>
                                <Link href='/events' legacyBehavior>
                                    <a>Events</a>
                                </Link>
                            </li>


                            <li>
                                <Link href='/AboutUs' legacyBehavior>
                                    <a>About Us</a>
                                </Link>
                            </li>

                        </ul>
                    </nav>
                </div>
                <h1>My event app webstie </h1>
            </div>
        </header>
    )
}
