import stylePreview from "./Preview.module.scss";
import styleExample from "./Example.module.scss";
import styleProcess from "./Process.module.scss";
import styleSteps from "./Steps.module.scss";

function AboutMe() {
  return (
    <section className={stylePreview.AboutMe}>
      <section className={stylePreview.Preview}>
        <div className={stylePreview.PreviewFPart}>
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
        </div>

        <div className={stylePreview.PreviewSPart}>{/* IMG */}w 500px</div>
      </section>

      <section className={styleExample.Example}>
        <div className={styleExample.ExampleLPart}>500px</div>

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
          When you complete these 8 specific steps, you’ll live in a house where
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
    </section>
  );
}

export default AboutMe;
