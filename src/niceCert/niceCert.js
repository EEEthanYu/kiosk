import { useState } from "react";
import styled from "styled-components";
import BootBtn from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import CertService from "./service";

const Button = styled(BootBtn)`
    width : 80vw;
    &:hover {
        transform : translateY(10px);
        transition : all 0.5s;
    }
`

const PassCert = () => {

    const [encData, setEncData] = useState("_init_");
    let passPopup;
    const handleCert = async () => {
        const result = await CertService.getForm();
        if(result) {
            setEncData(result);
            console.log("value : " + result);
            startPop();
        }
    }
    const startPop = () => {
        passPopup = window.open('', 'popupChk', 'width=500, height=500, target=_parent, scrollbars=no, status=no, menubar=no');
        document.form_chk.action = "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
        document.form_chk.target = "popupChk";
        document.form_chk.submit();

        closePop(passPopup);
    }
    const closePop = () => {
        if (passPopup.closed) {
            if (localStorage.getItem('niceData')) {
                const infoNicePass = JSON.parse(localStorage.getItem('niceData'));
                alert("인증 성공!!");
                console.log(infoNicePass);
                localStorage.clear();
            }
            return
        }
        setTimeout(closePop, 1500);
    }

    return (
        <>
            <form name="form_chk" method="post">
                <input type="hidden" name="m" value="checkplusService"/>
                <input type="hidden" id="EncData" name="EncodeData" value={encData}/>
            </form>
            <Button variant="primary" size="lg" onClick={()=>handleCert()}>
                PASS 본인 인증
            </Button>
        </>
    )
}

export default PassCert;