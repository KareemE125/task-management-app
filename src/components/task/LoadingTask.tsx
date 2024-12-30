export default function LoadingTask() {
  return (
    <div className="animate-pulse min-h-32 flex flex-col md:flex-row justify-between items-stretch gap-4 rounded-lg bg-black bg-opacity-5 hover:bg-opacity-10  dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20">
      <section className="w-full px-4 xs:px-8 py-4">
        <div className="bg-gray-300 dark:bg-gray-700 h-8 w-1/2 min-w-40 max-w-96 mb-2"></div>
        <div className="bg-gray-300 dark:bg-gray-700 h-14 w-full md:min-w-96 max-w-[500px]"></div>
      </section>
      <section className="flex md:flex-col justify-between items-end">
        <div className="bg-gray-300 dark:bg-gray-700 h-8 w-28 p-1 pb-2 rounded-tr-lg rounded-bl-lg"></div>
        <div className="bg-gray-300 dark:bg-gray-700 h-8 w-28 flex mt-auto rounded-tl-lg rounded-br-lg overflow-hidden"></div>
      </section>
    </div>
  );
}
