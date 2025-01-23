import { createElement, useState } from "react";
import "./App.css";


function App() {
  // 초기값 useState로 세팅하기
  const [medals, setMedals] = useState([]);
  const [name, setName] = useState("");
  const [gold, setGold] = useState(0);
  const [sliver, setSliver] = useState(0);
  const [bronze, setBronze] = useState(0);
 
  // 메달 추가하는 함수 
  const addNewMedal = (e) => {
    // 자동 새로고침 방지
    e.preventDefault();

    // 나라 이름이 빈칸일 때 alert 띄우기
    if (!name.trim()) {
      alert ("나라 이름을 입력해주세요!")
      return;
    }

    // 새로운 메달 배열 추가
    const newMedal = {
      name : name,
      gold: gold,
      sliver: sliver,
      bronze : bronze,
      id : Date.now()
    }; 

    // 새 메달을 state에 변경
    setMedals(
      [
        ...medals,
        newMedal,
      ]
    )
    // form 제출 후 초기값으로 변경
    setName("");
    setGold(0);
    setSliver(0);
    setBronze(0);
  };

  // 메달을 제거하는 함수 
  const removeMedal = (filteredId) => {
    const filteredMedal = medals.filter((medal)=> {
      return filteredId !== medal.id ;
    });
    // filter로 선택한 id값의 메달을 제외하고 state에 변경
    setMedals(filteredMedal)
  }

  return (
    <>
          <h1>2024 파리 올림픽</h1>
          <form onSubmit={addNewMedal}>
            <table>
              <tbody>
                <tr>
                <th>국가명</th>
                <th>금메달</th>
                <th>은메달</th>
                <th>동메달</th>
              </tr> 
                <tr>
                <td>
                  <input type="text" value={name} placeholder="국가 입력" onChange={(e) => setName(e.target.value)}></input>
                </td>
                <td>
                  <input type="number" value={gold} onChange={(e) => setGold(e.target.value)} ></input>
                </td>
                <td>
                  <input type="number" value={sliver} onChange={(e) => setSliver(e.target.value)}></input>
                </td>
                <td>
                  <input type="number" value={bronze} onChange={(e) => setBronze(e.target.value)}></input>
                </td>
                <td>
                  <button type="submit">국가 추가</button>
                  </td>
                <td>
                  <button type="submit">업데이트</button>
                </td>
              </tr>
              </tbody>
            </table>
          </form>
          <div>
            {/* 삼항연산자로 테이블 형성 */}
            <table>
              <thead>
                <tr>
                <th>국가명</th>
                <th>금메달</th>
                <th>은메달</th>
                <th>동메달</th>
                <th>액션</th>
                </tr>
              </thead>
              <tbody>
              {medals.map((medal)=>{
              return (
                // <ul key={medal.id}>
                //   <li key={medal.id} className="show-medal">
                //   <div>{medal.name}</div>
                //   <div>{medal.gold}</div>
                //   <div>{medal.sliver}</div>
                //   <div>{medal.bronze}</div>
                //   <div><button onClick={() => removeMedal(medal.id)}>삭제</button></div>
                // </li>
                // </ul>
                <tr key={medal.id}>
                  <td>
                    {medal.name}
                  </td>
                  <td>
                    {medal.gold}
                  </td>
                  <td>
                    {medal.sliver}
                  </td>
                  <td>
                    {medal.bronze}
                  </td>
                  <td>
                  <button onClick={() => removeMedal(medal.id)} className="delete-btn">삭제</button>
                  </td>
                </tr>)  
            })} 
            </tbody>
            </table> 
        </div>
    </>
  );
}

export default App;
