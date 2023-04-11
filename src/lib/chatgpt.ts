// import type { ChatMessage } from "@/type";

const chat = async (messageList: ChatMessage[]) => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer xxxx`, // api
    },
    body: JSON.stringify({
      stream: true,
      messages: messageList,
      model: "gpt-3.5-turbo",
    }),
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", request);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export { chat };
