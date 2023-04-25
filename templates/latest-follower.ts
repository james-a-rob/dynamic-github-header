import { createCanvas, loadImage, registerFont } from 'canvas';
import { graphql } from "@octokit/graphql";
import type { GraphQlQueryResponseData } from "@octokit/graphql";
require('dotenv').config()

export type Options = {
    background?: string,
    textColor?: string,
    userName?: string
}

const width = 1500;
const height = 500;
const profileImageWidth = 120;
const profileImageHeight = 120;

const getLatestFollower = async (userName: string) => {
    // replace with token from env var
    const graphqlWithAuth = graphql.defaults({
        headers: {
            authorization: `token ${process.env.GH_TOKEN}`,
        },
    });
    const response: GraphQlQueryResponseData = await graphqlWithAuth(`
        {
            user(login:"${userName}"){
                followers(first:1){
                nodes{
                    name
                    avatarUrl
                    }
                }
            }
        }
      `);

    return {
        name: response.user.followers.nodes[0].name,
        image: response.user.followers.nodes[0].avatarUrl,
    }
}

getLatestFollower("james-a-rob");

const latestFollower = async (options?: Options): Promise<Buffer> => {
    if (!options?.userName) {
        // if no user name suplied then return basic image
        const canvas = createCanvas(width, height);
        const buffer = canvas.toBuffer('image/jpeg');
        return buffer;
    }
    registerFont('fonts/Anton/Anton-Regular.ttf', { family: 'Anton Regular' })
    const latestFollower = await getLatestFollower(options?.userName);
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    const partyImage = await loadImage('images/party.png');
    const partyImageFlipped = await loadImage('images/party-flipped.png');

    const image1 = await loadImage(latestFollower.image);

    ctx.fillStyle = options?.background || "#8460d7";

    ctx.fillRect(0, 0, width, height)

    ctx.fillStyle = options?.textColor || "#f7f7f7";

    ctx.textAlign = 'center';

    ctx.font = 'light 80px "Anton Regular"';
    ctx.fillText("Hi I'm James", width / 2, 160);

    ctx.font = 'thin 40px "Anton Regular"';
    ctx.fillText(`Thanks to my latest follower ${latestFollower.name}`, width / 2, 240);

    ctx.font = '25px "Anton Regular"';
    ctx.fillStyle = "#d1eeff";

    ctx.drawImage(partyImageFlipped, (width / 2) - 220, 290, 120, 120);

    ctx.drawImage(partyImage, (width / 2) + 100, 290, 120, 120)

    ctx.beginPath();
    ctx.arc((width / 2), 350, 60, 0, 2 * Math.PI);
    ctx.clip();

    ctx.drawImage(image1, (width / 2) - (profileImageWidth / 2), 290, 120, 120);


    console.log(image1);

    const buffer = canvas.toBuffer('image/jpeg');
    return buffer;
}

export default latestFollower;