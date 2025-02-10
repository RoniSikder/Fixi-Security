import React from 'react'
import logo from '../Media_Files/fixi.png'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Service_Content } from './Service_Content'
import { Facebook,Instagram,Linkedin,AtSign,Twitter } from 'lucide-react';
import '../Cascading_Style_Sheet/Home_Footer.css'

const Footer_Home = () => {
    return (
        <>
            <div data-footer className='bg-[#011526]'>
                <div data-footer-main className='w-[30vw]'>
                    <div className='flex items-center m-[5vh]'>
                        <div className="w-[70px]">
                            <AspectRatio ratio={1 / 1}>
                                <img src={logo} fill="#F2DCC2" alt="Image" className="rounded-md object-cover" />
                            </AspectRatio>
                        </div>
                        <div className='ml-[1vw]'>
                            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl text-[#F2DCC2]">
                                FIXI
                            </h2>
                            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl text-[#F2DCC2]">
                                SECURITY
                            </h2>
                        </div>
                    </div>
                    <div>
                        <Card className="w-[20vw] bg-[#011526] text-white border-2 ml-[5vh] mb-[5vh] mr-[5vh]">
                            <CardHeader>
                                <CardTitle className='flex justify-center'><h1 className='text-2xl'>Subscribe Our News Letter</h1></CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="name">Email</Label>
                                            <Input className="border-2 border-white bg-white text-black" id="name" />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button className='bg-yellow-600 text-black hover:bg-yellow-600'>Deploy</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
                <div className='h-[75vh] border-2 border-white-900'></div>
                <div className='w-[70vw]' >
                    <div className='flex justify-between text-white'>
                        <div className='w-[15vw] mx-5 my-5 text-left'>
                            <h2 className='text-2xl font-bold'>Services</h2>
                            {Service_Content.map(x => (
                                <p className='w-[15vw]'><b>{x.id}.</b>{x.title}</p>
                            ))}
                        </div>
                        <div className='w-[15vw] mx-2 my-5 text-center'>
                            <h2 className='text-2xl font-bold'>FIXI SECURITY</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laboriosam quia est enim saepe quam suscipit quibusdam ipsum esse vel.</p>
                        </div>
                        <div className='w-[15vw] mx-2 my-5 text-center'>
                            <h2 className='text-2xl font-bold'>Our Presence</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className='text-white text-center'>
                        <h1 className='text-2xl font-bold'>Social Media Handel</h1>
                        <div className='flex justify-center'>
                            <Facebook className='h-10 w-10 mx-10 my-5'/>
                            <Instagram className='h-10 w-10 mx-10 my-5'/>
                            <Linkedin className='h-10 w-10 mx-10 my-5'/>
                            <AtSign className='h-10 w-10 mx-10 my-5'/>
                            <Twitter className='h-10 w-10 mx-10 my-5'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer_Home