// 'use client'
import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";
import { getAliasLink } from "@/lib/logic";

export default async function Redirect({ params, }: { params: Promise<{ id: string }>; }){
    // try {
    //     const { id } = await params;
    //     const url = await getAliasLink(id);
    //     console.log("redirecting to: ["+url+"] from ["+id);
    //     console.log(new URL(url).href);
    //     redirect(new URL(url).href);
    //     // const router = useRouter();
    //     // router.push(url);
    // } catch (err){
    //     console.error(err);
        
    // }
    const { id } = await params;
    const url = await getAliasLink(id);
    console.log("redirecting to: ["+url+"] from ["+id);
    console.log(new URL(url).href);
    redirect(new URL(url).href);
}