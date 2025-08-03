import { motion } from "motion/react"

import stylePreview from "./Preview.module.scss";
import styleExample from "./Example.module.scss";
import styleProcess from "./Process.module.scss";
import styleSteps from "./Steps.module.scss";
import styleWork from "./Work.module.scss";
import styleAbout from "./About.module.scss";
import styleExit from "./Exit.module.scss"

function AboutMe() {
  return (
    <section className={stylePreview.AboutMe}>
      <section className={stylePreview.Preview}>
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
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
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.1, duration: .5 }}
          className={stylePreview.PreviewSPart}>{/* IMG */}w 500px</motion.div>
      </section>

      <section
        className={styleWork.Work}>
        <motion.p
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.1, duration: .5 }}

          className={styleWork.WorkTitle}>Ways to work with me</motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.1, duration: .4 }}

          className={styleWork.WorkTitleDesc}>
          Pick the option that works best for you
        </motion.p>

        <div className={styleWork.WorkTypes}>
          <div className={styleWork.WorkTypesType}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.1, duration: .5 }}
              className={styleWork.WorkTypesIcon}>
              <img src="./heart.svg" alt="heart.svg" />
            </motion.div>

            <motion.p
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.1, duration: .4 }}
              className={styleWork.WorkTypesTitle}>Drop-in</motion.p>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.1, duration: .4 }}
              className={styleWork.Line}>
              <div className={styleWork.LineCheck}>
                <img src="./check.svg" alt="check.svg" />
              </div>
              <p className={styleWork.LineTitle}>8 or more hours a month of group coaching</p>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.1, duration: .4 }}
              className={styleWork.Line}>
              <div className={styleWork.LineCheck}>
                <img src="./check.svg" alt="check.svg" /></div>
              <p className={styleWork.LineTitle}>No recordings</p>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.1, duration: .4 }}
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
              transition={{ ease: "easeInOut", delay: 0.1, duration: .5 }}
              className={styleWork.WorkTypesIcon}>
              <img src="./heart.svg" alt="heart.svg" />
            </motion.div>

            <motion.p
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.1, duration: .4 }}
              className={styleWork.WorkTypesTitle}>Drop-in</motion.p>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.1, duration: .4 }}
              className={styleWork.Line}>
              <div className={styleWork.LineCheck}>
                <img src="./check.svg" alt="check.svg" />
              </div>
              <p className={styleWork.LineTitle}>8 or more hours a month of group coaching</p>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.1, duration: .4 }}
              className={styleWork.Line}>
              <div className={styleWork.LineCheck}>
                <img src="./check.svg" alt="check.svg" /></div>
              <p className={styleWork.LineTitle}>No recordings</p>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.1, duration: .4 }}
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
              transition={{ ease: "easeInOut", delay: 0.1, duration: .5 }}
              className={styleWork.WorkTypesIcon}>
              <img src="./heart.svg" alt="heart.svg" />
            </motion.div>

            <motion.p
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.1, duration: .4 }}
              className={styleWork.WorkTypesTitle}>Drop-in</motion.p>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.1, duration: .4 }}
              className={styleWork.Line}>
              <div className={styleWork.LineCheck}>
                <img src="./check.svg" alt="check.svg" />
              </div>
              <p className={styleWork.LineTitle}>8 or more hours a month of group coaching</p>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.1, duration: .4 }}
              className={styleWork.Line}>
              <div className={styleWork.LineCheck}>
                <img src="./check.svg" alt="check.svg" /></div>
              <p className={styleWork.LineTitle}>No recordings</p>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.1, duration: .4 }}
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
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.1, duration: .5 }}
          className={styleExample.ExampleLPart}>500px</motion.div>

        <div className={styleExample.ExampleRPart}>
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
        </div>
      </section>

      <section className={styleProcess.Process}>
        <p className={styleProcess.ProcessIdea}>The Process</p>
        <p className={styleProcess.ProcessTitle}>
          It can feel confusing and overwhelming to try and “fix” what you’re
          not even sure is the problem
        </p>
        <p className={styleProcess.ProcessDesc}>
          Welcome to my private parent coaching program, 4 months for a better
          forever
        </p>

        <div
          className={`${styleProcess.ProcessStepPart} ${styleProcess.ProcessStepPartFirst}`}
        >
          step 1
        </div>
        <p className={styleProcess.ProcessStepDesc}>
          <span>Understand how expectations work.</span> We all have them around
          our kids and usually they’re painful. Let’s fix that and use them to
          your advantage.
        </p>
        <div className={styleProcess.customLine}></div>

        <div className={styleProcess.ProcessStepPart}>step 3</div>
        <p className={styleProcess.ProcessStepDesc}>
          <span>Love all of yourself.</span> We’re all flawed. Let’s make peace
          with this fact together.
        </p>
        <div className={styleProcess.customLine}></div>

        <div className={styleProcess.ProcessStepPart}>step 4</div>
        <p className={styleProcess.ProcessStepDesc}>
          <span>Humility is key. </span> (Stop judging you and them while
          embracing being wrong) sounds scary but this step is the most
          liberating and life changing for most clients.
        </p>
        <div className={styleProcess.customLine}></div>

        <div className={styleProcess.ProcessStepPart}>step 5</div>
        <p className={styleProcess.ProcessStepDesc}>
          <span>Understand how expectations work.</span> We all have them around
          our kids and usually they’re painful. Let’s fix that and use them to
          your advantage.
        </p>
        <div className={styleProcess.customLine}></div>

        <div className={styleProcess.ProcessStepPart}>step 6</div>
        <p className={styleProcess.ProcessStepDesc}>
          <span>Understand how expectations work.</span> We all have them around
          our kids and usually they’re painful. Let’s fix that and use them to
          your advantage.
        </p>
        <div className={styleProcess.customLine}></div>

        <div className={styleProcess.ProcessStepPart}>step 7</div>
        <p className={styleProcess.ProcessStepDesc}>
          <span>Understand how expectations work.</span> We all have them around
          our kids and usually they’re painful. Let’s fix that and use them to
          your advantage.
        </p>
        <div className={styleProcess.customLine}></div>

        <div className={styleProcess.ProcessStepPart}>step 8</div>
        <p className={styleProcess.ProcessStepDesc}>
          <span>Understand how expectations work.</span> We all have them around
          our kids and usually they’re painful. Let’s fix that and use them to
          your advantage.
        </p>
      </section>

      <section className={styleSteps.Steps}>
        <p className={styleSteps.StepsTitle}>
          When you complete these 8 specific steps,you’ll live in a house where
          there’s...
        </p>

        <div className={styleSteps.StepsTypes}>
          <div className={styleSteps.StepsTypesType}>
            <div className={styleSteps.StepsTypesIcon}>
              <img src="./home.png" alt="home.png" />
            </div>

            <p className={styleSteps.StepsTypesTitle}>Connection</p>
            <p className={styleSteps.StepsTypesDesc}>
              There’s more time to focus on what matters most: Your love and
              connection as a family.
            </p>
          </div>

          <div className={styleSteps.StepsTypesType}>
            <div className={styleSteps.StepsTypesIcon}>
              <img src="./home.png" alt="home.png" />
            </div>

            <p className={styleSteps.StepsTypesTitle}>Confidence</p>
            <p className={styleSteps.StepsTypesDesc}>
              There is no more wondering where you went wrong or if your
              children will have a quality adult life. You’ll have confidence in
              yourself as a parent and for the future like never before.
            </p>
          </div>

          <div className={styleSteps.StepsTypesType}>
            <div className={styleSteps.StepsTypesIcon}>
              <img src="./home.png" alt="home.png" />
            </div>

            <p className={styleSteps.StepsTypesTitle}>Empowerment</p>
            <p className={styleSteps.StepsTypesDesc}>
              The situations you're struggling with now and those in the future
              will no longer dictate your emotions, quality of connections with
              your kids… and yes, even mental health challenges for both of you!
            </p>
          </div>
        </div>
        <p className={styleSteps.StepsDesc}>
          Nothing will intimidate you or make you feel powerless as a parent
          ever again.
          <div className={styleSteps.customLine}>{"   "}</div>
        </p>

        <button className={styleSteps.StepsBtn}>Book your free call</button>
      </section>

      <section className={styleAbout.About}>
        <div className={styleAbout.AboutLPart}>
          <p className={styleAbout.AboutLPartTitle}>About Heather Frazier</p>

          <p className={styleAbout.AboutLPartDesc}>Known as the Teen Whisperer, I’m author of a best-selling book, “How I Fixed My Teen,” host of the 5 star podcast Pivot Parenting, was a six-month guest on ABC4’s highly rated daytime show Good Things Utah, published in Holistic Life magazine, and I’m the authority you’ve been looking for. My expertise is rooted in transformative coaching philosophies learned through certification at The Life Coach School, advanced trauma certification, and Jody Moore’s advancАed faith-based certification.</p>
          <p className={styleAbout.AboutLPartDesc}>In addition to being a dedicated mother of four, I’m an active member of the Church of Jesus Christ of Latter-day Saints. I love to inspire and guide parents, and am an invaluable resource for smooth navigation of parenting complexities during the teenage years.</p>
        </div>

        <div className={styleAbout.AboutRPart}>
          500px
        </div>
      </section>

      <section className={styleExit.Exit}>
        <p className={styleExit.ExitTitle}>There’s no more convenient time to do this, and there’s no better time to secure the future you’ve dreamed of.</p>

        <button className={styleExit.ExitBtn}>
          Schedule your free call
        </button>
      </section>

    </section>
  );
}

export default AboutMe;
