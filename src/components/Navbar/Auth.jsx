import { Menu } from "@headlessui/react";
import { Icon } from "Icons";

function Auth() {
  const user = {
    name: "Murat Örsoğlu",
    avatar: "https://avatars.githubusercontent.com/u/64844876?s=40&v=4",
  };

  return (
    <Menu as="nav" className={"relative z-10"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 rounded-3xl pr-2 
              ${open ? "1" : "2"} hover:bg-active`}
          >
            <img
              src={user.avatar}
              className={"w-8 h-8 rounded-full p-0.5 mr-2"}
            />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={open && 'rotate-180'}>
              <Icon name="down" size={12} />
            </span>
          </Menu.Button>
          <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"}>
            <Menu.Item >
              {({ active }) => (
                <a className={`h-10 flex items-center justify-between px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'} `} href="#">
                  Account  
                  <Icon name='link' size={16} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item >
              {({ active }) => (
                <a className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'} `} href="#">
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item >
              {({ active }) => (
                <a className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'} `} href="#">
                  Log out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}
export default Auth;
