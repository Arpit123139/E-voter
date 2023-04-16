import { UPDATE_SLOT_FAIL,
    UPDATE_SLOT_REQUEST,
    UPDATE_SLOT_RESET,
    UPDATE_SLOT_SUCCESS,
    CLEAR_ERRORS,
} from "../constants/slotsConstant";
import axios from "axios";

export const updateSlotDetails = (areaName, id, voterId) => async (dispatch) => {
    try {
        dispatch({type: UPDATE_SLOT_REQUEST});

        const config = { headers: {"Content-Type" : "application/json"}};

        const {data} = await axios.put(`/api/slot/alotSlot/${areaName}/${id}/${voterId}`, config);

        dispatch({type: UPDATE_SLOT_SUCCESS, payload: data.success});
        
    } catch (error) {
        dispatch({type: UPDATE_SLOT_FAIL, payload: error.response.data.message})
    }
}