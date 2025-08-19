import { Link, useParams } from "react-router";
import style from "./Header.module.scss"
import { useEffect } from "react";

function Header() {
    const { page } = useParams();

    const pages = ["Multicultural Team Coaching", "Leadership Development", "Team Alignment Workshops", "Conflict & Communication"]

    useEffect(() => {
        console.log(page);
    }, [page])


    return (
        <section className={style.head}>
            {
                pages.map((title, id) => (
                    <Link key={id} to={`/Rakach/Solutions/${id + 1}`} className={page && id + 1 === +page ? style.linkActive : ""}>
                        {title}
                    </Link>
                ))
            }
        </section>);
}

export default Header;