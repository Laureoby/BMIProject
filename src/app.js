import React, { useState } from "react";
import './index.css'

function App(){
    //state
    const [mail, setMail] = useState('')
    const [msg, setMsg] = useState('')

    //Calcul imc
    let Validation = (e) => {
        setMail(e.target.value)
        let emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
        emailReg.test(mail) ? setMsg(<p className="text-primary">Awesome!!! Your address email is correct!</p>) : setMsg(<p className="text-danger">Please enter a valid address email</p>)
    }

    return(
        <div className="app">
            <div className="container text-center mx-auto">
                <h2 className="mt-4 pt-4 mb-4 pb-4">Form Validation</h2>
                <form>
                    <div>
                        <label>Email Address</label>
                        <input type="text" value={mail} onChange={Validation} placeholder="example@gmail.com"/>
                    </div>
                </form>

                <div className="mt-4">
                    <p>{msg}</p>
                </div>
            </div>
        </div>
    );
}

export default App;