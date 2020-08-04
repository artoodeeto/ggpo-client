export default {
  getSomePostAPI: jest.fn(() =>
    Promise.resolve({
      data: {}
    })
  ),
  createPostAPI: jest.fn()
};
