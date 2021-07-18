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
      "welcome.date": "10.23.21",
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
      weddingMapUrl: "https://goo.gl/maps/RzWFmZzNnQ3C6SL7A",
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
