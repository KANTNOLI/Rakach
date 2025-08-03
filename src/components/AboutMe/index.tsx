import { motion } from "motion/react"

import stylePreview from "./Preview.module.scss";
import styleExample from "./Example.module.scss";
import styleProcess from "./Process.module.scss";
import styleSteps from "./Steps.module.scss";
import styleWork from "./Work.module.scss";
import styleAbout from "./About.module.scss";
import styleExit from "./Exit.module.scss"
import { useEffect, useRef } from "react";

function AboutMe() {
  const Process = [
    {
      span: "Understand how expectations work.",
      text: "We all have them around our kids and usually they’re painful. Let’s fix that and use them to your advantage.",
    }, {
      span: "Understand how expectations work.",
      text: "We all have them around our kids and usually they’re painful. Let’s fix that and use them to your advantage.",
    }, {
      span: "Understand how expectations work.",
      text: "We all have them around our kids and usually they’re painful. Let’s fix that and use them to your advantage.",
    }, {
      span: "Understand how expectations work.",
      text: "We all have them around our kids and usually they’re painful. Let’s fix that and use them to your advantage.",
    }, {
      span: "Understand how expectations work.",
      text: "We all have them around our kids and usually they’re painful. Let’s fix that and use them to your advantage.",
    }, {
      span: "Understand how expectations work.",
      text: "We all have them around our kids and usually they’re painful. Let’s fix that and use them to your advantage.",
    }, {
      span: "Understand how expectations work.",
      text: "We all have them around our kids and usually they’re painful. Let’s fix that and use them to your advantage.",
    }
  ]

  const body = useRef<HTMLDivElement>(null)

  useEffect(() => {
    
    if(body.current){
    //  disableBodyScroll(body.current);
    }
  }, [])

  return (
    <section ref={body} className={stylePreview.AboutMe}>
      <section className={stylePreview.Preview}>
        <motion.div
          viewport={{ once: true }}
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.1, duration: .5 }}

          className={stylePreview.PreviewFPart}>
          <p className={stylePreview.PreviewFPartTitle}>
            Ready to turn your broken heart into a confident, peaceful one?
          </p>
          <p className={stylePreview.PreviewFPartTitleDesc}>
            Grab your 30 minutes with me now and lets get started.
          </p>{" "}
          <div className={stylePreview.customLine}></div>
          <p className={stylePreview.PreviewFPartDesc}>
            Invest 16 hours over the next 4 months, and you’ll gain
          </p>
          <p className={stylePreview.PreviewFPartDesc}>
            350,000 future hours infinitely better spent with your family.
          </p>
          <button className={stylePreview.PreviewFPartBtn}>
            Schedule your free call
          </button>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: .5 }}
          className={stylePreview.PreviewSPart}>{/* IMG */}w 500px</motion.div>
      </section>

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

      <section className={styleProcess.Process}>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: .5 }}
          className={styleProcess.ProcessIdea}>The Process</motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", duration: .8 }}
          className={styleProcess.ProcessTitle}>
          It can feel confusing and overwhelming to try and “fix” what you’re
          not even sure is the problem
        </motion.p>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", duration: .5 }}
          className={styleProcess.ProcessDesc}>
          Welcome to my private parent coaching program, 4 months for a better
          forever
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.1, duration: .5 }}
          className={`${styleProcess.ProcessStepPart} ${styleProcess.ProcessStepPartFirst}`}
        >
          step 1
        </motion.div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.1, duration: .5 }}
          viewport={{ once: true }}
          className={styleProcess.ProcessStepDesc}>
          <span>Understand how expectations work.</span> We all have them around
          our kids and usually they’re painful. Let’s fix that and use them to
          your advantage.
        </motion.p>

        {
          Process.map((o, id) => (
            <>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: 30 }}
                transition={{ ease: "easeInOut", duration: .2 }}
                viewport={{ once: true }}
                className={styleProcess.customLine}></motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", delay: 0.2, duration: .5 }}
                className={styleProcess.ProcessStepPart}>step {id + 2}</motion.div>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: .5 }}
                className={styleProcess.ProcessStepDesc}>
                <span>{o.span}</span> {o.text}
              </motion.p>
            </>
          ))
        }
      </section>

      <section className={styleSteps.Steps}>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: .5 }}
          className={styleSteps.StepsTitle}>
          When you complete these 8 specific steps,you’ll live in a house where
          there’s...
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
              className={styleSteps.StepsTypesTitle}>Connection</motion.p>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: .5 }}
              className={styleSteps.StepsTypesDesc}>
              There is no more wondering where you went wrong or if your
              children will have a quality adult life. You’ll have confidence in
              yourself as a parent and for the future like never before.
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
              className={styleSteps.StepsTypesTitle}>Connection</motion.p>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: .5 }}
              className={styleSteps.StepsTypesDesc}>
              There is no more wondering where you went wrong or if your
              children will have a quality adult life. You’ll have confidence in
              yourself as a parent and for the future like never before.
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
              className={styleSteps.StepsTypesTitle}>Connection</motion.p>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: .5 }}
              className={styleSteps.StepsTypesDesc}>
              There is no more wondering where you went wrong or if your
              children will have a quality adult life. You’ll have confidence in
              yourself as a parent and for the future like never before.
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
          className={styleSteps.StepsBtn}>
          Book your free call
        </motion.button>
      </section>

      <section className={styleAbout.About}>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: .5 }}
          className={styleAbout.AboutLPart}>
          <p className={styleAbout.AboutLPartTitle}>About Heather Frazier</p>

          <p className={styleAbout.AboutLPartDesc}>Known as the Teen Whisperer, I’m author of a best-selling book, “How I Fixed My Teen,” host of the 5 star podcast Pivot Parenting, was a six-month guest on ABC4’s highly rated daytime show Good Things Utah, published in Holistic Life magazine, and I’m the authority you’ve been looking for. My expertise is rooted in transformative coaching philosophies learned through certification at The Life Coach School, advanced trauma certification, and Jody Moore’s advancАed faith-based certification.</p>
          <p className={styleAbout.AboutLPartDesc}>In addition to being a dedicated mother of four, I’m an active member of the Church of Jesus Christ of Latter-day Saints. I love to inspire and guide parents, and am an invaluable resource for smooth navigation of parenting complexities during the teenage years.</p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: .5 }}
          className={styleAbout.AboutRPart}>
          500px
        </motion.div>
      </section>

      <section className={styleExit.Exit}>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: .5 }}
          className={styleExit.ExitTitle}>There’s no more convenient time to do this, and there’s no better time to secure the future you’ve dreamed of.</motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: .5 }}
          className={styleExit.ExitBtn}>
          Schedule your free call
        </motion.button>
      </section>

    </section>
  );
}

export default AboutMe;
