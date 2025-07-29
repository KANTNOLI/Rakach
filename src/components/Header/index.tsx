/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from 'react-router';

import style from "./Header.module.scss"
import { useEffect, useRef } from 'react';

interface props {
    page: string
}

function Header({ page }: props) { 
    const pageAboutMe = useRef<HTMLAnchorElement>(null)
    const pageA = useRef<HTMLAnchorElement>(null)
    const pageB = useRef<HTMLAnchorElement>(null)
    const pageC = useRef<HTMLAnchorElement>(null)

    const ActivePAge = useRef<HTMLParagraphElement>(null)

    const Pages: any = {
        "AboutMe": pageAboutMe,
        "a": pageA,
        "b": pageB,
        "c": pageC,
    }

    useEffect(() => {
        if (pageAboutMe.current && ActivePAge.current) {
            const HalfPageText = Pages[page].current.getBoundingClientRect().width / 2
            const LeftPageText = Pages[page].current.getBoundingClientRect().left - 25

            ActivePAge.current.style.left = `${LeftPageText + HalfPageText}px`
            console.log();
        }

    }, [page])


    return (
        <section className={style.Header} >
            <nav className={style.HeaderNavigate}>
                <Link ref={pageAboutMe} to="/" className={style.HeaderNavigatePage} draggable="false">About Me</Link>
                <Link ref={pageA} to="/a" className={style.HeaderNavigatePage} draggable="false">What Coaching Looks Like</Link>
                <Link ref={pageB} to="/b" className={style.HeaderNavigatePage} draggable="false">Solutions</Link>
                <Link ref={pageC} to="/c" className={style.HeaderNavigatePage} draggable="false">Request a free coaching session</Link>
                
                <div ref={ActivePAge} className={style.HeaderNavigateActivePageBox}>
                    <p className={style.HeaderNavigateActivePage}></p>
                </div>

            </nav>
        </section>
    )
}

export default Header
