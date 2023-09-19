import React from 'react';
import Link from 'next/link';
import { FiGrid, FiSend, FiSlack } from 'react-icons/fi';

// Internal Import
import SidebarLink from './SidebarLink';
import SidebarSubLinks from './SidebarSubLinks';


const SidebarLinks = [
    {
        linkName: 'Dashboard',
        Icon: FiGrid,
        path: 'dashboard',
        subRoute: false
    },
    {
        linkName: 'Catalog',
        Icon: FiSlack,
        path: "catalog",
        subRoute: true,
        sublinks: [
            { subRouteName: 'Products', subRoutePath: "products" },
        ]
    }
];

const SidebarContent = () => {
    return (
        <div className="py-4 dark:text-gray-400">
            <Link className=" text-gray-900 dark:text-gray-200" href="/vendor/dashboard">
                <div className='ml-5 flex font-bold'>
                    <FiSend className='text-2xl' />
                    <h6 className='ml-2'>MernShop Vendor</h6>
                </div>
            </Link>

            <ul className="mt-8">
                {SidebarLinks.map(({ Icon, ...rest }) => (
                    // if there are sublinks for the current sidebar links then
                    // render them else just render it as a normal link

                    <React.Fragment key={rest.linkName}>
                        {rest.subRoute ?
                            <SidebarSubLinks
                                mainLink={rest.linkName}
                                Icon={Icon}
                                sublinks={rest.sublinks}
                                path={`/vendor/${rest.path}`}
                            />
                            :
                            <SidebarLink routeName={rest.linkName} Icon={Icon} path={`/vendor/${rest.path}`} />
                        }
                    </React.Fragment>
                ))}
            </ul>
        </div >
    );
};

export default SidebarContent;
