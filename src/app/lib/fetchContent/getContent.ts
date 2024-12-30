import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import {contentQueries}  from "./queries/queries";
 
  const options = { next: { revalidate: 30 } };

  export const getContent = async (contentType: ContentType) =>{
    const content = await client.fetch<SanityDocument[]>(
        contentQueries[contentType],
        {},
        options
      );
     return {content};
  }