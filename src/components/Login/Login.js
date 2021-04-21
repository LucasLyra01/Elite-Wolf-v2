import React, { useState } from 'react';

import './Login.css';

export function Login() {

    const [isActive, setIsActive] = useState(false); 
    const [value, setValue] = useState('');

    const [isActive2, setIsActive2] = useState(false); 
    const [value2, setValue2] = useState('');

    function handleTextChange(text) {
        setValue(text);

        if (text !== '') {
        setIsActive(true);
        } else {
        setIsActive(false);
        }
    }

    function handlePasswordChange(text) {
        setValue2(text);

        if (text !=='') {
        setIsActive2(true);
        } else {
        setIsActive2(false);
        }
    }


    return(

        <div className='container'>
            <div className='row container-principal'>

            
                <div className='col-sm area-logo'>
                    <img src='/assets/Logo.svg'/>
                </div>



                <div className='col-sm container-conteudo'>

                    <h1>Bem Vindo(a)</h1>
                    <form>
                        <div id='float-label'>
                            <input 
                                type='email'
                                value={value}
                                onChange={(e) => handleTextChange(e.target.value)}
                            />

                            <label 
                                className={ isActive ? "Active" : "" } 
                                htmlFor="email">
                                    Email
                            </label>
                        </div>

                        <div id='float-label'>
                            <input 
                                type='password'
                                value={value2}
                                onChange={(e) => handlePasswordChange(e.target.value)}
                            />

                            <label 
                                className={ isActive2 ? "Active" : "" } 
                                htmlFor="password">
                                    Senha
                            </label>
                        </div>

                        <br/>

                        <div className='checkbox'>
                            <input type='checkbox' />
                            <label for='senha'>Lembrar senha</label>
                        </div>

                        <br/>

                        <button>Entrar</button>

                        <br/>

                        <a href="https://www.google.com/">Esqueceu sua senha?</a>

                        <p>
                            Ainda não possui conta?{" "}
                            <a href="https://www.google.com/">Cadastre-se</a>
                        </p> 

                    </form>

                </div>

            </div>


        </div>

        // <img src='/assets/Logo.svg'/>

    );

}