import React from "react";
import Link from 'next/link';
import { Img, List } from "../../components";
import { Headline } from "../../components/Headline";
import Card1 from "../../components/card1";
import config from "@/config";

const fetchStories = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  }

  const request = await fetch(`${config.api}/api/photo-stories?filters[category][$contains]=latest&sort[0]=id:desc&populate=*`, reqOptions);
  const response = await request.json();

  return response;
}

const LatestNews = async () => {
  const stories = await fetchStories();

  return (
    <div className="flex flex-col font-montserrat justify-start mx-auto p-[48px] md:px-10 sm:px-5 w-full">
      <div className="flex flex-col justify-end max-w-[1140px] mx-auto py-0.5 w-full">
        <div className="flex flex-col gap-[17px] justify-start mt-1.5">
          <Headline>
            Latest
          </Headline>
          {/* <Text
              className="leading-[26.00px] text-bluegray-600 text-center text-lg w-full"
              size="txtMontserratRomanLight18"
            >
              Adwords Keyword research for beginners when you embark on your
              first PPC journey, you need to keep a small number of keywords at
              first.
            </Text> */}
        </div>
        <List
          className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[36px] w-full"
          orientation="horizontal"
        >
          {stories.data.map((story, idx) => {
            return (
              <Card1 story={story.attributes} key={idx} />
            )
          })}
        </List>
        <div className="flex flex-row items-center justify-center mt-[24px] w-[13%] md:w-full">
          <Link
            className="text-blue-A700 text-lg"
            size="txtMontserratRomanSemiBold18"
            href="/Latest"
          >
            READ MORE
          </Link>
          <Img
            className="h-6 ml-1 w-6"
            src="images/img_arrowright.svg"
            alt="arrowright"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
