const mockUserData = {
  profile: {
    name: 'Dwayne Johnson',
    balance: 23500,
  },
  missions: [1,3,5],
  inbox: [
    {
      title: 'MORE THAN 10,000 CASH PRIZES',
      content: ' Hey! Wanna become a winner of one of 10,000$ cash prizes? Come and get 2 daily free chances + 3 for a min. 10$ deposit.',
      timestamp: 'Yestarday',
      seen: false,
    },
    {
      title: 'ASTROCASH-STELLAR PRIZES',
      content: ' Hey! Ready for stellar prizes in Astrocash - 20,5,4,3,2,1 thousands of dollars and 50 iPhones 15 PRO? Come and get 2 daily free chances + 3 for a min. 10$ deposit.',
      timestamp: '14/04/2024',
      seen: true,
    },
    {
      title: 'IMPORTANT NOTIFICATION',
      content: ' Dear user, please be informed that phishing attacks are getting on the rise nowadays. Do not provide any sensitive information (account username, password, credit card numbers, one-time passwords sent to your mobiles) to any third party. If possible, activate two-factor authentication for your account to keep your data safe and secure. ',
      timestamp: '13/04/2024',
      seen: false,
    },
    {
      title: '1,000,000$ Poker Tournament Series',
      content: `
        Hello Dear Player,

        1,000,000$ in poker.

        Join the For Sharks Only knockout tournament series, play Poker 6-max tables, win and get a chance to win more than you can imagine.
        Start with the OPENER tournament and take a share of the 20,000 $ winning fund.

        Starting from April 1.
      `,
      timestamp: '12/04/2024',
      seen: true,
    },
  ],
};

export default mockUserData;
