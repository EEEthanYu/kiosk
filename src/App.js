import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, increaseByAmount } from "./Reducers/counter";
import { rewrite } from "./Reducers/namer";

const App = () => {

  const count = useSelector(state => state.counter.value); // store에 명시한 이름
  const name = useSelector(state => state.namer.value);
  const dispatch = useDispatch();

  const increase = (amount=1) => {
    if(amount===1){
      dispatch(increment()); // 슬라이스 안에서 명시해준 action을 가져다가 쓰자
    }else {
      dispatch(increaseByAmount(amount)); // action을 가져다가 쓰는데, argument 전달 시 payload 로 자동으로 매핑
    }

  }
  const decrease = () => {
    dispatch(decrement());
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={()=>increase()}>+</button>
      <button onClick={()=>decrease()}>-</button>
      <button onClick={()=>increase(5)}>+5</button>
      <div>{name}</div>
      <input type="text" onChange={(e)=>dispatch(rewrite(e.currentTarget.value))}></input>
    </>
  );
}

export default App;
