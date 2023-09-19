import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiPhoneCall, FiUser } from "react-icons/fi";
import useTranslation from "next-translate/useTranslation";
//internal import
import LoginModal from "@component/modal/LoginModal";
import { UserContext } from "@context/UserContext";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";

const NavBarTop = () => {
  const { t } = useTranslation();
  const {
    dispatch,
    state: { userInfo },
  } = useContext(UserContext);
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    if (userInfo?.email) {
      router.push("/user/dashboard");
    } else {
      setModalOpen(!modalOpen);
    }
  };

  const handleLogOut = () => {
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("userInfo");
    Cookies.remove("couponInfo");
    router.push("/");
  };

  return (
    <>
      {modalOpen && (
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}

      <div className="hidden lg:block bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="text-gray-700 py-2 font-sans text-xs font-medium border-b flex justify-between items-center">
            <span className="flex items-center">
              <FiPhoneCall className="mr-2" />
              {t("common:Call Us")}
              <a
                href="tel:+012345609"
                className="font-bold text-blue-500 ml-1"
              >
                +01234560352
              </a>
            </span>

            <div className="lg:text-right flex items-center">
              <Link href="/about-us">
                <a className="font-medium hover:text-blue-600">
                  {" "}
                  {t("common:About Us")}
                </a>
              </Link>
              <span className="mx-2">|</span>
              <Link href="/contact-us">
                <a className="font-medium hover:text-blue-600">
                  {" "}
                  {t("common:Contact Us")}
                </a>
              </Link>
              <span className="mx-2">|</span>
              <button
                onClick={handleModal}
                className="font-medium hover:text-blue-600"
              >
                {t("common:My account")}
              </button>
              <span className="mx-2">|</span>

              {userInfo ? (
                <>
                  {" "}
                  <button
                    onClick={handleLogOut}
                    className="flex items-center font-medium hover:text-blue-600"
                  >
                    <span className="mr-1">
                      <FiUser />
                    </span>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <button
                    onClick={() => setModalOpen(!modalOpen)}
                    className="flex items-center font-medium hover:text-blue-600"
                  >
                    <span className="mr-1">
                      <FiUser />
                    </span>
                    {t("common:Login")}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(NavBarTop), { ssr: false });
