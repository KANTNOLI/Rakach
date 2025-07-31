
import stylePreview from "./Preview.module.scss"



function AboutMe() {

    return (
        <section className={stylePreview.AboutMe}>



            

            <section className={stylePreview.Preview}>
                <div className={stylePreview.PreviewFPart}>
                    <p className={stylePreview.PreviewFPartTitle}>Ready to turn your broken heart into a confident, peaceful one?</p>
                    <p className={stylePreview.PreviewFPartTitleDesc}>Grab your 30 minutes with me now and lets get started.</p> <div className={stylePreview.customLine}></div>

                    <p className={stylePreview.PreviewFPartDesc}>Invest 16 hours over the next 4 months, and you’ll gain
                    </p>
                    <p className={stylePreview.PreviewFPartDesc}>350,000 future hours infinitely better spent with your family.
                    </p>

                    <button className={stylePreview.PreviewFPartBtn}>Schedule your free call</button>
                </div>

                <div className={stylePreview.PreviewSPart}>
                    {/* IMG */}
                    w 500px
                </div>

            </section>

        </section>
    )
}

export default AboutMe