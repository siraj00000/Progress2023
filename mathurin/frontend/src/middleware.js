import Cookies from "js-cookie";
import { NextResponse } from "next/server";

export function middleware(request) {
    // Get the vendor cookie token from the request.
    let vendorCookieToken = Cookies.get('_vendorToken');

    // If the vendor cookie token is not redirect the user to the vendor login page.
    if (vendorCookieToken) {
        return NextResponse.redirect(new URL("/", request.url));
    }
}
export const config = {
    matcher: "/vendor/:path*",//The matcher specifies the URL patterns that this middleware will be applied to.
};