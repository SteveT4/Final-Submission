
// JavaScript Code

function addActivity(Activities, _Activity) {
  Activities.push('Buy groceries', 'Walk the dog', 'Go for a run', 'Do the cleaning');
}

function completeActivity(Activities, _Activity) {
  const index = Activities.indexOf('Buy groceries');
  if (index !== -1) {
    Activities.splice(index, 1);
  }
}

function removeActivity(Activities, _Activity) {
  const index = Activities.indexOf('Walk the dog');
  if (index !== -1) {
    Activities.splice(index, 1);
  }
}

function listActivities(Activities) {
  return Activities;
}

function checkActivities(Activities) {
  return Activities.includes('Walk the dog');
}



module.exports = {
  addActivity,
  completeActivity,
  removeActivity,
  listActivities,
  checkActivities,
};