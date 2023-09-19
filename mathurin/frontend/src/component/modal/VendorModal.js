import React, { useContext, useState } from 'react';

//internal import
import ApplyForm from '@component/vendor/Apply';
import MainModal from '@component/modal/MainModal';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const VendorModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const Router = useRouter();
    const userInfo = Cookies.get('userInfo')
    const userInfoParse = userInfo && JSON.parse(userInfo);
    const vendorApproval = userInfoParse?.vendorRef.isApproved;
    const vendorId = userInfoParse?.vendorRef.vendor_id;

    const handleOpenModal = () => {
        if (vendorApproval) { // eligible to move to the dashboard
            Router.push('/vendor/dashboard');
            return;
        } else if (!vendorApproval && vendorId) { // pending state
            return;
        }

        // Opens the form modal
        setModalOpen(true);
    };

    const buttonText = vendorApproval ? "Vendor Dashboard" : vendorId ? "Pending" : "Become a Vendor";
    return (
        <>
            <button
                disabled={!vendorApproval && vendorId}
                onClick={handleOpenModal}
                className="font-serif mx-4 py-1 px-3 rounded-md text-sm font-medium bg-blue-600 text-white"
            >{buttonText}</button>

            {/* Modal View */}
            <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <div className="inline-block w-full max-w-lg p-10 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <ApplyForm setModalOpen={setModalOpen} />
                </div>
            </MainModal>
        </>
    );
};

export default React.memo(VendorModal);
