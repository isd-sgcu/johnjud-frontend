import lockIcon from "../../assets/formIcon/lock.svg";
import userIcon from "../../assets/formIcon/user.svg";

const RegisterForm = () => {
  return (
    <form className="flex w-full flex-col items-center justify-center space-y-4 sm:w-1/2 md:w-6/12 lg:w-4/12 xl:w-3/12">
      <div className="focus: flex w-full items-center rounded-lg bg-johnjud-light-gray px-2.5 py-2.5 outline-none">
        <img src={userIcon} alt="Icon" className="mx-2" />
        <input
          type="text"
          placeholder="ชื่อ"
          className="focus: w-full rounded-lg bg-johnjud-light-gray font-semibold text-johnjud-gray outline-none"
        />
      </div>
      <div className="focus: flex w-full items-center rounded-lg bg-johnjud-light-gray px-2.5 py-2.5 outline-none">
        <img src={userIcon} alt="Icon" className="mx-2" />
        <input
          type="text"
          placeholder="นามสกุล"
          className="focus: w-full rounded-lg bg-johnjud-light-gray font-semibold text-johnjud-gray outline-none"
        />
      </div>
      <div className="focus: flex w-full items-center rounded-lg bg-johnjud-light-gray px-2.5 py-2.5 outline-none">
        <img src={userIcon} alt="Icon" className="mx-2" />
        <input
          type="email"
          placeholder="อีเมล"
          className="focus: w-full rounded-lg bg-johnjud-light-gray font-semibold text-johnjud-gray outline-none"
        />
      </div>
      <div className="focus: flex w-full items-center rounded-lg bg-johnjud-light-gray px-2.5 py-2.5 outline-none">
        <img src={lockIcon} alt="Icon" className="mx-2" />
        <input
          type="password"
          placeholder="รหัสผ่าน"
          className="focus: w-full rounded-lg bg-johnjud-light-gray font-semibold text-johnjud-gray outline-none"
        />
      </div>
    </form>
  );
};

export default RegisterForm;
