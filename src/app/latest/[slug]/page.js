import React from 'react';
import config from '../../../config';
import { Headline } from '@/components/Headline';
import { Img, Text } from '@/components';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const fetchStory = async (storySlug) => {
    const reqOptions = {
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`
        }
    }
    const request = await fetch(`${config.api}/api/photo-stories?filters[slug][$eq]=${storySlug}&populate=*`, reqOptions);
    const response = await request.json();
    return response.data[0];
}

const StoryPage = async ({ params }) => {
    const story = await fetchStory(params.slug);
    const date = story.attributes.publishedAt;
    const author = story.attributes.authors.data;
    const hero_image = story.attributes.hero_image.data.attributes.url;

    return (
        <div className="flex flex-col font-montserrat justify-start mx-auto p-[48px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col justify-end max-w-[1140px] mx-auto py-0.5 w-full">
                <div className="flex flex-col gap-[17px] justify-start mt-1.5">
                    <Headline>
                        {story.attributes.headline}
                    </Headline>
                </div>
                <div className="flex flex-row w-[95%] justify-between md:w-full my-2">
                    {author.map((author, idx) => {
                        return (
                            <Text key={idx}
                                className="text-bluegray-600 text-m"
                                size="txtMontserratRomanRegular14"
                            >
                                {author.attributes.name}
                            </Text>)
                    })}
                    <Text
                        className="mr-8 text-bluegray-600 text-m text-right"
                        size="txtMontserratRomanRegular14"
                    >
                        Published on : {date[2] + ' / ' + date[1] + ' / ' + date[0]}
                    </Text>
                </div>
                <Img
                    className="h-full md:h-auto object-cover rounded-tl rounded-tr w-full"
                    src={config.api + hero_image}
                    alt="Bitmap One"
                />
                {story.attributes.story_content.map((storyContent, index) => {
                    // console.log(storyContent)
                    return (
                        <div key={index} className='my-2'>{storyContent.children.map((text, idx) => {
                            if (storyContent.type === "code") {

                                const code = text.text
                                return (
                                    <ReactMarkdown key={idx} rehypePlugins={[rehypeRaw]}>{code}</ReactMarkdown>
                                )
                            }
                            return (
                                <Text key={idx} as={storyContent.type === "paragraph" ? "p" : storyContent.type === "heading" ? `h${storyContent.level}` : null} className={text?.bold ? 'font-bold' : ''}>{text.text}</Text>
                            )
                        })}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default StoryPage;
