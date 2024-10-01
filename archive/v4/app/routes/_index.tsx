import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "McKay Archibald" },
    { name: "description", content: "A personal website for McKay Archibald" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen dark:bg-gray-800">
      <nav className="bg-white px-32 lg:px-32 py-2.5 dark:bg-gray-800 border-solid border-b-2 border-gray-200 league-spartan-600">
        <div className="flex flex-wrap items-center mx-auto max-w-screen-xl justify-between">
          <div className="flex items-center">
            <span className="flex self-center text-2xl whitespace-nowrap dark:text-white justify-start tracking-widest">
              MCKAY ARCHIBALD
            </span>
          </div>
          <div></div>
          <div className="flex flex-row justify-end self-center">
            <ul className="flex items center mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <div className="flex text-lg  py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 tracking-widest">
                  NOTES
                </div>
              </li>
              <li>
                <div className="text-lg block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 tracking-widest">
                  CONTACT
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div></div>
    </div>
  );
}
