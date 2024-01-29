import React from 'react';
import config from '../../../config';
import { Headline } from '@/components/Headline';
import { Img, Text } from '@/components';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const fetchAuthor = async (authorSlug) => {
    const reqOptions = {
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`
        }
    }
    const request = await fetch(`${config.api}/api/authors?filters[slug][$eq]=${authorSlug}&populate=*`, reqOptions);
    const response = await request.json();
    return response.data[0].attributes;
}

const AuthorPage = async ({ params }) => {

    const author = await fetchAuthor(params.slug);
    // const date = author.attributes.publishedAt;
    const hero_image = author?.image?.data?.attributes?.url;

    console.log(author)

    return (
        <div className="flex flex-col font-montserrat justify-start mx-auto p-[48px] md:px-10 sm:px-5 w-full">
            <div class="flex flex-col items-center pb-10 pt-10">
                <Img class="w-48 h-48 mb-3 rounded-full shadow-lg" src={config.api + hero_image} alt="Bonnie image" />
                <div class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    <Text
                        className="leading-[27.00px] mt-3 text-bluegray-900 text-lg w-full"
                        size="txtMontserratBold18"
                    >
                        {author?.name}
                    </Text>
                </div>
                <div>
                    Email : <h3>{author.email}</h3><br />
                    Bio : <h3>{author.bio}</h3><br />
                </div>
            </div>
        </div>
    )
}

export default AuthorPage;
