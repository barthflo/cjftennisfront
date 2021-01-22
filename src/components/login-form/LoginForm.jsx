import {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import AuthService from '../../services/auth.service';
import {DOMAIN_URL} from '../../http';
import './LoginForm.css';

const LoginForm = (props) => {
    const history = useHistory()
    const[inputs, setInputs] = useState({username : '', password : ''});
    const[error, setError] = useState(false);

    const handleChange = (e) => {
        setError(false);
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        AuthService.login(inputs.username, inputs.password)
        .then(res => {
            if(res.status !== 200){
                setError(res.data.errorMessage);
            } else{
                history.push('/admin');
            }
        })
    }
    
    return (
        <div className="LoginForm card d-flex justify-content-center align-items-center p-2">
            <div className="card-header d-flex flex-column align-items-center">
                <figure 
                    style={{width:"75px", height:"75px"}}
                    className="mt-2"
                >
                    <Link to='/'>
                        <img
                            className = "w-100 h-100"
                            src={`${DOMAIN_URL}/upload/logo_cjf_tennis.jpg`} 
                            alt="logo"
                        />
                    </Link>
                </figure>
                <h1 className="text-center">Bienvenue!</h1>
            </div>
            <div className="card-body">
                <form 
                    onSubmit={handleSubmit}
                    className="d-flex flex-column">
                    <label htmlFor="username" className="form-label">Nom</label>
                    <input 
                        type="text" 
                        className="form-control mb-3 font-italic" 
                        id="username"
                        name='username'
                        value={inputs.username}
                        onChange = {handleChange}
                    />
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input 
                        type="password" 
                        className="form-control font-italic" 
                        id="password"
                        name='password'
                        value={inputs.password}
                        onChange={handleChange}
                    />
                    {error ? <small className="text-danger">{error}</small> : <small style={{height:"19px"}}></small>}
                    <button type="submit" className="btn btn-outline-dark mt-2">Se connecter</button>
                </form>
            </div>
            <Link className="font-italic align-self-center mt-1" to='/admin/forgotten-password'><small>Mot de passe oublié?</small></Link>
        </div>
    )
}

export default LoginForm;
