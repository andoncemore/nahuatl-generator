var adafruitUsername = 'andoncemore';
var adafruitFeed = "names";
var adafruitAioKey = 'def59cee6d014998a4868248f9e0c2b6';
// getAdaIO(adafruitUsername, adafruitFeed, adafruitAioKey, changeBar);
var randomStories = ["The jaguar (ocelotl) which the Nahuas (Aztec people) called “the king (tlatoani) of animals”. In fact, the jaguar was the animal double of Tezcatlipoca, protector of rulers and also of sorcerers believed to have great powers. Aztecs also wore the jaguar warriors dress at war because they believed the animal's strengths would be given to them during battles.","Ehecatl was a Mesoamerican god of air and winds, especially those which brought rains. Regarded as a manifestation of the great feathered serpent god Quetzalcoatl, he was sometimes known as Quetzalcoatl-Ehecatl, in which guise he helped create humanity in the Aztec creation myth and gave the gift of the maguey plant. He was also associated with the cardinal directions, colours, and several calendar dates.","In Aztec cosmology, the cipactli, which is the crocodile, symbolized the earth floating in the primeval waters. According to one Aztec tradition, Teocipactli 'Divine Crocodile' was the name of a survivor of the flood who rescued himself in a canoe and again peopled the earth. In Aztec mythology, Cipactli was a primeval sea monster, part crocodilian, part fish and part toad or frog, with indefinite gender. Always hungry, every joint on its body was adorned with an extra mouth. The deity Tezcatlipoca sacrificed a foot when he used it as bait to draw the monster nearer.","The symbol in the language of the Aztecs/Mexica (Náhuatl) was atl tlachinolli, meaning ‘water, burnt (or scorched) earth’. The metaphor, typically in Náhuatl, consists of two opposite elements (literally) - water and fire, forming two streams (in all likelihood one blue and one red) that join together to form one key idea (war).","In Aztec mythology, Metztli was a god or goddess of the moon, the night, and farmers. She or they were probably the same deity as Yohaulticetl and Coyolxauhqui and the male moon god Tecciztecatl; like the latter, she feared the sun because she feared its fire. Also referred to as the lowly god of worms who failed to sacrifice himself to become the sun, and became the moon instead, his face darkened by a rabbit."];
var currentNames = "";

setInterval(function(){
    getAdaIO(adafruitUsername, adafruitFeed, adafruitAioKey, changeBar);
}, 2000);

function changeBar(data) {
    if(data != currentNames){
        currentNames = data;
        var names = data.split(",");
        $("#name1").text(names[0]);
        $("#name2").text(names[1]);
        $('#right-box').css('background-image', 'url(img/'+names[1]+'.png)');
        $('#left-box').css('background-image', 'url(img/'+names[0]+'.png)');
        $('#right-story').text(randomStories[Math.floor(Math.random() * randomStories.length)]);
        $('#left-story').text(randomStories[Math.floor(Math.random() * randomStories.length)]);
    }
}
