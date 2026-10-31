import { Confirm } from "@/components/confirm";
import { makeTreatment, type TreatmentData } from "@/lib/treatment";

/* Concern-page treatment data, copy from new-website-content.md.
   Signs lists are split into mind, body and behaviour without adding
   new signs, per the v11 prompt. */
export const MORE_TREATMENT: Record<string, TreatmentData> = {
  "/depression/": makeTreatment({
    url: "/depression/",
    label: "Depression and Low Mood",
    tagLabel: "Concern · Depression and low mood",
    icon: "CLOUD",
    title: (
      <>
        Help for depression and low <em>mood</em>
      </>
    ),
    lead: "Depression is more than feeling sad. It is a low or empty mood, or a loss of interest and pleasure, that lasts most of the day for at least two weeks and makes everyday life harder. Dr. Mithila Desai offers talking therapy for adults and teenagers with depression and low mood, in person or online, and works alongside psychiatrists when medicine is also needed.",
    glance: [
      {
        icon: "CLOUD",
        label: "What It Is",
        text: "A lasting low mood or loss of interest, with changes in sleep, energy, appetite and thinking",
      },
      {
        icon: "FAMILY",
        label: "How Common",
        text: "One of the main causes of ill health worldwide, including in India",
      },
      {
        icon: "USER",
        label: "Who It Affects",
        text: "People of every age, including teenagers, new mothers and older adults",
      },
      {
        icon: "COMPASS",
        label: "Therapy",
        text: "Helps many people recover, alone or with medicine",
      },
      {
        icon: "PILL",
        label: "Medicine",
        text: "Prescribed by a psychiatrist when needed, not by us",
      },
    ],
    signsTitle: (
      <>
        Signs that can mean <em>depression</em>.
      </>
    ),
    signsLead:
      "For two weeks or more, most days. If you have thoughts of ending your life, please see the crisis box below and get help today.",
    mind: [
      "Feeling sad, empty, hopeless or irritable",
      "Trouble concentrating or making decisions",
      "Feeling worthless or guilty",
      "Thoughts that life is not worth living, or of death or suicide",
    ],
    body: [
      "Sleeping much more or much less",
      "Low energy, feeling slowed down or restless",
      "Changes in appetite or weight",
    ],
    behaviour: ["Losing interest or pleasure in things you used to enjoy"],
    explainer: {
      eyebrow: "02 · Looks different",
      title: (
        <>
          Depression can look <em>different</em>.
        </>
      ),
      lead: "It does not always look like sadness. These patterns are common and easy to miss.",
      points: [
        {
          icon: "USER",
          title: "In Men",
          text: "anger, long work hours, drinking more, or withdrawing.",
        },
        {
          icon: "SPROUT",
          title: "In Teenagers",
          text: "irritability, falling marks, staying in their room, or loss of friends.",
        },
        {
          icon: "HEART",
          title: "After Childbirth",
          text: "tearfulness, anxiety, feeling unable to bond, lasting beyond the first two weeks.",
        },
        {
          icon: "CLOCK",
          title: "In Older Adults",
          text: "body aches, poor sleep, memory complaints, or loss of interest after retirement or bereavement.",
        },
      ],
    },
    helpTitle: (
      <>
        Small steps that build back <em>up</em>.
      </>
    ),
    helpLead:
      "Therapy for depression is steady and practical. You understand what keeps the low mood going, then rebuild energy and hope one step at a time.",
    steps: [
      {
        icon: "MIND",
        n: "01",
        title: "Understanding",
        text: "What has led to the low mood and what keeps it going.",
      },
      {
        icon: "COMPASS",
        n: "02",
        title: "Small, Planned Activities",
        text: "That slowly bring back energy and pleasure.",
      },
      {
        icon: "CHAT",
        n: "03",
        title: "Noticing Harsh or Hopeless Thoughts",
        text: "And finding fairer ways to see yourself and your situation.",
      },
      {
        icon: "TOOL",
        n: "04",
        title: "Problem-Solving",
        text: "For the practical worries that weigh on you.",
      },
      {
        icon: "LINK",
        n: "05",
        title: "Relationships and Support",
        text: "So you are not carrying everything alone.",
      },
      {
        icon: "SHIELD",
        n: "06",
        title: "Staying Well",
        text: "With a plan for early warning signs.",
      },
    ],
    faqs: [
      {
        q: "Is depression just weakness or laziness?",
        a: "No. Depression is a health condition that affects mood, body and thinking. It can happen to anyone, including people who are successful and strong. It is not a choice, and it is not solved by \"trying harder\". It is treatable, and asking for help is a sign of strength.",
      },
      {
        q: "Do I need medicine or therapy?",
        a: "It depends on how severe the depression is and on your preference. Talking therapy alone often helps mild to moderate depression. Moderate to severe depression often improves most with therapy and medicine together. Dr. Desai can help you decide whether to also see a psychiatrist.",
      },
      {
        q: "How can I help a family member who is depressed?",
        a: "Listen without judging, encourage them to get help, help with small practical tasks, and stay in touch even if they withdraw. Take any talk of suicide seriously. Look after yourself too. Our Health Library article on helping a depressed loved one has more ideas.",
      },
      {
        q: "Will I have to talk about my childhood?",
        a: "Only if it is useful and you want to. Most therapy for depression focuses on what is happening now and what you can change. Past experiences may come up if they help explain current patterns.",
      },
      {
        q: "How long before I feel better?",
        a: "Many people notice small changes within the first few weeks of regular sessions, such as better sleep or a little more energy. Fuller recovery usually takes longer. Dr. Desai will review progress with you regularly.",
      },
    ],
    related: [
      {
        icon: "PERSON",
        title: "Individual Therapy",
        text: "One-to-one sessions for adults.",
        href: "/individual-therapy/",
      },
      {
        icon: "LEAF",
        title: "Grief and Loss",
        text: "Living with a death or another big loss.",
        href: "/grief-and-loss/",
      },
      {
        icon: "SHIELD",
        title: "Self-Harm and Suicidal Thoughts",
        text: "When thoughts of ending your life come up.",
        href: "/self-harm-and-suicidal-thoughts/",
      },
      {
        icon: "MOON",
        title: "Sleep Problems",
        text: "Trouble falling or staying asleep.",
        href: "/sleep-problems/",
      },
    ],
    sources:
      "Sources: National Mental Health Survey of India 2015 to 16, NIMHANS · World Health Organization, Depressive disorder fact sheet, 2023 · NICE NG222, Depression in adults, 2022",
  }),

  "/ocd/": makeTreatment({
    url: "/ocd/",
    label: "OCD",
    tagLabel: "Concern · OCD",
    icon: "LOOP",
    title: (
      <>
        Help for <em>OCD</em>
      </>
    ),
    lead: "Obsessive compulsive disorder, or OCD, is a condition in which unwanted, distressing thoughts (obsessions) lead to repeated actions or mental rituals (compulsions) done to feel safe or reduce anxiety. Dr. Mithila Desai offers therapy for OCD in adults, teenagers and children, in person or online.",
    glance: [
      {
        icon: "LOOP",
        label: "Obsessions",
        text: "Unwanted thoughts, images or urges that cause anxiety or disgust",
      },
      {
        icon: "SHIELD",
        label: "Compulsions",
        text: "Washing, checking, counting, ordering, praying or seeking reassurance to ease the anxiety",
      },
      {
        icon: "FAMILY",
        label: "How Common",
        text: "Affects about 1 to 2 in 100 people at some point in life",
      },
      {
        icon: "COMPASS",
        label: "Main Therapy",
        text: "Cognitive behavioural therapy with exposure and response prevention (ERP)",
      },
      {
        icon: "PILL",
        label: "Medicine",
        text: "Sometimes added by a psychiatrist",
      },
    ],
    signsTitle: (
      <>
        Common forms of <em>OCD</em>.
      </>
    ),
    signsLead:
      "Having a disturbing thought does not mean you want it or will act on it. In OCD, the distress comes from how much the thought clashes with who you are.",
    mind: [
      "Unwanted thoughts, images or urges that cause anxiety or disgust",
      "Doubts that won't settle, even after checking",
      "Thoughts of harm, sex or religion that clash with your values",
    ],
    body: [
      "Anxiety or disgust that spikes until the ritual is done",
      "The urge to wash, check, count or repeat until it feels safe",
    ],
    behaviour: [
      "Fear of dirt or germs, with long washing or cleaning",
      "Checking locks, gas or appliances again and again",
      "Needing things to be \"just right\", even or ordered",
      "Constant need for reassurance from family",
    ],
    explainer: {
      eyebrow: "02 · The OCD cycle",
      title: (
        <>
          A loop that feeds <em>itself</em>.
        </>
      ),
      lead: "Thought, anxiety, ritual, short relief, more doubt. The cycle keeps OCD going; therapy loosens it.",
      points: [
        {
          icon: "MIND",
          title: "Obsession",
          text: "an unwanted thought arrives and causes anxiety.",
        },
        {
          icon: "SHIELD",
          title: "Compulsion",
          text: "a ritual or reassurance brings short relief.",
        },
        {
          icon: "LOOP",
          title: "More Doubt",
          text: "the relief fades and the thought returns stronger.",
        },
      ],
    },
    helpTitle: (
      <>
        Loosening OCD&apos;s <em>grip</em>, at your pace.
      </>
    ),
    helpLead:
      "Therapy is done at a pace you agree to. Nothing is forced.",
    steps: [
      {
        icon: "LOOP",
        n: "01",
        title: "Understanding the OCD Cycle",
        text: "Thought, anxiety, ritual, short relief, more doubt.",
      },
      {
        icon: "COMPASS",
        n: "02",
        title: "Exposure and Response Prevention (ERP)",
        text: "With Dr. Desai's support, you face the feared thought or situation in small planned steps and practise not doing the ritual, so the anxiety settles on its own and the OCD loses its grip.",
      },
      {
        icon: "CHAT",
        n: "03",
        title: "Working with Thoughts",
        text: "Learning to treat obsessions as \"just OCD\" rather than warnings.",
      },
      {
        icon: "FAMILY",
        n: "04",
        title: "Family Involvement",
        text: "Helping family members step back from rituals and reassurance in a kind way.",
      },
    ],
    faqs: [
      {
        q: "Is liking things clean the same as OCD?",
        a: "No. Many people like order or cleanliness. OCD involves distressing thoughts and rituals that take up a lot of time (often more than an hour a day), are hard to resist, and interfere with life. People with OCD usually know the rituals are excessive but feel unable to stop.",
      },
      {
        q: "Can OCD go away completely?",
        a: "OCD is often a long-term condition, but it can become much milder and much less disruptive. Many people learn to manage it so that it no longer controls their days. Symptoms may rise during stress, and the skills from therapy help bring them down again.",
      },
      {
        q: "Should my family keep reassuring me?",
        a: "Reassurance brings short relief but feeds OCD over time. Family members can learn, with guidance, to respond kindly without joining the rituals. Dr. Desai can include family in some sessions.",
      },
      {
        q: "Can children have OCD?",
        a: "Yes. OCD often starts in childhood or the teenage years. Children may hide rituals or ask parents to join in. Early help makes a real difference. See Child and teen therapy.",
      },
      {
        q: "Can OCD therapy be done online?",
        a: "Yes. Many ERP steps can be practised at home, with Dr. Desai guiding you by video. In-person sessions may suit some situations better.",
      },
    ],
    related: [
      {
        icon: "MIND",
        title: "Anxiety and Panic",
        text: "Worry that won't switch off, and panic attacks.",
        href: "/anxiety/",
      },
      {
        icon: "PERSON",
        title: "Individual Therapy",
        text: "One-to-one sessions for adults.",
        href: "/individual-therapy/",
      },
      {
        icon: "CHILD",
        title: "Child and Teen Therapy",
        text: "Support for young people, with parents involved.",
        href: "/child-and-teen-therapy/",
      },
    ],
    sources:
      "Sources: NICE CG31, Obsessive-compulsive disorder and body dysmorphic disorder · International OCD Foundation, What is OCD",
  }),

  "/stress-and-burnout/": makeTreatment({
    url: "/stress-and-burnout/",
    label: "Stress, Anger and Burnout",
    tagLabel: "Concern · Stress, anger and burnout",
    icon: "FLAME",
    title: (
      <>
        Help for stress, anger and <em>burnout</em>
      </>
    ),
    lead: "Stress is the body and mind's response to pressure. When pressure is heavy and lasts too long, it can lead to burnout, short temper and health problems. Dr. Mithila Desai helps working adults, students and parents understand their stress, manage anger and recover from burnout, in person or online.",
    glance: [
      {
        icon: "FLAME",
        label: "Stress",
        text: "Pressure that feels more than you can handle",
      },
      {
        icon: "BRIEF",
        label: "Burnout",
        text: "Exhaustion, distance from work, and feeling ineffective after long-term work stress",
      },
      {
        icon: "FLAME",
        label: "Anger",
        text: "A normal feeling that becomes a problem when it is frequent, intense or harmful",
      },
      {
        icon: "LOOP",
        label: "Common Triggers",
        text: "Work hours, commutes, exams, money, caring for family, conflict",
      },
      {
        icon: "COMPASS",
        label: "Therapy",
        text: "Practical skills plus looking at what drives the pressure",
      },
    ],
    signsTitle: (
      <>
        Signs that stress is becoming <em>too much</em>.
      </>
    ),
    signsLead:
      "A few of these on most days is worth talking about, especially if sleep, temper or health are starting to suffer.",
    mind: [
      "Dreading work or study, or feeling numb about it",
      "Trouble concentrating or making decisions",
      "Losing interest in things you enjoy",
    ],
    body: [
      "Feeling tired even after rest",
      "Poor sleep, headaches, stomach problems, frequent colds",
    ],
    behaviour: [
      "Snapping at family, road rage, or regretting things said in anger",
      "Drinking, smoking or scrolling more to cope",
    ],
    explainer: {
      eyebrow: "02 · Exam and study stress",
      title: (
        <>
          Pressure that lands on the <em>whole family</em>.
        </>
      ),
      lead: "Board exams, entrance exams and college pressure affect students and the whole family.",
      points: [
        {
          icon: "CAP",
          title: "For Students",
          text: "therapy can help with planning, sleep, panic before exams, and difficult conversations about marks and careers. See Career guidance.",
        },
        {
          icon: "SHIELD",
          title: "Safety First",
          text: "if anger has led to violence, or someone at home is afraid of you or of another family member, please speak to Dr. Desai openly. If anyone is in danger, call 112.",
        },
      ],
    },
    helpTitle: (
      <>
        From running on empty to steady <em>again</em>.
      </>
    ),
    helpLead:
      "Therapy for stress is practical: what you can change, and better ways to carry what you cannot.",
    steps: [
      {
        icon: "COMPASS",
        n: "01",
        title: "Mapping the Pressure",
        text: "What is within your control and what is not.",
      },
      {
        icon: "HEART",
        n: "02",
        title: "Body Skills",
        text: "Breathing, relaxation and sleep routines.",
      },
      {
        icon: "MIND",
        n: "03",
        title: "Thinking Skills",
        text: "Noticing \"all or nothing\" thoughts and perfectionism.",
      },
      {
        icon: "FLAME",
        n: "04",
        title: "Anger Skills",
        text: "Recognising early signs, pausing, and expressing anger without harm.",
      },
      {
        icon: "SHIELD",
        n: "05",
        title: "Boundaries",
        text: "Saying no, protecting rest time, and asking for help.",
      },
      {
        icon: "BRIEF",
        n: "06",
        title: "Returning to Work",
        text: "After burnout, step by step.",
      },
    ],
    faqs: [
      {
        q: "Is burnout a medical diagnosis?",
        a: "The World Health Organization describes burnout as a work-related phenomenon, not a medical condition. It brings exhaustion, cynicism about work, and feeling less effective. It can overlap with depression and anxiety, so it is worth talking to a professional if it lasts.",
      },
      {
        q: "I am angry all the time. Can therapy help?",
        a: "Yes. Therapy helps you understand what sits under the anger, such as stress, hurt, fear or tiredness, and teaches you to notice the early signs and respond differently. Many people find their relationships improve as a result.",
      },
      {
        q: "Should I quit my job?",
        a: "Big decisions are hard to make while burnt out. Therapy can help you rest, see your options clearly and then decide. Sometimes change at work is the right answer; sometimes small changes are enough.",
      },
      {
        q: "Can my company pay for sessions?",
        a: "Some employers offer an employee assistance programme (EAP) with free, confidential counselling. Check with HR. For companies, see Workplace wellbeing.",
      },
    ],
    related: [
      {
        icon: "MIND",
        title: "Anxiety and Panic",
        text: "Worry that won't switch off, and panic attacks.",
        href: "/anxiety/",
      },
      {
        icon: "CLOUD",
        title: "Depression and Low Mood",
        text: "When everything feels heavy or flat.",
        href: "/depression/",
      },
      {
        icon: "MOON",
        title: "Sleep Problems",
        text: "Trouble falling or staying asleep.",
        href: "/sleep-problems/",
      },
      {
        icon: "BRIEF",
        title: "Workplace Wellbeing",
        text: "Counselling and talks for organisations.",
        href: "/workplace-wellbeing/",
      },
    ],
    sources:
      "Sources: World Health Organization, Burn-out an \"occupational phenomenon\", ICD-11, 2019 · American Psychological Association, Stress effects on the body",
  }),

  "/trauma/": makeTreatment({
    url: "/trauma/",
    label: "Trauma and Difficult Experiences",
    tagLabel: "Concern · Trauma and difficult experiences",
    icon: "SHIELD",
    title: (
      <>
        Help after trauma and difficult <em>experiences</em>
      </>
    ),
    lead: "Trauma is the lasting effect of an event or series of events that felt threatening, overwhelming or deeply hurtful, such as an accident, violence, abuse, bullying, a sudden loss or a disaster. Dr. Mithila Desai offers careful, paced therapy for adults, teenagers and children after trauma, in person or online.",
    glance: [
      {
        icon: "SHIELD",
        label: "What Causes It",
        text: "Accidents, assault, abuse, bullying, sudden death of someone close, disasters, medical emergencies, long-term victimisation",
      },
      {
        icon: "MIND",
        label: "Common Effects",
        text: "Flashbacks, nightmares, feeling on guard, numbness, avoidance, shame",
      },
      {
        icon: "CLOUD",
        label: "PTSD",
        text: "When these effects last more than a month and disrupt life",
      },
      {
        icon: "COMPASS",
        label: "Therapy",
        text: "Safe, step-by-step work at your pace",
      },
      {
        icon: "CHAT",
        label: "Your Pace",
        text: "You do not have to tell everything at once",
      },
    ],
    signsTitle: (
      <>
        Signs that can follow <em>trauma</em>.
      </>
    ),
    signsLead:
      "These reactions are normal after overwhelming experiences. When they last, therapy can help.",
    mind: [
      "Memories, images or nightmares that come back unwanted",
      "Feeling as if the event is happening again",
      "Guilt or shame, even when it was not your fault",
    ],
    body: [
      "Being jumpy, irritable, or always on guard",
      "Sleep problems and poor concentration",
    ],
    behaviour: [
      "Avoiding places, people or conversations that remind you",
      "Feeling numb, cut off or unable to feel close to others",
    ],
    explainer: {
      eyebrow: "02 · If you are not safe now",
      title: (
        <>
          Safety comes <em>first</em>.
        </>
      ),
      lead: "If you are still living with violence or abuse, safety comes before therapy.",
      points: [
        {
          icon: "TEL",
          title: "In an Emergency",
          text: "call 112, the women's helpline 181, or Childline 1098 for a child. Dr. Desai can help you think through options.",
        },
        {
          icon: "SHIELD",
          title: "No Pressure to Talk",
          text: "you choose what to share and when. Therapy should feel challenging at times, but never overwhelming.",
        },
      ],
    },
    helpTitle: (
      <>
        Careful, paced work, on your <em>terms</em>.
      </>
    ),
    helpLead:
      "You choose what to share and when. Therapy should feel challenging at times, but never overwhelming.",
    steps: [
      {
        icon: "SHIELD",
        n: "01",
        title: "Safety and Stability First",
        text: "Skills to calm the body and manage strong feelings before going near painful memories.",
      },
      {
        icon: "CHAT",
        n: "02",
        title: "Making Sense of What Happened",
        text: "At your pace and in your words.",
      },
      {
        icon: "MIND",
        n: "03",
        title: "Working with Stuck Beliefs",
        text: "Such as \"it was my fault\" or \"nowhere is safe\".",
      },
      {
        icon: "LINK",
        n: "04",
        title: "Reconnecting",
        text: "With people and activities you have pulled back from.",
      },
    ],
    faqs: [
      {
        q: "Do I need to talk about every detail of what happened?",
        a: "No. Many people worry about this. Therapy starts with feeling safer and building skills. Talking about the event comes later, only as much as is helpful, and always at a pace you agree to.",
      },
      {
        q: "It happened years ago. Can therapy still help?",
        a: "Yes. Trauma from childhood or many years ago can still affect sleep, relationships and mood today. Therapy can help at any time.",
      },
      {
        q: "What about bullying?",
        a: "Bullying, including online bullying, can have long-lasting effects on self-worth and trust, both in childhood and at work. Therapy helps rebuild confidence and handle the feelings that remain.",
      },
      {
        q: "Will Dr. Desai report abuse?",
        a: "If a child is at risk, the law requires reporting under the POCSO Act, and Dr. Desai will explain this. For adults, she will talk with you about options and respect your choices, unless someone's life is in immediate danger.",
      },
    ],
    related: [
      {
        icon: "MIND",
        title: "Anxiety and Panic",
        text: "Worry that won't switch off, and panic attacks.",
        href: "/anxiety/",
      },
      {
        icon: "CLOUD",
        title: "Depression and Low Mood",
        text: "When everything feels heavy or flat.",
        href: "/depression/",
      },
      {
        icon: "PERSON",
        title: "Individual Therapy",
        text: "One-to-one sessions for adults.",
        href: "/individual-therapy/",
      },
      {
        icon: "CHILD",
        title: "Child and Teen Therapy",
        text: "Support for young people, with parents involved.",
        href: "/child-and-teen-therapy/",
      },
    ],
    sources:
      "Sources: NICE NG116, Post-traumatic stress disorder, 2018 · World Health Organization, Post-traumatic stress disorder fact sheet, 2024",
  }),

  "/self-esteem-and-body-image/": makeTreatment({
    url: "/self-esteem-and-body-image/",
    label: "Self-Esteem and Body Image",
    tagLabel: "Concern · Self-esteem and body image",
    icon: "MIRROR",
    title: (
      <>
        Help with self-esteem and body <em>image</em>
      </>
    ),
    lead: "Self-esteem is how you value yourself. Body image is how you see and feel about your body. When either is low, it can feed loneliness, jealousy, anxiety and low mood. Dr. Mithila Desai helps teenagers and adults build a kinder, steadier view of themselves, in person or online.",
    glance: [
      {
        icon: "MIRROR",
        label: "Common Signs",
        text: "Harsh self-criticism, comparing yourself, needing approval, avoiding mirrors or photos",
      },
      {
        icon: "LINK",
        label: "Often Linked With",
        text: "Anxiety, depression, bullying, social media, family criticism",
      },
      {
        icon: "COMPASS",
        label: "Therapy",
        text: "Understanding where the inner critic comes from and practising new ways of relating to yourself",
      },
      {
        icon: "PILL",
        label: "Eating Concerns",
        text: "Need medical checks as well",
      },
      {
        icon: "LEAF",
        label: "Here",
        text: "A kinder, steadier view of yourself",
      },
    ],
    signsTitle: (
      <>
        Signs to <em>notice</em>.
      </>
    ),
    signsLead:
      "A few of these on most days is worth talking about, especially when they shape what you do.",
    mind: [
      "Feeling not good enough, however much you achieve",
      "Comparing yourself with others, often online",
      "Strong jealousy or fear of being left",
      "Feeling lonely even among people",
    ],
    body: [
      "Checking or hiding parts of your body",
      "Strict dieting, skipping meals or over-exercising",
    ],
    behaviour: [
      "Avoiding photos, mirrors, outings or relationships because of how you look",
    ],
    explainer: {
      eyebrow: "02 · A note on eating disorders",
      title: (
        <>
          Food, weight and <em>exercise</em>.
        </>
      ),
      lead: "If eating, weight or exercise has become a big worry, with fast weight loss, bingeing, vomiting or fainting, please see a doctor as well.",
      points: [
        {
          icon: "PILL",
          title: "Medical Monitoring",
          text: "eating disorders can affect physical health seriously and need medical checks alongside therapy.",
        },
      ],
    },
    helpTitle: (
      <>
        A kinder, steadier view of <em>yourself</em>.
      </>
    ),
    helpLead:
      "You learn where the inner critic comes from, and practise relating to yourself differently.",
    steps: [
      {
        icon: "MIND",
        n: "01",
        title: "Questioning Self-Critical Thoughts",
        text: "Noticing them and questioning them.",
      },
      {
        icon: "EAR",
        n: "02",
        title: "Understanding Where They Came From",
        text: "Without blame.",
      },
      {
        icon: "LEAF",
        n: "03",
        title: "Building Self-Respect",
        text: "Through small, real actions.",
      },
      {
        icon: "SHIELD",
        n: "04",
        title: "Healthy Boundaries",
        text: "In relationships.",
      },
      {
        icon: "MIRROR",
        n: "05",
        title: "A Kinder Relationship with Your Body",
        text: "Focused on what it does rather than how it looks.",
      },
      {
        icon: "GLOBE",
        n: "06",
        title: "Social Media That Does Not Hurt",
        text: "Using it in ways that do not hurt.",
      },
    ],
    faqs: [
      {
        q: "Is low self-esteem a mental health condition?",
        a: "Not on its own, but it often sits under anxiety, depression and relationship problems. Working on it can help these too.",
      },
      {
        q: "My teenager hates how they look. Should I worry?",
        a: "Some body worries are common in teenage years. Seek help if it stops them going out, affects eating, or leads to self-harm. See Child and teen therapy.",
      },
      {
        q: "Can therapy help with jealousy in relationships?",
        a: "Yes. Jealousy often comes from fear of loss and low self-worth. Therapy helps you understand and manage it, alone or with your partner in couples counselling.",
      },
    ],
    related: [
      {
        icon: "CLOUD",
        title: "Depression and Low Mood",
        text: "When everything feels heavy or flat.",
        href: "/depression/",
      },
      {
        icon: "MIND",
        title: "Anxiety and Panic",
        text: "Worry that won't switch off, and panic attacks.",
        href: "/anxiety/",
      },
      {
        icon: "PERSON",
        title: "Individual Therapy",
        text: "One-to-one sessions for adults.",
        href: "/individual-therapy/",
      },
      {
        icon: "CHILD",
        title: "Child and Teen Therapy",
        text: "Support for young people, with parents involved.",
        href: "/child-and-teen-therapy/",
      },
    ],
  }),

  "/grief-and-loss/": makeTreatment({
    url: "/grief-and-loss/",
    label: "Grief and Loss",
    tagLabel: "Concern · Grief and loss",
    icon: "LEAF",
    title: (
      <>
        Support through grief and <em>loss</em>
      </>
    ),
    lead: "Grief is the natural response to losing someone or something important. It can bring sadness, anger, guilt, numbness and physical tiredness, often in waves. Dr. Mithila Desai offers a space to talk about loss and find a way to carry it, in person or online.",
    glance: [
      {
        icon: "LEAF",
        label: "Losses We Help With",
        text: "Death of a family member or friend, miscarriage or stillbirth, suicide loss, divorce or separation, loss of health, job or home, a pet",
      },
      {
        icon: "CLOCK",
        label: "Timeline",
        text: "Grief has no fixed timeline",
      },
      {
        icon: "COMPASS",
        label: "Therapy",
        text: "Space to talk, remember, and adjust to life after the loss",
      },
      {
        icon: "CHILD",
        label: "Children",
        text: "Children grieve too, in their own way",
      },
      {
        icon: "LEAF",
        label: "Here",
        text: "A space to talk about loss",
      },
    ],
    signsTitle: (
      <>
        When extra support may <em>help</em>.
      </>
    ),
    signsLead:
      "Grief is natural, but some patterns are a sign more support would help.",
    mind: [
      "Being unable to accept the death or talk about it",
      "Strong guilt or anger that does not ease",
      "Feeling life has no meaning, or wanting to join the person who died",
    ],
    body: ["Not being able to work, eat or sleep"],
    behaviour: [
      "Grief that feels as raw many months later as at the start",
      "A sudden or traumatic death, or a death by suicide",
    ],
    helpTitle: (
      <>
        Space to talk, remember, and adjust to life after the <em>loss</em>.
      </>
    ),
    helpLead:
      "You talk about the person and the loss freely, without being told to \"move on\".",
    steps: [
      {
        icon: "CHAT",
        n: "01",
        title: "Talking Freely",
        text: "About the person and the loss, without being told to \"move on\".",
      },
      {
        icon: "MIND",
        n: "02",
        title: "Understanding the Mix of Feelings",
        text: "Including relief, anger or guilt.",
      },
      {
        icon: "CLOCK",
        n: "03",
        title: "Handling Rituals and Anniversaries",
        text: "And family expectations.",
      },
      {
        icon: "LINK",
        n: "04",
        title: "Keeping a Bond",
        text: "Finding a way to keep a bond with the person while building life forward.",
      },
      {
        icon: "CHILD",
        n: "05",
        title: "Supporting Children",
        text: "In the family.",
      },
    ],
    faqs: [
      {
        q: "Is it normal to feel angry after someone dies?",
        a: "Yes. Anger, guilt and even relief are common parts of grief, especially after a long illness or a complicated relationship. Talking about these feelings helps them soften.",
      },
      {
        q: "How do I talk to my child about a death?",
        a: "Use simple, honest words like \"died\", answer questions truthfully, and let them join rituals if they wish. Children may grieve in bursts and through play. Dr. Desai can guide you.",
      },
      {
        q: "When does grief become depression?",
        a: "Grief comes in waves and usually still allows moments of comfort. If low mood is constant, with hopelessness, loss of self-worth, or thoughts of suicide, please seek help. See Depression.",
      },
    ],
    related: [
      {
        icon: "CLOUD",
        title: "Depression and Low Mood",
        text: "When everything feels heavy or flat.",
        href: "/depression/",
      },
      {
        icon: "FAMILY",
        title: "Family Counselling",
        text: "Working through change and conflict together.",
        href: "/family-counselling/",
      },
      {
        icon: "PERSON",
        title: "Individual Therapy",
        text: "One-to-one sessions for adults.",
        href: "/individual-therapy/",
      },
    ],
  }),

  "/sleep-problems/": makeTreatment({
    url: "/sleep-problems/",
    label: "Sleep Problems",
    tagLabel: "Concern · Sleep problems",
    icon: "MOON",
    title: (
      <>
        Help with sleep <em>problems</em>
      </>
    ),
    lead: "Insomnia means trouble falling asleep, staying asleep or waking too early, at least three nights a week for months, leaving you tired in the day. Dr. Mithila Desai helps adults improve sleep with talking therapy, including cognitive behavioural therapy for insomnia (CBT-I), in person or online.",
    glance: [
      {
        icon: "MOON",
        label: "CBT-I",
        text: "The main recommended treatment for long-term insomnia in adults",
      },
      {
        icon: "COMPASS",
        label: "Works On",
        text: "Sleep habits, timing, and the worries that keep you awake",
      },
      {
        icon: "LINK",
        label: "Often Linked With",
        text: "Anxiety, low mood, stress, shift work, screens",
      },
      {
        icon: "PILL",
        label: "Medical Checks",
        text: "Needed for loud snoring, breathing pauses or restless legs",
      },
      {
        icon: "LEAF",
        label: "Here",
        text: "Talking therapy for insomnia, including CBT-I",
      },
    ],
    signsTitle: (
      <>
        Signs to <em>notice</em>.
      </>
    ),
    signsLead:
      "A few of these most nights, for months, is worth talking about.",
    mind: [
      "Dreading bedtime",
      "Tired, irritable or foggy during the day",
    ],
    body: [
      "Taking more than 30 minutes to fall asleep most nights",
      "Waking often, or very early, and not getting back to sleep",
    ],
    behaviour: ["Relying on sleeping pills, alcohol or screens to sleep"],
    explainer: {
      eyebrow: "02 · When to see a doctor",
      title: (
        <>
          Some sleep problems need a <em>medical check</em>.
        </>
      ),
      lead: "Loud snoring with pauses in breathing, choking at night, very strong daytime sleepiness, restless legs, or a sudden change in sleep with other symptoms need a medical check.",
      points: [
        {
          icon: "PILL",
          title: "Sleeping Tablets",
          text: "please do not stop them suddenly without your doctor.",
        },
      ],
    },
    helpTitle: (
      <>
        A steadier <em>pattern</em>, week by week.
      </>
    ),
    helpLead:
      "CBT-I works on sleep habits, timing, and the worries that keep you awake.",
    steps: [
      {
        icon: "CLIP",
        n: "01",
        title: "A Sleep Diary",
        text: "To see your real pattern.",
      },
      {
        icon: "CLOCK",
        n: "02",
        title: "A Steady Wake-Up Time",
        text: "And time in bed matched to your sleep.",
      },
      {
        icon: "DOOR",
        n: "03",
        title: "Out of Bed When Awake for Long",
        text: "So the bed links with sleep again.",
      },
      {
        icon: "LEAF",
        n: "04",
        title: "Calming a Racing Mind",
        text: "At night.",
      },
      {
        icon: "MIND",
        n: "05",
        title: "Changing Unhelpful Beliefs",
        text: "About sleep.",
      },
    ],
    faqs: [
      {
        q: "Is CBT for insomnia better than sleeping pills?",
        a: "For long-term insomnia, guidelines recommend CBT-I as the first treatment for adults, because its benefits tend to last after treatment ends. Sleeping pills may help briefly, under a doctor's care. Do not change prescribed medicine without your doctor.",
      },
      {
        q: "How long does it take?",
        a: "CBT-I usually runs over a few weeks. Sleep can feel a little worse at first as your pattern resets, then usually improves.",
      },
    ],
    related: [
      {
        icon: "MIND",
        title: "Anxiety and Panic",
        text: "Worry that won't switch off, and panic attacks.",
        href: "/anxiety/",
      },
      {
        icon: "CLOUD",
        title: "Depression and Low Mood",
        text: "When everything feels heavy or flat.",
        href: "/depression/",
      },
      {
        icon: "FLAME",
        title: "Stress and Burnout",
        text: "When pressure spills into sleep, temper and health.",
        href: "/stress-and-burnout/",
      },
    ],
    sources:
      "Sources: American Academy of Sleep Medicine, Clinical practice guideline for behavioural and psychological treatments for chronic insomnia, 2021",
  }),

  "/individual-therapy/": makeTreatment({
    url: "/individual-therapy/",
    label: "Individual Therapy",
    tagLabel: "Service · Individual therapy for adults",
    icon: "PERSON",
    title: (
      <>
        Individual therapy for <em>adults</em>
      </>
    ),
    lead: "Individual therapy is a series of private, one-to-one conversations with a trained psychologist about what is troubling you and what you would like to change. Dr. Mithila Desai offers individual therapy to adults of all ages, in person or online.",
    glance: [
      {
        icon: "USER",
        label: "Who It Is For",
        text: "Adults from 18 to older age",
      },
      {
        icon: "CHAT",
        label: "What It Is",
        text: "Regular talking sessions with one psychologist",
      },
      {
        icon: "CLOCK",
        label: "Length",
        text: (
          <>
            About <Confirm /> minutes per session
          </>
        ),
      },
      {
        icon: "CAL",
        label: "How Often",
        text: "Often weekly at first, then spaced out",
      },
      {
        icon: "GLOBE",
        label: "Where",
        text: "Borivali West or online by video",
      },
    ],
    signsTitle: (
      <>
        Who it can <em>help</em>.
      </>
    ),
    signsLead:
      "People come to individual therapy for many reasons. You do not need a diagnosis or a \"serious\" problem to start.",
    mind: [
      "Worry, panic or feeling on edge",
      "Low mood, loss of interest, or feeling flat",
      "Repeated thoughts or habits you cannot stop",
      "Feeling stuck and not knowing why",
    ],
    body: [
      "Stress at work, burnout, or trouble switching off",
      "Confidence, self-esteem, or how you see your body",
    ],
    behaviour: [
      "Relationship or family difficulties you want to work on alone first",
      "A big change: a move, a new job, retirement, becoming a parent, a breakup",
      "Grief and loss",
    ],
    helpTitle: (
      <>
        What happens in <em>therapy</em>.
      </>
    ),
    helpLead:
      "Sessions combine talking things through with practical skills, at your pace.",
    steps: [
      {
        icon: "EAR",
        n: "01",
        title: "Understanding",
        text: "The first one or two sessions focus on what is happening, how it started, and what you would like to be different.",
      },
      {
        icon: "COMPASS",
        n: "02",
        title: "A Shared Plan",
        text: "Dr. Desai explains what she suggests focusing on and why. You agree on it together.",
      },
      {
        icon: "CHAT",
        n: "03",
        title: "The Work",
        text: "Sessions combine talking things through with practical skills, such as noticing unhelpful thoughts, calming the body, solving problems, or setting boundaries.",
      },
      {
        icon: "LEAF",
        n: "04",
        title: "Between Sessions",
        text: "You may try small things in daily life and talk about how they went.",
      },
      {
        icon: "LOOP",
        n: "05",
        title: "Reviewing",
        text: "Every few sessions, you look at what has changed and whether to adjust the plan.",
      },
      {
        icon: "SHIELD",
        n: "06",
        title: "Ending Well",
        text: "When you are ready to stop, you plan how to keep what you have learnt. You can come back later if you need to.",
      },
    ],
    faqs: [
      {
        q: "How do I know if I need therapy or just need to talk to a friend?",
        a: "Friends matter, and talking to them helps. Therapy may help more if a problem has lasted for weeks, keeps coming back, affects your sleep, work or relationships, or if you would rather talk to someone outside your life. A psychologist is trained to notice patterns and help you change them, and everything stays private.",
      },
      {
        q: "How many sessions will I need?",
        a: "There is no fixed number. Some people find a few sessions enough to think a problem through. Others, especially with long-standing concerns, meet for several months. Dr. Desai will discuss this with you early and review progress regularly, so you can decide together when to space out or end sessions.",
      },
      {
        q: "What if I do not know what to talk about?",
        a: "That is common, especially at the start. Dr. Desai will ask questions to help. You can start with what happened this week, or with whatever is on your mind. Over time, important themes become clearer.",
      },
      {
        q: "Can I see Dr. Desai if I am over 60?",
        a: "Yes. Older adults come to therapy for many reasons, such as loneliness, health worries, grief, retirement or family changes. Sessions can be in person or online, and a family member can help set up the first online call if needed.",
      },
      {
        q: "Will therapy change who I am?",
        a: "No. Therapy helps you understand yourself and respond differently to what troubles you. Your values, personality and choices remain your own. Most people say they feel more like themselves, not less.",
      },
    ],
    related: [
      {
        icon: "MIND",
        title: "Anxiety and Panic",
        text: "Worry that won't switch off, and panic attacks.",
        href: "/anxiety/",
      },
      {
        icon: "CLOUD",
        title: "Depression and Low Mood",
        text: "When everything feels heavy or flat.",
        href: "/depression/",
      },
      {
        icon: "FLAME",
        title: "Stress and Burnout",
        text: "When pressure spills into sleep, temper and health.",
        href: "/stress-and-burnout/",
      },
      {
        icon: "GLOBE",
        title: "Online Therapy",
        text: "Sessions by video, from home or abroad.",
        href: "/online-therapy/",
      },
    ],
    sources:
      "Sources: World Health Organization, Mental health: strengthening our response · American Psychological Association, Understanding psychotherapy and how it works",
  }),

  "/child-and-teen-therapy/": makeTreatment({
    url: "/child-and-teen-therapy/",
    label: "Child and Teen Therapy",
    tagLabel: "Service · Child and teen therapy",
    icon: "CHILD",
    title: (
      <>
        Therapy for children and <em>teenagers</em>
      </>
    ),
    lead: (
      <>
        Child and teen therapy helps young people understand and handle
        feelings, behaviour and pressures that are hard to manage alone. Dr.
        Mithila Desai works with children <Confirm>from age X</Confirm> and
        teenagers, and with their parents, using play, talk and practical skills
        suited to their age.
      </>
    ),
    glance: [
      {
        icon: "CHILD",
        label: "Ages",
        text: (
          <>
            <Confirm>youngest age</Confirm> to 17
          </>
        ),
      },
      {
        icon: "FAMILY",
        label: "Who Comes",
        text: "The young person, with a parent for part or all of some sessions",
      },
      {
        icon: "LEAF",
        label: "Methods",
        text: "Talk, play, drawing and activities for younger children; conversation and skills for teenagers",
      },
      {
        icon: "SCHOOL",
        label: "School",
        text: "With consent, Dr. Desai can work with teachers or school counsellors",
      },
      {
        icon: "GLOBE",
        label: "Where",
        text: "Borivali West, or online for many teenagers",
      },
    ],
    signsTitle: (
      <>
        Signs a child or teenager may need <em>support</em>.
      </>
    ),
    signsLead:
      "Every child has hard days. Consider speaking to a psychologist if, for several weeks:",
    mind: [
      "They seem worried, fearful or clingy much of the time",
      "Their mood is low, irritable or flat, or they have lost interest in things they enjoyed",
      "Repeated rituals or thoughts they cannot stop",
      "They talk about hurting themselves or not wanting to live",
    ],
    body: ["Sleep, eating or energy has changed a lot"],
    behaviour: [
      "Tantrums, anger or defiance are much more than other children their age",
      "School refusal, falling marks or trouble with attention and learning",
      "They are being bullied, including online, or are bullying others",
      "They have been through a frightening or painful event",
    ],
    explainer: {
      eyebrow: "02 · The role of parents",
      title: (
        <>
          Parents are part of the <em>work</em>.
        </>
      ),
      lead: "Children change fastest when the adults around them change too. This is not a sign of blame. It is one of the most useful parts of child therapy.",
      points: [
        {
          icon: "FAMILY",
          title: "Parent Sessions",
          text: "Dr. Desai may suggest some sessions with parents alone, to plan routines, responses to difficult behaviour, or ways to talk about feelings at home.",
        },
        {
          icon: "LOCK",
          title: "Privacy for Teenagers",
          text: "she explains at the start what stays private, what she shares with parents in general terms, and that she will tell parents if there is a risk of serious harm.",
        },
      ],
    },
    helpTitle: (
      <>
        What happens at the first <em>sessions</em>.
      </>
    ),
    helpLead:
      "Sessions are private, unhurried and planned around your child's needs.",
    steps: [
      {
        icon: "FAMILY",
        n: "01",
        title: "Parents First",
        text: (
          <>
            Dr. Desai usually meets the parent or parents to hear the history,
            concerns and what has been tried <Confirm />
          </>
        ),
      },
      {
        icon: "CHILD",
        n: "02",
        title: "Meeting the Child",
        text: "With younger children, through play and drawing. With teenagers, a private conversation, with clear rules on confidentiality.",
      },
      {
        icon: "SCHOOL",
        n: "03",
        title: "Information From School",
        text: "If helpful and with your permission.",
      },
      {
        icon: "COMPASS",
        n: "04",
        title: "A Plan",
        text: "Shared with parents in plain words: what to work on, how often to meet, and what parents can do at home.",
      },
      {
        icon: "CLIP",
        n: "05",
        title: "An Assessment",
        text: "Only if a specific question needs one, such as attention or learning.",
      },
    ],
    faqs: [
      {
        q: "How do I explain to my child that they are seeing a psychologist?",
        a: "Keep it simple and honest. For a young child: \"We are going to meet someone who helps children with big feelings. You can play and talk.\" For a teenager: \"I have noticed things have been hard. This is someone outside the family you can talk to privately.\" Avoid presenting it as a punishment.",
      },
      {
        q: "Will my child be labelled?",
        a: "Not unless there is a clear reason. Most child therapy focuses on understanding and helping, not on giving a label. If an assessment suggests a condition such as ADHD, Dr. Desai will explain what it means and how it can help your child get the right support at home and school.",
      },
      {
        q: "Can my teenager see Dr. Desai online?",
        a: "Often, yes. Many teenagers are comfortable on video. A parent gives consent and helps set up a private space at home. Younger children usually do better in person, where play materials are available.",
      },
      {
        q: "How long does child therapy take?",
        a: "It varies with the concern and the child's age. Some families see change in a few months; others need longer support, especially when school or family changes are involved. Dr. Desai will review progress with you regularly.",
      },
      {
        q: "Will you talk to my child's school?",
        a: "Only with your written consent. Working with a class teacher or school counsellor can help a child a lot, especially for anxiety, attention or behaviour at school. Dr. Desai shares only what is needed to support your child.",
      },
    ],
    related: [
      {
        icon: "CLIP",
        title: "ADHD and Learning Assessment",
        text: "Clear answers about attention and learning.",
        href: "/psychological-assessment/adhd-learning-neurodiversity/",
      },
      {
        icon: "MIND",
        title: "Anxiety and Panic",
        text: "Worry that won't switch off, and panic attacks.",
        href: "/anxiety/",
      },
      {
        icon: "FAMILY",
        title: "Family Counselling",
        text: "Working through change and conflict together.",
        href: "/family-counselling/",
      },
      {
        icon: "SCHOOL",
        title: "Schools and Colleges",
        text: "Programmes for students and teachers.",
        href: "/schools-and-colleges/",
      },
    ],
    sources:
      "Sources: UNICEF, The State of the World's Children 2021: On My Mind · NIMHANS, child and adolescent mental health resources",
  }),

  "/couples-counselling/": makeTreatment({
    url: "/couples-counselling/",
    label: "Couples and Marriage Counselling",
    tagLabel: "Service · Couples and marriage counselling",
    icon: "RINGS",
    title: (
      <>
        Couples and marriage <em>counselling</em>
      </>
    ),
    lead: "Couples counselling gives two partners a safe, neutral space to talk about what is going wrong between them and learn new ways to communicate. Dr. Mithila Desai sees married and unmarried couples, couples before marriage, and couples deciding about their future, in person or online.",
    glance: [
      {
        icon: "RINGS",
        label: "Who It Is For",
        text: "Couples, married or not, and couples planning to marry",
      },
      {
        icon: "FAMILY",
        label: "Who Comes",
        text: "Usually both partners together, sometimes one at a time",
      },
      {
        icon: "CLOCK",
        label: "Length",
        text: (
          <>
            About <Confirm /> minutes per session
          </>
        ),
      },
      {
        icon: "SHIELD",
        label: "Her Role",
        text: "Neutral; she does not take sides",
      },
      {
        icon: "GLOBE",
        label: "Where",
        text: "Borivali West or online",
      },
    ],
    signsTitle: (
      <>
        Common reasons couples <em>come</em>.
      </>
    ),
    signsLead:
      "Couples come for many reasons; these are the patterns she hears most.",
    mind: [
      "Feeling distant, unheard or taken for granted",
      "Trust broken by an affair or secrets",
      "One partner's depression, anxiety or habits affecting both",
    ],
    body: ["Intimacy problems"],
    behaviour: [
      "Frequent arguments, or not talking at all",
      "Differences over money, children, in-laws or joint family life",
      "Stress from a new baby, illness, job loss or a move",
      "Pre-marital questions: expectations, roles, family, finances",
      "Deciding whether to stay together or separate with less harm",
    ],
    explainer: {
      eyebrow: "02 · Safety first",
      title: (
        <>
          When joint sessions are not <em>safe</em>.
        </>
      ),
      lead: "If you feel afraid of your partner, or there is physical, sexual or emotional abuse, joint sessions are not safe.",
      points: [
        {
          icon: "SHIELD",
          title: "Individual Support Instead",
          text: "Dr. Desai will offer individual support. If you are in danger, call 112, or the women's helpline 181.",
        },
        {
          icon: "RINGS",
          title: "Pre-Marital Counselling",
          text: "a few sessions before marriage to talk openly about expectations around family, work, money, children, faith and roles at home. It is not a test of whether to marry.",
        },
      ],
    },
    helpTitle: (
      <>
        What happens in <em>sessions</em>.
      </>
    ),
    helpLead:
      "A neutral space where the pattern, not a person, is the problem.",
    steps: [
      {
        icon: "CHAT",
        n: "01",
        title: "A Joint First Session",
        text: "Each partner describes the problem in their own words, without interruption.",
      },
      {
        icon: "PERSON",
        n: "02",
        title: "Individual Time",
        text: "Dr. Desai may meet each partner alone once, to hear what is hard to say in front of the other.",
      },
      {
        icon: "LOOP",
        n: "03",
        title: "Patterns",
        text: "She helps you see the cycle you get stuck in, which is usually more useful than deciding who is right.",
      },
      {
        icon: "TOOL",
        n: "04",
        title: "Skills",
        text: "Listening, speaking without blame, handling conflict, and repairing after a fight.",
      },
      {
        icon: "LEAF",
        n: "05",
        title: "Practice",
        text: "Small, agreed changes at home, reviewed in the next session.",
      },
    ],
    faqs: [
      {
        q: "What if my partner will not come?",
        a: "You can start alone. Individual sessions can help you understand the relationship, decide what you want, and change your side of the pattern, which often changes the whole dynamic. Some partners agree to join later once they see it is not about blame.",
      },
      {
        q: "Will the psychologist decide whether we should separate?",
        a: "No. Dr. Desai does not tell couples to stay together or separate. She helps you both understand what is happening and what each of you wants, so you can make your own decision with clearer minds. If you decide to separate, sessions can help you do it with less conflict, especially when children are involved.",
      },
      {
        q: "Is it confidential from our families?",
        a: "Yes. Nothing is shared with parents, in-laws or anyone else without your consent, apart from the usual safety exceptions. Many couples choose online sessions or a time that does not draw questions at home.",
      },
      {
        q: "How long does couples counselling take?",
        a: "It varies. Pre-marital counselling is often a handful of sessions. Couples working through long-standing conflict or broken trust often meet over several months. Dr. Desai reviews progress with both of you regularly.",
      },
      {
        q: "Do you see same-sex couples?",
        a: (
          <>
            Yes <Confirm />. All couples are welcome. See LGBTQIA+ affirmative
            counselling.
          </>
        ),
      },
    ],
    related: [
      {
        icon: "FAMILY",
        title: "Family Counselling",
        text: "Working through change and conflict together.",
        href: "/family-counselling/",
      },
      {
        icon: "PERSON",
        title: "Individual Therapy",
        text: "One-to-one sessions for adults.",
        href: "/individual-therapy/",
      },
      {
        icon: "FLAME",
        title: "Stress and Burnout",
        text: "When pressure spills into sleep, temper and health.",
        href: "/stress-and-burnout/",
      },
      {
        icon: "GLOBE",
        title: "Online Therapy",
        text: "Sessions by video, from home or abroad.",
        href: "/online-therapy/",
      },
    ],
    sources:
      "Sources: American Psychological Association, Couples therapy resources · Gottman J., Silver N., The Seven Principles for Making Marriage Work (paraphrased ideas only)",
  }),

  "/family-counselling/": makeTreatment({
    url: "/family-counselling/",
    label: "Family Counselling and Parenting Support",
    tagLabel: "Service · Family counselling and parenting support",
    icon: "FAMILY",
    title: (
      <>
        Family counselling and parenting <em>support</em>
      </>
    ),
    lead: "Family counselling brings family members together to understand a shared difficulty and find better ways to live with each other. Dr. Mithila Desai offers family sessions and parenting support for families with children, teenagers or adult members, including joint families.",
    glance: [
      {
        icon: "FAMILY",
        label: "Who Comes",
        text: "Parents, children, grandparents or adult siblings, in different combinations",
      },
      {
        icon: "CHAT",
        label: "Common Reasons",
        text: "Conflict, change, a child's behaviour, illness or loss",
      },
      {
        icon: "USER",
        label: "Parenting Support",
        text: "Sessions for parents alone are welcome",
      },
      {
        icon: "GLOBE",
        label: "Where",
        text: "Borivali West, or online for some sessions",
      },
      {
        icon: "LEAF",
        label: "Here",
        text: "Better ways to live with each other",
      },
    ],
    signsTitle: (
      <>
        When family counselling can <em>help</em>.
      </>
    ),
    signsLead:
      "Many families come during a change, before small problems grow.",
    mind: [
      "A family member's illness, disability, mental health condition or substance use",
      "A death in the family",
    ],
    body: [],
    behaviour: [
      "Constant arguments, or members who no longer talk",
      "A teenager and parents who cannot discuss anything calmly",
      "Difficult behaviour in a child, and parents who disagree on how to respond",
      "A new marriage, a new baby, a move, or a parent moving in",
      "Joint family tensions and boundaries",
      "Separation or divorce, and helping children through it",
    ],
    explainer: {
      eyebrow: "02 · Parenting support",
      title: (
        <>
          Help for <em>parents</em>, on their own.
        </>
      ),
      lead: "Parents can come on their own for help with everyday and difficult moments.",
      points: [
        {
          icon: "LEAF",
          title: "Everyday Life",
          text: "routines, screen time and sleep; responding to tantrums, defiance or aggression; supporting an anxious or withdrawn child.",
        },
        {
          icon: "CHAT",
          title: "Harder Conversations",
          text: "talking to children about difficult topics; parenting a teenager while staying connected; co-parenting after separation.",
        },
      ],
    },
    helpTitle: (
      <>
        What happens in <em>sessions</em>.
      </>
    ),
    helpLead: "Different combinations; the pattern, not a person, is the focus.",
    steps: [
      {
        icon: "EAR",
        n: "01",
        title: "Hearing Everyone",
        text: "Each person gets a turn to speak and be heard.",
      },
      {
        icon: "LOOP",
        n: "02",
        title: "Looking at Patterns",
        text: "Dr. Desai helps the family see what keeps a problem going, rather than who is to blame.",
      },
      {
        icon: "LEAF",
        n: "03",
        title: "Small Changes",
        text: "The family agrees on practical steps at home.",
      },
      {
        icon: "FAMILY",
        n: "04",
        title: "Different Combinations",
        text: "Some sessions include everyone, some only parents or only siblings.",
      },
    ],
    faqs: [
      {
        q: "Does everyone in the family have to come?",
        a: "No. It often helps to have the people most involved, but sessions can start with whoever is willing. Change in one or two people often helps the whole family. Dr. Desai will suggest who to include as things progress.",
      },
      {
        q: "Can grandparents join?",
        a: "Yes. In many Indian families grandparents play a big role in raising children, and including them can make plans easier to follow at home.",
      },
      {
        q: "Is family counselling only for big problems?",
        a: "No. Many families come during a change, such as a new baby, a move or a child starting college, to adjust well before small problems grow.",
      },
      {
        q: "What if a family member has a mental health condition?",
        a: "Family sessions can help everyone understand the condition, reduce blame and conflict, and support recovery. If medicine is involved, Dr. Desai can work alongside the psychiatrist with consent.",
      },
    ],
    related: [
      {
        icon: "CHILD",
        title: "Child and Teen Therapy",
        text: "Support for young people, with parents involved.",
        href: "/child-and-teen-therapy/",
      },
      {
        icon: "RINGS",
        title: "Couples Counselling",
        text: "For couples who feel stuck, before or after marriage.",
        href: "/couples-counselling/",
      },
      {
        icon: "LEAF",
        title: "Grief and Loss",
        text: "Living with a death or another big loss.",
        href: "/grief-and-loss/",
      },
    ],
    sources:
      "Sources: NIMHANS, family interventions in mental health (resources for families)",
  }),

  "/online-therapy/": makeTreatment({
    url: "/online-therapy/",
    label: "Online Therapy",
    tagLabel: "Service · Online therapy",
    icon: "GLOBE",
    title: (
      <>
        Online therapy by <em>video</em>
      </>
    ),
    lead: "Online therapy is a scheduled talking session with a psychologist by video, from a private place of your choice. Dr. Mithila Desai offers online sessions to adults, teenagers, couples and families across India and abroad, using the same approach as sessions in her Borivali West room.",
    glance: [
      {
        icon: "VIDEO",
        label: "How",
        text: (
          <>
            Video call at a booked time <Confirm>platform</Confirm>
          </>
        ),
      },
      {
        icon: "FAMILY",
        label: "Who",
        text: "Adults, teenagers with parental consent, couples, and some family sessions",
      },
      {
        icon: "TOOL",
        label: "You Need",
        text: "A private room, headphones, a charged device, steady internet",
      },
      {
        icon: "CAL",
        label: "Payment",
        text: (
          <>
            <Confirm>UPI, bank transfer</Confirm> before or after the session
          </>
        ),
      },
      {
        icon: "SHIELD",
        label: "Not Suitable For",
        text: "Emergencies, and most young children",
      },
    ],
    signsTitle: (
      <>
        Who online therapy <em>suits</em>.
      </>
    ),
    signsLead: "Online sessions suit many situations, not only distance.",
    mind: ["People who feel more at ease talking from home"],
    body: [
      "People with health conditions or disabilities that make travel hard",
    ],
    behaviour: [
      "People who live outside Borivali or Mumbai",
      "Busy working people who cannot travel during the day",
      "Parents with small children at home",
      "Clients who started in person and have moved",
    ],
    explainer: {
      eyebrow: "02 · Privacy online",
      title: (
        <>
          Private on your <em>side</em> too.
        </>
      ),
      lead: (
        <>
          Dr. Desai joins from a private room <Confirm />. We do not record
          sessions <Confirm />, and we ask that you do not either.
        </>
      ),
      points: [
        {
          icon: "LOCK",
          title: "Your Space",
          text: "use headphones and a room where you cannot be overheard. Some people sit in a parked car or go for a walk. Avoid shared or office devices if possible. If someone walks in, you can pause or switch to chat.",
        },
        {
          icon: "SHIELD",
          title: "When Online Is Not the Right Choice",
          text: "if you are at high risk of harming yourself, in crisis, or for most young children, in-person or emergency care is better. Dr. Desai may suggest in-person sessions or another service.",
        },
      ],
    },
    helpTitle: (
      <>
        How it <em>works</em>.
      </>
    ),
    helpLead:
      "A booked video session, run the same way as a session in her room.",
    steps: [
      {
        icon: "CAL",
        n: "01",
        title: "Book",
        text: "By form, phone or WhatsApp, and choose \"Online\".",
      },
      {
        icon: "TEL",
        n: "02",
        title: "Receive a Link",
        text: "And a short note on privacy and what to do if the call drops.",
      },
      {
        icon: "SHIELD",
        n: "03",
        title: "First Session",
        text: "Dr. Desai confirms your identity and your location during the session, and asks for an emergency contact. This is standard good practice.",
      },
      {
        icon: "CHAT",
        n: "04",
        title: "Sessions",
        text: "Follow the same structure as in person.",
      },
      {
        icon: "CAL",
        n: "05",
        title: "Payment",
        text: <Confirm>how</Confirm>,
      },
    ],
    faqs: [
      {
        q: "Does online therapy really work?",
        a: "For many common concerns, including anxiety, depression and stress, studies show video therapy can work about as well as meeting in person. What matters most is the relationship with your therapist and your regular attendance. Some people find it easier to open up from home.",
      },
      {
        q: "What happens if the internet cuts out?",
        a: "Dr. Desai will call you back on the link, or on your phone if the video fails. Agree on this at the first session. If you are cut off during a difficult moment, she will try to reach you.",
      },
      {
        q: "Can couples have online sessions?",
        a: "Yes, from the same room or, if needed, from two different places. Both partners need privacy and headphones if apart.",
      },
      {
        q: "Is online therapy cheaper?",
        a: (
          <>
            <Confirm>same fee or different</Confirm>. We do not list fees on the
            website; please ask when you book.
          </>
        ),
      },
      {
        q: "Can I do online sessions from my office?",
        a: (
          <>
            Only if you have a private room where you cannot be overheard. Many
            people prefer an early morning or evening slot at home{" "}
            <Confirm>such slots exist</Confirm>.
          </>
        ),
      },
    ],
    related: [
      {
        icon: "GLOBE",
        title: "Indians Abroad",
        text: "Sessions planned around your time zone.",
        href: "/online-therapy/indians-abroad/",
      },
      {
        icon: "PERSON",
        title: "Individual Therapy",
        text: "One-to-one sessions for adults.",
        href: "/individual-therapy/",
      },
      {
        icon: "MIND",
        title: "Anxiety and Panic",
        text: "Worry that won't switch off, and panic attacks.",
        href: "/anxiety/",
      },
      {
        icon: "RINGS",
        title: "Couples Counselling",
        text: "For couples who feel stuck, before or after marriage.",
        href: "/couples-counselling/",
      },
    ],
    sources:
      "Sources: Fernandez E. et al., Live psychotherapy by video versus in-person: a meta-analysis of efficacy, Clinical Psychology and Psychotherapy, 2021 · Ministry of Health and Family Welfare, Tele-MANAS programme",
  }),

  "/online-therapy/indians-abroad/": makeTreatment({
    url: "/online-therapy/indians-abroad/",
    label: "Online Therapy for Indians Abroad",
    tagLabel: "Service · Online therapy for Indians abroad",
    icon: "GLOBE",
    title: (
      <>
        Online therapy for Indians <em>abroad</em>
      </>
    ),
    lead: "Many Indians living abroad prefer a therapist who understands their language, family life and culture. Dr. Mithila Desai offers online video sessions to Indians and people of Indian origin living outside India, at times planned around their time zone.",
    glance: [
      {
        icon: "USER",
        label: "Who",
        text: "Adults and couples living outside India",
      },
      {
        icon: "VIDEO",
        label: "How",
        text: (
          <>
            Video sessions at an agreed time <Confirm>platform</Confirm>
          </>
        ),
      },
      {
        icon: "CLOCK",
        label: "Time Zones",
        text: <Confirm>early morning or late evening India time slots</Confirm>,
      },
      {
        icon: "SHIELD",
        label: "Registration",
        text: "Dr. Desai is registered in India; see the note below",
      },
      {
        icon: "TEL",
        label: "Emergencies",
        text: "Please use local emergency services where you live",
      },
    ],
    signsTitle: (
      <>
        Why people choose a therapist from <em>India</em>.
      </>
    ),
    signsLead: "Comfort, language and shared understanding are common reasons.",
    mind: [
      "Loneliness and identity questions after a move",
      "Worry about ageing parents in India",
    ],
    body: [],
    behaviour: [
      "Speaking in your own language, or switching between languages",
      "Not having to explain joint families, in-law expectations, arranged marriage, or the pressure of being \"the one who went abroad\"",
      "Relationship strain across distance or cultures",
      "Pressure in a new job, study or visa situation",
    ],
    explainer: {
      eyebrow: "02 · Important to know",
      title: (
        <>
          What online care from India can and cannot <em>do</em>.
        </>
      ),
      lead: "Dr. Desai is registered as a clinical psychologist in India. Some countries and states have rules about receiving care from professionals registered elsewhere.",
      points: [
        {
          icon: "SHIELD",
          title: "Your Responsibility",
          text: "you are responsible for checking whether this applies to you.",
        },
        {
          icon: "TEL",
          title: "No Emergency Care Abroad",
          text: "she cannot arrange emergency care in your country. At the first session, she will ask you for a local emergency contact and the emergency number where you live.",
        },
        {
          icon: "PILL",
          title: "Medicine",
          text: "for medicine, you will need a doctor or psychiatrist licensed where you live.",
        },
      ],
    },
    helpTitle: (
      <>
        How sessions work across time <em>zones</em>.
      </>
    ),
    helpLead: "Booking is simple; the schedule is set around your time zone.",
    steps: [
      {
        icon: "GLOBE",
        n: "01",
        title: "Tell Us Your City",
        text: "Tell us your city and time zone when you book.",
      },
      {
        icon: "CLOCK",
        n: "02",
        title: "A Slot That Fits",
        text: (
          <>
            We offer slots that fall in your morning or evening <Confirm />.
          </>
        ),
      },
      {
        icon: "CAL",
        n: "03",
        title: "Clear Confirmation",
        text: "The confirmation shows the time in both India time and your local time.",
      },
      {
        icon: "LOOP",
        n: "04",
        title: "Daylight Saving",
        text: "Daylight saving changes are checked twice a year.",
      },
    ],
    faqs: [
      {
        q: "Is it legal for me to have therapy with someone in India?",
        a: "In many countries, adults can choose to speak with a professional abroad, but rules differ, especially for health insurance or for people in certain jobs. Please check what applies to you. Dr. Desai practises under Indian registration and law, and the Terms of Use explain this.",
      },
      {
        q: "Will my sessions be private if I live with family abroad?",
        a: "Choose a time and place where you cannot be overheard, and use headphones. Some people use their car or a booked room at work. Dr. Desai will help you plan this at the first session.",
      },
      {
        q: "How do I pay from abroad?",
        a: <Confirm>method, currency</Confirm>,
      },
      {
        q: "What if I am in a crisis?",
        a: "Call your local emergency number straight away, or go to the nearest hospital. Local emergency services can reach you fastest.",
      },
    ],
    related: [
      {
        icon: "GLOBE",
        title: "Online Therapy",
        text: "Video sessions from anywhere in India.",
        href: "/online-therapy/",
      },
      {
        icon: "PERSON",
        title: "Individual Therapy",
        text: "One-to-one sessions for adults.",
        href: "/individual-therapy/",
      },
      {
        icon: "RINGS",
        title: "Couples Counselling",
        text: "For couples who feel stuck, before or after marriage.",
        href: "/couples-counselling/",
      },
    ],
  }),

  "/addiction-and-habits/": makeTreatment({
    url: "/addiction-and-habits/",
    label: "Habits, Addiction and Dependence",
    tagLabel: "Concern · Habits, addiction and dependence",
    icon: "LOOP",
    title: (
      <>
        Help with habits, addiction and <em>dependence</em>
      </>
    ),
    lead: "A habit becomes a problem when it is hard to control and starts to harm your health, relationships, work or money. Dr. Mithila Desai offers counselling for people who want to cut down or stop alcohol, tobacco, cannabis, gaming, gambling, phone use and other habits, and support for their families.",
    glance: [
      {
        icon: "LOOP",
        label: "Habits We Can Help With",
        text: (
          <>
            Alcohol, tobacco and nicotine, cannabis, gaming, betting, phone and
            social media, pornography, shopping <Confirm>list</Confirm>
          </>
        ),
      },
      {
        icon: "COMPASS",
        label: "Counselling",
        text: "Understanding triggers, building motivation, planning change, preventing relapse",
      },
      {
        icon: "PILL",
        label: "Medical Care",
        text: "Needed for withdrawal from alcohol and some drugs",
      },
      {
        icon: "FAMILY",
        label: "Families",
        text: "Support for family members, even if the person is not ready",
      },
      {
        icon: "LEAF",
        label: "Here",
        text: "Counselling and family support",
      },
    ],
    signsTitle: (
      <>
        Signs a habit has become a <em>problem</em>.
      </>
    ),
    signsLead:
      "A habit is worth talking about when it is hard to control and starts to harm your health, relationships, work or money.",
    mind: [
      "Cravings or restlessness without it",
      "Trying to cut down and not managing",
    ],
    body: [],
    behaviour: [
      "Using more, or for longer, than you planned",
      "Hiding it from family",
      "Missing work, study or responsibilities",
      "Money problems, arguments or health effects",
    ],
    explainer: {
      eyebrow: "02 · Important",
      title: (
        <>
          Medical safety <em>first</em>.
        </>
      ),
      lead: "Stopping alcohol suddenly after heavy daily drinking, or stopping some sedative medicines, can cause dangerous withdrawal, including seizures.",
      points: [
        {
          icon: "PILL",
          title: "See a Doctor First",
          text: "please speak to a doctor or psychiatrist before stopping. Psychologists do not provide medical detox. Dr. Desai can work alongside your doctor or a de-addiction centre.",
        },
      ],
    },
    helpTitle: (
      <>
        Understanding the habit, then changing <em>it</em>.
      </>
    ),
    helpLead:
      "Counselling looks honestly at what the habit does for you and what it costs.",
    steps: [
      {
        icon: "MIND",
        n: "01",
        title: "What It Does and Costs",
        text: "Looking honestly at what the habit does for you and what it costs.",
      },
      {
        icon: "COMPASS",
        n: "02",
        title: "Your Reasons for Change",
        text: "Finding your reasons for change.",
      },
      {
        icon: "LOOP",
        n: "03",
        title: "Identifying Triggers",
        text: "People, places, feelings, times of day.",
      },
      {
        icon: "TOOL",
        n: "04",
        title: "Plans for Cravings",
        text: "Practical plans for cravings and difficult moments.",
      },
      {
        icon: "LEAF",
        n: "05",
        title: "Rebuilding",
        text: "Sleep, routine and relationships.",
      },
      {
        icon: "SHIELD",
        n: "06",
        title: "Planning for Slips",
        text: "Slips are common and can be learnt from.",
      },
    ],
    faqs: [
      {
        q: "Do I have to stop completely?",
        a: "Not always at the start. Some people begin by cutting down. For some habits, especially heavy alcohol use, stopping fully with medical support is safer. Dr. Desai will discuss what fits your situation.",
      },
      {
        q: "Can you help with tobacco and gutka?",
        a: "Yes. Counselling makes quitting more likely to last. The National Tobacco Quitline (1800-112-356) also offers free support, and a doctor can advise on nicotine replacement.",
      },
      {
        q: "My son games all night. Is that addiction?",
        a: "It may be, if gaming takes over sleep, school, friendships and family life and he cannot cut down. Dr. Desai can assess this and work with you and him.",
      },
    ],
    related: [
      {
        icon: "FLAME",
        title: "Stress and Burnout",
        text: "When pressure spills into sleep, temper and health.",
        href: "/stress-and-burnout/",
      },
      {
        icon: "CLOUD",
        title: "Depression and Low Mood",
        text: "When everything feels heavy or flat.",
        href: "/depression/",
      },
      {
        icon: "FAMILY",
        title: "Family Counselling",
        text: "Working through change and conflict together.",
        href: "/family-counselling/",
      },
    ],
    sources:
      "Sources: World Health Organization, ICD-11 descriptions of gaming disorder and substance use disorders · National Drug Dependence Treatment Centre, AIIMS, Magnitude of Substance Use in India, 2019",
  }),

  "/self-harm-and-suicidal-thoughts/": makeTreatment({
    url: "/self-harm-and-suicidal-thoughts/",
    crisis: true,
    label: "Self-Harm and Suicidal Thoughts",
    tagLabel: "Support · Self-harm and suicidal thoughts",
    icon: "HEART",
    title: (
      <>
        Help with self-harm and suicidal <em>thoughts</em>
      </>
    ),
    lead: "Thoughts of suicide and urges to self-harm are signs of deep distress, not attention-seeking or weakness. They can be talked about safely, and they can ease with support. Dr. Mithila Desai offers ongoing therapy for teenagers and adults who self-harm or have suicidal thoughts, alongside emergency and psychiatric care when needed.",
    glance: [
      {
        icon: "TEL",
        label: "Right Now",
        text: "Call 112 or Tele-MANAS 14416 if you are in danger",
      },
      {
        icon: "COMPASS",
        label: "Ongoing Therapy",
        text: "To understand the pain behind the thoughts and build safer ways to cope",
      },
      {
        icon: "PEN",
        label: "Safety Plan",
        text: "A written, personal plan for difficult moments",
      },
      {
        icon: "PILL",
        label: "Psychiatrist",
        text: "Often involved too, especially when risk is high",
      },
      {
        icon: "FAMILY",
        label: "Families",
        text: "Guidance for parents and partners",
      },
    ],
    signsTitle: (
      <>
        If you <em>self-harm</em>.
      </>
    ),
    signsLead:
      "You are not alone. Many people, especially teenagers and young adults, hurt themselves to cope with feelings that seem unbearable.",
    mind: ["Thoughts of ending your life, or urges to hurt yourself"],
    body: [],
    behaviour: [
      "Look after any wounds. If an injury is deep, will not stop bleeding, or you have swallowed anything harmful, go to a hospital emergency department now",
      "Telling one trusted person is a strong first step",
    ],
    explainer: {
      eyebrow: "02 · For parents and partners",
      title: (
        <>
          How to help someone you <em>love</em>.
        </>
      ),
      lead: "Stay calm, listen, and ask directly about suicide. Asking does not put the idea in someone's head.",
      points: [
        {
          icon: "CHAT",
          title: "Do Not Keep It Secret",
          text: "do not promise to keep it secret if their life is at risk.",
        },
        {
          icon: "LOCK",
          title: "Make Home Safer",
          text: "remove or lock away medicines, sharp objects and other means at home.",
        },
        {
          icon: "HEART",
          title: "Get Support Too",
          text: "help them get support, and get support for yourself too.",
        },
      ],
    },
    helpTitle: (
      <>
        A safe place, and a safety <em>plan</em>.
      </>
    ),
    helpLead:
      "Therapy gives you a safe, non-judging place to talk about what is happening.",
    steps: [
      {
        icon: "EAR",
        n: "01",
        title: "A Safe, Non-Judging Place",
        text: "To talk about what is happening.",
      },
      {
        icon: "PEN",
        n: "02",
        title: "A Safety Plan",
        text: "Warning signs, things that help, people to call, and how to make your surroundings safer.",
      },
      {
        icon: "MIND",
        n: "03",
        title: "Understanding the Urges",
        text: "What the urges do for you, and finding other ways to get the same relief.",
      },
      {
        icon: "COMPASS",
        n: "04",
        title: "What Lies Underneath",
        text: "Working on depression, trauma, relationships or pressure.",
      },
      {
        icon: "FAMILY",
        n: "05",
        title: "Involving Others",
        text: "Family or a psychiatrist when needed, with your knowledge.",
      },
    ],
    faqs: [
      {
        q: "If I tell Dr. Desai I have suicidal thoughts, will she call the police?",
        a: "No. Talking about suicidal thoughts is a normal and important part of therapy. Dr. Desai will listen and help you make a safety plan. Only if she believes your life is in immediate danger would she act to get urgent help, and she will try to involve you in that decision.",
      },
      {
        q: "Is attempting suicide a crime in India?",
        a: "Under the Mental Healthcare Act 2017, a person who attempts suicide is presumed to be under severe stress and should receive care, not punishment. Please do not let fear stop you from getting help.",
      },
      {
        q: "My teenager self-harms. What should I do first?",
        a: "Stay calm, check any injury needs medical care, and tell them you are glad they told you. Then book support. See Child and teen therapy. If they talk of suicide, call Tele-MANAS 14416 for guidance.",
      },
    ],
    related: [
      {
        icon: "SHIELD",
        title: "Get Help Now",
        text: "Emergency numbers and crisis support.",
        href: "/get-help-now/",
      },
      {
        icon: "CLOUD",
        title: "Depression and Low Mood",
        text: "When everything feels heavy or flat.",
        href: "/depression/",
      },
      {
        icon: "SHIELD",
        title: "Trauma",
        text: "After frightening, painful or overwhelming experiences.",
        href: "/trauma/",
      },
      {
        icon: "CHILD",
        title: "Child and Teen Therapy",
        text: "Support for young people, with parents involved.",
        href: "/child-and-teen-therapy/",
      },
    ],
    sources:
      "Sources: World Health Organization, Suicide fact sheet, 2024; LIVE LIFE implementation guide, 2021 · Mental Healthcare Act 2017, Section 115 · Ministry of Health and Family Welfare, National Suicide Prevention Strategy, 2022",
  }),

  "/lgbtqia-affirmative-counselling/": makeTreatment({
    url: "/lgbtqia-affirmative-counselling/",
    label: "LGBTQIA+ Affirmative Counselling",
    tagLabel: "Service · LGBTQIA+ affirmative counselling",
    icon: "HEART",
    title: (
      <>
        LGBTQIA+ affirmative <em>counselling</em>
      </>
    ),
    lead: "Affirmative counselling means therapy in which your sexual orientation and gender identity are respected as natural parts of who you are, not as problems to be fixed. Dr. Mithila Desai offers confidential, affirmative counselling for lesbian, gay, bisexual, transgender, queer, intersex, asexual and questioning people, their partners and their families, in person or online.",
    glance: [
      {
        icon: "USER",
        label: "Who",
        text: "LGBTQIA+ individuals, couples, and families who want to understand and support a loved one",
      },
      {
        icon: "SHIELD",
        label: "What We Do Not Do",
        text: "Any attempt to change someone's orientation or gender identity",
      },
      {
        icon: "LOCK",
        label: "Confidential",
        text: "Nothing is shared with family without your consent",
      },
      {
        icon: "CHAT",
        label: "Common Topics",
        text: "Coming out, family pressure, marriage pressure, relationships, discrimination, anxiety, low mood",
      },
      {
        icon: "LEAF",
        label: "Here",
        text: "Affirmative, confidential counselling",
      },
    ],
    signsTitle: (
      <>
        What people <em>bring</em>.
      </>
    ),
    signsLead: "Every concern is welcome. These are the ones she hears most.",
    mind: [
      "Questions about identity, at any age",
      "Deciding whether, when and how to come out",
      "Anxiety, low mood or loneliness",
    ],
    body: [],
    behaviour: [
      "Family pressure, including pressure to marry",
      "Relationship concerns",
      "Stress from discrimination, bullying or hiding at work",
      "Parents who want to understand and support their child",
    ],
    explainer: {
      eyebrow: "02 · Our position",
      title: (
        <>
          Affirmative, always, and no <em>exceptions</em>.
        </>
      ),
      lead: "Conversion therapy is harmful. Every session here is affirming.",
      points: [
        {
          icon: "SHIELD",
          title: "Indian Psychiatric Society",
          text: "stated in 2018 that homosexuality is not a mental illness.",
        },
        {
          icon: "SHIELD",
          title: "National Medical Commission",
          text: "declared in 2022 that so-called conversion therapy is professional misconduct, following a direction from the Madras High Court.",
        },
      ],
    },
    helpTitle: (
      <>
        What a session is <em>like</em>.
      </>
    ),
    helpLead:
      "Confidential, respectful, and focused on what you want to work on.",
    steps: [
      {
        icon: "EAR",
        n: "01",
        title: "Your Story",
        text: "What brings you in, at your pace.",
      },
      {
        icon: "COMPASS",
        n: "02",
        title: "Your Goals",
        text: "What you would like to be different.",
      },
      {
        icon: "CHAT",
        n: "03",
        title: "The Work",
        text: "Talking through, and practical skills for what you are carrying.",
      },
      {
        icon: "LOCK",
        n: "04",
        title: "Your Privacy",
        text: "Nothing is shared with family without your consent.",
      },
    ],
    faqs: [
      {
        q: "Will you tell my family?",
        a: "No. What you share stays private, apart from the safety exceptions that apply to every client. If you are under 18, a parent normally gives consent for sessions; Dr. Desai will explain how she protects your privacy within that.",
      },
      {
        q: "My child has come out. Can I come alone?",
        a: "Yes. Many parents come on their own first to understand their feelings and learn how to support their child.",
      },
    ],
    related: [
      {
        icon: "PERSON",
        title: "Individual Therapy",
        text: "One-to-one sessions for adults.",
        href: "/individual-therapy/",
      },
      {
        icon: "RINGS",
        title: "Couples Counselling",
        text: "For couples who feel stuck, before or after marriage.",
        href: "/couples-counselling/",
      },
      {
        icon: "FAMILY",
        title: "Family Counselling",
        text: "Working through change and conflict together.",
        href: "/family-counselling/",
      },
      {
        icon: "GLOBE",
        title: "Online Therapy",
        text: "Sessions by video, from home or abroad.",
        href: "/online-therapy/",
      },
    ],
    sources:
      "Sources: Indian Psychiatric Society, position statement on homosexuality, 2018 · National Medical Commission advisory on conversion therapy, 2022",
  }),

  "/psychological-assessment/": makeTreatment({
    url: "/psychological-assessment/",
    label: "Psychological Assessment",
    tagLabel: "Service · Psychological assessment",
    icon: "CLIP",
    title: (
      <>
        Psychological <em>assessment</em>
      </>
    ),
    lead: "A psychological assessment uses conversation, history and standardised tests to answer a specific question about how a person thinks, learns, feels or behaves. Dr. Mithila Desai carries out assessments for children, teenagers and adults, and explains the results and next steps in plain words.",
    glance: [
      {
        icon: "CLIP",
        label: "Common Questions",
        text: "Attention and learning, intellectual ability, emotional difficulties, personality, career aptitude",
      },
      {
        icon: "TOOL",
        label: "What It Includes",
        text: "Interview, history, questionnaires and tests, and a feedback session",
      },
      {
        icon: "CLOCK",
        label: "Time",
        text: (
          <>
            Usually more than one sitting{" "}
            <Confirm>typical number and length</Confirm>
          </>
        ),
      },
      {
        icon: "PEN",
        label: "Report",
        text: (
          <>
            A written report <Confirm>typical time to receive it</Confirm>
          </>
        ),
      },
      {
        icon: "SHIELD",
        label: "Certificates",
        text: "Official disability certificates are issued by government medical boards",
      },
    ],
    signsTitle: (
      <>
        Types of <em>assessment</em>.
      </>
    ),
    signsLead: (
      <>
        Each assessment answers a specific question.{" "}
        <Confirm>which of these she offers; no test names needed</Confirm>
      </>
    ),
    mind: [
      "Intellectual ability (IQ) testing: how a person reasons, solves problems and learns",
      "Emotional and behavioural: anxiety, mood, behaviour and their impact",
      "Personality: patterns in how a person thinks, feels and relates to others",
    ],
    body: [],
    behaviour: [
      "Learning and attention: reading, writing, maths, focus and memory",
      "Aptitude and interests: strengths and suitable study or career paths",
    ],
    helpTitle: (
      <>
        What <em>happens</em>.
      </>
    ),
    helpLead: "An assessment is a series of sittings, ending in a written report.",
    steps: [
      {
        icon: "CHAT",
        n: "01",
        title: "First Meeting",
        text: "Dr. Desai understands the question you want answered and gathers history. For children, she meets the parents.",
      },
      {
        icon: "CLIP",
        n: "02",
        title: "Testing",
        text: "Questionnaires and tasks, chosen for the question. Children often find these like puzzles and games.",
      },
      {
        icon: "SCHOOL",
        n: "03",
        title: "Other Information",
        text: "School reports or teacher forms, with your consent.",
      },
      {
        icon: "CHAT",
        n: "04",
        title: "Feedback",
        text: "A session to go through the findings, answer questions and plan support.",
      },
      {
        icon: "PEN",
        n: "05",
        title: "Report",
        text: "A written summary with practical recommendations.",
      },
    ],
    faqs: [
      {
        q: "Is an assessment the same as a diagnosis?",
        a: "An assessment gathers information to answer a question. Sometimes the findings match a recognised condition, such as a specific learning disorder; sometimes they show strengths and areas to support without a label. Dr. Desai will explain clearly what the results mean.",
      },
      {
        q: "Can my child \"fail\" the test?",
        a: "No. There is no pass or fail. The aim is to understand how your child learns and what help would suit them. Children do well when they are relaxed and know it is not an exam.",
      },
      {
        q: "Will the school accept the report?",
        a: "Many schools use a psychologist's report to plan support in class. For board exam accommodations, boards usually require a certificate from a government hospital or medical board; Dr. Desai can explain the process.",
      },
      {
        q: "Can adults be assessed?",
        a: "Yes. Adults come for questions about attention, learning, personality, or career changes, and to understand long-standing difficulties.",
      },
    ],
    related: [
      {
        icon: "CLIP",
        title: "ADHD and Learning Assessment",
        text: "Clear answers about attention and learning.",
        href: "/psychological-assessment/adhd-learning-neurodiversity/",
      },
      {
        icon: "CAP",
        title: "Career Guidance",
        text: "Aptitude testing and guidance for students and adults.",
        href: "/career-guidance/",
      },
      {
        icon: "CHILD",
        title: "Child and Teen Therapy",
        text: "Support for young people, with parents involved.",
        href: "/child-and-teen-therapy/",
      },
    ],
  }),

  "/psychological-assessment/adhd-learning-neurodiversity/": makeTreatment({
    url: "/psychological-assessment/adhd-learning-neurodiversity/",
    label: "ADHD, Learning and Neurodiversity Assessment",
    tagLabel: "Assessment · ADHD, learning and neurodiversity",
    icon: "MIND",
    title: (
      <>
        ADHD, learning and neurodiversity <em>assessment</em>
      </>
    ),
    lead: (
      <>
        Neurodiversity means that brains work in different ways. Conditions
        such as ADHD and specific learning disorders (often called dyslexia,
        dysgraphia and dyscalculia) affect attention, learning and
        organisation, but not a person&apos;s worth or intelligence. Dr.
        Mithila Desai offers assessments and support for children, teenagers
        and adults, with a focus on strengths as well as challenges.{" "}
        <Confirm>
          which assessments she offers in-house; and whether she refers for a
          medical opinion
        </Confirm>
      </>
    ),
    glance: [
      {
        icon: "MIND",
        label: "ADHD",
        text: "Ongoing difficulty with attention, restlessness or impulsiveness, in more than one setting",
      },
      {
        icon: "PEN",
        label: "Specific Learning Disorder",
        text: "Difficulty with reading, writing or maths despite good teaching",
      },
      {
        icon: "LEAF",
        label: "Autism",
        text: (
          <>
            Differences in social communication and sensory experience{" "}
            <Confirm>screening offered or referred</Confirm>
          </>
        ),
      },
      {
        icon: "CLIP",
        label: "Assessment",
        text: "Interview, history, rating forms from parents and teachers, and tests",
      },
      {
        icon: "COMPASS",
        label: "After Assessment",
        text: "Practical plans for home, school and work",
      },
    ],
    signsTitle: (
      <>
        Signs that may suggest an <em>assessment</em>.
      </>
    ),
    signsLead: "In children and in adults, these patterns are worth checking.",
    mind: [
      "Bright in conversation but marks do not match",
      "Long-standing trouble with focus, organisation, deadlines and time (adults)",
      "Losing things, forgetting appointments, restlessness (adults)",
      "Difficulties that have been there since childhood (adults)",
    ],
    body: [],
    behaviour: [
      "Struggling to sit still, wait or focus, compared with other children of the same age",
      "Reading or spelling far behind, mixing letters, very slow writing",
      "Trouble with numbers and maths facts",
      "Repeated complaints from school about behaviour or incomplete work",
    ],
    explainer: {
      eyebrow: "02 · Good to know",
      title: (
        <>
          Clear <em>boundaries</em>.
        </>
      ),
      lead: "ADHD medicine is prescribed by psychiatrists or paediatricians, not psychologists.",
      points: [
        {
          icon: "PILL",
          title: "Medicine",
          text: "a psychiatrist or paediatrician prescribes; Dr. Desai can refer and work alongside them.",
        },
        {
          icon: "CLIP",
          title: "Official Certificates",
          text: "certificates for board exam accommodations or disability benefits come from government hospitals and medical boards.",
        },
      ],
    },
    helpTitle: (
      <>
        What <em>happens</em>.
      </>
    ),
    helpLead:
      "A careful look at attention, learning and reasoning, ending in a written report.",
    steps: [
      {
        icon: "CHAT",
        n: "01",
        title: "Parent or Adult Interview",
        text: "About development, school, health and family history.",
      },
      {
        icon: "CLIP",
        n: "02",
        title: "Rating Forms",
        text: "From parents and teachers, or from a partner for adults.",
      },
      {
        icon: "MIND",
        n: "03",
        title: "Testing",
        text: "Of attention, learning and reasoning.",
      },
      {
        icon: "EAR",
        n: "04",
        title: "Feedback Session",
        text: "And a written report with recommendations.",
      },
      {
        icon: "COMPASS",
        n: "05",
        title: "Next Steps",
        text: "Therapy, parent guidance, school strategies, or a psychiatrist or developmental paediatrician for a medical opinion, where needed.",
      },
    ],
    faqs: [
      {
        q: "My child is just naughty. Could it be ADHD?",
        a: "Many lively children do not have ADHD. ADHD is considered when difficulties are strong, have lasted at least six months, appear in more than one place (home and school), and affect learning or relationships. An assessment helps separate ADHD from other causes such as anxiety, sleep problems or learning difficulties.",
      },
      {
        q: "Does a learning disorder mean my child is less intelligent?",
        a: "No. Children with specific learning disorders usually have average or above-average intelligence. They learn differently in particular areas and do well with the right teaching and support.",
      },
      {
        q: "At what age can a child be assessed?",
        a: (
          <>
            Learning disorders are usually assessed once a child has had some
            years of schooling, often from about age 7 or 8. Attention concerns
            can be looked at earlier. <Confirm>ages she assesses</Confirm>
          </>
        ),
      },
      {
        q: "Can adults get an ADHD assessment?",
        a: "Yes. Many adults were never assessed as children. Understanding ADHD can explain lifelong patterns and open up useful strategies.",
      },
    ],
    related: [
      {
        icon: "CLIP",
        title: "Psychological Assessment",
        text: "All assessment types, and what to expect.",
        href: "/psychological-assessment/",
      },
      {
        icon: "CHILD",
        title: "Child and Teen Therapy",
        text: "Support for young people, with parents involved.",
        href: "/child-and-teen-therapy/",
      },
      {
        icon: "SCHOOL",
        title: "Schools and Colleges",
        text: "Programmes for students and teachers.",
        href: "/schools-and-colleges/",
      },
    ],
    sources:
      "Sources: NICE NG87, Attention deficit hyperactivity disorder: diagnosis and management · Rights of Persons with Disabilities Act 2016 (specific learning disabilities)",
  }),

  "/career-guidance/": makeTreatment({
    url: "/career-guidance/",
    label: "Career Guidance and Aptitude Testing",
    tagLabel: "Assessment · Career guidance and aptitude testing",
    icon: "CAP",
    title: (
      <>
        Career guidance and aptitude <em>testing</em>
      </>
    ),
    lead: (
      <>
        Career guidance helps students and adults choose a study or work path
        that suits their abilities, interests and personality. Dr. Mithila
        Desai offers aptitude and interest testing with a guidance session for
        students after Class 8, 10 and 12, college students and adults
        thinking of a change. <Confirm>still offered</Confirm>
      </>
    ),
    glance: [
      {
        icon: "CAP",
        label: "Who",
        text: (
          <>
            Students from Class 8 <Confirm /> to college, and adults
          </>
        ),
      },
      {
        icon: "CLIP",
        label: "What",
        text: "Aptitude, interest and personality questionnaires, plus a guidance session",
      },
      {
        icon: "FAMILY",
        label: "Parents",
        text: "Invited to the feedback session",
      },
      {
        icon: "PEN",
        label: "Result",
        text: "A report with suitable streams or paths and next steps",
      },
      {
        icon: "LEAF",
        label: "Also Helps With",
        text: "Exam stress and family disagreement about choices",
      },
    ],
    signsTitle: (
      <>
        Who it <em>helps</em>.
      </>
    ),
    signsLead:
      "Useful at decision points, or whenever a student or adult feels stuck.",
    mind: ["Feeling stuck in your work, at any age"],
    body: [],
    behaviour: [
      "Choosing a stream after Class 9 or 10",
      "Choosing a college course after Class 12",
      "Adults thinking of a change",
      "Family disagreement about the choice",
    ],
    helpTitle: (
      <>
        What <em>happens</em>.
      </>
    ),
    helpLead:
      "A neutral, objective starting point, then an honest conversation.",
    steps: [
      {
        icon: "CHAT",
        n: "01",
        title: "Getting to Know the Student",
        text: "Interests, marks, hobbies, worries and family expectations.",
      },
      {
        icon: "CLIP",
        n: "02",
        title: "Testing",
        text: "Aptitude, interests and work style.",
      },
      {
        icon: "FAMILY",
        n: "03",
        title: "Feedback",
        text: "A session with the student and parents to discuss options openly.",
      },
      {
        icon: "COMPASS",
        n: "04",
        title: "Report and Plan",
        text: "Streams, courses or careers to explore, and how to find out more.",
      },
    ],
    faqs: [
      {
        q: "When is a good time for career guidance?",
        a: "Class 9 or 10 is a useful time, before choosing a stream. It also helps before choosing a college course, or at any age when you feel stuck in your work.",
      },
      {
        q: "My child and I disagree about their career. Can you help?",
        a: "Yes. Test results give an objective starting point, and a neutral person can help both sides listen. The aim is a choice the student can commit to.",
      },
      {
        q: "Does a test decide the career?",
        a: "No. Tests show strengths and interests. The decision stays with the student and family, made with better information.",
      },
    ],
    related: [
      {
        icon: "CLIP",
        title: "Psychological Assessment",
        text: "All assessment types, and what to expect.",
        href: "/psychological-assessment/",
      },
      {
        icon: "FLAME",
        title: "Stress and Burnout",
        text: "When pressure spills into sleep, temper and health.",
        href: "/stress-and-burnout/",
      },
      {
        icon: "SCHOOL",
        title: "Schools and Colleges",
        text: "Programmes for students and teachers.",
        href: "/schools-and-colleges/",
      },
    ],
  }),

  "/workplace-wellbeing/": makeTreatment({
    url: "/workplace-wellbeing/",
    label: "Workplace Wellbeing and EAP",
    tagLabel: "For organisations · Workplace wellbeing and EAP",
    icon: "BRIEF",
    title: (
      <>
        Workplace wellbeing and employee <em>counselling</em>
      </>
    ),
    lead: (
      <>
        Workplace wellbeing programmes give employees confidential access to a
        psychologist and help managers respond well to stress, conflict and
        mental health concerns at work. Dr. Desai has provided employee
        assistance programme (EAP) counselling for many years{" "}
        <Confirm>years; partner organisations are not named</Confirm>.
      </>
    ),
    glance: [
      {
        icon: "BRIEF",
        label: "For",
        text: (
          <>
            Companies, offices, hospitals, schools and NGOs <Confirm />
          </>
        ),
      },
      {
        icon: "CHAT",
        label: "Employee Counselling",
        text: "Confidential one-to-one sessions, in person or online",
      },
      {
        icon: "USER",
        label: "For Managers and HR",
        text: "Guidance on supporting a distressed employee",
      },
      {
        icon: "LEAF",
        label: "Workshops",
        text: "Stress, burnout, sleep, communication, work-life balance",
      },
      {
        icon: "SHIELD",
        label: "Reporting",
        text: "Only anonymous, group-level usage data; never individual details",
      },
    ],
    signsTitle: (
      <>
        What an engagement can <em>include</em>.
      </>
    ),
    signsLead: (
      <>
        <Confirm>what she offers</Confirm>
      </>
    ),
    mind: [
      "Talks and workshops, in person or online",
      "Manager training on spotting distress and having supportive conversations",
    ],
    body: [],
    behaviour: [
      "One-to-one counselling sessions for employees (and family members, if agreed)",
      "Support after critical incidents",
      "Simple, privacy-safe reports on how the service is used",
    ],
    explainer: {
      eyebrow: "02 · Confidentiality",
      title: (
        <>
          Sessions stay <em>private</em>.
        </>
      ),
      lead: "Employees' sessions are private. The organisation never receives names or session content.",
      points: [
        {
          icon: "LOCK",
          title: "Anonymous Reports",
          text: "usage reports are anonymous and grouped. Safety exceptions apply as for every client.",
        },
      ],
    },
    helpTitle: (
      <>
        How to <em>start</em>.
      </>
    ),
    helpLead:
      "A short request, then a proposal shaped to your organisation.",
    steps: [
      {
        icon: "PEN",
        n: "01",
        title: "Send a Request",
        text: (
          <>
            Your organisation, number of employees, location and what you are
            looking for. We reply within <Confirm /> working days with a
            proposal.
          </>
        ),
      },
      {
        icon: "CHAT",
        n: "02",
        title: "A Proposal",
        text: "Fees are discussed directly.",
      },
    ],
    faqs: [
      {
        q: "Will employees trust that it is confidential?",
        a: "Trust grows when the confidentiality rules are explained clearly at launch, sessions happen away from managers, and reports are only anonymous totals. Dr. Desai helps you communicate this.",
      },
      {
        q: "Can sessions be online for teams in other cities?",
        a: "Yes. Online sessions suit teams spread across locations.",
      },
      {
        q: "Do you offer a one-time workshop?",
        a: (
          <>
            Yes <Confirm />. Many organisations start with a talk on stress or
            burnout and add counselling later.
          </>
        ),
      },
    ],
    related: [
      {
        icon: "FLAME",
        title: "Stress and Burnout",
        text: "When pressure spills into sleep, temper and health.",
        href: "/stress-and-burnout/",
      },
      {
        icon: "GLOBE",
        title: "Online Therapy",
        text: "Sessions by video, from home or abroad.",
        href: "/online-therapy/",
      },
      {
        icon: "SCHOOL",
        title: "Schools and Colleges",
        text: "Programmes for students and teachers.",
        href: "/schools-and-colleges/",
      },
    ],
  }),

  "/schools-and-colleges/": makeTreatment({
    url: "/schools-and-colleges/",
    label: "Schools and Colleges",
    tagLabel: "For organisations · Schools and colleges",
    icon: "SCHOOL",
    title: (
      <>
        Mental health support for schools and <em>colleges</em>
      </>
    ),
    lead: (
      <>
        Schools and colleges see the first signs of stress, bullying and
        learning difficulties in young people. Dr. Desai offers workshops for
        students, parents and teachers, and guidance for school counsellors,
        drawing on her long experience in school psychology <Confirm />.
      </>
    ),
    glance: [
      {
        icon: "CHILD",
        label: "Students",
        text: "Exam stress, friendships, bullying and online safety, emotions, career choices",
      },
      {
        icon: "FAMILY",
        label: "Parents",
        text: "Talking with children, screens, study habits, spotting warning signs",
      },
      {
        icon: "SCHOOL",
        label: "Teachers",
        text: "Recognising distress, learning difficulties and ADHD in class; supportive conversations",
      },
      {
        icon: "CLIP",
        label: "Format",
        text: (
          <>
            Talks, interactive workshops, small groups <Confirm />
          </>
        ),
      },
      {
        icon: "CHAT",
        label: "Languages",
        text: (
          <>
            English, Hindi <Confirm />
          </>
        ),
      },
    ],
    signsTitle: (
      <>
        Who the sessions are <em>for</em>.
      </>
    ),
    signsLead: "Sessions are shaped to the audience — students, parents or teachers.",
    mind: [],
    body: [],
    behaviour: [
      "Students: exam stress, friendships, bullying and online safety, emotions, career choices",
      "Parents: talking with children, screens, study habits, spotting warning signs",
      "Teachers: recognising distress, learning difficulties and ADHD in class; supportive conversations",
    ],
    helpTitle: (
      <>
        How to request a <em>session</em>.
      </>
    ),
    helpLead: "A short form, then we shape the session around your group.",
    steps: [
      {
        icon: "PEN",
        n: "01",
        title: "Send the Form",
        text: (
          <>
            Your school or college name, the audience, age group, number of
            participants, preferred dates, topics and language. We reply within{" "}
            <Confirm /> working days.
          </>
        ),
      },
      {
        icon: "CHAT",
        n: "02",
        title: "We Plan Together",
        text: "Topics, format and language agreed with you.",
      },
    ],
    faqs: [
      {
        q: "Can you see individual students at school?",
        a: (
          <>
            <Confirm />. Individual sessions usually happen at the practice or
            online, with parental consent.
          </>
        ),
      },
      {
        q: "Do you train school counsellors?",
        a: <Confirm />,
      },
      {
        q: "Can workshops be online?",
        a: "Yes, for parent and teacher sessions especially.",
      },
    ],
    related: [
      {
        icon: "CHILD",
        title: "Child and Teen Therapy",
        text: "Support for young people, with parents involved.",
        href: "/child-and-teen-therapy/",
      },
      {
        icon: "CLIP",
        title: "ADHD and Learning Assessment",
        text: "Clear answers about attention and learning.",
        href: "/psychological-assessment/adhd-learning-neurodiversity/",
      },
      {
        icon: "CAP",
        title: "Career Guidance",
        text: "Aptitude testing and guidance for students and adults.",
        href: "/career-guidance/",
      },
    ],
  }),
};
