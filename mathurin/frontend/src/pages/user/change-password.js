import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

//internal import
import Error from "@component/form/Error";
import Dashboard from "@pages/user/dashboard";
import InputArea from "@component/form/InputArea";
import CustomerServices from "@services/CustomerServices";
import { notifyError, notifySuccess } from "@utils/toast";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = ({ email, currentPassword, newPassword }) => {
    // notifySuccess("This Feature is disabled for demo!");
    // return;
    setLoading(true);
    CustomerServices.changePassword({ email, currentPassword, newPassword })
      .then((res) => {
        notifySuccess(res.message);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        notifyError(err ? err.response.data.message : err.message);
      });
  };

  useEffect(() => {
    if (Cookies.get("userInfo")) {
      const user = JSON.parse(Cookies.get("userInfo"));
      setValue("email", user.email);
    }
  });

  return (
    <Dashboard
      title="Change-Password"
      description="This is change-password page"
    >
      <h2 className="text-xl font-serif font-semibold mb-5">Change Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-2">
            <div className="lg:mt-6 bg-white">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6">
                  <InputArea
                    register={register}
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                  />
                  <Error errorName={errors.email} />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <InputArea
                    register={register}
                    label="Current Password"
                    name="currentPassword"
                    type="password"
                    placeholder="Your Current Password"
                  />
                  <Error errorName={errors.currentPassword} />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <InputArea
                    register={register}
                    label="New Password"
                    name="newPassword"
                    type="password"
                    placeholder="Your New Password"
                  />
                  <Error errorName={errors.newPassword} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-right">
          {loading ? (
            <button
              disabled={loading}
              type="submit"
              className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-blue-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-blue-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
            >
              <img
                src="/loader/spinner.gif"
                alt="Loading"
                width={20}
                height={10}
              />
              <span className="font-serif ml-2 font-light">Processing</span>
            </button>
          ) : (
            <button
              type="submit"
              className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-blue-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-blue-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
            >
              Change Password
            </button>
          )}
        </div>
      </form>
    </Dashboard>
  );
};

export default ChangePassword;
