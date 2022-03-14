import {useNavigate} from "react-router-dom";
export default () => {
    const navigate = useNavigate();
    return (

        <div className='contain_not_found'>
            <div className='flex flex-col justify-center items-center bg-blue-50/50 p-10 rounded-lg backdrop-blur lg:w-1/2'>
            <h1 className='h1_not_found'>¡Upsss!</h1>
            <h2 className='h2_not_found'>Not Found</h2>
            <h3 className='h3_not_found'>404</h3>
            <button onClick={()=>navigate('/')}className='button_not_found'>Home</button>
            </div>
        </div>
    )
}
