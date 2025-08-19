import { motion } from "motion/react"

import stylePreview from "./Preview.module.scss";
import styleSteps from "./Steps.module.scss";
function HowWorks() {

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

            <section className={styleSteps.Steps}>
                <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className={styleSteps.StepsTitle}>
                    What We’ll Be Working With: The Most Important Aspects
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
                            className={styleSteps.StepsTypesTitle}>Flexible Scheduling</motion.p>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .5 }}
                            className={styleSteps.StepsTypesDesc}>
                            TCoaching that fits your team’s rhythm, anytime, anywhere
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
                            className={styleSteps.StepsTypesTitle}>Confidential & Safe</motion.p>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .5 }}
                            className={styleSteps.StepsTypesDesc}>
                            A secure space for honest conversations and real growth
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
                            className={styleSteps.StepsTypesTitle}>Trust-Building Focus</motion.p>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .5 }}
                            className={styleSteps.StepsTypesDesc}>
                            Strengthening bonds that power collaboration and success
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
                            className={styleSteps.StepsTypesTitle}>High Impact Solutions</motion.p>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .5 }}
                            className={styleSteps.StepsTypesDesc}>
                            Immediate strategies that make a difference—fast
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
                            className={styleSteps.StepsTypesTitle}>Lasting Skills Development
                        </motion.p>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: .5 }}
                            className={styleSteps.StepsTypesDesc}>
                            Skills that grow with your team—today and tomorrow
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


        </section>
    );
}

export default HowWorks;
