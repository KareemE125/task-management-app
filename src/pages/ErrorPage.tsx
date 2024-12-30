import Button from "@/components/shared/Button";
import Footer from "@/layouts/components/Footer";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {

  const error = useRouteError();
  let errorType : string = "Page not found"
  let errorStatus : number = 404
  let errorStatusText : string = "Sorry, we couldn't find the page you're looking for."

  if( isRouteErrorResponse(error) ){
      errorStatus = error?.status;
      errorStatusText = error?.statusText;   
      
      if( errorStatus !== 404 ){
          errorType = error?.data;
      } 
  }


  return (
    <main className="h-screen flex flex-col bg-white dark:bg-gray-900 pb-12">
      <section className="h-full flex justify-between items-stretch ">
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-30 lg:block lg:opacity-100 lg:static order-2">
            <img
                className="h-full w-full object-cover object-bottom"
                src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
                alt="Error"
            />
        </div>

        <div className="z-10 text-center px-6 pt-24 sm:pt-32 lg:px-8 mx-auto">
          <p className="text-2xl font-semibold text-indigo-600">{errorStatus}</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            {errorType}
          </h1>
          <p className="mt-6 mb-12  text-base leading-7 text-gray-600 dark:text-gray-300">
            {errorStatusText}
          </p>
          <Link
            to="/"
          >
            <Button title="Go back home" />
          </Link>
        </div>


      </section>

      <div className="fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
    </main>
  );
}
