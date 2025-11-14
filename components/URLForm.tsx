"use client"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { createAliasLink } from "@/lib/logic"
import { useState } from "react";

// function renderResult(result: string){
//     if (result.substring(0,6)=="ERROR:"){

//     }
//     console.log("got this from alias funciton" + result);
// }
import { AliasProps } from '@/types';


export default function URLForm({resultFunc}:{resultFunc: (url: AliasProps) => void;}) {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    return (
        <div className="w-full max-w-md">
            <form className="shadow-md bg-slate-50 m-4 p-4 w-full"
                onSubmit={async (event) => {
                event.preventDefault();
                createAliasLink(url, alias)
                .then((result)=> resultFunc({alias: result}))
                .catch((err)=>console.error(err));
            }}
            >
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>URL Shortener</FieldLegend>
                        <FieldDescription>
                            Shorten your URL!
                        </FieldDescription>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="url">
                                    URL
                                </FieldLabel>
                                <Input
                                    id="url"
                                    placeholder="https://example.com/this/is/a/lot/of/words/to/type"
                                    onChange={(e)=>setUrl(e.target.value)}
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="alias">
                                    Alias
                                </FieldLabel>
                                <div className="inline-block items-center gap-2">
                                    <span className="">https://cs391-url-shortener.vercel.app/</span>
                                    <Input
                                        id="alias"
                                        placeholder="url-route"
                                        required
                                        className="inline-block w-32"
                                        onChange={(e)=>setAlias(e.target.value)}
                                    />
                                </div>
                                <FieldDescription>
                                    Enter your desired route for your alias URL.
                                </FieldDescription>
                            </Field>

                            <Field orientation="horizontal">
                                <Button type="submit">Submit</Button>
                                {/* <Button variant="outline" type="button">
                                    Cancel
                                </Button> */}
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </FieldGroup>
            </form>
        </div>
    )
}
