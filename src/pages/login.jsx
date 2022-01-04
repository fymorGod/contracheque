import { useNavigate } from 'react-router';
import '../style/login.css';

export function Login() {
    const navigate = useNavigate();

    function handleLogin(){
        navigate('/home')
    }

    return (
        <div className="box-login">
            <div className="box-form">
                <h4>Mirante | Contra Cheque</h4>
                <form className="content-form">
                    <div className="form-group">
                        <input className="form-control" type="text" autoComplete='off' placeholder='Matricula' id='matricula' required/>
                        <label htmlFor="matricula" className="form-label">Matrícula</label>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" autoComplete='off' placeholder='Senha' id='senha' required/>
                        <label htmlFor="senha" className="form-label">Senha</label>
                    </div>
                    <button onClick={handleLogin} className='btn-login'>Entrar</button>
                </form>
            </div>
        </div>
    )
}