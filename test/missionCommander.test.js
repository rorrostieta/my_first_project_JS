const MissionCommander = require('./../app/MissionCommander')

describe("Unit Test for Mission Commander Class", () => {
  test('1. Create a mission commander object', () => {
    const myMissionCommander = new MissionCommander('Victoria')
    expect(myMissionCommander.name).toBe('Victoria');
  });
})
