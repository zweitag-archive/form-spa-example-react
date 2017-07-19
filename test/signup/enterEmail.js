import { Selector } from 'testcafe';

fixture('Signup')
    .page('http://localhost:3000');


test('signup test', async (t) => {
    await t
        .click('.button');

    const input = Selector('input');
    await t
        .expect(input.exists).ok()
        .expect(input.value).eql('', 'input is empty');

    await t
        .click('button')
        .expect(Selector('select').exists).ok();
});
