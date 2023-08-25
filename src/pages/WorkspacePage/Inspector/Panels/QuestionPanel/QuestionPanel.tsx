import { useContext } from "react";
import AnswerBox from "./AnswerBox";
import { WorkspaceContext } from "../../../../../context/WorkspaceContextProvider";
import { CircularProgress, Link, Stack, Typography } from "@mui/material";
import { spacing } from "../../../SharedStyles";
import QuestionList from "./QuestionList";

export default function QuestionPanel() {
  const { programGenState, questionsLoading } = useContext(WorkspaceContext);

  return (
    <Stack
      spacing={spacing}
      sx={{
        height: "100%",
        boxSizing: "border-box",
        p: spacing,
      }}
    >
      {
        // Select component to render based on current enum value.
        {
          // TODO: there is probably a better way to show this when not complete.
          unselected: <ProgramGenInfo />,
          custom_code: <ProgramGenInfo />,
          prompt: <ProgramGenInfo />,
          complete: (
            <>
              {questionsLoading ? (
                <CircularProgress sx={{ m: "auto" }} />
              ) : (
                <>
                  <QuestionList />
                  <AnswerBox />
                </>
              )}
            </>
          ),
        }[programGenState]
      }
    </Stack>
  );
}
function ProgramGenInfo() {
  return (
    <Stack
      spacing={spacing}
      sx={{
        p: spacing,
        flexGrow: 1,
      }}
    >
      <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
        Welcome to DONUT Code Tutorial
      </Typography>
      <div
        style={{
          textAlign: "left",
        }}
      >
        <Typography variant="body1" sx={{ fontFamily: "serif" }}>
          <b>Introduction:</b>
          <br />
          Welcome to DONUT Code, your go-to tool for enhancing your coding
          understanding skills! Whether you're struggling with concepts from
          CS101 or aiming to deepen your understanding of code snippets, this
          tool is designed to help you practise and improve. Once you are done
          with the session, don't forget to fill in the survey to help make the
          tool better!&nbsp;&nbsp;
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://forms.gle/2trxnp6urSNq22xAA"
          >
            Survey ヽ(ˋДˊ)ノ
          </Link>
          <br />
          <br />
          <b>Step 1: Accessing and enabling the Tool:</b> Before we dive in,
          please note that we currently use a self-signed certificate due to
          resource limitations. To access the tool, follow these steps:
          <br />
          <br />
          Click on the following link:&nbsp;
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://ec2-3-24-21-254.ap-southeast-2.compute.amazonaws.com:3000"
          >
            Access DONUT
          </Link>
          . Your browser might show a security warning. Click on "Advanced" and
          then select "Proceed" at the bottom of the website, we apologise for
          any inconvenience.
          <br />
          <br />
          <b>Step 2: Choose Your Method:</b> Once you're back on this tool,
          let's get started! We offer two options for your practice:
          <br />
          <br />
          <b>Prompt Method:</b> Are there coding concepts bugging you? Maybe
          nested loops, matrices, or Python file reading? Use this method to
          generate practice questions based on your prompt. For example, "Nested
          loop in Python" or "File reading example in Python." For more
          personalised examples, provide additional details in your prompt.
          <br />
          <br />
          For a list of example prompts:&nbsp;
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1lHpkDB--OyMxE8ibWdQlXY8PF16XFAgiggyWmFuhMnw/edit?usp=sharing"
          >
            Prompt examples
          </Link>
          <br />
          <br />
          <b>Custom Code Input:</b> Have a specific code snippet from your CS101
          lectures that you're struggling to understand? No worries! You can
          paste the code directly into the editor using this method.
          <br />
          <br />
          <b>Step 3: Generating Questions:</b> Once you've provided your prompt
          or passed your custom code, it's time to generate practice questions!
          Click on the "Generate Questions" button. On the right side of the
          screen, you'll see a list of questions categorised by difficulty
          level. These questions will help you assess your understanding of the
          code.
          <br />
          <br />
          <b>Step 4: Line-by-Line Explanation:</b> While reviewing your code, if
          you encounter a line that puzzles you, don't worry. Head over to the
          explanations tab. Simply highlight the confusing line and click
          "Generate Explanation." You'll receive a detailed explanation, helping
          you grasp the purpose of that line within the context of the entire
          program.
          <br />
          <br />
          <b>Step 5: Receive Feedback and follow up:</b> After attempting the
          questions, our AI will automatically evaluate your answers. Instant
          feedback will be provided, highlighting your performance. If you're
          unsure about a question, no problem! You can request explanations and
          even ask follow-up questions in the feedback section.
          <br />
          <br />
          <b>Final Note:</b> Feel free to explore, learn, and challenge yourself
          with various programming problems and prompts. Your feedback is
          invaluable to us! Help us improve by filling out the{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://forms.gle/2trxnp6urSNq22xAA"
          >
            survey
          </Link>{" "}
          at the end of your session.
          <br />
          <br />
          <b>In Summary:</b>
          <br />
          <ol>
            <li>Access and enable the tool using the provided link.</li>
            <li>
              Choose between the "Prompt" method for practice questions or the
              "Custom Code" method for your own code snippets.
            </li>
            <li>Seek explanations for specific lines of code if needed.</li>
            <li>Generate questions and receive instant feedback.</li>
            <li>
              Don't forget to fill out the{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://forms.gle/2trxnp6urSNq22xAA"
              >
                survey
              </Link>{" "}
              to help us enhance the tool!
            </li>
            <li>
              Ask any questions on our discord server, and we will answer them
              the best we can!
            </li>
            <br />
            <br />
            Remember, our aim is to make coding comprehension a breeze. Happy
            practising, and best of luck with your coding journey!
          </ol>
          <b>*** Important Please Read ***</b>
          <br />
          Before we start, first thing first, due the fact that we are broke
          part IV students, we could not obtain a proper SSL certificate, so for
          the website to function properly, we had to use a self-signed
          certificate.
          <br />
          <br />
          <b>
            Please go to the following&nbsp;
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://ec2-3-24-21-254.ap-southeast-2.compute.amazonaws.com:3000"
            >
              Link
            </Link>
            , where you may see that the connection is not private.
          </b>
          <br />
          <br />
          Click on{" "}
          <b>
            <i>Advanced</i>
          </b>{" "}
          and at the bottom of your screen, click on{" "}
          <b>
            <i>
              Proceed to ec2-3-24-21-254.ap-southeast-2.compute.amazonaws.com{" "}
            </i>
          </b>
          . You can now close that link, it will allow you to use our website
          properly. Apologies for the inconvenience.
          <br />
          <br />
          <i>
            If you have any questions, feel free to drop it into our&nbsp;
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/qGDQV4t3A"
            >
              Discord Channel
            </Link>
          </i>
          <br />
          <br />
          Let's get started, and take a closer look at how everything works, and
          don't forget to fill in the survey to help make the tool better once
          you're done!&nbsp;&nbsp;
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://forms.gle/2trxnp6urSNq22xAA"
          >
            Survey ヽ(ˋДˊ)ノ
          </Link>
          <br />
          <br />
          <b>Input Options:</b> To get started, you have two options shown in
          the code editor on the left: You can either input a prompt to generate
          code using AI (By clicking on the “Prompt” button), or you can enter
          your own code directly into the code editor on the left (By clicking
          on the “Custom Code” button). Choose the method that suits you best.
          <br />
          <br />
          <b>Prompt option:</b> Is there a concept you learnt in CS101 bugging
          you? Maybe a nested loop, or is it a matrix, or file reading in
          python? Enter them in the prompt option with your preferred language
          E.g. nested loop Python. Provide more details in the prompt for
          different and more personalised examples to get more practice on. E.g.
          Generate a nested loop in python that calculates the sum of a 2D
          array.
          <br />
          <br />
          <b>
            Not sure what prompt to to put in? Check out some of our{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/1lHpkDB--OyMxE8ibWdQlXY8PF16XFAgiggyWmFuhMnw/edit?usp=sharing"
            >
              example prompts
            </Link>
          </b>
          <br />
          <br />
          <b>Custom Code option:</b> Maybe there is a code snippet shown in your
          CS101 lectures that you don’t understand, feel free to copy and paste
          them using the custom code option.
          <br />
          <br />
          <b>Questions:</b> Once you have your code ready, click the "Generate
          Questions" button. You'll see a list of questions on the right, each
          labelled with a difficulty level. These questions will help you assess
          your comprehension of the code.
          <br />
          <br />
          <b>Feedback and Follow-up:</b> After submitting your answers, our AI
          will automatically evaluate them. You'll receive instant feedback on
          your performance. If you're unsure about a question, no problem! You
          can request explanations and even ask follow-up questions in the
          feedback section.
          <br />
          <br />
          <b>Line-by-Line Explanation:</b> While exploring your code, if you
          encounter a line you'd like to understand better, simply go onto the
          explanations tab, highlight the line confusing you, and click
          “Generate Explanation”. A detailed explanation will appear, helping
          you grasp the function of that line, as well as its purpose with
          regards to the overall program.
          <br />
          <br />
          Feel free to explore, learn, and challenge yourself with different
          programs and prompts!
        </Typography>
      </div>
    </Stack>
  );
}
