import { Link } from "../components/Link";


const ForgotPasswordPage = () => {
    return(
        <div className="container">
            <h1>La macaste manito, no vas a poder entrar</h1>

            <div>
                <Link to='/login'>
                <button>Vuelve al Login</button>
                </Link>
            </div>
        </div>
    )
}

export default ForgotPasswordPage;