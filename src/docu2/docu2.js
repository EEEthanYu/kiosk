import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { change } from "./docu2slice";

import Text from "../components/Text";

const Docu2 = () => {

    const name = useSelector(state=>state.changer.name);
    const phone = useSelector(state=>state.changer.phone);
    const dispatch = useDispatch();

    const handleName = (value) => {
        if(value === -1){
            return dispatch(change("name", name.substring(0, name.length-1)));
        }else if(value === 0){
            return dispatch(change("name", ""));
        }
        dispatch(change("name", name + value));
    } 
    const handlePhone = (value) => {
        if(value === -1){
            return dispatch(change("phone", phone.substring(0, phone.length-1)));
        }else if(value === 0){
            return dispatch(change("name", ""));
        }
        dispatch(change("phone", phone + value));
    }

    return (
        <>
            <Text title={"성명"} placeholder={"홍길동"} handleChange={(v)=>handleName(v)} value={name} padType={"korean"}/>
            <Text title={"핸드폰"} placeholder={"010-1234-5678"} handleChange={(v)=>handlePhone(v)} value={phone} padType={"number"}/>
        </>
    )
}

export default Docu2;