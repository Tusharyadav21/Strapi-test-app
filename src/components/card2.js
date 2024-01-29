import React from 'react';
import { Img, Text } from "../components";
import config from '@/config';

const Card2 = ({ story }) => {

    const date = story.publishedAt.split('T')[0].split('-');
    const authors = story.authors.data;
    const hero_image = story.hero_image.data.attributes.url;

    return (
        <div className="flex flex-1 flex-col items-center justify-start w-full">
            <Img
                className="h-40 md:h-auto object-cover w-full"
                src={config.api + hero_image}
                alt="Bitmap"
            />
            <div className="flex flex-row items-start justify-between mt-6 w-full">
                <div className="flex flex-row gap-2 items-start justify-between mt-[3px] w-[53%]">
                    {authors.map((author, idx) => {
                        return (
                            <Text key={idx}
                                className="text-bluegray-600 text-sm"
                                size="txtMontserratRomanRegular14"
                            >
                                {author.attributes.name}
                            </Text>)
                    })}
                    {/* <Img
                        className="h-1 mt-1 w-1"
                        src="images/img_.svg"
                        alt="Four"
                    /> */}
                    {/* <Text
                        className="text-bluegray-600 text-sm"
                        size="txtMontserratRomanRegular14"
                    >
                        UX WRITING
                    </Text> */}
                </div>
                <Text
                    className="mt-[3px] text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                >
                    {date[2] + ' / ' + date[1] + ' / ' + date[0]}
                </Text>
            </div>
            <Text
                className="leading-[27.00px] mt-3 text-bluegray-900 text-lg w-full"
                size="txtMontserratBold18"
            >
                {story.headline}
            </Text>
        </div>
    )
}

export default Card2
