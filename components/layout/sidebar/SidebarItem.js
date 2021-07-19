import Image from "next/image";
import Link from "next/link";

const SidebarItem = (props) => {
  const { name, path, src, alt, classNames } = props;

  return (
    <Link href={path} className={classNames["sidebar-link"]} passHref>
      <div className={`${classNames["sidebar-item"]}`}>
        <Image src={src} alt={alt} />
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default SidebarItem;
