import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import BasicNursingCare from './basic.nursing.care.page';

const activity = new searchDropdown('#activity');
const ambulationLocomotion = new searchDropdown('#ambulationLocomotion');
const turningRangeOfMotion = new searchDropdown('#turningRangeOfMotion');
const activityNotes = new textArea('#field-input-activityNotes');
const ambulationLocomotionNotes = new textArea('#field-input-ambulationLocomotionNotes');
const turningRangeOfMotionNotes = new textArea('#field-input-turningRangeOfMotionNotes');

class ActivityPage extends BasicNursingCare {
  selectActivity(options) {
    activity.searchAndSelectMultiOption(options);
  }

  selectAmbulationLocomotion(options) {
    ambulationLocomotion.searchAndSelectMultiOption(options);
  }

  selectTurningRangeOfMotion(options) {
    turningRangeOfMotion.searchAndSelectMultiOption(options);
  }

  inputActivityNotes(text) {
    activityNotes.inputText(text);
  }

  inputAmbulationLocomotionNotes(text) {
    ambulationLocomotionNotes.inputText(text);
  }

  inputTurningRangeOfMotionNotes(text) {
    turningRangeOfMotionNotes.inputText(text);
  }

  verifySelectedActivity(yes, options) {
    yes ? activity.verifySelectedOptions(options) : activity.verifyUnselectOptions(options);
  }

  verifySelectedAmbulationLocomotion(yes, options) {
    yes ? ambulationLocomotion.verifySelectedOptions(options) : ambulationLocomotion.verifyUnselectOptions(options);
  }

  verifySelectedTurningRangeOfMotion(yes, options) {
    yes ? turningRangeOfMotion.verifySelectedOptions(options) : turningRangeOfMotion.verifyUnselectOptions(options);
  }

  verifyActivityNotes(text) {
    activityNotes.verifyTextFieldValue(text);
  }

  verifyAmbulationLocomotionNotes(text) {
    ambulationLocomotionNotes.verifyTextFieldValue(text);
  }

  verifyTurningRangeOfMotionNotes(text) {
    turningRangeOfMotionNotes.verifyTextFieldValue(text);
  }

  verifyAllFieldsEnabled(yes) {
    activity.verifyElementEnabled(yes);
    ambulationLocomotion.verifyElementEnabled(yes);
    turningRangeOfMotion.verifyElementEnabled(yes);
  }
}
export default ActivityPage;
