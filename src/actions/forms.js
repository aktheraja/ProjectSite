import ADD_FORM from './types';
import axios from 'axios';
//ADD FORM
const add_form=(form)=>dispatch=>{

   const b= JSON.stringify(form)
   axios.post("https://w4xdgnd5sa.execute-api.us-west-2.amazonaws.com/Dev/Employee",b)
       .then(res=>{
           console.log(res)
            dispatch({
                type:ADD_FORM,
                payload:res.data
            })
       }).catch(err=>console.log(err));
}
export default add_form;