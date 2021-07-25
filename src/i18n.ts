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
      "loginPage.nameInput": "Your Name",
      "loginPage.zipInput": "Your Zip Code",
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
      by googling "Red Spring Picnic Area".
      See you at the wedding.
      `,
      logout: "Logout",

      timeUntilWedding: "",
      timeSinceWedding: "",

      "receptionRsvp.set": "Reception RSVP already set:",
      "receptionInfo.address.line1": "1001 N Bruce St",
      "receptionInfo.address.line2": "Las Vegas, NV 89101",
      "receptionVenue.lat": "36.18269",
      "receptionVenue.long": "-115.12544",
      cancel: "Cancel",
      "rsvpForm.notes": "Notes",
      attendingCount: "Total Attending: {{count}}",
      decliningCount: "Declining: {{count}}",
      familyMemberName: "Full Name of Guest {{number}}",
      childrenAttendingCount: "Children in your party: {{count}}",
      "menuItem.home": "Home",
      "menuItem.faqs": "FAQs",
      "menuItem.gallery": "Gallery",

      "galleryPage.comingSoon": "Gallery Coming After the Wedding",
      "galleryPage.instruction":
        "Please tag images shared on social media with the tag #JieunAndMarc2021 so we can agreggate them here after the wedding.",

      "questionsPage.title": "Common Questions",
      "questionPage.question1":
        "Why did we choose to have our wedding ceremony at Red Springs Boardwalk?",
      "questionPage.answer1":
        "It is just so beautiful here. Marc and I used to walk here whenever it was nice out. I definitely would pick this place as the most beautiful outdoor spot in Las Vegas in my heart. Also, we took our engagement photoshoot here.",
      "questionPage.question2": "When is the RSVP deadline?",
      "questionPage.answer2":
        "Please RSVP by October 1st, so we can have an accurate headcount. :)",
      "questionPage.question3": "May I bring a date?",
      "questionPage.answer3": "Yes, you are invited to bring a + 1 :)",
      "questionPage.question4": "Are young children welcome?",
      "questionPage.answer4":
        "As much as we love your little ones, we will not be including them in the reception. However, we recognize that some of you will be traveling with your kids, so please know they are welcome at the Ceremony at Red Rock! If you cannot find other accommodations for them or have any questions please reach out to us.",
      "questionPage.answer4b":
        "As much as we love your little ones, we would prefer not to include them in the reception. If you cannot find other accommodations for them or have any questions please reach out to us.",
      "questionPage.answer4c": "Yes they are!",
      "questionPage.question5": "What will the weather be like?",
      "questionPage.answer5":
        "Welcome to Las Vegas, all of you out-of-towners! The weather in October can be somewhat cooler weather, providing a little break from the desert's relentless heat. The average low temperature is 46°F while highs still reach into the 80°F range. During the day, expect lots of sunshine—the average rainfall for October is only 0.3 inches. When the sun sets, the desert city gets cool very quickly. Please bring some warm layers for the evening. ;)",
      "questionPage.question6": "Where should I park?",
      "questionPage.answer6": "Red Spring Boardwalk offers free parking.",
      "questionPage.question7": "What should I wear?",
      "questionPage.answer7":
        "Semi-formal (suit and tie and cocktail dresses) or Cocktail attire (suits and party dresses)",
      "questionPage.question8": "Is the wedding indoors or outdoors?",
      "questionPage.answer8": "Our wedding ceremony is outdoors.",
      "questionPage.question9": "What kind of shoes should/shouldn't I wear?",
      "questionPage.answer9":
        "Calling all ladies! Please be aware of that 0.5 miles of walking to our ceremony platform. A lot of people bring both comfy shoes and high heels and they switch around between walking and taking photos. I will leave it up to you girls.",
      "questionPage.question10": "Is the reception indoors or outdoors?",
      "questionPage.answer10": "Our reception is being held indoors.",
      "questionPage.question11":
        "Is it okay to take pictures with our phones and cameras during the wedding?",
      "questionPage.answer11":
        "Yes! We would love for you to take photos/videos and share them with us via whatsapp, google photo, or text message. For Instagram or FB, please use #MarcAndJenna2021 so we can fill up the gallery with all your beautiful images.",
      "questionPage.question12": "Whom should I call with questions?",
      "questionPage.answer12":
        "Marc (702)290-2481 or Jenna(Jieun) (702)410-3248. If we don’t answer your phone or text message, please reach out to our sister, Stephanie with a question at (702) 756-4612.",
      "questionPage.answer12b":
        "Marc (702)290-2481 or Jenna(Jieun) (702)410-3248.",

      "questionPage.question13": "Do you have a wedding registry?",
      "questionPage.answer13":
        "The only present we want is your attendance on our special day. However, if you insist on giving we would hugely appreciate a donation towards our honeymoon fund in place of any physical wedding gifts.",
      "questionPage.question14": "What is the best way to get to the strip?",
      "questionPage.answer14":
        "There are lots of ways to get downtown or strip! There are several car rental options, and Lyft and Uber are relatively inexpensive. Every MGM property casino & hotel charges a parking fee. These casino hotels below offer free parking: Wynn, Treasure Island, Venetian, or Wynn.",
      "questionPage.question15": "Can you recommend anywhere to eat in Vegas?",
      "questionPage.answer15":
        "Tacos El Gordo|http://tacoselgordobc.com/locations/,Sushi Neko|https://www.yelp.com/biz/sushi-neko-las-vegas,Master Kim’s Korean BBQ|https://masterkimslv.com/,Lotus of Siam|https://lotusofsiamlv.com/,Nabe Hot Pot|https://www.yelp.com/biz/nabe-hotpot-las-vegas,Shanghai Plaza (So many good dessert options)|https://vegas.eater.com/venue/56581/shanghai-plaza,Mint Indian|https://www.mintbistro.com/",
      "questionPage.question16":
        "Can you recommend any fun things to do/see in Vegas?",
      "questionPage.answer16":
        "Walking around Venetian Grand Canal shops,Visiting the Palazzo love sign,Viewing the Bellagio Garden,Game Nest Arcade|http://www.gamenestlv.com/,Area 15|https://area15.com/,Red Rock Canyon|https://www.redrockcanyonlv.org/,Gold Strike Hot Springs (hike)|https://travelnevada.com/hot-springs/gold-strike-hot-spring/,Bowling in many of the local casinos",

      "timeDifference.inProgress": "Wedding In Progress",
      "timeDifference.upcomingDays": "Only {{d}} Days Away",
      "timeDifference.upcomingHours": "Only {{h}} Hours Away",
      "timeDifference.upcomingMinutes": "Only {{m}} Minutes Away",
      "timeDifference.pastDays": "Just {{d}} Days Ago",
      "timeDifference.pastHours": "Just {{h}} Hours Ago",
      "timeDifference.pastMinutes": "Just {{m}} Minutes Ago",
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
