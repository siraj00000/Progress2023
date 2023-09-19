import Image from 'next/image';
import React, { useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

const FileUploadInput = ({ label, name, register }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div className="mb-4 flex flex-col items-center justify-center">
            <div className="mt-1 relative">
                <label htmlFor={name} className="">
                    {selectedFile ? (
                        <div className=''>
                            <Image
                                width={100}
                                height={100}
                                src={URL.createObjectURL(selectedFile)}
                                alt="Uploaded"
                                className="w-auto h-auto object-cover rounded p-0 block mx-auto"
                            />
                        </div>
                    ) : (
                        <div className="square-image-upload cursor-pointer">
                            <FiUploadCloud className="text-gray-500 w-10 h-10" />
                        </div>
                    )}
                </label>
                <input
                    type="file"
                    id={name}
                    className="sr-only"
                    {...register(name)}
                    onChange={handleFileChange}
                />
            </div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
        </div>
    );
};

export default FileUploadInput;
