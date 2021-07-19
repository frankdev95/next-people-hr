import { useRef, useEffect } from "react";
import { sidebarDimensions } from "../../../data/elements/dimensions";
import SidebarItem from "./SidebarItem";

const Sidebar = (props) => {
  const { sidebar } = props.classNames;
  const sidebarRef = useRef();

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarDimensions.push(sidebarRef.current);
    }
  }, []);

  return (
    <div className={sidebar} ref={sidebarRef}>
      {props.items.map((item) => (
        <SidebarItem
          key={item.name}
          src={item.src}
          name={item.name}
          path={item.path}
          classNames={props.classNames}
          pathIndex={props.pathIndex}
        />
      ))}
    </div>
  );
};

export default Sidebar;
