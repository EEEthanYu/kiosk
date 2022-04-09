import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { change } from "./docu2slice";

import Text from "../components/Text";

const Docu2 = () => {

    const name = useSelector(state=>state.changer.name);
    const phone = useSelector(state=>state.changer.phone);
    const dispatch = useDispatch();

    const handleName = (value) => {
        dispatch(change("name",value));
    } 
    const handlePhone = (value) => {
        dispatch(change("phone",value));
    }

    useEffect(()=>{
        console.log(name + "/" + phone);
    })

    return (
        <>
            <Text title={"성명"} placeholder={"홍길동"} onClick={(v)=>handleName(v)} />
            <Text title={"핸드폰"} placeholder={"010-1234-5678"} onClick={(v)=>handlePhone(v)} />
        </>
    )
}

export default Docu2;