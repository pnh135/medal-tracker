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
      alert("나라 이름을 입력해주세요!");
      return;
    }

    // 새로운 메달 배열 추가
    const newMedal = {
      name: name,
      gold: gold,
      sliver: sliver,
      bronze: bronze,
      id: Date.now(),
    };

    // 새 메달을 state에 변경
    setMedals([...medals, newMedal]);

    // form 제출 후 초기값으로 변경
    setName("");
    setGold(0);
    setSliver(0);
    setBronze(0);
  };

  // 메달을 업데이트하는 함수
  // 기존에 있던 메달에서 일치하는 국가의 인덱스 가져오기 (위치를 바꾸면 안됨)
  //  새로운 값을 받아서 교체
  // 변경 값을 기존의 위치에 넣어준다

  // find로 일치할 때 map으로 새 배열 만들기 
  const updateMedal = (e) => {
    const findingName = medals.find((medal) => {
      return e === medal.name})
    if (findingName !== false) {
      const findingMedal = {
        name: name,
        gold: gold,
        sliver: sliver,
        bronze: bronze,
        id: medals.id,
      }

      return setMedals([...medals,findingMedal])
     
    } else {
      alert ("입력 오류")
      return;
    }
  }
      

  // 메달을 제거하는 함수
  const removeMedal = (filteredId) => {
    const filteredMedal = medals.filter((medal) => {
      return filteredId !== medal.id;
    });
    // filter로 선택한 id값의 메달을 제외하고 state에 변경
    setMedals(filteredMedal);
  };

  return (
    <>
      <h1>2024 파리 올림픽</h1>
      <form>
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
                <input
                  type="text"
                  value={name}
                  placeholder="국가 입력"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  value={gold}
                  onChange={(e) => setGold(e.target.value)}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  value={sliver}
                  onChange={(e) => setSliver(e.target.value)}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  value={bronze}
                  onChange={(e) => setBronze(e.target.value)}
                ></input>
              </td>
              <td>
                <button type="submit" onClick={addNewMedal}>국가 추가</button>
              </td>
              <td>
                <button type="button" onClick={updateMedal}>업데이트</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div>
        {/* 삼항연산자로 테이블 형성 */}
        <table className="container">
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
            {medals.map((medal) => {
              return (
                <tr key={medal.id}>
                  <td>{medal.name}</td>
                  <td>{medal.gold}</td>
                  <td>{medal.sliver}</td>
                  <td>{medal.bronze}</td>
                  <td>
                    <button
                      onClick={() => removeMedal(medal.id)}
                      className="delete-btn"
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
