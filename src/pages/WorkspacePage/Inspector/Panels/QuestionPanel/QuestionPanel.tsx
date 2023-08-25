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
          <br />A more detailed version of the tutorial is available here:&nbsp;
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1CapvuiEKWgoYLVXBFq8gmmJa2XejNG1N5ch7HkdZ3Wc/edit?usp=sharing"
          >
            DONUT Code Tutorial
          </Link>
          <br />
          <br />
          <b>Step 1: Accessing and enabling the Tool:</b> Before we dive in,
          please note that we currently use a self-signed certificate due to
          resource limitations. To access the tool, follow these steps:
          <ol>
            <li>
              Click on the following link:&nbsp;
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://ec2-3-24-21-254.ap-southeast-2.compute.amazonaws.com:3000"
              >
                Access DONUT
              </Link>
              . Your browser might show a security warning.
            </li>
            <li>
              Click on "Advanced" and then select "Proceed" at the bottom of the
              website
            </li>
            we apologise for any inconvenience.
          </ol>
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
          <ul>
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
          </ul>
          Remember, our aim is to make coding comprehension a breeze. Happy
          practising, and best of luck with your coding journey!
        </Typography>
      </div>
    </Stack>
  );
}
