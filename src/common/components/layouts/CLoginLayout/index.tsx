import React, { useState } from "react";
import { login } from "../../../../api/login";
import CAlerts from "../../controls/CAlert";
import { useForm } from "react-hook-form";
import CFocusOutlineInput from "../../controls/CInputOutline";

const LoginLayout: React.FC = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [alert, setAlert] = useState<{
    severity: "success" | "info" | "warning" | "error";
    message: string;
  } | null>(null);

  const email = watch("email");
  const password = watch("password");

  const handleLogin = async () => {
    if (!email || !password) {
      setAlert({
        severity: "error",
        message: "Vui lòng nhập đầy đủ thông tin.",
      });
      return;
    }

    try {
      // Call API here
      const response = await login(email, password);

      if (response.access_token) {
        console.log("Login successfully");
        localStorage.setItem("access_token", response.access_token);
        setAlert({ severity: "success", message: "Đăng nhập thành công" });
        window.location.href = "/analytics";
      } else {
        console.error("Failed to login");
        setAlert({ severity: "error", message: "Sai tài khoản hoặc mật khẩu" });
      }

      // Redirect to another page
    } catch (err) {
      setAlert({ severity: "error", message: "Failed to login" });
      console.error("Error during login: ", err);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center bg-gray-100">
      <div className="mt-48">
        <div className="max-w-screen-lg mx-auto p-6 bg-white shadow-lg rounded-lg relative">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          {alert && (
            <div className="fixed bottom-4 right-4 z-50">
              <CAlerts severity={alert.severity} message={alert.message} />
            </div>
          )}
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="mb-4">
              <CFocusOutlineInput
                control={control}
                id="email"
                name="email"
                css="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Nhập tài khoản"
              />
            </div>
            <div className="mb-4">
              <CFocusOutlineInput
                control={control}
                id="password"
                name="password"
                css="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Nhập mật khẩu"
                type="password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
