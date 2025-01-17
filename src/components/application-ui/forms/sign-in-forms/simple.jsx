import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Perbaiki 'Navigate'
import ErrorNotif from "../../feedback/alerts/with_list"
import { getTime } from "date-fns";

export default function Example() {

  const [isLogged, setIsLogged] = useState()
  const [accountData, setAccountData] = useState({
    email : "", 
    password : ""
  })
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("")

  const handleForm = (event) => {
    const {name, value} = event.target

    setAccountData((prev) => ({
      ...prev, 
      [name]: value, 
  }))

  console.log(accountData);  
  }

  useEffect(() => {
  const isLogged = localStorage.getItem("isLogged") === "true"; // Pastikan kamu cek string "true"
  if (isLogged) {
    navigate("/dashboard"); // Redirect ke dashboard jika sudah login
  }
}, []); // Hanya dijalankan sekali saat komponen di-mount


  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = values => {
    if(values.email == "dompetagnia@gmail.com" && values.password == "Dompetagnia123!" ){
      localStorage.setItem('isLogged', true)
      navigate("/dashboard")
    }else {
      setErrorMessage("Email atau password salah! Silakan masukan ulang")
    }

    return;
  }

  

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://www.idrisiyyah.or.id/static/media/idrisyyah-logo.a9487fd460335a0e3be3139de9180a49.svg"
            className="mx-auto h-16 w-auto"
          />
          <div className="flex flex-col gap">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Selamat Datang
            </h2>
            <h2 className=" text-center text-base font-medium leading-9 tracking-tight text-gray-600">
              Silakan masukan email dan password yang valid!
            </h2>
          </div>
        </div>
        
        {errorMessage.length ? (
          <ErrorNotif message={errorMessage}/>
        ) : ""}
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
                <span className="text-red-600"> *</span>
              </label>
              <div className="mt-2">
                <input 
                  onChange={handleForm}
                  {...register("email", {
                    required: "Wajib diisi!",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email tidak valid!"
                    }
                  })}
                  id="email"
                  name="email"
                  type="text"
                  // required
                  autoComplete="email"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className="mt-1 text-sm text-red-500">
                  {errors.email && errors.email.message}
                </p>
                <p className="mt-1 text-sm text-red-500">
                  {isLogged}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                  <span className="text-red-600"> *</span>
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Lupa Password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  onChange={handleForm}
                  {...register("password", {
                    required: "Wajib Diisi!",
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: "Password harus diawali dengan huruf kapital dan terdapat angka, dan special karakter"
                    }
                  })}
                  
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block   px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className="mt-1 text-sm text-red-500">
                 {errors.password && errors.password.message}
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p> */}
        </div>
      </div>
    </>
  )
}
