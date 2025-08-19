import { motion } from "motion/react"

import stylePreview from "./Preview.module.scss";
import styleExample from "./Example.module.scss";
import styleSteps from "./Steps.module.scss";
import Header from "./header";
import { useParams } from "react-router";
import { useEffect } from "react";

function Solutions() {
    const { page } = useParams();

    useEffect(() => {
        console.log(page);
    }, [page])


    const getPage = () => {
        switch (page) {
            case "1":
                return (
                    <>
                        <section className={stylePreview.Preview}>
                            <motion.div
                                key={`PreviewFPart_${page}`}
                                viewport={{ once: true }}
                                initial={{ x: -80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", delay: 0.1, duration: .5 }}

                                className={stylePreview.PreviewFPart}>
                                <p className={stylePreview.PreviewFPartTitle}>
                                    Multicultural Team Coaching
                                </p>
                                <p className={stylePreview.PreviewFPartTitleDesc}>
                                    Turn diversity of thought into your team’s biggest strength
                                </p>
                                <p className={stylePreview.PreviewFPartDesc}>
                                    Ready to turn your team’s diversity into a competitive advantage?
                                </p>
                                <p className={stylePreview.PreviewFPartDesc}>
                                    Let’s connect and explore how tailored coaching can strengthen your team’s collaboration and innovation
                                </p>
                                <button className={stylePreview.PreviewFPartBtn}>
                                    Schedule a Free Consultation
                                </button>
                            </motion.div>

                            <motion.div
                                key={`PreviewSPart_${page}`}
                                viewport={{ once: true }}
                                initial={{ x: 80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={stylePreview.PreviewSPart}>
                                <img src="..../../../public/SM2.webp" alt="" />
                            </motion.div>
                        </section>

                        <section className={styleExample.Example}>
                            <motion.div
                                key={`ExampleLPart_${page}`}
                                viewport={{ once: true }}
                                initial={{ y: -80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={styleExample.ExampleLPart}>
                                <img src="..../../../public/SM1.webp" alt="SM2.webp" />
                            </motion.div>

                            <motion.div
                                key={`ExampleRPartTitle_${page}`}
                                viewport={{ once: true }}
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={styleExample.ExampleRPart}>
                                <p className={styleExample.ExampleRPartTitle}>
                                    Multicultural Team Coaching
                                </p>
                                <p className={styleExample.ExampleRPartTitleDesc}>
                                    I specialize in helping multicultural teams harness their differences as strengths rather than obstacles. Through tailored coaching sessions, I guide teams to:
                                </p>

                                <ul className={styleExample.ExampleRPartList}>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        Develop cultural awareness and empathy that bridges gaps and builds mutual respect.
                                    </li>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        Improve communication by recognizing and adapting to different styles and expectations.
                                    </li>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        Align on shared goals and values to create a unified sense of purpose.
                                    </li>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        Navigate conflicts constructively by understanding cultural influences on behavior and decision-making.
                                    </li>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        Build trust and interdependence that enhances overall team performance.
                                    </li>
                                </ul>

                                <p
                                    className={`${styleExample.ExampleRPartDesc} ${styleExample.ExampleRPartDescFist}`}
                                >
                                    In today’s globalized world, teams are often made up of members from diverse cultural, linguistic, and professional backgrounds. While this diversity brings immense potential for creativity and innovation, it can also introduce challenges in communication, trust, and collaboration
                                </p>
                                <p className={styleExample.ExampleRPartDesc}>
                                    Whether your team is remote, hybrid, or in-person, I work with you to design practical strategies and exercises that foster inclusion, engagement, and high performance across cultures
                                </p>

                            </motion.div>
                        </section>

                        <section className={styleSteps.Steps}>
                            <motion.p
                                initial={{ y: -50, opacity: 0 }}
                                key={`StepsTitle_${page}`}
                                viewport={{ once: true }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={styleSteps.StepsTitle}>
                                Outcomes you can expect:
                            </motion.p>

                            <div className={styleSteps.StepsTypes}>
                                <div className={styleSteps.StepsTypesType}>
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        key={`StepsTypesIcon_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesIcon}>
                                        <img src="..../../../public/home.png" alt="home.png" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        key={`StepsTypesIcon1_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .8 }}
                                        className={styleSteps.StepsTypesTitle}>Title 1</motion.p>
                                    <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        key={`StepsTypesIcon4_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesDesc}>
                                        More open, clear, and effective communication
                                    </motion.p>
                                </div>

                                <div className={styleSteps.StepsTypesType}>
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        key={`StepsTypesIcon6_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesIcon}>
                                        <img src="..../../../public/home.png" alt="home.png" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        key={`StepsTypesIcon7_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .8 }}
                                        className={styleSteps.StepsTypesTitle}>Title 2</motion.p>
                                    <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        key={`StepsTypesIcon12_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesDesc}>
                                        Increased collaboration and innovation
                                    </motion.p>
                                </div>

                                <div className={styleSteps.StepsTypesType}>
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        key={`StepsTypesIcon21_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesIcon}>
                                        <img src="..../../../public/home.png" alt="home.png" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        key={`StepsTypesIcon1${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .8 }}
                                        className={styleSteps.StepsTypesTitle}>Title 3</motion.p>
                                    <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        key={`StepsTypesIcon2${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesDesc}>
                                        Reduced misunderstandings and conflicts
                                    </motion.p>
                                </div>


                                <div className={styleSteps.StepsTypesType}>
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        key={`StepsTypesIcon21_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesIcon}>
                                        <img src="..../../../public/home.png" alt="home.png" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        key={`StepsTypesIcon1${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .8 }}
                                        className={styleSteps.StepsTypesTitle}>Title 4</motion.p>
                                    <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        key={`StepsTypesIcon2${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesDesc}>
                                        A stronger, more connected team culture
                                    </motion.p>
                                </div>
                            </div>
                            <motion.p
                                initial={{ y: -50, opacity: 0 }}
                                key={`StepsTypesIcon3${page}`}
                                viewport={{ once: true }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={styleSteps.StepsDesc}>
                                text text text text text text text text text text text text text text text 
                            </motion.p>

                            <motion.button
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: .5 }}
                                key={`StepsTypesIcon6${page}`}
                                viewport={{ once: true }}
                                className={styleSteps.StepsBtn}>
                                Book your free call
                            </motion.button>
                        </section>
                    </>)
            case "2":
                return (
                    <>
                        <section className={stylePreview.Preview}>
                            <motion.div
                                key={`opacity1_${page}`}
                                viewport={{ once: true }}
                                initial={{ x: -80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", delay: 0.1, duration: .5 }}

                                className={stylePreview.PreviewFPart}>
                                <p className={stylePreview.PreviewFPartTitle}>
                                    Struggling with team effectiveness in your organization?
                                </p>
                                <p className={stylePreview.PreviewFPartTitleDesc}>
                                    Book a consultation to explore your team’s challenges
                                </p>
                                <div className={stylePreview.customLine}></div>
                                <p className={stylePreview.PreviewFPartDesc}>
                                    We will work together to enhance your team’s dynamics
                                </p>
                                <p className={stylePreview.PreviewFPartDesc}>
                                    Let’s start improving collaboration and performance
                                </p>
                                <button className={stylePreview.PreviewFPartBtn}>
                                    Schedule your free call
                                </button>
                            </motion.div>

                            <motion.div
                                key={`opacity2_${page}`}
                                viewport={{ once: true }}
                                initial={{ x: 80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={stylePreview.PreviewSPart}>
                                <img src="..../../../public/SM2.webp" alt="" />
                            </motion.div>
                        </section>

                        <section className={styleExample.Example}>
                            <motion.div
                                key={`opacity3_${page}`}
                                viewport={{ once: true }}
                                initial={{ y: -80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={styleExample.ExampleLPart}>500px</motion.div>

                            <motion.div
                                key={`opacity44_${page}`}
                                viewport={{ once: true }}
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={styleExample.ExampleRPart}>
                                <p className={styleExample.ExampleRPartTitle}>
                                    Something has happened with your teen...
                                </p>
                                <p className={styleExample.ExampleRPartTitleDesc}>
                                    And as a parent, you’re at the lowest point you never imagined
                                    possible. Maybe…
                                </p>

                                <ul className={styleExample.ExampleRPartList}>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        Their secret is out
                                    </li>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        You saw what was on their phone
                                    </li>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        The cops were called
                                    </li>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        They said what they said, and it broke your soul
                                    </li>
                                </ul>

                                <p
                                    className={`${styleExample.ExampleRPartDesc} ${styleExample.ExampleRPartDescFist}`}
                                >
                                    Everyone’s behavior is… Horrifying. You never thought the toddler
                                    who threw their arms around you could be here. And now you want to
                                    hide under a rock for how disappointed and ashamed you feel.
                                </p>
                                <p className={styleExample.ExampleRPartDesc}>
                                    This spot feels permanently condemned. Life could never be the same
                                    again after what you know now… but it can actually be better.
                                </p>
                                <p className={styleExample.ExampleRPartDesc}>
                                    Better for you on the daily, but even better for how you love and
                                    help your teen. Which is better for them forever
                                </p>
                            </motion.div>
                        </section>

                        <section className={styleSteps.Steps}>
                            <motion.p
                                initial={{ y: -50, opacity: 0 }}
                                key={`opacity43_${page}`}
                                viewport={{ once: true }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={styleSteps.StepsTitle}>
                                When you implement these key strategies, your team will flourish in an environment where
                            </motion.p>

                            <div className={styleSteps.StepsTypes}>
                                <div className={styleSteps.StepsTypesType}>
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        key={`opacity42_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesIcon}>
                                        <img src="..../../../public/home.png" alt="home.png" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        key={`opacity41_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .8 }}
                                        className={styleSteps.StepsTypesTitle}>Collaboration</motion.p>
                                    <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        key={`opacity40_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesDesc}>
                                        There is no more wondering how to improve teamwork. You’ll have confidence in your team’s ability to collaborate effectively and achieve shared goals like never before
                                    </motion.p>
                                </div>

                                <div className={styleSteps.StepsTypesType}>
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        key={`opacity39_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesIcon}>
                                        <img src="..../../../public/home.png" alt="home.png" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        key={`38_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .8 }}
                                        className={styleSteps.StepsTypesTitle}>Leadership</motion.p>
                                    <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        key={`37_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesDesc}>
                                        There is no more questioning your leadership skills. You’ll develop the confidence and strategies to lead your team to success and inspire them to reach new heights
                                    </motion.p>
                                </div>

                                <div className={styleSteps.StepsTypesType}>
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        key={`36_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesIcon}>
                                        <img src="..../../../public/home.png" alt="home.png" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        key={`35_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .8 }}
                                        className={styleSteps.StepsTypesTitle}>Growth</motion.p>
                                    <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        key={`34_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesDesc}>
                                        There is no more uncertainty about your team’s future. You’ll foster an environment of growth and learning, leading to unprecedented team performance and satisfaction
                                    </motion.p>
                                </div>
                            </div>
                            <motion.p
                                initial={{ y: -50, opacity: 0 }}
                                key={`33_${page}`}
                                viewport={{ once: true }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={styleSteps.StepsDesc}>
                                Nothing will intimidate you or make you feel powerless as a parent
                                ever again.
                                <div className={styleSteps.customLine}>{"   "}</div>
                            </motion.p>

                            <motion.button
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: .5 }}
                                key={`32_${page}`}
                                viewport={{ once: true }}
                                className={styleSteps.StepsBtn}>
                                Book your free call
                            </motion.button>
                        </section>
                    </>)
            case "3":
                return (
                    <>
                        <section className={stylePreview.Preview}>
                            <motion.div
                                key={`_31_${page}`}
                                viewport={{ once: true }}
                                initial={{ x: -80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", delay: 0.1, duration: .5 }}

                                className={stylePreview.PreviewFPart}>
                                <p className={stylePreview.PreviewFPartTitle}>
                                    Struggling with team effectiveness in your organization?
                                </p>
                                <p className={stylePreview.PreviewFPartTitleDesc}>
                                    Book a consultation to explore your team’s challenges
                                </p>
                                <div className={stylePreview.customLine}></div>
                                <p className={stylePreview.PreviewFPartDesc}>
                                    We will work together to enhance your team’s dynamics
                                </p>
                                <p className={stylePreview.PreviewFPartDesc}>
                                    Let’s start improving collaboration and performance
                                </p>
                                <button className={stylePreview.PreviewFPartBtn}>
                                    Schedule your free call
                                </button>
                            </motion.div>

                            <motion.div
                                key={`30_${page}`}
                                viewport={{ once: true }}
                                initial={{ x: 80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={stylePreview.PreviewSPart}>
                                <img src="..../../../public/SM2.webp" alt="" />
                            </motion.div>
                        </section>

                        <section className={styleExample.Example}>
                            <motion.div
                                key={`_29__${page}`}
                                viewport={{ once: true }}
                                initial={{ y: -80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={styleExample.ExampleLPart}>500px</motion.div>

                            <motion.div
                                key={`__28_${page}`}
                                viewport={{ once: true }}
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={styleExample.ExampleRPart}>
                                <p className={styleExample.ExampleRPartTitle}>
                                    Something has happened with your teen...
                                </p>
                                <p className={styleExample.ExampleRPartTitleDesc}>
                                    And as a parent, you’re at the lowest point you never imagined
                                    possible. Maybe…
                                </p>

                                <ul className={styleExample.ExampleRPartList}>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        Their secret is out
                                    </li>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        You saw what was on their phone
                                    </li>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        The cops were called
                                    </li>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        They said what they said, and it broke your soul
                                    </li>
                                </ul>

                                <p
                                    className={`${styleExample.ExampleRPartDesc} ${styleExample.ExampleRPartDescFist}`}
                                >
                                    Everyone’s behavior is… Horrifying. You never thought the toddler
                                    who threw their arms around you could be here. And now you want to
                                    hide under a rock for how disappointed and ashamed you feel.
                                </p>
                                <p className={styleExample.ExampleRPartDesc}>
                                    This spot feels permanently condemned. Life could never be the same
                                    again after what you know now… but it can actually be better.
                                </p>
                                <p className={styleExample.ExampleRPartDesc}>
                                    Better for you on the daily, but even better for how you love and
                                    help your teen. Which is better for them forever
                                </p>
                            </motion.div>
                        </section>

                        <section className={styleSteps.Steps}>
                            <motion.p
                                initial={{ y: -50, opacity: 0 }}
                                key={`__27_${page}`}
                                viewport={{ once: true }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={styleSteps.StepsTitle}>
                                When you implement these key strategies, your team will flourish in an environment where
                            </motion.p>

                            <div className={styleSteps.StepsTypes}>
                                <div className={styleSteps.StepsTypesType}>
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        key={`26${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesIcon}>
                                        <img src="..../../../public/home.png" alt="home.png" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        key={`__25_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .8 }}
                                        className={styleSteps.StepsTypesTitle}>Collaboration</motion.p>
                                    <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        key={`__24_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesDesc}>
                                        There is no more wondering how to improve teamwork. You’ll have confidence in your team’s ability to collaborate effectively and achieve shared goals like never before
                                    </motion.p>
                                </div>

                                <div className={styleSteps.StepsTypesType}>
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        key={`23${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesIcon}>
                                        <img src="..../../../public/home.png" alt="home.png" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        key={`22${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .8 }}
                                        className={styleSteps.StepsTypesTitle}>Leadership</motion.p>
                                    <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        key={`21${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesDesc}>
                                        There is no more questioning your leadership skills. You’ll develop the confidence and strategies to lead your team to success and inspire them to reach new heights
                                    </motion.p>
                                </div>

                                <div className={styleSteps.StepsTypesType}>
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        key={`20${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesIcon}>
                                        <img src="..../../../public/home.png" alt="home.png" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        key={`__19_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .8 }}
                                        className={styleSteps.StepsTypesTitle}>Growth</motion.p>
                                    <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        key={`_18__${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesDesc}>
                                        There is no more uncertainty about your team’s future. You’ll foster an environment of growth and learning, leading to unprecedented team performance and satisfaction
                                    </motion.p>
                                </div>
                            </div>
                            <motion.p
                                initial={{ y: -50, opacity: 0 }}
                                key={`_17__${page}`}
                                viewport={{ once: true }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={styleSteps.StepsDesc}>
                                Nothing will intimidate you or make you feel powerless as a parent
                                ever again.
                                <div className={styleSteps.customLine}>{"   "}</div>
                            </motion.p>

                            <motion.button
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: .5 }}
                                key={`__16_${page}`}
                                viewport={{ once: true }}
                                className={styleSteps.StepsBtn}>
                                Book your free call
                            </motion.button>
                        </section>
                    </>)
            case "4":
                return (
                    <>
                        <section className={stylePreview.Preview}>
                            <motion.div
                                key={`_15__${page}`}
                                viewport={{ once: true }}
                                initial={{ x: -80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", delay: 0.1, duration: .5 }}

                                className={stylePreview.PreviewFPart}>
                                <p className={stylePreview.PreviewFPartTitle}>
                                    Struggling with team effectiveness in your organization?
                                </p>
                                <p className={stylePreview.PreviewFPartTitleDesc}>
                                    Book a consultation to explore your team’s challenges
                                </p>
                                <div className={stylePreview.customLine}></div>
                                <p className={stylePreview.PreviewFPartDesc}>
                                    We will work together to enhance your team’s dynamics
                                </p>
                                <p className={stylePreview.PreviewFPartDesc}>
                                    Let’s start improving collaboration and performance
                                </p>
                                <button className={stylePreview.PreviewFPartBtn}>
                                    Schedule your free call
                                </button>
                            </motion.div>

                            <motion.div
                                key={`_14__${page}`}
                                viewport={{ once: true }}
                                initial={{ x: 80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={stylePreview.PreviewSPart}>
                                <img src="..../../../public/SM2.webp" alt="" />
                            </motion.div>
                        </section>

                        <section className={styleExample.Example}>
                            <motion.div
                                key={`__13_${page}`}
                                viewport={{ once: true }}
                                initial={{ y: -80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={styleExample.ExampleLPart}>500px</motion.div>

                            <motion.div
                                key={`_12__${page}`}
                                viewport={{ once: true }}
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={styleExample.ExampleRPart}>
                                <p className={styleExample.ExampleRPartTitle}>
                                    Something has happened with your teen...
                                </p>
                                <p className={styleExample.ExampleRPartTitleDesc}>
                                    And as a parent, you’re at the lowest point you never imagined
                                    possible. Maybe…
                                </p>

                                <ul className={styleExample.ExampleRPartList}>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        Their secret is out
                                    </li>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        You saw what was on their phone
                                    </li>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        The cops were called
                                    </li>
                                    <li className={styleExample.ExampleRPartListPart}>
                                        They said what they said, and it broke your soul
                                    </li>
                                </ul>

                                <p
                                    className={`${styleExample.ExampleRPartDesc} ${styleExample.ExampleRPartDescFist}`}
                                >
                                    Everyone’s behavior is… Horrifying. You never thought the toddler
                                    who threw their arms around you could be here. And now you want to
                                    hide under a rock for how disappointed and ashamed you feel.
                                </p>
                                <p className={styleExample.ExampleRPartDesc}>
                                    This spot feels permanently condemned. Life could never be the same
                                    again after what you know now… but it can actually be better.
                                </p>
                                <p className={styleExample.ExampleRPartDesc}>
                                    Better for you on the daily, but even better for how you love and
                                    help your teen. Which is better for them forever
                                </p>
                            </motion.div>
                        </section>

                        <section className={styleSteps.Steps}>
                            <motion.p
                                initial={{ y: -50, opacity: 0 }}
                                key={`__11_${page}`}
                                viewport={{ once: true }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={styleSteps.StepsTitle}>
                                When you implement these key strategies, your team will flourish in an environment where
                            </motion.p>

                            <div className={styleSteps.StepsTypes}>
                                <div className={styleSteps.StepsTypesType}>
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        key={`_10__${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesIcon}>
                                        <img src="..../../../public/home.png" alt="home.png" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        key={`_9__${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .8 }}
                                        className={styleSteps.StepsTypesTitle}>Collaboration</motion.p>
                                    <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        key={`_8__${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesDesc}>
                                        There is no more wondering how to improve teamwork. You’ll have confidence in your team’s ability to collaborate effectively and achieve shared goals like never before
                                    </motion.p>
                                </div>

                                <div className={styleSteps.StepsTypesType}>
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        key={`__7_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesIcon}>
                                        <img src="..../../../public/home.png" alt="home.png" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        key={`__6_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .8 }}
                                        className={styleSteps.StepsTypesTitle}>Leadership</motion.p>
                                    <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        key={`_5__${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesDesc}>
                                        There is no more questioning your leadership skills. You’ll develop the confidence and strategies to lead your team to success and inspire them to reach new heights
                                    </motion.p>
                                </div>

                                <div className={styleSteps.StepsTypesType}>
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        key={`__4_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesIcon}>
                                        <img src="..../../../public/home.png" alt="home.png" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        key={`__3_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .8 }}
                                        className={styleSteps.StepsTypesTitle}>Growth</motion.p>
                                    <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        key={`__2_${page}`}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: .5 }}
                                        className={styleSteps.StepsTypesDesc}>
                                        There is no more uncertainty about your team’s future. You’ll foster an environment of growth and learning, leading to unprecedented team performance and satisfaction
                                    </motion.p>
                                </div>
                            </div>
                            <motion.p
                                initial={{ y: -50, opacity: 0 }}
                                key={`_1__${page}`}
                                viewport={{ once: true }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .5 }}
                                className={styleSteps.StepsDesc}>
                                Nothing will intimidate you or make you feel powerless as a parent
                                ever again.
                                <div className={styleSteps.customLine}>{"   "}</div>
                            </motion.p>

                            <motion.button
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: .5 }}
                                key={`__0${page}`}
                                viewport={{ once: true }}
                                className={styleSteps.StepsBtn}>
                                Book your free call
                            </motion.button>
                        </section>
                    </>)
        }
    }

    return (
        <section className={stylePreview.AboutMe}>
            <Header></Header>

            {getPage()}

        </section>
    );
}

export default Solutions;
