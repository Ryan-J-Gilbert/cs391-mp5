"use server"

const BASE_URL = "http://localhost:3000/r/";

import getCollection, { URL_COLLECTION } from "@/lib/db";

function validateURL(url: string){
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

export async function createAliasLink(url: string, alias: string): Promise<string> {
    if (alias.length < 1){
        return "ERROR:You must submit an alias!";
    }
    if (!validateURL(url)){
        return "ERROR:You must submit a valid URL!";
    }
    alias = encodeURIComponent(alias);
    console.log("rewrote to "+alias);

    const collection = await getCollection(URL_COLLECTION);
    // check if in colleciton
    const data = await collection.findOne( {alias} );
    if (data){
        return "ERROR:Alias already exists!";
    }

    // otherwise insret into db
    const res = await collection.insertOne({alias, url})
    if (!res.acknowledged){
        return "ERROR:Error inserting into db!"
    }

    return BASE_URL + alias;

}

export async function getAliasLink(alias: string): Promise<string> {
    const collection = await getCollection(URL_COLLECTION);
    const data = await collection.findOne( {alias} );
    if (data){
        return data.url;
    }
    return "";
}