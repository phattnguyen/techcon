const simsCy = require('../sim.cy');
const vitalSignGraph = require('./vital.sign.graph.page');

const graphBarOutput = 'g[class="recharts-layer recharts-bar-rectangle"]>path[fill="#00327f"]';
const graphBarIntake = 'g[class="recharts-layer recharts-bar-rectangle"]>path[fill="#00c1ff"]';
const graphBar = 'g[class="recharts-layer recharts-bar-rectangle"]>path';
const graphTooltips = '.qa-tooltip-datetime';
const graphBarValue = '//div[contains(@class,"recharts-tooltip-wrapper")]//div[@class="u-els-bold"]';

const barGraph = {
  getGraphBar: () => cy.get(graphBar),
  getGraphBarIntake: () => cy.get(graphBarIntake),
  getGraphBarOutput: () => cy.get(graphBarOutput),
  getGraphTooltips: () => cy.get(graphTooltips),
  getGraphBarValue: () => cy.xpath(graphBarValue),
  //=========================methods=====================/
  //verify bar graph date
  verifyBarGraphTooltipTimeIntake: val => {
    barGraph.getGraphBarIntake().click();
    vitalSignGraph.getGraphTooltips().then($tooltip => {
      const tooltip = $tooltip.text();
      expect(tooltip).to.contain(val);
    });
  },

  //verify bar graph date
  verifyBarGraphTooltipTimeOutput: val => {
    barGraph.getGraphBarOutput().click();
    vitalSignGraph.getGraphTooltips().then($tooltip => {
      const tooltip = $tooltip.text();
      expect(tooltip).to.contain(val);
    });
  },

  //verify bar graph intake value
  verifyBarGraphTooltipValueIntake: val => {
    barGraph.getGraphBarIntake().scrollIntoView();
    barGraph.getGraphBarIntake().click();
    barGraph.getGraphBarValue().then($val => {
      const tooltip = $val.text();
      expect(tooltip).to.contain(val);
    });
  },

  //verify bar graph output value
  verifyBarGraphTooltipValueOutput: val => {
    barGraph.getGraphBarOutput().scrollIntoView();
    barGraph.getGraphBarOutput().click();
    barGraph.getGraphBarValue().then($val => {
      const tooltip = $val.text();
      expect(tooltip).to.contain(val);
    });
  },

  verifyBarGraphHasValue: yes => {
    yes ? barGraph.getGraphBar().should('exist') : barGraph.getGraphBar().should('not.exist');
  }
};
module.exports = barGraph;
