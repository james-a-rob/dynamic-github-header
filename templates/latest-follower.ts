import { createCanvas, loadImage, registerFont } from 'canvas';

export type Options = {
    background?: string,
    textColor?: string
}

const width = 1500;
const height = 500;
const profileImageWidth = 120;
const profileImageHeight = 120;

const latestFollower = async (options?: Options): Promise<Buffer> => {
    registerFont('fonts/Anton/Anton-Regular.ttf', { family: 'Anton Regular' })

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    const partyImage = await loadImage('images/party.png');
    const partyImageFlipped = await loadImage('images/party-flipped.png');

    const image1 = await loadImage('https://avatars.githubusercontent.com/u/59564497?v=4');

    ctx.fillStyle = options?.background || "#8460d7";

    ctx.fillRect(0, 0, width, height)

    ctx.fillStyle = options?.textColor || "#f7f7f7";

    ctx.textAlign = 'center';

    ctx.font = 'light 80px "Anton Regular"';
    ctx.fillText("Hi I'm James", width / 2, 160);

    ctx.font = 'thin 40px "Anton Regular"';
    ctx.fillText(`Thanks to my latest follower bob`, width / 2, 240);

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