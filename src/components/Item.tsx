import { Checked } from "./icons/checked";
import { Unchecked } from "./icons/unchecked";



export function Item(props: { text: string, completed: boolean, onClick: () => void }) {
    return (
        <div
            onClick={props.onClick}
            className="flex flex-row min-h-[50px] w-full items-center cursor-pointer bg-eminencehover text-black bg-offwhite mb-1 rounded-lg p-3"
        >
            {props.completed ? (
                <Checked className=" text-3xl mr-3" />
            ) : (
                <Unchecked className=" text-3xl mr-3" />
            )}
            <label className="text-xl">{props.text}</label>
        </div>
    )
}