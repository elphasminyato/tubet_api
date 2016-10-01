
module.exports = {

  texts: {
    hi: "Hi {{name}}. My name is Lyne\r\nWelcome to Tubet, Kenya’s 1st Fantasy betting game for the Premier League with real world odds.",
    disclaimer: "Before we continue, you need to accept our Terms and conditions. \r\n\r\n 1. You are +18. \r\n 2. This is not a betting service. \r\n 3. Any odds or suggested winnings are not guaranteed.",
    prompt: "Do you agree? 👀",
    termsRejected: "😡. Sorry, but I can't continue until you accept the terms and conditions.",
    termsAccepted: '👊',
    bettingAccepted: "Cool. Lets do this",
    personalization: 'Lets get to know each other a bit. What team do you support?',
    // teamSelected: "🤘",
    teamNotFound: "🤔",
    teamTryAgain: "Let me help you abit... How about you pick one from this list?",
    bettingIntro: "Ok, time for Betting 101 🔑",
    explainerBet: "Predict how a match between two teams will end and place some 💰💰💰. Get it right and, you will win the amount you placed multiplied by the *Odds*. Get it wrong = You lose. Simple right?",
    explainerQuestionOdds: "Odds?",
    explainerTest: "Test me!",
    explainerOdds: "An Odd is a number that tells you how likely something is to happen.\r\nHigh odds = Less likely to happen. \r\nLower odds = More likely to happen.",
    explainerOddsExample: "Ok, let's see if you're with me.\r\n\r\n*Liverpool (Home) v Everton (Away)*\r\nLiverpool - (2.25)\r\nDraw - (4.10)\r\nEverton - (3.25)",
    explainerOddsQuiz: "Place your bet.",
    explainerOddsQuizOptions: "Liverpool,Draw,Everton",
    exampleCorrect: "👍",
    exampleWrong: "👎",
    // exampleExplainer: "High odds = Less likely to happen. \r\nLower odds = More likely to happen. In ⚽, the Favorite Team will have lower odds to win than the Underdog. \r\nOk, lets talk 💰💰💰",
    creditsExplainer: "Instead of real money, we use TuBets 💰 in this game. I've given you 100 TuBets 💰, how much do you want to place on a ",
    // exampleResultsCorrect: "👍, 225💰.",
    // exampleResultsWrong: "👎, you should have said 225.",
    nonNumericBet: "🙄 I don't want to confuse your bet so please tell me your amount as a number, for example 100.",
    creditsSelection: "You have bet 225 on Liverpool to Win. Let me check the result...",
    exampleResultsExplainer: "If you pick the right result, your winnings are calculated by multiplying your bet by the odds, so ",
    startingCredits: "🎓 I think you are now ready to start playing. I'll start you off with 100 TuBets💰.",
    goodLuck: "Last weeks games are all done, so I'll let you know as soon as the odds are ready for this week",
    waiting: "Mmh, I'm still preparing more odds for this week. Let me holla when I'm ready",
    complete: "Wow, you've bet on all the games today. All the best!",
    share: "Having fun? Its even better if you invite your Friends",
    practice: "I'm still getting my act together, but I've got one practice ⚽ available for today. Would you like to try it out? - I'll add another 100 free credits 💰",
    practiceNo: "Don't be a 🍗",
    practivePrompt: "I'm not usually this generous, but there's 100💰 extra free credits...\r\n😊",
    practiceBegin: "Ok, here we go\r\n",
    practiceRule: "Today I'll be taking only a single bet. I'm sending you the odds, right now. To place a bet, reply with the _BET ID_, then the outcome (H-Home,A-Away or X-Draw) and then the amount in credits you want to wager.",
    practiceExample: "Lets look at the previous example. \r\n\r\n*Liverpool (Home) v Everton (Away):*\r\n_H: 2.25 A: 3.25 X: 4.10_",
    practiceInstruction: "If I wanted to bet 100💰 for Liverpool to win, I would reply with *#000 H 100*\r\nEasy. Lets go...",
    wrongBetId: "Oops, I can't quite understand your bet. Please try again with the format *#ID OUTCOME AMOUNT*",
    wagerAccepted: "You have bet {{amount}}💰  for a {{outcome}}. If you are right you could win {{winnings}}💰. Good luck.",
    betTooHigh: "🙊\r\nOops, you only have {{amount}}💰 available so you need to make a smaller bet.",
    availableMatches: "💃 We have {{amount}} games available for betting today.",
    availableOtherMatches: "💃 We have {{amount}} other games available for betting today.",
    willYouBet: "Would you like to place a bet?",
    optionsYesNo: "Yes,No",
    betOptionDeclined: "Don't be a 🍗. Anyway, if you change your mind let me know before the matches kick off",
    pickGame: "Select the game would you like to place a bet on?",
    gameSelected: "Ok, here's your game",
    creditUpdate: "You have {{amount}} 💰 Tubets remaining",
    creditQuery: "You have {{amount}} 💰 Tubets remaining. \r\nDon't use them all at once.",
    amountPrompt: "Ok, how much will you put on a",
    betConfirmation: "You have placed {{amount}} 💰 on a {{outcome}}. If you are right you could win {{winnings}} 💰. \r\n*Should I confirm?*",
    betAccepted: "Done. All the best.",
    updateChannel: "Want to get updates for all the matches today? Click [here](https://telegram.me/TubetUpdates) to check out our update channel",
    betLost: "😔. Sorry, looks like things didn't go according to plan. Better luck next time",
    betWon: "🙌 .You've won {{amount}} 💰 TuBets, like a Boss!. You now have {{credits}} 💰. You're that guy! 🤑",
    noBets: "Don't have any active bets to update you on.",
    betCount: "You have {{count}} bets placed",
    noGames: "Unfortunately we don't have games available for betting today, bet we're working on bringing you more games. I'll let you know as soon as we do",
    didNotUnderstandGameBet: "Sorry, I didn't understand which game you wanted to bet on",
    declinedBet: "No worries. You can bet anytime before the match starts. Just tell me you want to bet and I'll hook you up.",
    badBetAmount: "Sorry, didn't quite understand how much you wanted to bet. Don't want there to be any confusion, just reply with the number of 💰 TuBets",
    theLot: "Wow, all your credits! 🙏 You must know something about this game."
  },

  gifs: {
    liv: "http://media3.giphy.com/media/wXsCbEJPNZGSY/200.gif",
    mun: "http://media3.giphy.com/media/42mVGkLhOW0kU/200.gif",
    ars: "http://media3.giphy.com/media/lXiRyi9qA8Xh9sYYU/200.gif",
    che: "http://media3.giphy.com/media/y62tQV0Zr08OQ/200.gif",
    whu: "http://media3.giphy.com/media/26CYAyjsfaOVOIfUk/200.gif",
    cry: "http://media3.giphy.com/media/3o7qDMlVquZI1axqQ8/200.gif",
    mci: "http://media3.giphy.com/media/l3UcicwEsOOan1Q2c/200.gif",
    eve: "http://media3.giphy.com/media/12s8pTSd3ZLcLS/200.gif",
    tot: "http://media3.giphy.com/media/3o6gb9BE0yfvODVPHy/200.gif",
    wba: "http://media3.giphy.com/media/tBb19fkNaCazBYtWQsE/200.gif",
    stk: "http://stream1.gifsoup.com/view6/4882172/great-goal-of-stoke-city-goalkeeper-o.gif",
    sun: "http://media3.giphy.com/media/26BRCp0VTMlaK5FUk/200.gif",
    sou: "http://media3.giphy.com/media/XpDYwAwJs2R0s/200.gif",
    lei: "http://media3.giphy.com/media/l4Ho5sWX51Mn8JAE8/200.gif",
    bou: "http://media3.giphy.com/media/a8siLqtWyqzSg/200.gif",
    wat: "http://media3.giphy.com/media/HQLu5sAaoDIKA/200.gif",
    mou: "http://media3.giphy.com/media/6eKCAGtepHvjO/200.gif",
    win: "http://media3.giphy.com/media/kQg7fQMvVD5Ha/200.gif"
  },

  teams: {
    manutd: { full: "Manchester United", short: "Man U" },
    leicester: { full:"Leicester City", short: "Lei" },
    liverpool: { full: "Liverpool", short: "Liv" },
    hull: { full: "Hull City", short: "Hull" },
    arsenal: { full: "Arsenal", short: "Ars" },
    chelsea: { full: "Chelsea", short: "Che" },
    westham: { full: 'West Ham', short: "West Ham" },
    southampton: { full: 'Southampton', short: 'Sou' },
    tottenham: { full: 'Tottenham Hotspur', short: 'Spurs' },
    cska: { full: 'CSKA Moscow', short: 'CSKA' },
    monaco: { full: 'Monaco', short: 'Monaco' },
    bayer: { full: 'Bayer Leverkusen', short: 'Bayer' },
    dortmund:  { full: 'Borussia Dortmund', short: 'Dortmund' },
    real: { full: 'Real Madrid', short: 'Real' },
    sporting: { full: 'Sporting CP', short: 'Sporting' },
    legia: { full: 'Legia Warszawa', short: 'Legia' },
    koebenhavn: { full: 'FC Koebenhavn', short: 'Copehagen' },
    bruge: { full: 'Club Brugge', short: 'Brugge' },
    porto: { full: 'FC Porto', short: 'Porto' },
    dinamo: { full: 'Dinamo Zagreb', short: 'Dinamo' },
    juventus: { full: 'Juventus', short: 'Juve' },
    sevilla: { full: 'Sevilla', short: 'Sev' },
    lyon: { full: 'Lyon', short: 'Lyon' },
    basel: { full: 'Basel', short: 'Basel'},
    gladbach: { full: 'Borussia Mönchengladbach', short: 'Bor. Vfl'},
    barca: { full: 'Barcelona FC', short: 'Barca' },
    atletico: { full: 'Atletico Madrid', short: 'Atleti'},
    bayern: { full: 'Bayern Munich', short: 'Bayern'},
    celtic: { full: 'Celtic', short: 'Celtic'},
    mancity: { full: 'Manchester City', short: 'Man City'},
    ferna: { full: 'Fenerbahce', short: 'Ferner'},
    feyenoord: { full: 'Feyenoord', short: 'Feyenoord'},
    zorya: { full: 'Zorya', short: 'Zorya' },
    everton: { full: 'Everton', short: 'Everton'},
    palace: { full: 'Crystal Palace', short: 'CPalace'},
    swansea: { full: 'Swansea City', short: 'Swansea'},
    sunderland: { full: 'Sunderland', short: 'SUN'},
    westbrom: { full: 'West Bromwich Albion', short: 'West Brom'},
    watford: { full: 'Watford', short: 'Watford'},
    bournemouth: { full: 'AFC Bournemouth', short: 'Bournemouth'},
    middlesbrough: { full: 'Middlesbrough', short: 'Middles'}
  }
}
