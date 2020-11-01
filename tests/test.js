import { Selector } from 'testcafe';
import GardenPlannerPage from '../pageobjects/garden-planner-page.js';

fixture `Getting Started`
    .page `https://www.pennys-garden-planner.com/`;

test('Garden planner grid displays on load', async t => {   
    await t
        .expect(GardenPlannerPage.gardenGrid.exists).ok();
});


test('User is able to add a row', async t => {   
    await t
        .click(GardenPlannerPage.addRowBtn)
        .click(GardenPlannerPage.addRowToTopOption)
        .expect(GardenPlannerPage.fourthRowFirstCell.exists).ok();
});

test('User is able to delete a row', async t => {   
    await t
    .click(GardenPlannerPage.deleteRowBtn)
    .click(GardenPlannerPage.deleteFirstRowOption)
    .expect(GardenPlannerPage.thirdRowFirstCell.exists).notOk();
});

