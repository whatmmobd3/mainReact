import {getPage} from '../imagesSaga'

test('select page',() => {
    const nextPage = 1;
    const state = {nextPage}
    const res = getPage(nextPage)

    expect(res).toBe(nextPage)
}) 