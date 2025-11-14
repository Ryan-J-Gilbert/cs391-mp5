"use client"

import Link from "next/link";
import { AliasProps } from '@/types';

export default function Result({url}: {url: AliasProps}){
    return (
        <Link href={url.alias}>
            {url.alias}
        </Link>
    )
}