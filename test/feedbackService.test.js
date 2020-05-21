const FeedbackService = require('../services/feedbackService')

test('get correct feedback pins', async () => {
  const feedbackService = new FeedbackService()
  const guess = ['a', 'b', 'c', 'd']
  const solution = ['a', 'b', 'c', 'c']

  const result = await feedbackService.generateFeedback(guess, solution)
  expect(result).toEqual([3, 0])
})
