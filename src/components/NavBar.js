'use client'
import Link from 'next/link';

const navigation = [
    { name: 'Latest', href: '/latest', current: true },
    { name: 'Technology', href: '/technology', current: false },
    { name: 'Business', href: '/business', current: false },
    { name: 'Entertainment', href: '/entertainment', current: false },
]

export default function NavbarSimple() {
    return (
        <>
            <div className="flex flex-1 items-center justify-center bg-gray-800">
                <div className="flex flex-shrink-0 items-center">
                    <Link href='/'>
                        <h1 className="text-gray-200 rounded-md py-6 text-5xl font-bold font-gilroy">Digital Media</h1>
                    </Link>
                </div>
            </div >
            <div className="flex flex-1 items-center justify-center bg-gray-800 box-border py-4">
                <section>
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={'text-gray-300 hover:text-gray-100 cursor-pointer rounded-md mx-12 text-lg font-medium'}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                </section>
            </div>
        </>
    )
}
