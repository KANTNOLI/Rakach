import { motion } from "motion/react"

import stylePreview from "./Preview.module.scss";
import styleExample from "./Example.module.scss";
import styleProcess from "./Process.module.scss";
import styleSteps from "./Steps.module.scss";
import styleWork from "./Work.module.scss";
import styleAbout from "./About.module.scss";
import styleExit from "./Exit.module.scss"

function IndividualCoaching() {

    return (
        <section className={stylePreview.AboutMe}>
            <section className={stylePreview.Preview}>
                <motion.div
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
                    viewport={{ once: true }}
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className={stylePreview.PreviewSPart}>
                    <img src="./SM2.webp" alt="" />
                </motion.div>
            </section>

            {/* tabls1 */}
            <section
                className={styleWork.Work}>
                <motion.p
                    viewport={{ once: true }}
                    initial={{ y: -80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: .5 }}

                    className={styleWork.WorkTitle}>Ways to work with me</motion.p>
                <motion.p
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: .4 }}

                    className={styleWork.WorkTitleDesc}>
                    Pick the option that works best for you
                </motion.p>

                <div className={styleWork.WorkTypes}>
                    <div className={styleWork.WorkTypesType}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ ease: "easeInOut", duration: .5 }}
                            className={styleWork.WorkTypesIcon}>
                            <img src="./heart.svg" alt="heart.svg" />
                        </motion.div>

                        <motion.p
                            initial={{ y: -10, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .4 }}
                            className={styleWork.WorkTypesTitle}>Drop-in</motion.p>
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .4 }}
                            viewport={{ once: true }}
                            className={styleWork.Line}>
                            <div className={styleWork.LineCheck}>
                                <img src="./check.svg" alt="check.svg" />
                            </div>
                            <p className={styleWork.LineTitle}>8 or more hours a month of group coaching</p>
                        </motion.div>

                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .4 }}
                            className={styleWork.Line}>
                            <div className={styleWork.LineCheck}>
                                <img src="./check.svg" alt="check.svg" /></div>
                            <p className={styleWork.LineTitle}>No recordings</p>
                        </motion.div>

                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ ease: "easeInOut", duration: .4 }}
                            className={styleWork.Line}>
                            <div className={styleWork.LineCheck}>
                                <img src="./check.svg" alt="check.svg" /></div>
                            <p className={styleWork.LineTitle}>No contract </p>
                        </motion.div>
                    </div>
                    <div className={styleWork.WorkTypesType}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ ease: "easeInOut", duration: .5 }}
                            className={styleWork.WorkTypesIcon}>
                            <img src="./heart.svg" alt="heart.svg" />
                        </motion.div>

                        <motion.p
                            initial={{ y: -10, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .4 }}
                            className={styleWork.WorkTypesTitle}>Drop-in</motion.p>
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ ease: "easeInOut", duration: .4 }}
                            className={styleWork.Line}>
                            <div className={styleWork.LineCheck}>
                                <img src="./check.svg" alt="check.svg" />
                            </div>
                            <p className={styleWork.LineTitle}>8 or more hours a month of group coaching</p>
                        </motion.div>

                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ ease: "easeInOut", duration: .4 }}
                            className={styleWork.Line}>
                            <div className={styleWork.LineCheck}>
                                <img src="./check.svg" alt="check.svg" /></div>
                            <p className={styleWork.LineTitle}>No recordings</p>
                        </motion.div>

                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .4 }}
                            className={styleWork.Line}>
                            <div className={styleWork.LineCheck}>
                                <img src="./check.svg" alt="check.svg" /></div>
                            <p className={styleWork.LineTitle}>No contract </p>
                        </motion.div>
                    </div>
                    <div className={styleWork.WorkTypesType}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .5 }}
                            className={styleWork.WorkTypesIcon}>
                            <img src="./heart.svg" alt="heart.svg" />
                        </motion.div>

                        <motion.p
                            initial={{ y: -10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ ease: "easeInOut", duration: .4 }}
                            className={styleWork.WorkTypesTitle}>Drop-in</motion.p>
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .4 }}
                            className={styleWork.Line}>
                            <div className={styleWork.LineCheck}>
                                <img src="./check.svg" alt="check.svg" />
                            </div>
                            <p className={styleWork.LineTitle}>8 or more hours a month of group coaching</p>
                        </motion.div>

                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ ease: "easeInOut", duration: .4 }}
                            className={styleWork.Line}>
                            <div className={styleWork.LineCheck}>
                                <img src="./check.svg" alt="check.svg" /></div>
                            <p className={styleWork.LineTitle}>No recordings</p>
                        </motion.div>

                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ ease: "easeInOut", duration: .4 }}
                            className={styleWork.Line}>
                            <div className={styleWork.LineCheck}>
                                <img src="./check.svg" alt="check.svg" /></div>
                            <p className={styleWork.LineTitle}>No contract </p>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* idk */}
            <section className={styleExample.Example}>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ y: -80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className={styleExample.ExampleLPart}>500px</motion.div>

                <motion.div
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

            {/* tabls2 */}
            <section className={styleSteps.Steps}>
                <motion.p
                    initial={{ y: -50, opacity: 0 }}
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
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .5 }}
                            className={styleSteps.StepsTypesIcon}>
                            <img src="./home.png" alt="home.png" />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .8 }}
                            className={styleSteps.StepsTypesTitle}>Collaboration</motion.p>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
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
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .5 }}
                            className={styleSteps.StepsTypesIcon}>
                            <img src="./home.png" alt="home.png" />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .8 }}
                            className={styleSteps.StepsTypesTitle}>Leadership</motion.p>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
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
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .5 }}
                            className={styleSteps.StepsTypesIcon}>
                            <img src="./home.png" alt="home.png" />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .8 }}
                            className={styleSteps.StepsTypesTitle}>Growth</motion.p>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
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
                    viewport={{ once: true }}
                    className={styleSteps.StepsBtn}>
                    Book your free call
                </motion.button>
            </section>

            <section className={styleAbout.About}>
                <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className={styleAbout.AboutRPart}>
                    <img src="./SM1.webp" alt="" />
                </motion.div>
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className={styleAbout.AboutLPart}>
                    <p className={styleAbout.AboutLPartTitle}>About Maria Rakach</p>

                    <p className={styleAbout.AboutLPartDesc}>Despite a long and rewarding career in the fast-paced financial sector, I chose to work where business and education meet—a space where experience and knowledge come together to create meaningful change. My work in Higher Education, supporting some of the brightest minds from more than 20 countries, has shown me something surprising: even the most intelligent, talented individuals can struggle to form highly effective teams. And that’s where I come in</p>

                    <p className={styleAbout.AboutLPartDesc}>Team coaching has become my passion because I’ve seen how diversity of thought, when paired with clear purpose, trust, and collaboration, can transform performance. I work both with individuals and multicultural teams—whether in academia, business, or beyond—to turn differences into strengths, move from obstacles to opportunities, and align on shared goals and values.</p>

                    <p className={styleAbout.AboutLPartDesc}>My approach blends leadership development, communication strategies, and cultural awareness to build teams that are proactive, connected, and inspired to achieve more together than they ever could alone. No matter the setting, I believe extraordinary results come when independence and interdependence are in balance, and every member knows both their purpose and their contribution.</p>
                </motion.div>


            </section>

            <section className={styleExit.Exit}>
                <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className={styleExit.ExitTitle}>There’s no better time than now to enhance your team’s performance and build a strong foundation for future success</motion.p>

                <motion.button
                    initial={{ y: 50, opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className={styleExit.ExitBtn}>
                    Schedule your free call
                </motion.button>
            </section>

        </section>
    );
}

export default IndividualCoaching;
