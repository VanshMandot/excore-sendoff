import React from 'react';
import Card from './Card';

const cardData = [
  {
    name: 'Rahil',
    position: 'Chairperson',
    image: 'https://i.pravatar.cc/300?img=1',
    title: 'To Rahil',
    message: "At first I always thought that u were a bit strict guy, but when I actually started talking u turned out to be a very chill guy. I still remember the day when I pitched the COC theme which was originally scrapped but u still gave me a chance to explain all the elements and stuff to you. I have never seen u lose your calm during an event and be composed, that is what I am hoping to learn from you and would love to take ISACA to greater heights than before",
  },
  {
    name: 'Deval',
    position: 'Vice Chairperson',
    image: 'https://i.pravatar.cc/300?img=1',
    title: 'To Deval',
    message: "Working with Deval as Vice Chairperson back when I was co-committee with him was genuinely great. He led the team without making it feel heavy, and even in the most stressful deadlines, he kept the mood light while making sure the work got done. His way of handling people and situations made working together something to look forward to, not something to survive. A lot of how I work now comes from seeing how he did it back then.\n\nThere are not enough words to tell what u have taught me in the short span of time that I know you. U got me into my first committee and have been a big brother to me always. Synergy wla night was the craziest one, but no words can suffice what I want to say. Thanks for always being there and helping out with anything and everything.",
  },
  {
    name: 'Utkrushtha',
    position: 'Secretary',
    image: 'https://i.pravatar.cc/300?img=1',
    title: 'To Utkrushtha',
    message: "You have really been a really great secretary and a really great mentor but more than that you have been a really great support.I think that we first interacted a lot during Synergy and the way that you called all of us girls to like tell you of anything went wrong was really touching.I hope that you will achieve great things in life. Thank you very much for being there for us.",
  },
  {
    name: 'Mahek',
    position: 'Secretary',
    image: 'https://i.pravatar.cc/300?img=1',
    title: 'To Mahek',
    message: "Thank you soooo much for all the sorted attendance and permissions!! Extra special thanks for helping me write a permission letter when it was my first time and you saw me struggling!! Will never forget how super kind and sweet you are!!Wishing you good luck!!✨",
  },
  {
    name: 'Shanay',
    position: 'Treasurer',
    image: 'https://i.pravatar.cc/300?img=1',
    title: 'To Shanay',
    message: "During the start of my tenure as a marketing co com I knew I would have to interact with the treasurer of the committee often but never knew it would be so chill and fun. At first looked as if it was gonna be difficult to approach you but later turned out to be the opposite .You’re just a fun person to talk to with just laughing and jokes all around but also getting serious work done whenever needed. Hats off to the dedication for the role and to be honest also inspiring by setting up a level of standard for me to reach. it was great having Shanay as our treasurer nobody could have done it better!",
  },
  {
    name: 'Khushi',
    position: 'Events HOD',
    image: 'https://i.pravatar.cc/300?img=1',
    title: 'To Khushi (The OG Ayojan Karta)',
    message: "Thank you for being one of the best and sweetest heads I've ever worked with! You've always made sure that each and everyone of us was heard and led with the `Main sambhal lungi` attitude. So to our forever yap, rant and gossip partner, I wish you great luck for your future endeavours and hope I'm able to live upto your legacy!Love you to the 'core'!✨\n\nThe most chill and fun head to be around and hats off to you for pulling an crasy ass all nighter during synergy, i could see you’re really tired and still so hardworking i couldn’t help but admire you! i remember i was very nervous to give events ka interview and now im really glad i gave it. really loved working under you <3 abh pata chalrha hai how much of hardwork you used to put haha!! honestly couldn’t ask for a better head❤\n\nI was so happy when I knew Khushi was event head since I knew her from before joining. I never had to keep my ideas to myself, she gave us such freedom I remember pitching the HIMYM and COC idea first it got rejected but she still told me to present it myself. Thanks for believing in me always and also for judging an event of mine.",
  },
  {
    name: 'Yashvi',
    position: 'Marketing Head',
    image: 'https://i.pravatar.cc/300?img=3',
    title: 'To Yashvi',
    message: "Yashvi has been a very good head for me. She taught me a lot about marketing which I did not know. She taught me how to talk with potential sponsors, how to negotiate and about MOU as well.When I joined ISACA as a marketing co-com I did not know much about marketing at all. So, thanks to her that I can now negotiate well. She is a very chill person but at the same time very serious about her job.So I hope that I can do justice to the post of marketing as well as she did\n\nYashvi was the head of the marketing department. I couldn’t have asked for a better head. She was very sweet and friendly with us. She ensured that there was no miscommunication between all the members. She wasnt just delegating tasks, she herself also took part in the tasks along with us. We were blessed to have Yashvi as our head of the marketing department.",
  },
  {
    name: 'Bhargav',
    position: 'Techinal HOD',
    image: 'https://i.pravatar.cc/300?img=3',
    title: 'To Panditji',
    message: "Bhai, first impression tera honestly kaafi strict wala tha — hamesha angry mode mein hi lagta tha😡\nLekin as and when we started interacting, I realised you’re actually pretty chill.” Waise sach kahu, ex-core mein abhi bhi sabse zyada tujse hi fatti hai 😝\nBut truly, you have been an incredible HOD. Jitna bhi time saath kaam kiya, every single time kuch naya seekhne ko mila. I still remember that night before the CTF. You were debugging backend and mein frontend. One of my core memory of my college journey. It was genuinely lovely working with you\n\nNever had a chance to work directly under you but I have spent a lot of time working with u under different departments. Starting main u are scaring but after u ease out crazy fun guy to be with ",
  },
  {
    name: 'Het',
    position: 'Techinal HOD',
    image: 'https://i.pravatar.cc/300?img=3',
    title: 'To Het',
    message: "Working with you as Head of Cyber really changed the way I approach things. You pushed me into challenges I never thought I could handle. I messed up a few times, but I also tried things I wouldn’t have dared otherwise. Your guidance and support have been a big part of who I am today.",
  },
  {
    name: 'Jiya',
    position: 'Editorial HOD',
    image: 'https://i.pravatar.cc/300?img=3',
    title: 'To Jiya',
    message: "From the moment we first met you during the co-comm interviews, we knew you’d be our favourite core member (definitely not biased here, hehe). It still hasn’t sunk in that we aren’t your co-comm anymore, but instead will be following in your footsteps, trying to keep the high standard you’ve set.\nYou’ve been the most patient, supportive, and friendly HoD anyone could ask for guiding us, trusting us, and making the editorial team a place where we could grow, learn, and actually enjoy the process. From listening to our chaotic ideas 😅 to sharing book talks and gushing over fictional characters, you made the team feel like family.\nWe’ll miss it all, the teasing, the scoldings, the poker face in interviews, and every moment that shaped us into better versions of ourselves. We hope to be a “Jiya” to our co-comm just as you were to us, in the best way possible!\nWishing you nothing but endless success, happiness, and the warmest memories ahead. 🫶🏼💛"
  },
  {
    name: 'Avantika',
    position: 'Creative HOD',
    image: 'https://i.pravatar.cc/300?img=3',
    title: 'To Avantika',
    message: "Thank you for always listening, guiding, and helping me work through things I thought I couldn’t handle. Honestly, I’d be lying to myself if I said I couldn’t pull this off but you’ve truly given me the motivation to believe in myself even more, that means more to me than I could ever ask for. Thank you for being so understanding and for giving me a reason to keep this as my first preference. your trust is all that i need <3 abh pata chalrha hai how much of hardwork you used to put haha!! honestly couldn’t ask for a better head ❤",
  },
  {
    name: 'Gunj',
    position: 'Creative HOD',
    image: 'https://i.pravatar.cc/300?img=3',
    title: 'To Gunj',
    message: "You are the sweetest and you made working in creatives way easier and fun. i’m glad i gave a chance to creatives even though it being my fourth preference in interview last year and because of your guidance it has become the only preference for me. i was really scared during the interview but your for trust in me has really shaped me a lot, really grateful i got to be a part of creatives under you! lovedd working under youu <3 abh pata chalrha hai how much of hardwork you used to put haha!! honestly couldn’t ask for a better head ❤",
  },
  {
    name: 'Prem', 
    position: 'Publicity HOD',
    image: 'https://i.pravatar.cc/300?img=3',
    title: 'To Prem',
    message: "Thank you for always trusting me. Under your leadership I've learnt how content actually works, how to speak in front of people and most importantly `How to edit the best videos.`🫶🏻Our reaction during 70k reel or even throwing water on Priyanshi ..best moments🥹 Still remember that night before BreachBytes.. COC ka pura intro edit kar raha tha all night and you all actually loved it❤ Then most recent incident with `ICB KA WEBSITE` ppt + video, jitna force karke bithaya tha na bhai tune practical ke pehele would never forget that! I promise to take this role as a perfect opportunity to grow from here.❤\n\nWell I wasn’t in pubs starting se but preem taught me shooting and stuff and I did thoda editing at the end of the tenure. I would have loved to give pubs interview and work as pubs cocom but I kinda missed it here but got that chance somewhere else so, truly thankful to you preeem.",
  },
  {
    name: 'Hussain',
    position: 'Logistic HOD',
    image: 'https://i.pravatar.cc/300?img=3',
    title: 'To Hussain',
    message: "Honestly, working with you as my Logistics Head has been a breeze. You have got this chill but super reliable vibe always making sure things run smooth without making a big fuss about it. You’re the type who’ll have your back in a crunch, and you just know he’s going to get stuff done no matter what. Feels less like a head and more like a brother you can count on, which makes the whole team vibe way better.",
  },
  {
    name: 'Vraj',
    position: 'Logistic HOD',
    image: 'https://i.pravatar.cc/300?img=3',
    title: 'To Vraj',
    message: "Working with you has been pure energy. You have got this mix of sharp thinking and a “let’s make it happen” attitude that keeps the pace high without ever feeling overwhelming. One can always count on you to spot opportunities, solve problems on the fly, and somehow still keep the mood light. You are the guy who’ll push the team to aim higher while making sure everyone’s having a good time doing it, and that balance is rare",
  },
];

