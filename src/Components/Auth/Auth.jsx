import { useState, useEffect, useImperativeHandle } from "react";
import React from "react";


function Auth({onSubmit, ref}) {

    const [formDetails,setFormDetails] = useState({email: '',password: '',username: '',isLoading: false});

    function updateEmail(updatedEmail){
        setFormDetails({...formDetails,email: updatedEmail});
    }

    function updatedPassword(updatedPassword){
        setFormDetails({...formDetails,password: updatedPassword});
    }

    function updatedUsername(updatedUsername) {
        setFormDetails({...formDetails,username: updatedUsername});
    }

    function onFormSubmit() {
        setFormDetails({...formDetails,isLoading:true});
        onSubmit(formDetails,resetForm);
    }

    function resetForm() {
        setFormDetails({email: '',password: '',username: '',isLoading:false});
    }

    useImperativeHandle(ref,()=>{
        return {
            resetFormData: resetForm
        }
    },[]);

    useEffect(()=>{
        setFormDetails({email:'',password:'',username:'',isLoading:false});
    },[])

    return (
        <>
            <div className="input-group">
                <input onChange={(e)=>updatedUsername(e.target.value)} type="text" className="form-control" placeholder="Username" id="loginUsername"/>
            </div>
            <div className="input-group">
                <input onChange={(e)=>updateEmail(e.target.value)} type="email" className="form-control" placeholder="Email" id="Email"/>    
            </div>
            <div className="input-group">
                <input onChange={(e)=>updatedPassword(e.target.value)} type="password" className="form-control" placeholder="Password" id="loginPassword"/>
            </div>
            <div className="input-group">
            {/* <button onClick={onFormSubmit} className="form-control btn btn-primary">Submit</button> */}
            <button onClick={onFormSubmit} className="form-control btn btn-primary" type="button" disabled={formDetails.isLoading}>
            {(formDetails.isLoading) && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                {(formDetails.isLoading) ? 'Loading...' : 'Submit'}
            </button>
        </div>
        </>
    )
}
export default React.forwardRef(Auth);