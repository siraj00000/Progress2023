import React from 'react';
import { BiSolidFlag, BiSolidShoppingBag, BiSolidPhone } from 'react-icons/bi';
import { PiAddressBookFill } from 'react-icons/pi';
import { MdLocationCity } from 'react-icons/md';

// Internal Imports
import InputArea from '@component/form/InputArea';
import useVendorSubmit from '@hooks/useVendorSubmit';
import Error from "@component/form/Error";
import FileUploadInput from '@component/form/InputFileUpload';

const ApplyToBecomeVendor = ({ setModalOpen }) => {
    const { register, errors, handleSubmit, submitHandler, isLoading } = useVendorSubmit(setModalOpen);
    return (
        <div>
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold font-serif">Become A Vendor</h2>
                <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
                    Open your shop add details below
                </p>
            </div>

            {/* Form */}
            <form
                className="flex flex-col justify-center"
                onSubmit={handleSubmit(submitHandler)}
                encType="multipart/form-data"
            >
                <div className="grid grid-cols-1 gap-5">

                    <div className="form-group">
                        <FileUploadInput
                            label="Shop Image"
                            name="image"
                            register={register}
                        />
                        <Error errorName={errors.image} /> {/* Update the errorName prop */}
                    </div>


                    <div className="form-group">
                        <InputArea
                            register={register}
                            label="Shop Name"
                            name="shopName"
                            type="text"
                            placeholder="..."
                            Icon={BiSolidShoppingBag}
                        />
                        <Error errorName={errors.name} />
                    </div>

                    <div className="form-group">
                        <InputArea
                            register={register}
                            label="Address"
                            name="address"
                            type="text"
                            placeholder="..."
                            Icon={PiAddressBookFill}
                        />
                        <Error errorName={errors.address} />
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className="form-group">
                            <InputArea
                                register={register}
                                label="Country"
                                name="country"
                                type="text"
                                placeholder="..."
                                Icon={BiSolidFlag}
                            />
                            <Error errorName={errors.country} />
                        </div>

                        <div className="form-group">
                            <InputArea
                                register={register}
                                label="City"
                                name="city"
                                type="text"
                                placeholder="..."
                                Icon={MdLocationCity}
                            />
                            <Error errorName={errors.city} />
                        </div>
                    </div>

                    <div className="form-group">
                        <InputArea
                            register={register}
                            label="Phone"
                            name="phone"
                            type="tel"
                            placeholder="..."
                            Icon={BiSolidPhone}
                        />
                        <Error errorName={errors.phone} />
                    </div>
                </div>

                {/* Spacer */}
                <div className='my-5' />

                {isLoading ? (
                    <button
                        disabled={isLoading}
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
                        disabled={isLoading}
                        type="submit"
                        className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-600 transition-all focus:outline-none my-1"
                    >
                        Apply
                    </button>
                )}
            </form>
        </div>
    );
};

export default ApplyToBecomeVendor;
