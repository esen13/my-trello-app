import React from "react";
import {Logo} from "@/components/logo";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export const Navbar = () => {

    // const { isSignedIn, user } = useUser();
    // console.log('isSignedIn', isSignedIn)

    return (
        <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm
        bg-white flex items-center">
            <div className="md:max-w-screen-2xl mx-auto flex items-center
            w-full justify-between">
                <Logo />
                <div className="space-x-4 md:block md:w-auto flex
                items-center justify-between w-full">
                    {/*{!isSignedIn ? (<>*/}
                        <Button size="sm" variant="outline" asChild>
                            <Link href="/sign-in">
                                Sign in
                            </Link>
                        </Button>
                        <Button size="sm" variant="default" asChild>
                            <Link href="/sign-up">
                                Get Taskify
                            </Link>
                        </Button>
                    {/*</>) : (*/}
                    {/*    <div>*/}
                    {/*        {user.fullName}*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </div>
            </div>
        </div>
    )
}