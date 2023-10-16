function App() {
  return (
    <div className="App">
      <section className="side-bar">
        <button>✚ New chat</button>
        <ul className="history">
          <li>listitem</li>
          <li>listitem</li>
        </ul>
        <nav>
          <p>Made by Gustl</p>
        </nav>
      </section>

      <section className="main">
        <h1>Gustl GPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit">➢</div>
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
