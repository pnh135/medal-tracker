import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <div>
          <h1>2024 파리 올림픽</h1>
          <form>
            <table>
              <tr>
                <td><h5>국가명</h5></td>
                <td><h5>금메달</h5></td>
                <td><h5>은메달</h5></td>
                <td><h5>동메달</h5></td>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="국가 입력"></input>
                </td>
                <td>
                  <input type="number"></input>
                </td>
                <td>
                  <input type="number"></input>
                </td>
                <td>
                  <input type="number"></input>
                </td>
                <td>
                  <button>국가 추가</button>
                  </td>
                <td>
                  <button>업데이트</button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
