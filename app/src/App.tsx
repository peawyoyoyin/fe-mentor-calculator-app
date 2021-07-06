import { ThemeSelector } from "./components/ThemeSelector";

function App() {
  return (
    <div>
      <div>
        <div>
          calc
        </div>
        <div>
          THEME
          <ThemeSelector />
        </div>
      </div>
      <div>
        399981
      </div>
      <div>
        <div>
          <div>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>DEL</button>
            </div>
        </div>
        <div>
          <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            </div>
        </div>
        <div>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
            </div>
        </div>
        <div>
          <div>
            <button>.</button>
            <button>0</button>
            <button>/</button>
            <button>x</button>
            </div>
        </div>
        <div>
          <div>
            <button>RESET</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
