/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { motion } from "motion/react"
import { Link } from 'react-router';

import style from "./Header.module.scss"


interface props {
    page: string
}

//   initial={{ y: -100, opacity: 0 }}
//   whileInView={{ y: 0, opacity: 1 }}
//   transition={{ type: "spring", stiffness: 100 }}

function Header({ page }: props) {
    const pageAboutMe = useRef<HTMLAnchorElement>(null)
    const pageA = useRef<HTMLAnchorElement>(null)
    const pageB = useRef<HTMLAnchorElement>(null)
    const pageC = useRef<HTMLAnchorElement>(null)
    const pageD = useRef<HTMLAnchorElement>(null)

    const ActivePAge = useRef<HTMLParagraphElement>(null)
    const Nav = useRef<HTMLParagraphElement>(null)

    const [MobileMenu, setMobileMenu] = useState<boolean>(false)

    const Pages: any = {
        "Rakach": pageAboutMe,
        "1": pageA,
        "2": pageA,
        "3": pageA,
        "4": pageA,
        "HowWorks": pageB,
        "IndividualCoaching": pageC,
        "d": pageD,
    }

    useEffect(() => {
        setMobileMenu(false)
        setTimeout(() => {

            if (pageAboutMe.current && ActivePAge.current && Pages[page]) {
                const HalfPageText = Pages[page].current.getBoundingClientRect().width / 2
                const LeftPageText = Pages[page].current.getBoundingClientRect().left - 25

                ActivePAge.current.style.left = `${LeftPageText + HalfPageText}px`
            }

        }, 100);

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
                <Link ref={pageAboutMe} to="Rakach/" className={style.HeaderNavigatePage} draggable="false">
                    <motion.p
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: .5 }}
                    >
                        About Me
                    </motion.p>
                </Link>
                <Link ref={pageA} to="Rakach/Solutions/1" className={style.HeaderNavigatePage} draggable="false">
                    <motion.p
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", delay: 0.1, duration: .5 }}
                    >
                        Solutions
                    </motion.p></Link>
                <Link ref={pageB} to="Rakach/HowWorks" className={style.HeaderNavigatePage} draggable="false">
                    <motion.p
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", delay: 0.2, duration: .5 }}
                    >
                        How it works
                    </motion.p></Link>
                <Link ref={pageC} to="Rakach/IndividualCoaching" className={style.HeaderNavigatePage} draggable="false"> <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", delay: 0.3, duration: .5 }}
                >
                    Individual Coaching
                </motion.p></Link>

                <Link ref={pageD} to="Rakach/d" className={style.HeaderNavigatePage} draggable="false"> <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", delay: 0.4, duration: .5 }}
                >
                    Request a free coaching session
                </motion.p></Link>

                <div ref={ActivePAge} className={style.HeaderNavigateActivePageBox}>
                    <p className={style.HeaderNavigateActivePage}></p>
                </div>
            </nav>

            <div onClick={() => setMobileMenu(before => !before)} className={MobileMenu ? style.menuActive : style.menu}>
                <motion.p
                    initial={{ width: 0 }}
                    animate={{ width: 40 }}
                    transition={{ ease: "easeInOut", duration: .2 }}

                    className={MobileMenu ? style.menuP1 : ""}></motion.p>
                <motion.p
                    initial={{ width: 0 }}
                    animate={{ width: MobileMenu ? 0 : 40 }}
                    transition={{ ease: "easeOut", duration: 0.2 }}
                    className={style.menuP2}
                />

                <motion.p
                    initial={{ width: 0 }}
                    animate={{ width: 40 }}
                    transition={{ ease: "easeInOut", duration: .2 }}

                    className={MobileMenu ? style.menuP3 : ""}></motion.p>
            </div>
        </section>
    )
}



export default Header
