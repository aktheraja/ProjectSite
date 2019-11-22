import ADD_FORM from './types';
import axios from 'axios';
//ADD FORM
const add_form=(form)=>dispatch=>{
   axios.post(`http://127.0.0.1:8000/api/lead/`,form)
       .then(res=>{
            dispatch({
                type:ADD_FORM,
                payload:res.data
            })
       }).catch(err=>console.log(err));
}
export default add_form;