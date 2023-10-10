import React, { useState } from "react";
import './index.css'

function App(){
    //state
    const [poids, setPoids] = useState(0);
    const [taille, setTaille] = useState(0);
    const [imc, setImc] = useState(0);
    const [msg, setMsg] = useState('');
    const [imgSrc, setImgSrc] = useState('');

    //Calcul imc
    let CalculImc = (e) => {
            setTaille(e.target.value)
            let imc = (poids / (taille*taille*0.01))
            setImc(imc.toFixed(1))
            let imgSrc;

            //Message en fonction du calcul de l'IMC et affichage image
            if (imc <= 18.4){
               setMsg('Vous êtes maigre')
               setImgSrc(require('/home/laureoby/Bureau/ReactProjects/BMIProject/src/assets/search.png'))
            }else if(imc >= 18.5 && imc <= 24.9){
               setMsg('Votre corpulence est normale')
               setImgSrc(require('/home/laureoby/Bureau/ReactProjects/BMIProject/src/assets/party.png'))
            }else if(imc >= 25.0 && imc <= 39.9){
               setMsg('Vous êtes en surpoids')
               setImgSrc(require('/home/laureoby/Bureau/ReactProjects/BMIProject/src/assets/trouble.png'))
            }else{
               setMsg('Prenez des précautions, vous êtes obèse!!')
               setImgSrc(require('/home/laureoby/Bureau/ReactProjects/BMIProject/src/assets/calendar.png'))
            }
    }

    return(
        <div className="app">
            <div className="container text-center mx-auto">
                <h2 className="mt-4 pt-4">Calculateur IMC</h2>
                <form>
                    <div>
                        <label>Poids (en kg)</label>
                        <input type="text" value={poids} onChange={(e) => setPoids(e.target.value)}/>
                    </div>
                    <div>
                        <label>Taille (en cm)</label>
                        <input type="text" value={taille} onChange={CalculImc}/>
                    </div>
                </form>

                <div className="mt-4">
                    <h2>Votre IMC est {imc}</h2>
                    <h6>{msg}</h6>
                </div>

                <div className="img-fluid">
                    <img src={imgSrc} alt='' />
                </div>
            </div>
        </div>
    );
}

export default App;