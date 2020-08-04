import { updateAUserPost } from 'helper/onUpdateUserPost';

test('should update user posts', () => {
  const statePost = [
    {
      id: 1,
      title: 'trip1',
      body: 'trip1',
      createdAt: '1/1/1',
      updatedAt: '1/1/1'
    },
    {
      id: 2,
      title: 'trip2',
      body: 'trip2',
      createdAt: '1/1/1',
      updatedAt: '1/1/1'
    },
    {
      id: 3,
      title: 'trip3',
      body: 'trip3',
      createdAt: '1/1/1',
      updatedAt: '1/1/1'
    }
  ];

  const updateSamp = {
    id: 2,
    title: 'upditid',
    body: 'upditid',
    createdAt: '1/1/1',
    updatedAt: '1/1/1'
  };

  const expectedVal = [
    {
      id: 1,
      title: 'trip1',
      body: 'trip1',
      createdAt: '1/1/1',
      updatedAt: '1/1/1'
    },
    {
      id: 2,
      title: 'upditid',
      body: 'upditid',
      createdAt: '1/1/1',
      updatedAt: '1/1/1'
    },
    {
      id: 3,
      title: 'trip3',
      body: 'trip3',
      createdAt: '1/1/1',
      updatedAt: '1/1/1'
    }
  ];

  const returnVal = updateAUserPost(statePost, updateSamp);

  expect(returnVal).toBeArray();
  expect(returnVal).toIncludeSameMembers(expectedVal);
  expect(returnVal).toEqual(expectedVal);
  expect(returnVal[0]).toContainKeys(['id', 'title', 'body', 'createdAt', 'updatedAt']);
});
