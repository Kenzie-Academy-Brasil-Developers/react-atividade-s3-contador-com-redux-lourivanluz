import { useDispatch, useSelector } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/count/action";
import { DivStyled } from "./style";

const Display = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.count);
  return (
    <DivStyled>
      <p>{`Number: ${number}`}</p>
      <button onClick={() => dispatch(addNumber(1))}>add</button>
      <button onClick={() => dispatch(subNumber(1))}>sub</button>
    </DivStyled>
  );
};

export default Display;
