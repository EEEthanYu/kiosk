import Text from "../../Components/Text";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../../Reducers/test/Text2";
import Formatter from "../../Utils/Formatter";

const Text2 = ({title, placeholder, callback}) => {

    const text = useSelector(state => state.text2.value);
    const dispatch = useDispatch();

    const handleChange = (value) => {
        dispatch(change(Formatter.rrn(value)));
        if(callback) callback();
    }

    return(
        <Text title={title} placeholder={placeholder} callback={callback} onClick={(value)=>{handleChange(value)}}></Text>
    )
}

export default Text2;