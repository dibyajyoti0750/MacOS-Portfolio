import dayjs from "dayjs";
import { navLinks } from "#constants";
import useWindowStore from "#store/window";
import { Search, ToggleRight, User, Wifi } from "lucide-react";

const navIcons = [
  { id: 1, icon: Wifi },
  { id: 2, icon: Search },
  { id: 3, icon: User },
  { id: 4, icon: ToggleRight },
];

export default function Navbar() {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <div className="w-3.5 h-3.5 object-cover">
          <img src="/images/apple.svg" alt="logo" />
        </div>

        <p className="font-bold">Dibyajyoti's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map((item) => (
            <li key={item.id} className="icon-hover">
              <item.icon size={16} strokeWidth={2.75} />
            </li>
          ))}
        </ul>

        <time className="text-white">{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
}
