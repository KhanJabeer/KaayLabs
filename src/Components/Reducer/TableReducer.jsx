/* eslint-disable import/no-anonymous-default-export */
import {GET_TIME_TABLE,FILTER_TABLE} from '../Action/TableConstants'

const initialState = {
    tabelData:[],
    cloneData:[],
    loading:true
}

export default function(state=initialState,action) {
    const {type,payload} = action;
    switch(type) {
        case GET_TIME_TABLE:
            return {tabelData:payload,cloneData:payload,loading:false};
        case FILTER_TABLE:
            const filteredValues = state.cloneData.filter(data => data.status === payload)
            console.log("filter",state)
            return {
                ...state,
                tabelData:filteredValues
            };
        default:
            return state    
    }
}