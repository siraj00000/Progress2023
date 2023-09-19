import VendorServices from "@services/VendorServices";
import { notifyError, notifySuccess } from "@utils/toast";
import { updateCookies } from "@utils/updateCookies";
import Cookies from "js-cookie";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useVendorSubmit = (setModalOpen) => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const submitHandler = async ({ shopName, image, address, country, city, phone }) => {
        try {
            setIsLoading(true)
            
            const formData = new FormData();
            formData.append("image", image[0]);
            formData.append("shopName", shopName);
            formData.append("address", address);
            formData.append("country", country);
            formData.append("city", city);
            formData.append("phone", phone);

            const response = await VendorServices.registerVendor(formData)

            if (response.success) {
                updateCookies(response.vendorId, 'userInfo', 'vendorRef', 'vendor_id')
                setIsLoading(false)
                notifySuccess('Congrats, you become a vendor');
                // window.location.href = '/'
                setModalOpen(false)
            }
            
        } catch (error) {
            if (error.response) {
                setIsLoading(false)
                notifyError(error.response.data.error);
            }
        }

    };

    return {
        register,
        handleSubmit,
        setValue,
        errors,
        submitHandler,
        isLoading
    };
};

export default useVendorSubmit;