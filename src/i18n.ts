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
      welcome: "환영합니다",
      "dashboard.setWeddingRsvpButton": "RSVP to the wedding",
      "loginPage.title": "로그인",
      "loginPage.nameInput": "이름",
      "loginPage.zipInput": "우편번호",
      "loginPage.submitButton": "로그인",
      userGreeting: "환영합니다, {{name}}",
      coupleGreeting: "환영합니다 {{name}}씨, {{soName}}",
      "welcome.date": "10.23.2021",
      "welcome.location": "라스베가스, 네바다",
      "welcome.line1": "서지은 &",
      "welcome.line2": "마크 말티노",
      "welcome.enterButton": "RSVP",
      "receptionInfo.title": "Reception",
      "receptionInfo.location": "The Blind Center",
      "receptionInfo.time": "오후 5시",
      "weddingInfo.title": "Wedding",
      "weddingInfo.weddingLocation": "Red Springs Boardwalk",
      "weddingInfo.time": "오전 10시",
      moreInfo: "자세히 보기",
      noInviteeFound:
        "일치하지 않는 이름입니다. 다시 시도해주세요. 혹은 마크 혹은 지은이에게 문의해주십시요",
      jsonParse: "Failed to parse api response",
      "weddingVenue.long": "-115.4191462",
      "weddingVenue.lat": "36.1464701",
      "weddingVenue.address": "Las Vegas, NV 89161",
      clickForMap: "🗺️",
      "weddingRsvp.set": "Wedding RSVP already set",
      updateRsvp: "참석여부 수정하기",
      setRsvp: "참석여부를 알려주세요",
      weddingDescriptionText: `저희 결혼식은 레드락 국립공원 옆에 위치한 레드 스프링 보드웍 플랫폼에서 진행 될 예정입니다.
      식은 정확히 오전 10:30에 시작되어 대략 30분 정도 소요될 예정이오니 미리 오셔서 자리에 앉아 기다려 주시길 바랍니다.
      예식 장소까지는 구글맵 혹은 사용하시는 핸드폰지도 어플에 "Red Spring Picnic Area" 라고 치시고 찾아오시면 됩니다. 
      주차장에 차를 주차하신 후, 공원 내 서쪽으로 피크닉 테이블이 보이는 곳으로 쭉 걸어오시면 끝자락에 보드웍으로 들어가는 입구가 보이실겁니다.
      보드웍을 따라서 쭉 따라 오시면 저희가 식을 올릴 플랫폼이 보이실겁니다.
      보드웍의 길이는 대략 0.8키로 (0.5마일) 이오니 고려하여 편안한 신발을 신어주시기 바랍니다.
      그러면 결혼식때 만나요!`,
      logout: "로그아웃",
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
