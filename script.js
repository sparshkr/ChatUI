const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const chats = document.querySelector(".chats");

window.onload = function () {
  chats.scrollTo({
    top: chats.scrollHeight,
    behavior: "smooth",
  });
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  sendMessage();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission if input is inside a form
    sendMessage();
  }
});

function sendMessage() {
  const msg = input.value;
  if (msg !== "") {
    console.log("sent", msg);

    const sentchat = document.createElement("div");
    sentchat.setAttribute(
      "class",
      "chat-right text-right mb-2 flex flex-col items-end"
    );
    const sentchapara = document.createElement("p");
    sentchapara.setAttribute(
      "class",
      "bg-blue-100 max-w-[300px] p-2 rounded-lg shadow"
    );
    sentchapara.innerText = msg;
    sentchat.appendChild(sentchapara);
    chats.appendChild(sentchat);
    chats.scrollTo({
      top: chats.scrollHeight,
      behavior: "smooth",
    });
    console.log(sentchat);

    input.value = "";
  }
}
