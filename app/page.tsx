"use client";

import URLForm from '@/components/URLForm';
import Result from '@/components/Result';
import { useState } from "react";
import { toast } from "sonner";
import { AliasProps } from '@/types';

export default function Home() {
  const [result, setResult] = useState("");

  // function toastMe(result: string){
  //   console.log("toast for:"+result)
  //   if (result.length > 0){
  //     toast("Url has been created", {
  //         description: result,
  //         action: {
  //             label: "Copy",
  //             onClick: () => navigator.clipboard.writeText(result),
  //         },
  //     })
  //   }

  function toastMe(result: string) {
    console.log("toast parm:" + result);
    if (result.substring(0, 6) == "ERROR:") {
      // alert(result.replace("ERROR:", "Uh oh! "))
      toast.warning("There was an issue!", {
        description: result.replace("ERROR:", "Uh oh! "),
        // action: {
        //     label: "Ok",
        //     // onClick: () => navigator.clipboard.writeText(result),
        // },
      });
    } else {
      // alert("Here is your link: "+result)
      toast.success("Url has been created", {
        description: result,
        action: {
          label: "Copy",
          onClick: () => navigator.clipboard.writeText(result),
        },
      });
    }
  }

  // toastMe(result);


  return (
    <div className="flex items-center justify-center h-screen">
      <URLForm resultFunc={(alias: AliasProps) => { toastMe(alias.alias); }} />
      <br/>
      <Result url={{alias: result}} />
    </div>
  );
}
