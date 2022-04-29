import API from "./API";

const CertService = {

    getForm : async function() {
        try {
            const {data} = await API.get("api/IF_MZ_02_006");
            console.log(data);
            return data;
        } catch {
            console.log("GET fORM FAILED"); 
            return false
        }
    }

}

export default CertService;