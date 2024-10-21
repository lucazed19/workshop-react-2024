import { Plus } from "./icons/plus";


export function Form() {
    return (
        <form onSubmit={(event) => { event.preventDefault(); console.log("submit") }}>
            <div className="flex flex-row w-full gap-4 mt-4">
                <input className="h-[50px] flex-1 rounded-lg p-3 text-lg outline-none" />
                <button className="h-[50px] pl-4 pr-4 bg-slate-400 rounded-lg font-bold" type="submit">
                    <Plus className="text-slate-900 text-2xl" />
                </button>
            </div>
        </form>
    )
}

