import PageTitle from '@component/typography/PageTitle';
import Layout from '@layout/vendor/Layout';
import { Card, CardBody, Button } from '@windmill/react-ui';
import React from 'react';
import { FiEdit, FiPlus, FiTrash2 } from 'react-icons/fi';

const Products = () => {
  return (
    <Layout>
      <PageTitle>Products</PageTitle>

      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <form
            className="py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6  xl:flex"
          >
            <div className="lg:flex  md:flex xl:justify-end xl:w-1/2  md:w-full md:justify-start flex-grow-0">
              <div className="w-full md:w-40 lg:w-40 xl:w-40 mr-3 mb-3 lg:mb-0">
                <Button
                  className="w-full rounded-md h-12 btn-gray text-gray-600 sm:mb-3"
                >
                  <span className="mr-2">
                    <FiEdit />
                  </span>
                  {"BulkAction"}
                </Button>
              </div>

              <div className="w-full md:w-32 lg:w-32 xl:w-32 mr-3 mb-3 lg:mb-0">
                <Button
                  className="w-full rounded-md h-12 bg-red-300 disabled btn-red"
                >
                  <span className="mr-2">
                    <FiTrash2 />
                  </span>

                  {"Delete"}
                </Button>
              </div>

              <div className="w-full md:w-48 lg:w-48 xl:w-48">
                <Button
                  className="w-full rounded-md h-12"
                >
                  <span className="mr-2">
                    <FiPlus />
                  </span>
                  AddProduct
                </Button>
              </div>
            </div>
          </form>
        </CardBody>
      </Card>

    </Layout>
  );
};

export const getServerSideProps = async () => {
  return { props: null };
};

export default Products;
