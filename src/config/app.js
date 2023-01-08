const baseConfig = {
  weddingDay: "Saturday",
  weddingTime: "6pm - 1am",
  weddingDate: "Aug 05, 2023",
  showBuiltWithInfo: true,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: "2020-02-22T19:00:00+08:00",
    timeEndISO: "2020-02-22T21:00:00+08:00"
  },
  coupleInfo: {
    brideName: "Samantha",
    groomName: "Amit",
    coupleNameFormat: "GROOM_FIRST"
  },
  venue: {
    name: "The Arlington Estate",
    addressLine1: "8934 Huntington Rd.",
    addressLine2: "",
    city: "Vaughan, Ontario",
    country: "Canada",
    mapUrl: "https://maps.app.goo.gl/pCUqr9AjSN8dxzS57"
  },
  logo: {
    headerLogo: "/assets/images/ring-svg.png",
    footerLogo: "/assets/video/aw-ring-logo-ticker.mp4",
    footerLogoType: "mp4"
  },
  ogTags: {
    logo: "/assets/images/aw-ring-logo.png",
    siteName: "wedding.wzulfikar.com",
    publishedTime: "2020-01-25"
  }
};

const lang = {
  id: {
    weddingDay: "Sabtu",
    weddingDate: "05 May 2023",
    venue: {
      ...baseConfig.venue,
      name: "Hotel Oval",
      addressLine2: "Surabaya, Jawa Timur, 60241,",
    }
  }
};

export default {
  ...baseConfig,
  lang
};
