import React from "react";
import Link from 'next/link'
import { Headline } from "../../components/Headline";
import AuthorCard from "@/components/authorCard";
import config from "@/config";

const fetchAuthors = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  }

  const request = await fetch(`${config.api}/api/authors?populate=*`, reqOptions);
  const response = await request.json();

  return response;
}

const Authors = async () => {
  const authors = await fetchAuthors();



  return (
    <>
      <div className="flex flex-col font-gilroy justify-start mx-auto p-[48px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col justify-start max-w-[1140px] mb-[34px] mx-auto w-full">
          <Headline>
            Authors
          </Headline>
          <div className="flex flex-col font-montserrat items-center justify-start mt-8 w-full">
            <div className="md:gap-5 gap-[48px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              {authors.data.map((author, idx) => {
                return (
                  <Link href={"/author/" + author.attributes.slug} key={idx}>
                    <AuthorCard author={author.attributes} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authors;
