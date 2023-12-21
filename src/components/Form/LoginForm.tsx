import userIcon from '../../assets/formIcon/user.svg'
import lockIcon from '../../assets/formIcon/lock.svg'
import checkIcon from '../../assets/formIcon/check.svg'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    return (
        <form className="flex flex-col justify-center items-center space-y-4 w-full sm:w-1/2 md:w-6/12 lg:w-4/12 xl:w-3/12">
            <div className="flex items-center bg-johnjud-light-gray rounded-lg w-full py-2.5 px-2.5 focus: outline-none">
                <img src={userIcon} alt="Icon" className="mx-2" />
                <input
                    type="text"
                    placeholder="ชื่อผู้ใช้"
                    className="bg-johnjud-light-gray text-johnjud-gray font-semibold rounded-lg w-full focus: outline-none"
                />
            </div>
            <div className="flex items-center bg-johnjud-light-gray rounded-lg w-full py-2.5 px-2.5 focus: outline-none">
                <img src={lockIcon} alt="Icon" className="mx-2" />
                <input
                    type="password"
                    placeholder="รหัสผ่าน"
                    className="bg-johnjud-light-gray text-johnjud-gray font-semibold rounded-lg w-full focus: outline-none"
                />
            </div>
            <div className='flex justify-between w-full'>
                   <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" id="custom-checkbox"/>
                        <div className="w-5 h-5 flex items-center justify-center bg-johnjud-light-gray rounded-sm peer-checked:hidden"/>
                        <div className="hidden w-5 h-5 bg-primary rounded-sm peer-checked:flex justify-center items-center">
                            <img src={checkIcon} alt="Icon" className="w-4 h-4"/>
                        </div>

                        <span className="ml-2 text-johnjud-gray">จดจำฉัน</span>
                    </label>
                <Link to="/forgot-password" className="text-johnjud-gray text-base font-medium underline">ลืมรหัสผ่าน?</Link>
            </div>
        </form>
    )
}

export default LoginForm