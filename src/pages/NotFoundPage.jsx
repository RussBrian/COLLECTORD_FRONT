import { Link } from "../components/Link";

const NotFoundPage = () => {
    return (
        <>
            <div>
                <h1>This is NOT fine</h1>
                <img src='https://midu.dev/images/this-is-fine-404.gif' alt='Gif del perro de This is Fine quemándose vivo'/>
            </div>
            <Link className='text text-slate-950' to='/login'>Volver al Login</Link>
        </>
    )
};

export default NotFoundPage;