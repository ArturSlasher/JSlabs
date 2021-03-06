let text = getText();
let reg = /\w{10,}\b/g;
document.write(text.replace(reg, replacer));

function replacer(match){
    newStr = 'ABSTR' + match + 'MENT';
    return newStr;
}

function getText(){
    return 'Cities: Skylines is a citybuilding, game developed by Colossal Order and published by Paradox Interactive. The game is a single-player open-ended city-building simulation. Players engage in urban planning by controlling zoning, road placement, taxation, public services, and public transportation of an area. Players work to maintain various elements of the city, including its budget, health, employment, and pollution levels. Players are also able to maintain a city in a sandbox mode, which provides more creative freedom for the player.' +
    'Cities: Skylines is a progression of development from Colossal Order\'s previous Cities in Motion titles, which focused on designing effective transportation systems. While the developers felt they had the technical expertise to expand to a full city simulation game, their publisher Paradox held off on the idea, fearing the market dominance of SimCity. After the critical failure of the 2013 SimCity game, however, Paradox greenlit the title. The developer\'s goal was to create a game engine capable of simulating the daily routines of nearly a million unique citizens, while presenting this to the player in a simple way, allowing the player to easily understand various problems in their city\'s design. This includes realistic traffic congestion, and the effects of congestion on city services and districts. Since the game\'s release, various expansions and other DLC has been released for the game. The game also has built-in support for user-generated content.' +
    'The game was first released for the Windows, macOS, and Linux operating systems in March 2015, with ports to the Xbox One and PlayStation 4 game consoles being released in 2017 and for the Nintendo Switch in September 2018 developed by Tantalus Media. The game received favourable reviews from critics, and was a commercial success, with more than six million copies sold on all platforms as of March 2019.'
}