import React from 'react'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import '../Cascading_Style_Sheet/Home_Nav.css'
import Logo from '../Media_Files/Fixi.png'
import { Service_Content } from './Service_Content'


const Navbar_Home = () => {
  return (
    <div className="sticky top-0 bg-white shadow-none z-50">
      <Menubar data-home-navbar>
        <div data-home-navbar-logo>
          <MenubarMenu>
            <div data-nav-logo>
              <div className="w-[70px]">
                <AspectRatio ratio={1 / 1}>
                  <img src={Logo} alt="Image" className="rounded-md object-cover" />
                </AspectRatio>
              </div>
              <div data-nav-logo-text>
                <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
                  FIXI
                </h2>
                <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
                  SECURITY
                </h2>
              </div>
            </div>
          </MenubarMenu>
        </div>
        <div data-home-navbar-menu>
          <MenubarMenu>
            <MenubarTrigger data-home-navbar-tab>
              <h1 className='text-xl'>
                Home
              </h1>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger data-home-navbar-tab>
              <h1 className='text-xl'>
                About
              </h1>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger data-home-navbar-tab>
              <h1 className='text-xl'>
                Services
              </h1>
            </MenubarTrigger>
            <MenubarContent>
              <div>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {Service_Content.map((component) => (
                    <li className="flex items-center justify-between  text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded" data-navbar-service-sub>
                      <div className='w-[15vw]'>
                        <h3 className='font-extrabold'>{component.title}</h3>
                      </div> <ArrowRight className="h-3 w-3" /></li>
                  ))}
                </ul>
              </div>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <Button className='bg-green-900' data-home-navbar-tab>
              <h1 className='text-xl'>
                Book A Demo
              </h1>
            </Button>
          </MenubarMenu>
        </div>
      </Menubar>
    </div>
  )
}

export default Navbar_Home