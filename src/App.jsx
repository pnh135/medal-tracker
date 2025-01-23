import { createElement, useState } from "react";
import "./App.css";


function App() {
  const [medals, setMedals] = useState([]);
  const [name, setName] = useState("");
  const [gold, setGold] = useState(0);
  const [sliver, setSliver] = useState(0);
  const [bronze, setBronze] = useState(0);
 
  const addNewMedal = (e) => {
    e.preventDefault();

    if (name==="") {
      alert ("나라 이름을 입력해주세요!")
      return;
    }

    const newMedal = {
      name : name,
      gold: gold,
      sliver: sliver,
      bronze : bronze,
      id : Date.now()
    }; 
    setMedals(
      [
        ...medals,
        newMedal,
      ]
    )
    setName("");
    setGold(0);
    setSliver(0);
    setBronze(0);
  };

  const removeMedal = (filteredId) => {
    const filteredMedal = medals.filter((medal)=> {
      return filteredId !== medal.id ;
    });

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
                  <button>업데이트</button>
                </td>
              </tr>
              </tbody>
            </table>
          </form>
          <div>
            {/* 삼항연산자로 테이블 형성 */}
            {medals.map((medal)=>{
              console.log(medal)
              return (
                <ul key={medal.id}>
                  <li key={medal.id} className="show-medal">
                  <div>{medal.name}</div>
                  <div>{medal.gold}</div>
                  <div>{medal.sliver}</div>
                  <div>{medal.bronze}</div>
                  <div><button onClick={() => removeMedal(medal.id)}>삭제</button></div>
                </li>
                </ul>
              )
            })} 
        </div>
    </>
  );
}

export default App;
