window.SignDB = (() => {
  const poses = {
    rest: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [498, 454], hand: [526, 528], rotate: 0 }
    },
    helloStart: {
      left: { shoulder: [278, 386], elbow: [224, 456], hand: [196, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [468, 304], hand: [424, 220], rotate: -22 }
    },
    helloOut: {
      left: { shoulder: [278, 386], elbow: [224, 456], hand: [196, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [514, 292], hand: [596, 210], rotate: 26 }
    },
    thanksMouth: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [430, 304], hand: [360, 285], rotate: 8 }
    },
    thanksOut: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [472, 330], hand: [560, 360], rotate: 34 }
    },
    pleaseChest: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [410, 382], hand: [360, 382], rotate: 90 }
    },
    yesUp: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [478, 338], hand: [500, 286], rotate: 0 }
    },
    yesDown: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [478, 370], hand: [500, 346], rotate: 0 }
    },
    noStart: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [480, 324], hand: [520, 268], rotate: -8 }
    },
    noClose: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [470, 316], hand: [492, 260], rotate: 16 }
    },
    helpBase: {
      left: { shoulder: [278, 386], elbow: [300, 438], hand: [340, 444], rotate: 88 },
      right: { shoulder: [442, 386], elbow: [430, 400], hand: [380, 432], rotate: 0 }
    },
    helpLift: {
      left: { shoulder: [278, 386], elbow: [308, 394], hand: [348, 386], rotate: 88 },
      right: { shoulder: [442, 386], elbow: [424, 360], hand: [382, 372], rotate: 0 }
    },
    danger: {
      left: { shoulder: [278, 386], elbow: [248, 314], hand: [216, 248], rotate: -30 },
      right: { shoulder: [442, 386], elbow: [472, 314], hand: [504, 248], rotate: 30 }
    },
    dangerCross: {
      left: { shoulder: [278, 386], elbow: [314, 316], hand: [398, 260], rotate: 40 },
      right: { shoulder: [442, 386], elbow: [406, 316], hand: [322, 260], rotate: -40 }
    },
    doctor: {
      left: { shoulder: [278, 386], elbow: [288, 408], hand: [336, 420], rotate: 90 },
      right: { shoulder: [442, 386], elbow: [470, 340], hand: [440, 292], rotate: -18 }
    },
    callPhone: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [466, 292], hand: [426, 226], rotate: -34 }
    },
    sorryCircleA: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [410, 366], hand: [358, 350], rotate: 36 }
    },
    sorryCircleB: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [430, 400], hand: [384, 418], rotate: 120 }
    },
    namastePress: {
      left: { shoulder: [278, 386], elbow: [318, 420], hand: [352, 432], rotate: 24 },
      right: { shoulder: [442, 386], elbow: [402, 420], hand: [368, 432], rotate: -24 }
    },
    namasteBow: {
      left: { shoulder: [278, 386], elbow: [320, 434], hand: [354, 452], rotate: 30 },
      right: { shoulder: [442, 386], elbow: [400, 434], hand: [366, 452], rotate: -30 }
    },
    waterTap: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [420, 300], hand: [368, 268], rotate: 12 }
    },
    waterTapOut: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [420, 312], hand: [368, 292], rotate: -6 }
    },
    loveHold: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [482, 320], hand: [542, 268], rotate: -10 }
    },
    loveOut: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [500, 296], hand: [584, 238], rotate: -22 }
    },
    understandStart: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [440, 300], hand: [400, 240], rotate: 30 }
    },
    understandFlick: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [440, 276], hand: [410, 198], rotate: 55 }
    },
    familyA: {
      left: { shoulder: [278, 386], elbow: [300, 412], hand: [350, 422], rotate: 40 },
      right: { shoulder: [442, 386], elbow: [420, 412], hand: [370, 422], rotate: -40 }
    },
    familyB: {
      left: { shoulder: [278, 386], elbow: [312, 402], hand: [366, 400], rotate: -20 },
      right: { shoulder: [442, 386], elbow: [408, 402], hand: [354, 400], rotate: 20 }
    },
    questionUp: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [462, 300], hand: [432, 230], rotate: -10 }
    },
    questionWiggle: {
      left: { shoulder: [278, 386], elbow: [222, 454], hand: [194, 528], rotate: 0 },
      right: { shoulder: [442, 386], elbow: [456, 296], hand: [442, 224], rotate: 14 }
    }
  };

  const signs = {
    HELLO: {
      meaning: "Open palm greeting from forehead outward",
      frames: ["rest", "helloStart", "helloOut", "helloStart", "rest"]
    },
    THANK_YOU: {
      meaning: "Flat hand moves from mouth outward",
      frames: ["rest", "thanksMouth", "thanksOut", "rest"]
    },
    PLEASE: {
      meaning: "Open hand circles on chest",
      frames: ["rest", "pleaseChest", "thanksMouth", "pleaseChest", "rest"]
    },
    YES: {
      meaning: "Closed hand nods up and down",
      frames: ["rest", "yesUp", "yesDown", "yesUp", "rest"]
    },
    NO: {
      meaning: "Index and middle finger close against thumb",
      frames: ["rest", "noStart", "noClose", "noStart", "rest"]
    },
    HELP: {
      meaning: "One hand supports the other and lifts upward",
      frames: ["rest", "helpBase", "helpLift", "helpBase", "rest"]
    },
    EMERGENCY: {
      meaning: "Both hands cross high to signal urgent danger",
      frames: ["rest", "danger", "dangerCross", "danger", "rest"]
    },
    DOCTOR: {
      meaning: "Doctor cue with hand near wrist/face area",
      frames: ["rest", "doctor", "helpBase", "doctor", "rest"]
    },
    CALL: {
      meaning: "Phone handshape near ear",
      frames: ["rest", "callPhone", "helloOut", "callPhone", "rest"]
    },
    SORRY: {
      meaning: "Circular motion over the chest",
      frames: ["rest", "sorryCircleA", "sorryCircleB", "sorryCircleA", "rest"]
    },
    NAMASTE: {
      meaning: "Both palms pressed together at the chest with a small bow",
      frames: ["rest", "namastePress", "namasteBow", "namastePress", "rest"]
    },
    WATER: {
      meaning: "W handshape taps the chin twice",
      frames: ["rest", "waterTap", "waterTapOut", "waterTap", "rest"]
    },
    LOVE: {
      meaning: "Crossed-arms handshape held out toward the listener",
      frames: ["rest", "loveHold", "loveOut", "loveHold", "rest"]
    },
    UNDERSTAND: {
      meaning: "Index finger flicks up near the forehead",
      frames: ["rest", "understandStart", "understandFlick", "understandStart", "rest"]
    },
    FAMILY: {
      meaning: "Two F-handshapes circle around to face each other",
      frames: ["rest", "familyA", "familyB", "familyA", "rest"]
    },
    QUESTION: {
      meaning: "Index finger raised and wiggled near the temple",
      frames: ["rest", "questionUp", "questionWiggle", "questionUp", "rest"]
    }
  };

  const phrases = [
    { id: "hello", label: "Hello", aliases: ["hello", "hi", "hey", "good morning", "good evening"], signs: ["HELLO"] },
    { id: "thank-you", label: "Thank you", aliases: ["thank you", "thanks", "thankyou"], signs: ["THANK_YOU"] },
    { id: "please", label: "Please", aliases: ["please"], signs: ["PLEASE"] },
    { id: "yes", label: "Yes", aliases: ["yes", "okay", "ok"], signs: ["YES"] },
    { id: "no", label: "No", aliases: ["no", "not now"], signs: ["NO"] },
    { id: "need-help", label: "I need help", aliases: ["i need help", "need help", "help me", "please help"], signs: ["HELP", "PLEASE"] },
    { id: "emergency", label: "Emergency", aliases: ["emergency", "urgent", "danger"], signs: ["EMERGENCY", "HELP"] },
    { id: "call-doctor", label: "Call a doctor", aliases: ["call a doctor", "doctor", "need doctor", "medical help"], signs: ["CALL", "DOCTOR", "HELP"] },
    { id: "call-police", label: "Call police", aliases: ["call police", "police", "call the police"], signs: ["CALL", "EMERGENCY"] },
    { id: "sorry", label: "Sorry", aliases: ["sorry", "i am sorry", "apologies"], signs: ["SORRY"] },
    { id: "namaste", label: "Namaste", aliases: ["namaste", "greetings"], signs: ["NAMASTE"] },
    { id: "water", label: "Water", aliases: ["water", "i want water", "need water"], signs: ["WATER"] },
    { id: "i-love-you", label: "I love you", aliases: ["i love you", "love you", "ily"], signs: ["LOVE"] },
    { id: "understand", label: "I understand", aliases: ["i understand", "understand", "got it"], signs: ["UNDERSTAND"] },
    { id: "family", label: "Family", aliases: ["family", "call my family", "my family"], signs: ["FAMILY"] },
    { id: "question", label: "I have a question", aliases: ["i have a question", "question", "please repeat", "can you write it down"], signs: ["QUESTION"] }
  ];

  function normalize(text) {
    return text.toLowerCase().replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
  }

  function findPhrase(text, opts = {}) {
    const normalized = normalize(text);
    if (!normalized) return opts.strict ? null : phrases[0];

    let best = null;
    let bestScore = 0;
    for (const phrase of phrases) {
      for (const alias of phrase.aliases) {
        const exact = normalized === alias ? 100 : 0;
        const contains = normalized.includes(alias) ? alias.length : 0;
        const words = alias.split(" ").filter((word) => normalized.includes(word)).length;
        const score = exact + contains + words * 4;
        if (score > bestScore) {
          best = phrase;
          bestScore = score;
        }
      }
    }
    if (!best) return opts.strict ? null : phrases[0];
    return best;
  }

  return { poses, signs, phrases, findPhrase };
})();
