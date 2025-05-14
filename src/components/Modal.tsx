'use client';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo, useCallback } from 'react';

const MODAL_URLS: Record<string, string> = {
  s1a1: 'https://codepen.io/kimestelle/embed/ByBOEmp',
  s1a2: 'https://codepen.io/kimestelle/embed/OPLoGOb',
  s1a3: 'https://kimestelle.github.io/index.html',
  s2a2: 'https://kimestelle.github.io/bet.html',
  s2a3: 'https://editor.p5js.org/kimestelle/full/bWYf7gy9t',
  s3a1: 'https://penn-reflections.vercel.app/',
  s3a2: 'https://acao22.github.io/s3a2/',
  s3a3: 'https://leaf-letter-five.vercel.app/',
};

const readingReflections = [
  {
    title: "Ulises Carrión - Mail Art and the Big Monster from Second Thoughts",
    body: "I found the societal implications of mail art as expressed in the article interesting; the writer talks about a Big Monster that loosely points to the institutions and systems that control the way we communicate with each other. Mail art uses the postal system as a support to achieve the goal of communication between the artist and the recipients. When the artist sends a piece of mail, they lose control of it in the system but still commit a small act of defiance against the commercial, rigid forms of communication that conventionally define the postal network. Although the number and scope of people who directly receive the art is limited, eventually such acts will slowly redefine the human meaning of the postal system. I was struck by the way mail art helps people view art as a means of reflecting on the way we communicate, and finding meaning in the impact made purely by building human connections with the people we send targeted messages to (even if that happens by feeding the unaware Monster). This also redefines modern advocacy; I feel it is so centered on visibility and reach that sometimes we forget that committing invisible acts that do leave an echo in the system by its presence (and within ourselves) is equally powerful.",
    questions: ["can a piece of mail art between two individuals that travels through the postal system but isn’t directly exposed to anyone else be considered a form of social resistance/movement?", "how else can we prioritize slow connection and reflection within increasingly fast and simplified communication networks?"]
  },
  {
    title: "Laurel Schwulst & Édouard U - Selections from Creative Independent and Arena How Do You Use the Internet Mindfully",
    body: "The author builds analogies of the concept of a website to various forms of spaces or beings. To me, websites are like containers that can hold ideas, objects, or even people and alternate realities. This to me also sheds light on the importance of technological literacy because those who can interpret and knead the internet can also mold reality. We must be aware of how these realities are constructed and presented to us to safekeep our wellbeing and agency, which is currently a privilege afforded to the well educated/well off. In addition to focusing on the newest coolest tech, we must also think of accessibility and ensuring that no human cannot catch up with tech.",
    questions: ["what does an accessible internet look like? can there be universal standards and best practices to bring tech closer to all humans?"]
  },
  {
    title: "Olia Lialina - STILL THERE Ruins and Templates of Geocities from Lost and Living (in) Archives",
    body: "I found this paper interesting because of its perspective of webpages as living and decaying geographical landmarks as well as the meaning of people's efforts to preserve internet history. A bit off to the side, I had a thought about the meaning of an accessible, equitable Internet. As data becomes more important to us, there have been three primary means of ensuring access and safety across the digital world to prevent power imbalance; safekeeping information under a large entity, locking information under each individuals' control, and sharing the information for the world to see and use. Best practices for empowering and involving people, according to organizational management methods, states that people must be informed of their work's purpose and value alignment to the collective mission. Although the Internet is a new universe that we collectively build, those same principles unfortunately not widely recognized. Oftentimes, user interaction and information is restricted and heavily guided, such as the concept of onboarding flows of websites or seamless collection and usage of user data to provide tailor-made content to people at no effort on their side. To me, Geocities seems like an early endeavor to break such practices, which ultimately concentrates power in the hands of those who control these seamless user interactions. Given a sense of community responsibility and creative freedom, users can actively contribute to a public space that does not benefit from their activities aside from the joy fellow users feel from visiting their site. It's a lot to face a blank canvas and release something into the world, but the diversity of the geocities websites that results from the overwhelming possibilities are beautiful. I think that contrary to contemporary practice, the Internet should be more overwhelming, unpruned, and open-ended. We shouldn't be afraid of work in progress or slow experiences because not much personal growth is achieved when information is presented on a polished platter.",
    questions: ["How can corporations, tech advocates, and individuals work to create a more communal, creative Internet culture despite modern Internet's emphasis on quick and effortless communication?",
      "What is the social, environmental, and cultural implications of preserving decaying websites? How is this comparable to how physical artifacts and history has been passed across generations?"
    ]
  },
  {
    title: "Alessandro Ludovico & Florian Cramer - Selections from Publishing from Post-Digital-Print",
    body: "This work that examines the differences, similarities, and relationships between digital and print publications made me think about the redefinition of physicalness. In its early stages, the Internet was mostly an information sharing platform, that focused on distributing ideas and knowledge as far as possible, as quickly as possible. However, with new developments such as the advancement of online communities, the Internet of Things, blockchain technology, immersive web, etc, the Internet is being redefined as a more physical place or collection of 'things'. I can personally relate to this; over the holidays, I sent virtual gift boxes and 'handwritten' letters from a custom-drawn font to loved ones who were far away to emulate the feeling of opening a real heartfelt letter. In that sense of Internet data becoming more physical and empowering, I'd more so consider the rift between digital and physical publication as how 'tangible' information is (is this being fed to people as a stream of pure concepts or as a mixture of sensory input?)",
    questions: ["how can virtual information take on the desirable traits of physical publications such as local specificity, disposability, and intimacy?"]
  },
  {
    title: "Bojana Coklyat & Shannon Finnegan - Selections from Alt-Text as Poetry Workbook",
    body: "I've always learned about alt text from an accessibility standpoint, so seeing it in the context of art and expression was really new and fresh. This reminds me of a project my friend and I are doing that maps people's web histories and raise awareness on our individual and collective web histories through an interactive, accessible graphic. We're trying to subjectively 'sort' websites based on user-generated criteria such as 'organic' and 'inorganic', which involves parsing html sites and trying to figure out what the website is trying to convey, It would be really interesting to look at the tone of the alt text and also incorporate this into our own website-making when we think about what exactly to put in this elusive, optional field. The workbook site and slides also made me wonder, what in this kind of retro? design style makes sites like this more organic, nostalgic, and hands-on? I'd like to learn about those design effects and even typography in the future.",
    questions: ["how can we practice re-thinking and redefining tools even beyond alt text without having to read something explicit about it?"]
  },
  {
    title: "Ramsey Nasser - 'A Personal Computer for Children of All Cultures' from Decolonising the Digital",
    body: "This passage talks about the complexity of tech equity and decolonizing technology. Although efforts like the One Laptop Per Child is making technology accessible to a wider bracket of people, the author here claims that the root problem lies in the foundational structure of this tech, which is mostly written in English and optimized for Western grammar, scripts, words, etc. The author envisions a multicultural tech structure that accommodates for the coexistence of various languages and structs, to truly localize and globalize tech tools. I was deeply intrigued by this idea; modern tech is so focused on optimization and labeling/categorization that we've built a beehive of abstractions and frameworks around some pretty simple logical concepts to make things make sense to humans. However, in order to accommodate for diverse such structures, I think all users will have to step away from their comfortable programming languages and libraries to understand a good portion of the underlying logic. To me, that would be a refreshing cultural shift away from convenient categories such as AI (most people aren't aware that AI is a box of controlled randomness that doesn't exactly formally reason). Taking that as example, we see that the equity gap exists in the level of understanding that people have in the words they are given. Decolonising technology will have to be a groundbreaking effort, but I believe in the power of local grassroots advocacy to start small movements that penetrate the system.",
    questions: ["how far do we need to peel away the abstractions that saturate modern technology to accommodate systems that aren't specifically tuned to the English language?"]
  },
  {
    title: "David Reinfurt - Selections from A *New* Program for Graphic Design",
    body: "This reading discusses how effective design intends to structure perception (guided by the rules of Gestalt), and how this principle can apply in various contexts within design. I found the watch face segment particularly interesting, when the author mentioned how a watch that only displays a part of its time  information at a given time is an exercise of gestalt principles because the user holds the full image of the numbers in their head while the physical watch is still drawing out the time. I wonder if we can use such perspective-changing techniques to mundane norms in the Internet to shift people's perspectives about how information is organized.",
    questions: ["What are aspects of the Internet and modern UI conventions we can take and experiment with to impact people's way of thinking about information organization?"]
  },
  {
    title: "Paul Soulellis - Performing the Feed",
    body: "This reading was really impactful for me; it talked about how information catches our attention by disrupting the smooth flow of the status quo (can be interpreted as an act of resistance to the information overload of modern day). It made me think about the responsibility attached to seeking someone's time and attention; nowadays, corporations, individuals, and other bodies mindlessly compete for our attention (such as the algorithmically generated videos in the reading) with little regard for the ethical implications of limitless consumption. Like mass fishing, our pool of attention can be exploited, but not infinitely. Along with conversations about data privacy and other issues related to tech/AI, we should be talking about how our attention is spent, both intrinsically and outside of our reach.",
    questions: ["how can we set societal agreements and standards on responsible consumption of human attention?"]
  },
  {
    title: "Neta Bomani & Sabii Borno - Beyond Dark Matter from Logic Issue 15 Beacons",
    body: "At the core, this text discusses the racist and Western ideals that are the foundation of technology infrastructure and how communities can come together to create a more inclusive virtual space. Gem is a talented black student who is marginalized and excluded as is the typical POC experience in technology. As an Asian person, I can try to be more aware of that space and ensure that the spaces I am in takes effort to acknowledge the deep-rooted injustices that make up the seemingly neutral concept of technology.",
    questions: ["How can we raise conversations at campus spaces we occupy about the biases and cultures built into tech frameworks?"]
  },
];

export default function Modal() {
  const location = useLocation();
  const navigate = useNavigate();

  const modalKey = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('modal');
  }, [location.search]);

  const iframeUrl = modalKey && modalKey !== 'reading' ? MODAL_URLS[modalKey] : null;

  const closeModal = useCallback(() => {
    const params = new URLSearchParams(location.search);
    params.delete('modal');
    navigate({ search: params.toString() }, { replace: true });
  }, [location.search, navigate]);

  if (!modalKey) return null;

  return (
    <div className="fixed inset-0 p-5 md:p-10 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-full h-full max-w-5xl max-h-[90svh] bg-white rounded-lg overflow-auto shadow-xl">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-black text-xl font-bold z-10"
        >
          ✕
        </button>

        {modalKey === 'reading' ? (
          <div className="p-[4svh] space-y-[2svh] overflow-y-auto">
            <h1 className="text-2xl font-semibold mb-[2svh]">Reading Reflections</h1>
            {readingReflections.map((item, i) => (
              <div key={i}>
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="text-sm text-gray-700 mt-1">{item.body}</p>
                {item.questions.map((it) => (
                  <li>{it}</li>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <iframe
            src={iframeUrl!}
            className="w-full h-full border-none"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
