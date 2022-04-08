import Text from "../../Components/Text";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../../Reducers/test/Text1";
import { useEffect } from "react";

const Text1 = ({title, placeholder, callback}) => {

    const name = useSelector(state => state.text1.value);
    const dispatch = useDispatch();

    console.log(change("wow"));

    const handleChange = (value) => {
        dispatch(change(value));
        if(callback) callback();
    }
    useEffect(()=>{
        console.log(name);
    })

    return(
        <Text title={title} placeholder={placeholder} callback={callback} onClick={(value)=>{handleChange(value)}}/>
    )
}

export default Text1;