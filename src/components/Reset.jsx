import { UpdateIcon} from "@radix-ui/react-icons";
export default function Reset({setCount}){
    return (
       <>
        <button className="reset-btn">
          <UpdateIcon className="reset-btn-icon" onClick={()=>setCount(0)}/>
        </button>
       </>
    );
}
