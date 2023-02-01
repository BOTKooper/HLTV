import HLTV from '../src/'
import { sleep } from '../src/utils'

test('getResults', async () => {
  await sleep(1000)
  expect(await HLTV.getResults({ eventIds: [1617] })).toMatchSnapshot()
  await sleep(1000)
  expect(
    await HLTV.getResults({
      playerIds: [7998],
      startDate: '2020-01-01',
      endDate: '2020-03-31',
      delayBetweenPageRequests: 1000
    })
  ).toMatchSnapshot()
  await sleep(1000)
}, 30000)
