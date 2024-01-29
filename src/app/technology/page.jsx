import React from "react";
import { Headline } from "../../components/Headline";
import Card2 from "@/components/card2";
import config from "@/config";

const fetchStories = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  }

  const request = await fetch(`${config.api}/api/photo-stories?filters[category][$contains]=technology&sort[0]=id:desc&populate=*`, reqOptions);
  const response = await request.json();

  return response;
}

const Technology = async () => {
  const stories = await fetchStories();

  return (
    <>
      <div className="flex flex-col font-gilroy justify-start mx-auto p-[48px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col justify-start max-w-[1140px] mb-[34px] mx-auto w-full">
          <Headline>
            Technology
          </Headline>
          <div className="flex flex-col font-montserrat items-center justify-start mt-8 w-full">
            <div className="md:gap-5 gap-[48px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              {stories.data.map((story, idx) => {
                return (
                  <Card2 key={idx} story={story.attributes} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
