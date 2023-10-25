import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();
      //console.log(data);
      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error);
    }
  };

  const createNewChat = () => {
    setCurrentTitle(null);
    setValue("");
    setMessage(null);
  };

  const handleClick = (title) => {
    setCurrentTitle(title);
    setMessage(null);
    setValue("");
  };

  useEffect(() => {
    console.log(
      `currentTitle`,
      currentTitle,
      `value`,
      value,
      `message`,
      message
    );
    if (!currentTitle && value && message) {
      console.log("miau");
      setCurrentTitle(value);
    }
    if (currentTitle && value && message) {
      setPreviousChats((prev) => [
        ...prev,
        { title: currentTitle, role: "user", content: value },
        { title: currentTitle, role: message.role, content: message.content },
      ]);
      setValue("");
      setMessage(null);
    }
  }, [message, currentTitle]);

  console.log(`previousChats`, previousChats);

  const currentChat = previousChats.filter(
    (prev) => prev.title === currentTitle
  );
  const uniqueTitles = [...new Set(previousChats.map((prev) => prev.title))];
  console.log(`uniqueTitles`, uniqueTitles);

  return (
    <div className="App">
      <section className="side-bar">
        <button onClick={createNewChat}>✚ New chat</button>
        <ul className="history">
          {uniqueTitles?.map((title, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  handleClick(title);
                }}
              >
                {title}
              </li>
            );
          })}
        </ul>
        <nav>
          <p>Made by Gustl</p>
        </nav>
      </section>

      <section className="main">
        {!currentTitle && <h1>Gustl GPT</h1>}
        <ul className="feed">
          {currentChat?.map((chatMessage, index) => {
            return (
              <li key={index} className={chatMessage.role}>
                <p className="role">{chatMessage.role}</p>
                <p className="content">{chatMessage.content}</p>
              </li>
            );
          })}
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <div id="submit" onClick={getMessages}>
              ➢
            </div>
          </div>
          <p className="info">
            Chat GPT. Free Research Preview. Our goal is to make AI systems more
            natural and safe to interact with. Your feedback will help us
            improve.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
