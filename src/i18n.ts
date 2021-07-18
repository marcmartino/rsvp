import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  en: {
    translation: {
      "dashboard.updateWeddingRsvpButton":
        "Update Wedding RSVP ({{accepted}}accepted/{{declined}}declined)",
      "dashboard.setWeddingRsvpButton": "RSVP to the wedding",
      welcome: "Welcome",
      "loginPage.title": "Log In",
      "loginPage.nameInput": "Name",
      "loginPage.zipInput": "Zip Code",
      "loginPage.submitButton": "Log In",
      userGreeting: "Welcome, {{name}}",
      coupleGreeting: "Welcome {{name}} and {{soName}}",
      "welcome.date": "10.23.2021",
      "welcome.location": "Las Vegas, NV",
      "welcome.line1": "Jenna (Jieun) &",
      "welcome.line2": "Marc",
      "welcome.enterButton": "RSVP",
      "receptionInfo.title": "Reception",
      "receptionInfo.location": "The Blind Center",
      "receptionInfo.time": "5:00pm",
      "weddingInfo.title": "Wedding",
      "weddingInfo.weddingLocation": "Red Springs Boardwalk",
      "weddingInfo.time": "10:00am",
      moreInfo: "More Info",
      noInviteeFound:
        "Invitee not found- Please try again or reach out directly to Marc or Jenna",
      jsonParse: "Failed to parse api response",
      "weddingVenue.long": "-115.4191462",
      "weddingVenue.lat": "36.1464701",
      "weddingVenue.address": "Las Vegas, NV 89161",
      clickForMap: "🗺️",
      "weddingRsvp.set": "Wedding RSVP already set",
      updateRsvp: "Update RSVP",
      setRsvp: "RSVP Here",
      weddingDescriptionText: `Our ceremony will be held at the 
      Red Spring boardwalk platform
      The ceremony will begin promptly at 10:30 AM
      It will last for about half an hour
      After parking your car, walk toward the picnic area.
      Then you will see the boardwalk ahead
      Please follow the path and
      arrive at the beautiful outdoor ceremony platform
      As you will be walking a bit, 
      please consider wearing comfortable shoes for walking
      You can find the direction to the parking area 
      by googling "Red Spring Picnic Area"
      See you at the wedding.
      `,
      logout: "Logout",
    },
  },
  kr: {
    translation: {
      welcome: "환영하다",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    // load: ["en", "kr"],
    // lng: "kr",
    // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
