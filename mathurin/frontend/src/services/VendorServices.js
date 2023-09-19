import requests from "./httpServices";

const VendorServices = {
    registerVendor: async (body) => {
        return new Promise((resolve, reject) => {
            requests.post('/vendor/register', body)
                .then(response => {
                    resolve(response); // Resolve the promise with the response
                })
                .catch(error => {
                    reject(error); // Reject the promise with the error
                });
        });
    }
};

export default VendorServices;