export default function CardLoader() {
return (
  <div className="flex flex-col w-full justify-center container mx-auto px-4 py-5 md:py-2">
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6" id="cards-container">
        {cardData.slice(0,2).map((person, index) => (
            <div key={index} className="w-[225px]">
                <Card image={person.image} name={person.name} position={person.position} title={person.title} message={person.message} />
            </div>
        ))}
    </div>
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6" id="cards-container">
        {cardData.slice(2,5).map((person, index) => (
            <div key={index} className="w-[225px]">
                <Card image={person.image} name={person.name} position={person.position} title={person.title} message={person.message} />
            </div>
        ))}
    </div>
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6" id="cards-container">
        {cardData.slice(5,9).map((person, index) => (
            <div key={index} className="w-[225px]">
                <Card image={person.image} name={person.name} position={person.position} title={person.title} message={person.message} />
            </div>
        ))}
    </div>
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6" id="cards-container">
        {cardData.slice(9,13).map((person, index) => (
            <div key={index} className="w-[225px]">
                <Card image={person.image} name={person.name} position={person.position} title={person.title} message={person.message} />
            </div>
        ))}
    </div>
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6" id="cards-container">
        {cardData.slice(13,15).map((person, index) => (
            <div key={index} className="w-[225px]">
                <Card image={person.image} name={person.name} position={person.position} title={person.title} message={person.message} />
            </div>
        ))}
    </div>
  </div>
);
}