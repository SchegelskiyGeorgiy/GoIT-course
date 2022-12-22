function showBest(team) {
   var maxTasks = 0;
   var winner = '';
   for (var member in team) {
      if (team[member] > maxTasks) {
         maxTasks = team[member];
         winner = member;
      }
   }
   return 'The winner is ' + winner + ' with ' + maxTasks + ' tasks.';
}

var tasksCompleted = {
   'Anna': 29,
   'Serg': 35,
   'Elena': 122,
   'Anton': 90
};

console.log(showBest(tasksCompleted));
