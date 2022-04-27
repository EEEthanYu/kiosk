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
        <Text title={title} placeholder={placeholder} callback={callback} handleChange={(value)=>{handleChange(value)}} value={name}/>
    )
}

export default Text1;