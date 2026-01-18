import React from 'react';
import Background from './components/Background';
import Opening from './components/Opening';
import TextSection from './components/TextSection';
import MusicPlayer from './components/MusicPlayer';
import PaperPlane from './components/PaperPlane';
import FloatingHearts from './components/FloatingHearts';
import { SectionContent } from './types';

const App: React.FC = () => {
  // CONFIGURATION: Replace the text and images below with your own.
  // TIP: Use external links (Imgur, Unsplash) instead of local files for better reliability in previews.
  const sections: SectionContent[] = [
    {
      id: 'story',
      title: 'How It Started',
      body: [
        "Looking back, it’s amazing to see how much has changed since we first met. Kung huna hunaon nako tung una, kinsa may mag dahom nga moabot ta ani nga point? We’ve built so much more than just a relationship, we’ve built a safe space. Sa tanan natong mga katawa, mga ginagmay nga storya, ug bisag sa mga hilom nga moments, diha nako na-realize nga ikaw gyud akong kaila.",
        "It wasn’t about the big events, but the way we learned to trust each other and grow side by side. Dili lang ni tungod sa pila na ta ka tuig, kundi tungod sa unsa ta ka lig on karon. I love how our story isn't just about the 'big' moments, but the way we grew into each other's lives.",
        "Gikan sinugdanan nga ulaw2 pa ta, hangtud karon nga komportable na kaayo ta sa usag usa, mag lumba pa ganig pa simhot utot HAHAHA. We’ve shared so many secrets, dreams, and even the messy parts of life. Dako na kaayo ang na usab sa ato, pero ang akong pagpalannga nimo, nagka anam ra gyud ug mas ni lig on. You’ve become my person, the one I want to share everything with, and looking back at our journey, I wouldn't change a single thing."
      ],
      // FIXED: Converted gallery links to Direct Image Links (added 'i.' and '.jpeg')
      images: [
        "https://i.imgur.com/3fShYBP.jpeg",
        "https://i.imgur.com/KtC2Ewc.jpeg"
      ]
    },
    {
      id: 'meaning',
      title: 'What You Mean to Me',
      body: [
        "To be honest, you are more than just my girlfriend, you are my peace. Sa tinuod lang, ikaw gyud ang akong pahulay sa tanan nakong kakapoy. Life can get so overwhelming, but just knowing I have you to come home to makes everything feel okay. Like anang kapoy kaayo na adlaw tas pag uli nako gusto na taka nga naa naka, gusto gyud nako mo uli naka dayon kay layo pang alas 8 huhu.",
        "I admire your heart and how you handle things with so much grace. Salamat kaayo kay permi nimo gina remind nako ang akong worth, bisag usahay ako mismo makalimot. You make me want to be the best version of myself, not because you demand it, but because you deserve it. I don’t say this enough, but I am so incredibly proud of the woman you are. Bilib kaayo ko sa imong kaisog ug sa imong kaayo sa ubang tao baya, lab.",
        "You have this way of making the hard days feel lighter just by being there. Thank you for choosing me every single day, for understanding my moods, and for being my biggest supporter. You are my greatest blessing, and I hope you know how much I truly value you."
      ],
      highlight: "You are my greatest blessing.",
      images: [
        "https://i.imgur.com/HkE5PDu.jpeg",
        "https://i.imgur.com/wGSpc07.jpeg"
      ]
    },
    {
      id: 'two-years',
      title: '730 Days Together',
      body: [
        "It’s been two years of growth, laughter, and a few tears in between. Kuyog ta ni mature, nagtinabangay sa mga problema, ug wala nagbiyaay sa kalisod. Being with you for two years has shown me what real commitment looks like. Dili permi perfect atong relasyon, pero ang importante kay wala ta ni give up.",
        "We’ve built a foundation of trust and respect that I know it can carry us through anything. Solid na gyud kaayo ta, lab, and I’m so proud of us, of what we have become.",
        "Sorry sa moments na murag feel nimo wala tika gina huna2, nga kanang murag naay kulang nga gusto unta maimo, specially gikans akoa. Pero know that always baya gyud taka gina huna2 like unsa imo mga ganahan ug asa ka mas prefer, kay I know what you like best baya and gusto gyud nako ihatag sa imo tanan balag ma broke ko hihi. Sorry if ma palabian taka sa sungog2, ragebait2 HAHAHAHA. It's just my way of showing you how I love you baya. Sorry pud ma physical attack nga wa na tuyo, kaw man bi gina suon2 taka. Idol baya taka huhu."
      ],
      images: [
         "https://i.imgur.com/p7Rlvvg.jpeg",
         "https://i.imgur.com/zqYck72.jpeg",
         "https://i.imgur.com/6GPGj2x.jpeg"
      ]
    },
    {
      id: 'forward',
      title: 'Looking Forward',
      body: [
        "Looking forward to our future together, I just want us to keep being 'us.' Bisan unsa pay mahitabo, ang akong pasalig nimo kay dili ko mawala sa imong tapad. Wala ko nag expect nga permi nindot atong maagian, pero kabalo ko nga kaya nato basta magtinabangay ta. I’m looking forward to more memories, more food trips, and even just the simple days where we do nothing but be together.",
        "I’m just excited to keep doing life with you. Wala ko kabalo unsay moabot sa unahan, pero basta ikaw akong kauban, kampante ra ko. I look forward to supporting you in everything you do and being there for all your wins. Dili nako kailangan mo promise ug mga butang nga layo ra sa tinuod, ang ako lang, maningkamot ko permi nga mahimong mas maayo para nimo.",
        "I want to be there as you reach your dreams, just like how you’ve been there for mine. Padayon lang ta ani, lab. Salamat sa paghatag nako og rason nga ganahan ko lambo ta para sa atong future. Hinay2 rata gud, as always sige lang, basta puhon ragyud maabot rata anang building the life we’ve always talked about. Daghan pa ta og agian, ug mapasalamaton kaayo ko ikaw akong partner aning tanan."
      ],
      // ↓↓↓ INSERT PHOTOS FOR "Looking Forward" HERE ↓↓↓
      images: [
        "https://i.imgur.com/ewsyV1a.jpeg",
        "https://i.imgur.com/8CCC4Zj.jpeg"
      ]
    },
    {
      id: 'closing',
      body: [
        "Here’s to two years and to a lifetime more of 'us.' Dili gyud nako ni sayangan ang tanan nakong gi invest nga gugma nimo kay ikaw ang pinaka worth it nga tao. Salamat sa tanan, lab.",
        "Ikaw ra gyud akong paboritong 'pahulay' aning kalibutana. I love you so much, more than I can ever put into words. Kuyog lang ta permi, ha? Palangga kaayo tika, lab."
      ],
      highlight: "Happy 2nd Anniversary ❤️",
      // ↓↓↓ INSERT PHOTOS FOR "Closing" HERE ↓↓↓
      images: [
        "https://i.imgur.com/trJwsA4.jpeg"
      ]
    }
  ];

  return (
    <div className="relative w-full min-h-screen selection:bg-rose-900/30 selection:text-rose-100">
      <Background />
      <PaperPlane />
      <FloatingHearts />
      <MusicPlayer />
      
      <main className="relative z-10 w-full overflow-hidden">
        <Opening />
        
        {sections.map((section, index) => (
          <TextSection 
            key={section.id} 
            content={section} 
            isLast={index === sections.length - 1}
          />
        ))}

        <footer className="w-full py-12 text-center opacity-40 text-sm font-light tracking-wider text-rose-200/50 pb-24">
          Made with all my heart for you
        </footer>
      </main>
    </div>
  );
};

export default App;