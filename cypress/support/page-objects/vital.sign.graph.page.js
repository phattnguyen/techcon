//Graph X axis locators
const graphXLabels = 'g[class=recharts-cartesian-axis-ticks]>g>text>tspan[dy="0.71em"]';
const graphYLabels = 'g[class="recharts-layer recharts-cartesian-axis-tick"]>text>tspan[dy="0.355em"]';
const graphName = 'text[class="recharts-text recharts-label"]>tspan';
const graphType = '#field-input-undefined';
const graphDots = 'g[class="recharts-layer recharts-line-dots"]>rect';
const graphDiastolic = 'g[class="recharts-layer recharts-line-dots"]>circle';
const graphTooltips = '.qa-tooltip-datetime';
const graphDotValue = '//div[@class="line-chart"]//div[@class="u-els-bold"]';
const tooltipCloseButton = 'div[class="line-chart-tooltip__wrapper"]>svg';

const vitalSignGraph = {
  getGraphDates: () => cy.get(graphXLabels),
  getGraphValues: () => cy.get(graphYLabels),
  getGraphType: () => cy.get(graphType),
  getGraphDots: () => cy.get(graphDots),
  getGraphDiastolicDots: () => cy.get(graphDiastolic),
  getGraphTooltips: () => cy.get(graphTooltips),
  getGraphName: () => cy.get(graphName),
  getGraphDotValue: () => cy.xpath(graphDotValue),
  getTooltipCloseBtn: () => cy.get(tooltipCloseButton),

  //=========================methods=====================//
  selectGraphType: type => vitalSignGraph.getGraphType().select(type),
  closeTooltip: () => {
    vitalSignGraph.getTooltipCloseBtn().scrollIntoView();
    cy.wait(500);
    vitalSignGraph.getTooltipCloseBtn().click();
  },
  doubleclickGraphFirstDot: () =>
    vitalSignGraph
      .getGraphDots()
      .first()
      .dblclick({ force: true }),
  verifyLastDateOfGraph: date =>
    vitalSignGraph
      .getGraphDates()
      .last()
      .should('have.text', date),
  verifyFirstDateOfGraph: date =>
    vitalSignGraph
      .getGraphDates()
      .first()
      .should('have.text', date),
  verifyGraphName: name => vitalSignGraph.getGraphName().should('have.text', name),
  verifyGraphFirstDotDateTimeValue: dateTime =>
    vitalSignGraph
      .getGraphDots()
      .eq(0)
      .click({ force: true })
      .then(() => {
        vitalSignGraph.getGraphTooltips().should('contain.text', dateTime);
      }),
  verifyYAxisMaxValue: val =>
    vitalSignGraph
      .getGraphValues()
      .last()
      .then(el => {
        assert.isAbove(parseInt(el.text()), val, 'Max value of Y axis is greater than max value inputed');
      }),
  verifyYAxisMinValue: val =>
    vitalSignGraph
      .getGraphValues()
      .first()
      .then(el => {
        assert.isBelow(parseInt(el.text()), val, 'Min value of Y axis is smaller than min value inputed');
      }),
  verifyGraphFirstDotValue: val => {
    vitalSignGraph
      .getGraphDots()
      .first()
      .click({ force: true });
    vitalSignGraph
      .getGraphDotValue()
      .first()
      .should('contain.text', val);
  },
  verifyGraphFirstDiastolicDotValue: val => {
    vitalSignGraph
      .getGraphDiastolicDots()
      .first()
      .click();
    vitalSignGraph
      .getGraphDotValue()
      .first()
      .should('have.text', val);
  },
  verifyGraphHasValue: yes => {
    if (yes) {
      vitalSignGraph.getGraphDots().should('exist');
    } else {
      vitalSignGraph.getGraphDots().should('not.exist');
      vitalSignGraph.getGraphDiastolicDots().should('not.exist');
    }
  },

  //Compare latest tooltip time value with given value
  verifyGraphTooltipTime: val => {
    vitalSignGraph
      .getGraphDots()
      .last()
      .click();
    vitalSignGraph.getGraphTooltips().then($tooltip => {
      const tooltip = $tooltip.text();
      expect(tooltip).to.contain(val);
    });
  }
};
module.exports = vitalSignGraph;
