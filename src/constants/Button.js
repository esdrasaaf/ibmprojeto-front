export default function Button({ Text }) {
    return (
        <button className="button-8 font-inter bg-blue-100 hover:bg-blue-300 focus:bg-blue-200 focus:outline-none active:bg-blue-200 border border-blue-400 shadow-md text-blue-500 cursor-pointer inline-block font-sans text-sm font-medium leading-5 px-3 py-2 select-none h-full">
            { Text }
        </button>
    );
}