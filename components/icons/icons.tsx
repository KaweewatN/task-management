import {todo} from "node:test";
import {MdOutlineTaskAlt} from "react-icons/md";
import {MdOutlineWorkHistory} from "react-icons/md";
import {LuPenSquare} from "react-icons/lu";
import {ImCross} from "react-icons/im";

const Icons = {
  todo: (className?: string) => <MdOutlineWorkHistory className={className} />,
  doing: (className?: string) => <LuPenSquare className={className} />,
  done: (className?: string) => <MdOutlineTaskAlt className={className} />,
  delete: (className?: string) => <ImCross className={className} />,
};

export default Icons;
