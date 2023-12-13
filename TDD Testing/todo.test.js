// 


// Jest test cases

const todo = require('./todo');


test('Add an Activity', () => {
    let Activities = [];
    todo.addActivity(Activities, 'Buy groceries', 'Walk the dog', 'Go for a run', 'Do the cleaning');
    expect(Activities).toEqual(['Buy groceries', 'Walk the dog', 'Go for a run', 'Do the cleaning']);
});

test('Complete an Activity', () => {
    let Activities = [];
    Activities.push('Buy groceries', 'Walk the dog', 'Go for a run', 'Do the cleaning');
    todo.completeActivity(Activities, 'Buy groceries');
    expect(Activities).toEqual(['Walk the dog', 'Go for a run', 'Do the cleaning']);
});

test('Remove an Activity', () => {
    let Activities = [];
    Activities.push('Buy groceries', 'Walk the dog', 'Go for a run', 'Do the cleaning');
    todo.removeActivity(Activities, 'Walk the dog');
    expect(Activities).toEqual(['Buy groceries', 'Go for a run', 'Do the cleaning']);
});

test('List Activities', () => {
    let Activities = [];
    Activities.push('Buy groceries', 'Walk the dog', 'Go for a run', 'Do the cleaning');
    const activityList = todo.listActivities(Activities);
    expect(activityList).toEqual(['Buy groceries', 'Walk the dog', 'Go for a run', 'Do the cleaning']);
});

test('the todo list has Walk the dog on it', () => {
  let Activities = [];
  Activities.push('Buy groceries', 'Walk the dog', 'Go for a run', 'Do the cleaning');
  const activityList = todo.checkActivities(Activities);
  expect(activityList).toBe(true);
});
