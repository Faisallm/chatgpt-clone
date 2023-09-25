import gptLogo from "./assets/chatgpt.svg";
import "./App.css";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} className="logo" />
            <span className="brand">ChatGPT</span>
          </div>

          <button className="midBtn">
            <img src={addBtn} className="addBtn" />
            New Chat
          </button>

          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" /> What is machine learning?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" /> How to use an API?
            </button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listemsImg" /> Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listemsImg" /> Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listemsImg" /> Upgrade to Pro
          </div>
        </div>
      </div>

      <div className="main"></div>
    </div>
  );
}

export default App;
