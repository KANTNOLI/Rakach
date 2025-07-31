/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from 'react-router';

import style from "./Header.module.scss"
import { useEffect, useRef, useState } from 'react';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface props {
    page: string
}

function Header({ page }: props) {
    const pageAboutMe = useRef<HTMLAnchorElement>(null)
    const pageA = useRef<HTMLAnchorElement>(null)
    const pageB = useRef<HTMLAnchorElement>(null)
    const pageC = useRef<HTMLAnchorElement>(null)

    const ActivePAge = useRef<HTMLParagraphElement>(null)
    const Nav = useRef<HTMLParagraphElement>(null)

    const [MobileMenu, setMobileMenu] = useState<boolean>(false)

    const Pages: any = {
        "AboutMe": pageAboutMe,
        "a": pageA,
        "b": pageB,
        "c": pageC,
    }

    let a = 0

    console.log(a);
    

    useEffect(() => {
        setMobileMenu(false)
        if (pageAboutMe.current && ActivePAge.current && Pages[page]) {  
            const HalfPageText = Pages[page].current.getBoundingClientRect().width / 2
            const LeftPageText = Pages[page].current.getBoundingClientRect().left - 25

            ActivePAge.current.style.left = `${LeftPageText + HalfPageText}px`
            console.log();
        }

    }, [page])

    useEffect(() => {
        if (MobileMenu && Nav.current) {
            disableBodyScroll(Nav.current);
        } else if (Nav.current) {
            enableBodyScroll(Nav.current);
        }
    }, [MobileMenu])



    return (
        <section className={style.Header}>
            <nav ref={Nav} className={`${style.HeaderNavigate} ${MobileMenu ? "" : style.HeaderOff}`}>
                <Link ref={pageAboutMe} to="/" className={style.HeaderNavigatePage} draggable="false">About Me</Link>
                <Link ref={pageA} to="/a" className={style.HeaderNavigatePage} draggable="false">What Coaching Looks Like</Link>
                <Link ref={pageB} to="/b" className={style.HeaderNavigatePage} draggable="false">Solutions</Link>
                <Link ref={pageC} to="/c" className={style.HeaderNavigatePage} draggable="false">Request a free coaching session</Link>

                <div ref={ActivePAge} className={style.HeaderNavigateActivePageBox}>
                    <p className={style.HeaderNavigateActivePage}></p>
                </div>
            </nav>

            <div onClick={() => setMobileMenu(before => !before)} className={MobileMenu ? style.menuActive : style.menu}>
                <p className={MobileMenu ? style.menuP1 : ""}></p>
                <p className={MobileMenu ? style.menuP2 : ""}></p>
                <p className={MobileMenu ? style.menuP3 : ""}></p>
            </div>
        </section>
    )
}

export default Header
