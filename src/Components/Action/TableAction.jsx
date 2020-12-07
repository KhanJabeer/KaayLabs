import axios from "axios";
import {GET_TIME_TABLE} from "./TableConstants";




export const getTimeTable = () => async dispatch => {
    try {
        const res = await axios.get("http://timeapi.kaaylabs.com/api/v1/project_view/")

        console.log("sdfkjsahdfljksadf",res.data.data)

        dispatch({
            type:GET_TIME_TABLE,
            payload:res.data.data
        })

    } catch (err) {
            console.error(err)
    }
}