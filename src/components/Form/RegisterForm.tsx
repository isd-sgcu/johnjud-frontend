import userIcon from '../../assets/formIcon/user.svg'
import lockIcon from '../../assets/formIcon/lock.svg'

const RegisterForm = () => {
  return (
    <form className="flex flex-col justify-center items-center space-y-4 w-full sm:w-1/2 md:w-6/12 lg:w-4/12 xl:w-3/12">
      <div className="flex items-center bg-johnjud-light-gray rounded-lg w-full py-2.5 px-2.5 focus: outline-none">
        <img src={userIcon} alt="Icon" className="mx-2" /> 
        <input 
          type="text" 
          placeholder="ชื่อ" 
          className="bg-johnjud-light-gray text-johnjud-gray font-semibold rounded-lg w-full focus: outline-none"
        />
      </div>
      <div className="flex items-center bg-johnjud-light-gray rounded-lg w-full py-2.5 px-2.5 focus: outline-none">
        <img src={userIcon} alt="Icon" className="mx-2" /> 
        <input 
          type="text" 
          placeholder="นามสกุล" 
          className="bg-johnjud-light-gray text-johnjud-gray font-semibold rounded-lg w-full focus: outline-none"
        />
      </div>
      <div className="flex items-center bg-johnjud-light-gray rounded-lg w-full py-2.5 px-2.5 focus: outline-none">
        <img src={userIcon} alt="Icon" className="mx-2" /> 
        <input 
          type="email" 
          placeholder="อีเมล" 
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
    </form>
  )
}

export default RegisterForm