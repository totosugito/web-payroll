import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownMenu, Dropdown, DropdownTrigger, Avatar, Button
} from "@nextui-org/react";
import {IconChevronDown, WebLogo} from "../../../../assets";
import {SearchIcon} from "../../../../assets/icons/Icons";
import {useNavigate} from "react-router-dom";
import {getRouterUrl, URL_PROJECTS, URL_USERS} from "../../../../io/router/urls";

const ViewNavBar = ({childNavBar}) => {
  let navigate = useNavigate();

  const icons = {
    chevron: <IconChevronDown fill="currentColor" size={16}/>,
  }

  const openUrl = (key) => {
    navigate(getRouterUrl(key));
  }
  return (
    <>
      <Navbar isBordered isBlurred={false}>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-1">
            <WebLogo/>
            <p className="hidden sm:block font-bold text-inherit">PAYROLL</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-8">
            {childNavBar}
            {/*<Dropdown>*/}
            {/*  <NavbarItem>*/}
            {/*    <DropdownTrigger>*/}
            {/*      <Button*/}
            {/*        disableRipple*/}
            {/*        className="p-0 bg-transparent data-[hover=true]:bg-transparent"*/}
            {/*        endContent={icons.chevron}*/}
            {/*        radius="sm"*/}
            {/*        variant="light"*/}
            {/*      >*/}
            {/*        Data*/}
            {/*      </Button>*/}
            {/*    </DropdownTrigger>*/}
            {/*  </NavbarItem>*/}
            {/*  <DropdownMenu*/}
            {/*    itemClasses={{*/}
            {/*      base: "gap-4",*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <DropdownItem*/}
            {/*      description="Show the users data"*/}
            {/*      startContent={icons.scale}*/}
            {/*      onClick={() => openUrl(URL_USERS)}*/}
            {/*    >*/}
            {/*      Users*/}
            {/*    </DropdownItem>*/}
            {/*    <DropdownItem*/}
            {/*      description="Show the projects data"*/}
            {/*      startContent={icons.activity}*/}
            {/*      onClick={() => openUrl(URL_PROJECTS)}*/}
            {/*    >*/}
            {/*      Projects*/}
            {/*    </DropdownItem>*/}
            {/*  </DropdownMenu>*/}
            {/*</Dropdown>*/}
            <NavbarItem>
              <Link href={getRouterUrl(URL_USERS)} aria-current="page" color="foreground">
                Users
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href={getRouterUrl(URL_PROJECTS)}>
                Projects
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18}/>}
            type="search"
          />
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </>
  );
}
export default ViewNavBar