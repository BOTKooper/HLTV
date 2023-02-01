import HLTV from '../src'
import { EventType } from '../src/shared/EventType'
import { sleep } from '../src/utils'

test('getPastEvents', async () => {
  await sleep(1000)
  expect(
    await HLTV.getPastEvents({
      startDate: '2017-01-01',
      endDate: '2017-12-31',
      eventType: EventType.InternationalLAN,
      delayBetweenPageRequests: 1000
    })
  ).toMatchSnapshot()
  await sleep(1000)
}, 30000)
