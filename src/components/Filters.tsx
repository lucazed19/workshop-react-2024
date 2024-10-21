import { Checked } from "./icons/checked";
import { Unchecked } from "./icons/unchecked";

type ItemProps = {
    label: string,
    checked?: boolean
}

function FilterItem(props: ItemProps) {
    return (
        <button className="flex flex-row items-center flex-1 bg-slate-800 px-3 py-1 rounded-full hover:bg-slate-600">
            {props.checked ? <Checked className="mr-3 text-xl" /> : <Unchecked className="mr-3 text-xl" />}
            {props.label}
        </button>
    )
}

export function Filters() {
    return (
        <div className="flex flex-row w-full gap-1 mt-4 text-white text-lg">
            <FilterItem label="Todos" checked />
            <FilterItem label="Pendentes" />
            <FilterItem label="Concluídos" />
        </div>
    )
}

