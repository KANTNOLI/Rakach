
import style from "./AboutMe.module.scss"



function AboutMe() {

    return (
        <section className={style.AboutMe}>

            <section className={style.Preview}>
                <div className={style.PreviewFPart}>
                    <p className={style.PreviewFPartTitle}>Ready to turn your broken heart into a confident, peaceful one?</p>
                    <p className={style.PreviewFPartTitleDesc}>Grab your 30 minutes with me now and lets get started.</p> <div className={style.customLine}></div>

                    <p className={style.PreviewFPartDesc}>Invest 16 hours over the next 4 months, and you’ll gain
                    </p>
                    <p className={style.PreviewFPartDesc}>350,000 future hours infinitely better spent with your family.
                    </p>

                    <button className={style.PreviewFPartBtn}>Schedule your free call</button>
                </div>

                <div className={style.PreviewSPart}>
                    {/* IMG */}
                    w 500px
                </div>

            </section>

        </section>
    )
}

export default AboutMe