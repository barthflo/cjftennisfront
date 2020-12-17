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
        .then(res => res === AuthService.getUser().accessToken ? history.push('/admin'): setError(true))
    }
    return (
        <div className="LoginForm card d-flex justify-content-center align-items-center">
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
                <h1>Bienvenue!</h1>
            </div>
            <div className="card-body">
            <form 
                onSubmit={handleSubmit}
                className="d-flex flex-column p-2">
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
                    className="form-control mb-3 font-italic" 
                    id="password"
                    name='password'
                    value={inputs.password}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-outline-dark">Se connecter</button>
                {error && <small className="text-danger">Wrong credentials</small>}
            </form>

            </div>
            
        </div>
    )
}

export default LoginForm;
