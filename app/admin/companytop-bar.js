'use client'
import React, { useState, useEffect } from 'react';
import { siteConfig } from "@/config/siteconfig";
import { Input, User, Popover, PopoverTrigger, PopoverContent, Tooltip, Badge, Button } from "@nextui-org/react";
// import { ThemeSwitch } from "@/app/_components/ui/ThemeSwitch";
import { CompanyDashLogo, NotificationIcon } from "@/_components/icons";
import Link from 'next/link';
import { button as buttonStyles } from "@nextui-org/theme";
import { Search, KeyRound, Settings, Power, Mail, MessageCircleMore, MessageCircleQuestion } from 'lucide-react'
import { RxExternalLink } from "react-icons/rx";
import { SessionProvider, useSession, getSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';


const CompanyTopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [session, setSession] = useState({});
  const [isInvisible, setIsInvisible] = React.useState(false);
  const pathname = usePathname()
  let router = useRouter();
  useEffect(() => {
  
    const getSessionInfo = async () => {
      const session = await getSession();
      setSession(session);
    };
    getSessionInfo();
  }, [])

  // useEffect(() => {
  //   console.log("Session at top company bar:",session)
  // }, [session])

  useEffect(() => {
    
    console.log("Session at top bar Company: ",session);
    if(session && session?.user?.user_role === "guest" || session?.user?.user_role === "partner") {
      setSession(null)
    }

  }, [session])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const notification = (
    <PopoverContent>
      <div className="px-1 py-2">
        <div className="text-small font-bold">Popover Content</div>
        <div className="text-tiny">This is the popover content</div>
      </div>
    </PopoverContent>
  );
  
  const profile = (
    <PopoverContent>
      <div>
      <div className="px-1 py-2 flex gap-10">
        {session && session?.user?.user_role === "admin" 
          ? <User   
              name={session?.user?.firstname + ' ' + session?.user?.lastname}
              description="Agent 007"
              avatarProps={{
                src: "https://www.svgrepo.com/show/509009/avatar-thinking-3.svg"
              }}
              className='text-black'
            />
          : ""
        }

        {/* <Link
                            href='/hotel/dashboard'
                            className={`${buttonStyles({ color: "default", size: "sm", radius: "full", variant: "light" })} text-primary`}
                        >
                          <Tooltip content="Change Password" color='danger'>
                          <KeyRound  className='mt-2'/>
                          </Tooltip>
        </Link> */}
      </div>
      {/* <Link
                            href='/admin/userprofile'
                            className={`${buttonStyles({ color: "default", size: "md", radius: "full", variant: "light" })} text-primary ml-3`}
                        >
                            <Settings />Settings
        </Link> */}
      </div>
          <label className="mr-28 mt-2 text-xs font-semibold uppercase text-primary">Need Help ?</label>
      <div className="flex flex-col items-start mr-6">

          <Link
                            href='#'
                            className={`${buttonStyles({ color: "default", size: "md", radius: "full", variant: "light" })} text-primary`}
                        >
                            <Mail />Report an Issue
        </Link>

        <Link
                            href='#'
                            className={`${buttonStyles({ color: "default", size: "md", radius: "full", variant: "light" })} text-primary`}
                        >
                            <MessageCircleMore />Chat Support<RxExternalLink className='ml-6' size={16}/>
        </Link>

        <Link
                            href='#'
                            className={`${buttonStyles({ color: "default", size: "md", radius: "full", variant: "light" })} text-primary`}
                        >
                            <MessageCircleQuestion />Explore FAQs<RxExternalLink className='ml-6' size={16}/>
        </Link>

        <Button variant='shadow' color="danger" size='sm' className='left-16 mt-3' startContent={<Power />} onClick={async (e) => {try {
    await signOut({ redirect: false });
    // setSession(null);
    router.push('/adminlogin');
  } catch (error) {
    console.error('Sign out error:', error);
  }}} >Logout</Button>
                  </div>
    </PopoverContent>
  );

  return (
    <div className="w-full">
      <div className="mx-auto pt-1 flex w-[90%] justify-between">
      <Link className="flex justify-start items-center gap-1" href="/">
            <p className="text-3xl lg:text-4xl text-primary font-extralight antialiased">{siteConfig.name}</p>
          </Link>
        {/* <Input
          isClearable
          variant="bordered"
          placeholder="Type to search..."
          size='sm'
          radius='lg'
          className="w-1/2"
          startContent={
            <Search className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            /> */}
            <div className="flex grow justify-center">
        <ul className="flex gap-4 justify-center items-center">
          {siteConfig.adminNavItems.map((item) => (
            <div key={item.href}>
              <Link
                className={`link ${pathname === item.href ? 'text-primary font-bold' : 'text-black font-extralight'}`}
                href={item.href}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </ul>
        </div>
        <div className="ml-2 mt-2 hidden lg:block">
        {session && session?.user?.user_role === "admin"
              ? session?.user?.firstname === undefined && session?.user?.lastname === undefined 
                ? <Link
                    href="/adminlogin"
                    // onClick = {(e) => signIn()}
                    className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
                  >
                    Login/Sign Up
                  </Link> 
                : <>
                    {/* <User
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      name={sessionValue?.user?.firstname + ' ' + sessionValue?.user?.lastname}
                      style = {{position: "relative",
                        top: "4px"}}
                      pointer 
                    />
                    <Link
                      href=""
                      // isExternal
                      onClick={(e) => signOut()}
                      className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
                    >
                      Log out
                    </Link> */}

                    {/* notification area */}
                      {/* <Popover key="bottom" placement="bottom" color="default" backdrop='transparent'>
                      <PopoverTrigger>
                      <Button color="primary" variant="link" className="capitalize">
                      <Badge color="danger" content="9" isInvisible={isInvisible} shape="circle" showOutline={false} className='mt-1'>
                      <NotificationIcon className="text-primary mt-1" size={24} />
                      </Badge>
                      </Button>
                      </PopoverTrigger>
                      {notification}
                    </Popover> */}
                    
                    {/* Profile area */}
                    <Popover key="bottom" placement="bottom" color="default" backdrop='transparent'>
                      <PopoverTrigger>
                      <Button color="primary" variant="link" className="capitalize">
                    <User   
                      name={session?.user?.firstname + ' ' + session?.user?.lastname}
                      description="Agent 007"
                      avatarProps={{
                        src: "https://www.svgrepo.com/show/509003/avatar-thinking-6.svg"
                      }}
                      className='text-black'
                    />
                    </Button>
                      </PopoverTrigger>
                        {profile}
                    </Popover>
                  </>
              : <Link
                  href="/adminlogin"
                  // onClick = {(e) => signIn()}
                  className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
                >
                  Login/Sign Up
                </Link>
            }
        </div>
      </div>
    </div>
  )
}


export default CompanyTopBar;