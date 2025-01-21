import { useState } from "react";
import "./App.css";

function App() {
  const [submit, onSubmit] = useState(0);

  // const inputMedal = () => {
  //   onSubmit.forEach(element => {
      
  //   })
  // }
  return (
    <>
      <div className="container">
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
          <div>
            <span>아직 추가된 국가가 없습니다. 메달을 추적하세요!</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
