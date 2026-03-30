import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
export default function CounterButton({count,setCount}) {
    return (
        <>
            <div class="button-container">
                <button className="count-btn" onClick={()=>{setCount(decrement => (decrement === 0 ? (alert("Value cannot go below 0!") , 0)  : decrement -1))}}>
                    <MinusIcon className="count-btn-icon "/>
                </button>
                <button className="count-btn " onClick={()=>{setCount(increment => (increment === 5 ? (alert("Value has reached 5, resetting to 0!") , 0) : increment + 1))}} >
                    <PlusIcon className="count-btn-icon" />
                </button>
            </div>
        </>
    );
}