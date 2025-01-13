/**
 * Function to send a message and append it to the chatbox.
 */
const sendMessage = () => {
  const message = input.value;
  if (message !== "") {
    console.log("sent", message);

    const sentChat = document.createElement("div");
    sentChat.setAttribute(
      "class",
      "chat-right text-right mb-2 flex flex-col items-end"
    );
    const sentChatPara = document.createElement("p");
    sentChatPara.setAttribute(
      "class",
      "bg-blue-100 max-w-[300px] p-2 rounded-lg shadow"
    );
    sentChatPara.innerText = message;
    sentChat.appendChild(sentChatPara);
    chats.appendChild(sentChat);
    chats.scrollTo({
      top: chats.scrollHeight,
      behavior: "smooth",
    });
    console.log(sentChat);

    input.value = "";
  }
};

// DOM elements
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const chats = document.querySelector(".chats");

// Scroll to the bottom of the chat on page load
window.onload = () => {
  chats.scrollTo({
    top: chats.scrollHeight,
    behavior: "smooth",
  });
};

// Event listener for send button
btn.addEventListener("click", (event) => {
  event.preventDefault();
  sendMessage();
});

// Event listener for Enter key in input field
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission if input is inside a form
    sendMessage();
  }
});