import { TextField, Stack, Button, CircularProgress } from "@mui/material";
import { useContext, useState } from "react";
import { spacing } from "../../../../SharedStyles";
import { WorkspaceContext } from "../../../../../../context/WorkspaceContextProvider";
import Message from "../../../../../../models/Message";

const MAX_MESSAGE_LENGTH = 200;

export default function MessageInput() {
  const { sendChatPrompt, responseLoading } = useContext(WorkspaceContext);

  const [message, setMessage] = useState("");

  function handleMessageSend() {
    async function send() {
      if (responseLoading) {
        // Cannot send while response is loading.
        return;
      }
      if (message.trim()) {
        sendChatPrompt(new Message("User", message, true)).then(() =>
          setMessage("")
        );
      }
    }

    send();
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent the default behavior (form submission)
      handleMessageSend();
    }
  }

  return (
    <Stack spacing={spacing}>
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        multiline
        disabled={responseLoading}
        placeholder="Ask your follow ups here"
        inputProps={{ maxLength: MAX_MESSAGE_LENGTH }}
        error={message.length > MAX_MESSAGE_LENGTH - 10}
        helperText={
          message.length >= MAX_MESSAGE_LENGTH - 10
            ? "Please keep your message short."
            : ""
        }
      />
      {responseLoading ? (
        <CircularProgress
          // Use style instead of sx, as sx is overridden
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
          size="2rem"
        />
      ) : (
        <Button variant="contained" onClick={handleMessageSend} fullWidth>
          Send
        </Button>
      )}
    </Stack>
  );
}
