function checkSpam(string) {
   var lowerString = string.toLowerCase();
   if (lowerString.includes('spam') || lowerString.includes('sex')) {
      console.log('Spam detected');
   } else console.log('You\'re good to go');
}

checkSpam('[SPAM] How to earn fast money?');
checkSpam('get new Sex videos');
checkSpam('New PSD template'); 
