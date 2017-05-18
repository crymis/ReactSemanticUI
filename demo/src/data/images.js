// const src = '/assets/images/demo.png';
const imgNumbers = [
'18299908_212221709266693_6913788699536785408_n', 
'18096243_615402288656668_109152685407600640_n', 
'c74.0.932.932/18382031_354578111611212_5543585804447645696_n', 
'18298638_142138352994231_1625794217030713344_n', 
'c140.0.799.799/18252058_398517917201438_7068007707982168064_n', 
'c0.43.1080.1080/17883192_1927480883944492_1100285310299799552_n',
'c78.0.924.924/18095356_106561416575369_6108287992856576000_n',
'17934275_1854857598095447_6325199380496252928_n',
'17883171_1883570228566561_264384318292361216_n'];

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