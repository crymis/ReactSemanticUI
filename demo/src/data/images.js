// const src = '/assets/images/demo.png';
const imgNumbers = ['18299930_1309828805798210_539148082185502720_n','18299908_212221709266693_6913788699536785408_n', '18252480_1901395323413740_3192432651197743104_n', '18096243_615402288656668_109152685407600640_n', 'c74.0.932.932/18382031_354578111611212_5543585804447645696_n', '18298638_142138352994231_1625794217030713344_n', '18095356_106561416575369_6108287992856576000_n'];
// const instaLink = `https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e35/${imgNumbers[Math.floor(Math.random()*imgNumbers.length)]}.jpg`;

export function getInstaLink () {
    return `https://scontent-frx5-1.cdninstagram.com/t51.2885-15/e35/${imgNumbers[Math.floor(Math.random()*imgNumbers.length)]}.jpg`;
}


export function getSomeImages(count) {
    let imgs = [];
    for(let i = 0; i < count; i++) {
        imgs.push(getInstaLink());
    }
    return imgs;
}