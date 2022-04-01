/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Showcase.js":
/*!*************************!*\
  !*** ./src/Showcase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShowcase": () => (/* binding */ createShowcase),
/* harmony export */   "photoFunctions": () => (/* binding */ photoFunctions),
/* harmony export */   "videoFunctions": () => (/* binding */ videoFunctions)
/* harmony export */ });
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMManip */ "./src/DOMManip.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./src/Footer.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _showcase_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showcase.css */ "./src/showcase.css");





function createShowcase(title) {
  var header = (0,_Header__WEBPACK_IMPORTED_MODULE_2__["default"])(title);
  var content = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "content");
  var footer = (0,_Footer__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var titleContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "title-container", "title-container");
  var titleText = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "title", "title-text", title);
  titleContainer.appendChild(titleText);
  _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(content, titleContainer);
  _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(document.body, header, content, footer);
}

var videoFunctions = function () {
  function _embedVideo(source) {
    return _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("iFrame", "", "showcase-video", "", {
      width: "560"
    }, {
      height: "315"
    }, {
      src: source
    }, {
      frameborder: "0"
    }, {
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    }, {
      allowfullscreen: ""
    });
  }

  function _createVideo(title, source) {
    var videoContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "", "showcase-container");
    var videoTitle = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "", "showcase-title", title);

    var video = _embedVideo(source);

    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(videoContainer, videoTitle, video);
    return videoContainer;
  }

  function createVideoPage() {
    var page = [];

    for (var _len = arguments.length, videos = new Array(_len), _key = 0; _key < _len; _key++) {
      videos[_key] = arguments[_key];
    }

    videos.forEach(function (video) {
      page.push(_createVideo(video.title, video.source));
    });
    return page;
  }

  function displayVideoPage(page) {
    var content = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#content");
    page.forEach(function (page) {
      content.appendChild(page);
    });
  }

  return {
    createVideoPage: createVideoPage,
    displayVideoPage: displayVideoPage
  };
}();

var photoFunctions = function () {
  function createPhotoPage() {
    for (var _len2 = arguments.length, photos = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      photos[_key2] = arguments[_key2];
    }

    var page = [];
    photos.forEach(function (photo, index) {
      var container = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "", "image-container");
      var number = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "", "number-text", "".concat(index + 1, " / ").concat(photos.length));
      var photograph = new Image();
      photograph.src = photo;
      _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(container, number, photograph);
      page.push(container);
    });
    return page;
  }

  function displayPhotoPage(page) {
    var content = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#content");
    var prev = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("i", "prev", "prev fa-solid fa-angle-left");
    var next = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("i", "next", "next fa-solid fa-angle-right");
    var photoContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "", "photos-container");
    page.forEach(function (page) {
      photoContainer.appendChild(page);
    });
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(photoContainer, prev, next);
    content.appendChild(photoContainer);

    _activatePhotoPage();
  }

  function _activatePhotoPage() {
    var prev = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement(".prev");
    var next = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement(".next");
    prev.addEventListener("click", plusSlides.bind(null, -1));
    next.addEventListener("click", plusSlides.bind(null, 1));
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function showSlides(n) {
      var i;
      var slides = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElements(".image-container");

      if (n > slides.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = slides.length;
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slides[slideIndex - 1].style.display = "block";
    }
  }

  return {
    createPhotoPage: createPhotoPage,
    displayPhotoPage: displayPhotoPage
  };
}();



/***/ }),

/***/ "./src/about/index.js":
/*!****************************!*\
  !*** ./src/about/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Showcase */ "./src/Showcase.js");
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOMManip */ "./src/DOMManip.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/about/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.css */ "./src/index.css");
/* harmony import */ var _assets_photo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/photo.jpg */ "./src/about/assets/photo.jpg");
/* harmony import */ var _assets_tree_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/tree.jpg */ "./src/about/assets/tree.jpg");
/* eslint-disable no-unused-vars */







var createAbout = function () {
  (0,_Showcase__WEBPACK_IMPORTED_MODULE_0__.createShowcase)("About Me");
  var content = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.getElement("#content");
  var fullContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "full-container");
  var photo1 = new Image();
  photo1.src = _assets_photo_jpg__WEBPACK_IMPORTED_MODULE_4__;
  photo1.setAttribute("class", "side-image");
  var photo2 = new Image();
  photo2.src = _assets_tree_jpg__WEBPACK_IMPORTED_MODULE_5__;
  photo2.setAttribute("class", "side-image");
  var contentInfoContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "content-info-container");
  var briefDescription = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "brief-description", "brief-description", "Originally from Wisconsin, Tim made his way to Oregon to attend Oregon State University and quickly fell in love with the state. Tim is passionate about what he does, and he approaches all of his work with the energy to get things done. He is a quick study and loves to learn new processes and techniques in his career and his hobbies. He loves outdoor adventure activities like kayaking, canyoneering, skiing, camping, and climbing. He lives with his fiance, Jessy and their pekingese, Frank");
  var linkContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "img-link-container");
  var linkedin = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("i", "img-linkedin", "img-link fa-brands fa-linkedin");
  var github = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("i", "img-github", "img-link fa-brands fa-github-square");
  var youtube = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("i", "img-youtube", "img-link fa-brands fa-youtube-square");
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(linkContainer, linkedin, github, youtube);
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(contentInfoContainer, briefDescription, linkContainer);
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(fullContainer, photo1, contentInfoContainer, photo2);
  content.appendChild(fullContainer);
  var resumeContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "resume-container");
  var resumeTitle = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "resume-title", "sub-title", "Resume");
  var resumeDataContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "resume-data-container");
  var strengthsContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "strengths-container", "section-container");
  var strengthsTitle = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "strengths-title", "section-title", "My Strengths");
  var strengthsInfoContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("ul", "strength-info-container");

  _bulletAdd(strengthsInfoContainer, "Expertise in technical applications, customer service and problem-solving.", "Experience leading teams to provide excellent experiences for others.", "Self-motivated and focused on given tasks", "Has a growth mindset - always trying to improve and celebrates victories along the way");

  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(strengthsContainer, strengthsTitle, strengthsInfoContainer);
  var techSkillsContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "tech-skills-container", "section-container");
  var techSkillsTitle = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "tech-skills-title", "section-title", "Technical Skills");
  var techSkillsInfoContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("ul", "tech-skills-info-container");

  _bulletAdd(techSkillsInfoContainer, "Software: Premiere Pro, After Effects, Audition, Photoshop, In Design, Office Suite, Google Suite", "Proficiency writing code: Java, HTML, Javascript, css", "Group Dynamics", "Social Media Management", "Outdoor Leadership", "Databases", "Data Structures", "Video & Sound Pre/Post-Production", "Documentary Production", "Applied Sound Design", "Media Entrepreneurship", "Media Writing");

  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(techSkillsContainer, techSkillsTitle, techSkillsInfoContainer);
  var experiencesContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "experiences-container", "section-container");

  var exp1 = _makeExperience("Peak Sports", "Corvallis, Oregon", "Apr 2020", "Present", _makeJob("Adventure Services Coordinator", "Oversaw the development of an outdoor guide and education service", "Managed and submitted land use permit applications", "Developed lesson plans and curriculums for multiple levels of classes in various outdoor sports", "Established community engagement events with guest speakers specializing in outdoor recreation and sustainability", "Acted as assistant manager for a local outdoor recreation retail store.", "Built tools to make store processes more efficient and organized", "Worked alongside retail buyers to make decisions regarding purchase orders", "Trained staff about many specialties of outdoor recreation including ski, watersport, backpacking, general camping, footwear, and apparel", "Worked with marketing team to produce instructional videos.", "Acted as sales guide, answering questions about outdoor recreation from customers with a wide range of backgrounds"));

  var exp2 = _makeExperience("Adventure Leadership Institute at Oregon State University", "Corvallis, Oregon", "Aug 2014", "July 2019", _makeJob("Employee Manager", "Supervised student employees and created work schedules", "Organized and facilitated regular staff meetings", "Trained new staff and assisted with onboarding procedures", "Managed inventory and performed routine repairs on outdoor recreation equipment", "Registered customers for outdoor programs and gear rentals", "Developed procedures to streamline outdoor trip preparation and send-off"), _makeJob("Instructor, Trip Leader, Club Coordinator", "Achieved highest level of Adventure Leadership Guide Mentor certificate", "Instructed Oregon State University Physical Activity credit courses", "Planned and led backpacking, canoeing, kayaking, caving, biking, whitewater rafting, climbing and other outdoor trips", "Encouraged safety-focused work culture and inspected trip proposals for viability and risk management"), _makeJob("Communications Intern", "Strategized and developed promotional campaigns", "Produced video promotional materials", "Managed social media pages"));

  var exp3 = _makeExperience("Next Adventure", "Portland, Oregon", "July 2019", "Nov 2019", _makeJob("Paddle Sports Specialist", "Water sports subject matter expert", "Customer service desk manager", "Responsible for inventory intake/output", "Proactively balanced variable workflow to maintain high-quality customer service"));

  var exp4 = _makeExperience("Cayen Systems LLC", "Milwaukee, Wisconsin", "Nov 2015", "Jun 2016", _makeJob("Marketing & Database Intern", "Managed company online marketing", "Developed company website and maintained backend database", "Performed APR data entry for multiple states", "Performed server maintenance"));

  var exp5 = _makeExperience("Camp Manito–wish YMCA Summer Camp", "Boulder Junction, Wisconsin", "June 2011", "July 2014", _makeJob("Seasonal Administrator ", "Supervised middle school/high school campers and college-age counselors", "Trained wilderness trip leaders and safety coordinators", "Resolved issues and mediated conflicts among campers and staff members", "Completed paperwork for internal camp activities and operational requirements"));

  var exp6 = _makeExperience("Pabst Theater Group", "Milwaukee, Wisconsin", "Oct 2015", " June 2016", _makeJob("Customer Service", "Front of house representative in charge of assisting patrons during performances", "Successfully managed high-intensity crisis situations", "Trained community member volunteers to provide customer service"));

  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(experiencesContainer, exp1, exp2, exp3, exp4, exp5, exp6);
  var educationContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "education-container", "section-container");
  var educationTitle = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "education-title", "section-title", "Education");
  var schoolNameContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "school-name-container");
  var schoolName = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("span", "school-name", "school-label", "Oregon State University");
  var schoolLocation = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("span", "school-location", "location-label", "Corvallis, Oregon");
  var degreeLabel = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "degree-label", "section-text", "BS, Digital Communication Arts, Computer Science Minor, 2019");
  var activitiesLabel = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "activities-label", "section-text", "Student Activities");
  var activity1 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "activity-1", "activity-text section-text", "Adventure Club - Media and Water Coordinator");
  var activity2 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "activity-2", "activity-text section-text", "FIRST Robotics - Software Mentor");
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(schoolNameContainer, schoolName, schoolLocation);
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(educationContainer, educationTitle, schoolNameContainer, degreeLabel, activitiesLabel, activity1, activity2);
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(resumeDataContainer, strengthsContainer, techSkillsContainer, experiencesContainer, educationContainer);
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(resumeContainer, resumeTitle, resumeDataContainer);
  content.appendChild(resumeContainer);

  function _bulletAdd(parent) {
    for (var _len = arguments.length, bullets = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      bullets[_key - 1] = arguments[_key];
    }

    bullets.flat().forEach(function (bullet) {
      parent.appendChild(_DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("li", "", "section-text", bullet));
    });
  }

  function _makeJob(title) {
    var jobContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "", "job-container");
    var jobTitle = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "", "job-title", title);
    var skillList = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("ul", "", "skill-list");

    for (var _len2 = arguments.length, skills = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      skills[_key2 - 1] = arguments[_key2];
    }

    _bulletAdd(skillList, skills);

    _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(jobContainer, jobTitle, skillList);
    return jobContainer;
  }

  function _makeExperience(employer, location, start, finish) {
    var experienceContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "", "experience-container");
    var expTitleContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "", "experience-title-container");
    var employerLabel = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("span", "", "employer-label", employer);
    var locationLabel = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("span", "", "location-label", location);
    var timeLabel = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("span", "", "time-label", "".concat(start, " - ").concat(finish));
    _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(expTitleContainer, employerLabel, locationLabel, timeLabel);
    var jobsContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "", "jobs-container");

    for (var _len3 = arguments.length, jobs = new Array(_len3 > 4 ? _len3 - 4 : 0), _key3 = 4; _key3 < _len3; _key3++) {
      jobs[_key3 - 4] = arguments[_key3];
    }

    jobs.forEach(function (job) {
      jobsContainer.appendChild(job);
    });
    _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(experienceContainer, expTitleContainer, jobsContainer);
    return experienceContainer;
  }

  var activateAbout = function () {
    linkedin.addEventListener("click", function () {
      return window.location.href = "https://www.linkedin.com/in/tim-schley-56119662/";
    });
    github.addEventListener("click", function () {
      return window.location.href = "https://github.com/ThunderKlappe";
    });
    youtube.addEventListener("click", function () {
      return window.location.href = "https://www.youtube.com/user/PandaTimmy";
    });
  }();
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/about/index.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/about/index.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#full-container {\n    display: flex;\n}\n#content-info-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n}\n\n.side-image {\n    width: 250px;\n    height: 250px;\n    border-radius: 30%;\n    margin: 25px;\n}\n\n#brief-description {\n    margin: 20px 0px 0px 0px;\n    width: auto;\n}\n\n#img-link-container {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.img-link {\n    font-size: 100px;\n    cursor: pointer;\n}\n\n.img-link:hover {\n    filter: brightness(70%);\n}\n\n.sub-title {\n    font-size: 38px;\n}\n\n#resume-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 50px;\n}\n\n#resume-data-container {\n    max-width: 1000px;\n}\n\n.section-title {\n    font-size: 26px;\n    color: black;\n}\n\n.section-text {\n    color: darkslategray;\n}\n\n.employer-label {\n    color: black;\n    font-size: 20px;\n    margin-right: 15px;\n}\n\n.location-label {\n    color: black;\n    margin-right: 15px;\n}\n\n.time-label {\n    color: black;\n}\n\n.skill-list {\n    margin-top: 3px;\n}\n\n.school-label {\n    font-size: 20px;\n    margin-right: 15px;\n}\n\n.activity-text {\n    font-size: 14px;\n    font-style: italic;\n}\n", "",{"version":3,"sources":["webpack://./src/about/index.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB","sourcesContent":["#full-container {\n    display: flex;\n}\n#content-info-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n}\n\n.side-image {\n    width: 250px;\n    height: 250px;\n    border-radius: 30%;\n    margin: 25px;\n}\n\n#brief-description {\n    margin: 20px 0px 0px 0px;\n    width: auto;\n}\n\n#img-link-container {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.img-link {\n    font-size: 100px;\n    cursor: pointer;\n}\n\n.img-link:hover {\n    filter: brightness(70%);\n}\n\n.sub-title {\n    font-size: 38px;\n}\n\n#resume-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 50px;\n}\n\n#resume-data-container {\n    max-width: 1000px;\n}\n\n.section-title {\n    font-size: 26px;\n    color: black;\n}\n\n.section-text {\n    color: darkslategray;\n}\n\n.employer-label {\n    color: black;\n    font-size: 20px;\n    margin-right: 15px;\n}\n\n.location-label {\n    color: black;\n    margin-right: 15px;\n}\n\n.time-label {\n    color: black;\n}\n\n.skill-list {\n    margin-top: 3px;\n}\n\n.school-label {\n    font-size: 20px;\n    margin-right: 15px;\n}\n\n.activity-text {\n    font-size: 14px;\n    font-style: italic;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/showcase.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/showcase.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".showcase-title {\n    font-size: 28px;\n    margin: 8px;\n}\n\n.showcase-container {\n    margin: 20px 0px;\n}\n\n.photos-container {\n    position: relative;\n}\n.image-container {\n    display: none;\n}\n.image-container > img {\n    width: 80vw;\n    max-width: 1000px;\n}\n\n.prev,\n.next {\n    cursor: pointer;\n    position: absolute;\n    top: 40%;\n    width: auto;\n    padding: 50px 16px;\n    margin-top: -26px;\n    color: white;\n    font-weight: bold;\n    font-size: 20px;\n    border-radius: 0 3px 3px 0;\n    user-select: none;\n    -webkit-user-select: none;\n    transition: 0.25s;\n}\n.next {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n.prev:hover,\n.next:hover {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n.number-text {\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n    font-size: 12px;\n    padding: 8px 12px;\n    position: absolute;\n    top: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/showcase.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;;IAEI,eAAe;IACf,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,0BAA0B;IAC1B,iBAAiB;IACjB,yBAAyB;IACzB,iBAAiB;AACrB;AACA;IACI,QAAQ;IACR,0BAA0B;AAC9B;AACA;;IAEI,oCAAoC;AACxC;AACA;IACI,YAAY;IACZ,oCAAoC;IACpC,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,MAAM;AACV","sourcesContent":[".showcase-title {\n    font-size: 28px;\n    margin: 8px;\n}\n\n.showcase-container {\n    margin: 20px 0px;\n}\n\n.photos-container {\n    position: relative;\n}\n.image-container {\n    display: none;\n}\n.image-container > img {\n    width: 80vw;\n    max-width: 1000px;\n}\n\n.prev,\n.next {\n    cursor: pointer;\n    position: absolute;\n    top: 40%;\n    width: auto;\n    padding: 50px 16px;\n    margin-top: -26px;\n    color: white;\n    font-weight: bold;\n    font-size: 20px;\n    border-radius: 0 3px 3px 0;\n    user-select: none;\n    -webkit-user-select: none;\n    transition: 0.25s;\n}\n.next {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n.prev:hover,\n.next:hover {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n.number-text {\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n    font-size: 12px;\n    padding: 8px 12px;\n    position: absolute;\n    top: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/about/index.css":
/*!*****************************!*\
  !*** ./src/about/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/about/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/showcase.css":
/*!**************************!*\
  !*** ./src/showcase.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_showcase_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./showcase.css */ "./node_modules/css-loader/dist/cjs.js!./src/showcase.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_showcase_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_showcase_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_showcase_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_showcase_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/about/assets/photo.jpg":
/*!************************************!*\
  !*** ./src/about/assets/photo.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47c73f402af99249776e.jpg";

/***/ }),

/***/ "./src/about/assets/tree.jpg":
/*!***********************************!*\
  !*** ./src/about/assets/tree.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ecc46541d16672ee2ce.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"./about/index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_Footer_js-src_Header_js","src_index_css"], () => (__webpack_require__("./src/about/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvU2hvd2Nhc2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fib3V0L2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hYm91dC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3Nob3djYXNlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYWJvdXQvaW5kZXguY3NzP2UzZTQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3Nob3djYXNlLmNzcz8xNzIzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET01NYW5pcCB9IGZyb20gXCIuL0RPTU1hbmlwXCI7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBcIi4vc2hvd2Nhc2UuY3NzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNob3djYXNlKHRpdGxlKSB7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKHRpdGxlKTtcbiAgICBjb25zdCBjb250ZW50ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInRpdGxlLWNvbnRhaW5lclwiLCBcInRpdGxlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0aXRsZVRleHQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInRpdGxlXCIsIFwidGl0bGUtdGV4dFwiLCB0aXRsZSk7XG5cbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGNvbnRlbnQsIHRpdGxlQ29udGFpbmVyKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihkb2N1bWVudC5ib2R5LCBoZWFkZXIsIGNvbnRlbnQsIGZvb3Rlcik7XG59XG5jb25zdCB2aWRlb0Z1bmN0aW9ucyA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gX2VtYmVkVmlkZW8oc291cmNlKSB7XG4gICAgICAgIHJldHVybiBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiaUZyYW1lXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJzaG93Y2FzZS12aWRlb1wiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIHsgd2lkdGg6IFwiNTYwXCIgfSxcbiAgICAgICAgICAgIHsgaGVpZ2h0OiBcIjMxNVwiIH0sXG4gICAgICAgICAgICB7IHNyYzogc291cmNlIH0sXG4gICAgICAgICAgICB7IGZyYW1lYm9yZGVyOiBcIjBcIiB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFsbG93OiBcImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGFsbG93ZnVsbHNjcmVlbjogXCJcIiB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZVZpZGVvKHRpdGxlLCBzb3VyY2UpIHtcbiAgICAgICAgY29uc3QgdmlkZW9Db250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIlwiLCBcInNob3djYXNlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgdmlkZW9UaXRsZSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwic2hvd2Nhc2UtdGl0bGVcIiwgdGl0bGUpO1xuICAgICAgICBjb25zdCB2aWRlbyA9IF9lbWJlZFZpZGVvKHNvdXJjZSk7XG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKHZpZGVvQ29udGFpbmVyLCB2aWRlb1RpdGxlLCB2aWRlbyk7XG4gICAgICAgIHJldHVybiB2aWRlb0NvbnRhaW5lcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlVmlkZW9QYWdlKC4uLnZpZGVvcykge1xuICAgICAgICBsZXQgcGFnZSA9IFtdO1xuICAgICAgICB2aWRlb3MuZm9yRWFjaCh2aWRlbyA9PiB7XG4gICAgICAgICAgICBwYWdlLnB1c2goX2NyZWF0ZVZpZGVvKHZpZGVvLnRpdGxlLCB2aWRlby5zb3VyY2UpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNwbGF5VmlkZW9QYWdlKHBhZ2UpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjY29udGVudFwiKTtcbiAgICAgICAgcGFnZS5mb3JFYWNoKHBhZ2UgPT4ge1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7IGNyZWF0ZVZpZGVvUGFnZSwgZGlzcGxheVZpZGVvUGFnZSB9O1xufSkoKTtcblxuY29uc3QgcGhvdG9GdW5jdGlvbnMgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVBob3RvUGFnZSguLi5waG90b3MpIHtcbiAgICAgICAgbGV0IHBhZ2UgPSBbXTtcbiAgICAgICAgcGhvdG9zLmZvckVhY2goKHBob3RvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJpbWFnZS1jb250YWluZXJcIik7XG4gICAgICAgICAgICBjb25zdCBudW1iZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgXCJudW1iZXItdGV4dFwiLFxuICAgICAgICAgICAgICAgIGAke2luZGV4ICsgMX0gLyAke3Bob3Rvcy5sZW5ndGh9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHBob3RvZ3JhcGggPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHBob3RvZ3JhcGguc3JjID0gcGhvdG87XG5cbiAgICAgICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGNvbnRhaW5lciwgbnVtYmVyLCBwaG90b2dyYXBoKTtcbiAgICAgICAgICAgIHBhZ2UucHVzaChjb250YWluZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVBob3RvUGFnZShwYWdlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI2NvbnRlbnRcIik7XG4gICAgICAgIGNvbnN0IHByZXYgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImlcIiwgXCJwcmV2XCIsIFwicHJldiBmYS1zb2xpZCBmYS1hbmdsZS1sZWZ0XCIpO1xuICAgICAgICBjb25zdCBuZXh0ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJpXCIsIFwibmV4dFwiLCBcIm5leHQgZmEtc29saWQgZmEtYW5nbGUtcmlnaHRcIik7XG4gICAgICAgIGNvbnN0IHBob3RvQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJwaG90b3MtY29udGFpbmVyXCIpO1xuICAgICAgICBwYWdlLmZvckVhY2gocGFnZSA9PiB7XG4gICAgICAgICAgICBwaG90b0NvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKHBob3RvQ29udGFpbmVyLCBwcmV2LCBuZXh0KTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwaG90b0NvbnRhaW5lcik7XG4gICAgICAgIF9hY3RpdmF0ZVBob3RvUGFnZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hY3RpdmF0ZVBob3RvUGFnZSgpIHtcbiAgICAgICAgY29uc3QgcHJldiA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIucHJldlwiKTtcbiAgICAgICAgY29uc3QgbmV4dCA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIubmV4dFwiKTtcblxuICAgICAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbHVzU2xpZGVzLmJpbmQobnVsbCwgLTEpKTtcbiAgICAgICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGx1c1NsaWRlcy5iaW5kKG51bGwsIDEpKTtcblxuICAgICAgICBsZXQgc2xpZGVJbmRleCA9IDE7XG4gICAgICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCk7XG5cbiAgICAgICAgZnVuY3Rpb24gcGx1c1NsaWRlcyhuKSB7XG4gICAgICAgICAgICBzaG93U2xpZGVzKChzbGlkZUluZGV4ICs9IG4pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNob3dTbGlkZXMobikge1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBsZXQgc2xpZGVzID0gRE9NTWFuaXAuZ2V0RWxlbWVudHMoXCIuaW1hZ2UtY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgaWYgKG4gPiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobiA8IDEpIHtcbiAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2xpZGVzW3NsaWRlSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlUGhvdG9QYWdlLCBkaXNwbGF5UGhvdG9QYWdlIH07XG59KSgpO1xuXG5leHBvcnQgeyBjcmVhdGVTaG93Y2FzZSwgdmlkZW9GdW5jdGlvbnMsIHBob3RvRnVuY3Rpb25zIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsgY3JlYXRlU2hvd2Nhc2UgfSBmcm9tIFwiLi4vU2hvd2Nhc2VcIjtcbmltcG9ydCB7IERPTU1hbmlwIH0gZnJvbSBcIi4uL0RPTU1hbmlwXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwiLi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgcGhvdG8xSW1nIGZyb20gXCIuL2Fzc2V0cy9waG90by5qcGdcIjtcbmltcG9ydCBwaG90bzJJbWcgZnJvbSBcIi4vYXNzZXRzL3RyZWUuanBnXCI7XG5cbmNvbnN0IGNyZWF0ZUFib3V0ID0gKCgpID0+IHtcbiAgICBjcmVhdGVTaG93Y2FzZShcIkFib3V0IE1lXCIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI2NvbnRlbnRcIik7XG4gICAgY29uc3QgZnVsbENvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiZnVsbC1jb250YWluZXJcIik7XG4gICAgY29uc3QgcGhvdG8xID0gbmV3IEltYWdlKCk7XG4gICAgcGhvdG8xLnNyYyA9IHBob3RvMUltZztcbiAgICBwaG90bzEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlLWltYWdlXCIpO1xuICAgIGNvbnN0IHBob3RvMiA9IG5ldyBJbWFnZSgpO1xuICAgIHBob3RvMi5zcmMgPSBwaG90bzJJbWc7XG4gICAgcGhvdG8yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZS1pbWFnZVwiKTtcblxuICAgIGNvbnN0IGNvbnRlbnRJbmZvQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250ZW50LWluZm8tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGJyaWVmRGVzY3JpcHRpb24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJicmllZi1kZXNjcmlwdGlvblwiLFxuICAgICAgICBcImJyaWVmLWRlc2NyaXB0aW9uXCIsXG4gICAgICAgIFwiT3JpZ2luYWxseSBmcm9tIFdpc2NvbnNpbiwgVGltIG1hZGUgaGlzIHdheSB0byBPcmVnb24gdG8gYXR0ZW5kIE9yZWdvbiBTdGF0ZSBVbml2ZXJzaXR5IGFuZCBxdWlja2x5IGZlbGwgaW4gbG92ZSB3aXRoIHRoZSBzdGF0ZS4gVGltIGlzIHBhc3Npb25hdGUgYWJvdXQgd2hhdCBoZSBkb2VzLCBhbmQgaGUgYXBwcm9hY2hlcyBhbGwgb2YgaGlzIHdvcmsgd2l0aCB0aGUgZW5lcmd5IHRvIGdldCB0aGluZ3MgZG9uZS4gSGUgaXMgYSBxdWljayBzdHVkeSBhbmQgbG92ZXMgdG8gbGVhcm4gbmV3IHByb2Nlc3NlcyBhbmQgdGVjaG5pcXVlcyBpbiBoaXMgY2FyZWVyIGFuZCBoaXMgaG9iYmllcy4gSGUgbG92ZXMgb3V0ZG9vciBhZHZlbnR1cmUgYWN0aXZpdGllcyBsaWtlIGtheWFraW5nLCBjYW55b25lZXJpbmcsIHNraWluZywgY2FtcGluZywgYW5kIGNsaW1iaW5nLiBIZSBsaXZlcyB3aXRoIGhpcyBmaWFuY2UsIEplc3N5IGFuZCB0aGVpciBwZWtpbmdlc2UsIEZyYW5rXCJcbiAgICApO1xuICAgIGNvbnN0IGxpbmtDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImltZy1saW5rLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBsaW5rZWRpbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiaVwiLCBcImltZy1saW5rZWRpblwiLCBcImltZy1saW5rIGZhLWJyYW5kcyBmYS1saW5rZWRpblwiKTtcbiAgICBjb25zdCBnaXRodWIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImlcIiwgXCJpbWctZ2l0aHViXCIsIFwiaW1nLWxpbmsgZmEtYnJhbmRzIGZhLWdpdGh1Yi1zcXVhcmVcIik7XG4gICAgY29uc3QgeW91dHViZSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiaVwiLCBcImltZy15b3V0dWJlXCIsIFwiaW1nLWxpbmsgZmEtYnJhbmRzIGZhLXlvdXR1YmUtc3F1YXJlXCIpO1xuXG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4obGlua0NvbnRhaW5lciwgbGlua2VkaW4sIGdpdGh1YiwgeW91dHViZSk7XG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oY29udGVudEluZm9Db250YWluZXIsIGJyaWVmRGVzY3JpcHRpb24sIGxpbmtDb250YWluZXIpO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGZ1bGxDb250YWluZXIsIHBob3RvMSwgY29udGVudEluZm9Db250YWluZXIsIHBob3RvMik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmdWxsQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHJlc3VtZUNvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwicmVzdW1lLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCByZXN1bWVUaXRsZSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwicmVzdW1lLXRpdGxlXCIsIFwic3ViLXRpdGxlXCIsIFwiUmVzdW1lXCIpO1xuICAgIGNvbnN0IHJlc3VtZURhdGFDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInJlc3VtZS1kYXRhLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHN0cmVuZ3Roc0NvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwic3RyZW5ndGhzLWNvbnRhaW5lclwiLCBcInNlY3Rpb24tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHN0cmVuZ3Roc1RpdGxlID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdHJlbmd0aHMtdGl0bGVcIiwgXCJzZWN0aW9uLXRpdGxlXCIsIFwiTXkgU3RyZW5ndGhzXCIpO1xuICAgIGNvbnN0IHN0cmVuZ3Roc0luZm9Db250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcInVsXCIsIFwic3RyZW5ndGgtaW5mby1jb250YWluZXJcIik7XG4gICAgX2J1bGxldEFkZChcbiAgICAgICAgc3RyZW5ndGhzSW5mb0NvbnRhaW5lcixcbiAgICAgICAgXCJFeHBlcnRpc2UgaW4gdGVjaG5pY2FsIGFwcGxpY2F0aW9ucywgY3VzdG9tZXIgc2VydmljZSBhbmQgcHJvYmxlbS1zb2x2aW5nLlwiLFxuICAgICAgICBcIkV4cGVyaWVuY2UgbGVhZGluZyB0ZWFtcyB0byBwcm92aWRlIGV4Y2VsbGVudCBleHBlcmllbmNlcyBmb3Igb3RoZXJzLlwiLFxuICAgICAgICBcIlNlbGYtbW90aXZhdGVkIGFuZCBmb2N1c2VkIG9uIGdpdmVuIHRhc2tzXCIsXG4gICAgICAgIFwiSGFzIGEgZ3Jvd3RoIG1pbmRzZXQgLSBhbHdheXMgdHJ5aW5nIHRvIGltcHJvdmUgYW5kIGNlbGVicmF0ZXMgdmljdG9yaWVzIGFsb25nIHRoZSB3YXlcIlxuICAgICk7XG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oc3RyZW5ndGhzQ29udGFpbmVyLCBzdHJlbmd0aHNUaXRsZSwgc3RyZW5ndGhzSW5mb0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0ZWNoU2tpbGxzQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0ZWNoLXNraWxscy1jb250YWluZXJcIiwgXCJzZWN0aW9uLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0ZWNoU2tpbGxzVGl0bGUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJ0ZWNoLXNraWxscy10aXRsZVwiLFxuICAgICAgICBcInNlY3Rpb24tdGl0bGVcIixcbiAgICAgICAgXCJUZWNobmljYWwgU2tpbGxzXCJcbiAgICApO1xuICAgIGNvbnN0IHRlY2hTa2lsbHNJbmZvQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJ1bFwiLCBcInRlY2gtc2tpbGxzLWluZm8tY29udGFpbmVyXCIpO1xuICAgIF9idWxsZXRBZGQoXG4gICAgICAgIHRlY2hTa2lsbHNJbmZvQ29udGFpbmVyLFxuICAgICAgICBcIlNvZnR3YXJlOiBQcmVtaWVyZSBQcm8sIEFmdGVyIEVmZmVjdHMsIEF1ZGl0aW9uLCBQaG90b3Nob3AsIEluIERlc2lnbiwgT2ZmaWNlIFN1aXRlLCBHb29nbGUgU3VpdGVcIixcbiAgICAgICAgXCJQcm9maWNpZW5jeSB3cml0aW5nIGNvZGU6IEphdmEsIEhUTUwsIEphdmFzY3JpcHQsIGNzc1wiLFxuICAgICAgICBcIkdyb3VwIER5bmFtaWNzXCIsXG4gICAgICAgIFwiU29jaWFsIE1lZGlhIE1hbmFnZW1lbnRcIixcbiAgICAgICAgXCJPdXRkb29yIExlYWRlcnNoaXBcIixcbiAgICAgICAgXCJEYXRhYmFzZXNcIixcbiAgICAgICAgXCJEYXRhIFN0cnVjdHVyZXNcIixcbiAgICAgICAgXCJWaWRlbyAmIFNvdW5kIFByZS9Qb3N0LVByb2R1Y3Rpb25cIixcbiAgICAgICAgXCJEb2N1bWVudGFyeSBQcm9kdWN0aW9uXCIsXG4gICAgICAgIFwiQXBwbGllZCBTb3VuZCBEZXNpZ25cIixcbiAgICAgICAgXCJNZWRpYSBFbnRyZXByZW5ldXJzaGlwXCIsXG4gICAgICAgIFwiTWVkaWEgV3JpdGluZ1wiXG4gICAgKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbih0ZWNoU2tpbGxzQ29udGFpbmVyLCB0ZWNoU2tpbGxzVGl0bGUsIHRlY2hTa2lsbHNJbmZvQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGV4cGVyaWVuY2VzQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJleHBlcmllbmNlcy1jb250YWluZXJcIiwgXCJzZWN0aW9uLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGV4cDEgPSBfbWFrZUV4cGVyaWVuY2UoXG4gICAgICAgIFwiUGVhayBTcG9ydHNcIixcbiAgICAgICAgXCJDb3J2YWxsaXMsIE9yZWdvblwiLFxuICAgICAgICBcIkFwciAyMDIwXCIsXG4gICAgICAgIFwiUHJlc2VudFwiLFxuICAgICAgICBfbWFrZUpvYihcbiAgICAgICAgICAgIFwiQWR2ZW50dXJlIFNlcnZpY2VzIENvb3JkaW5hdG9yXCIsXG4gICAgICAgICAgICBcIk92ZXJzYXcgdGhlIGRldmVsb3BtZW50IG9mIGFuIG91dGRvb3IgZ3VpZGUgYW5kIGVkdWNhdGlvbiBzZXJ2aWNlXCIsXG4gICAgICAgICAgICBcIk1hbmFnZWQgYW5kIHN1Ym1pdHRlZCBsYW5kIHVzZSBwZXJtaXQgYXBwbGljYXRpb25zXCIsXG4gICAgICAgICAgICBcIkRldmVsb3BlZCBsZXNzb24gcGxhbnMgYW5kIGN1cnJpY3VsdW1zIGZvciBtdWx0aXBsZSBsZXZlbHMgb2YgY2xhc3NlcyBpbiB2YXJpb3VzIG91dGRvb3Igc3BvcnRzXCIsXG4gICAgICAgICAgICBcIkVzdGFibGlzaGVkIGNvbW11bml0eSBlbmdhZ2VtZW50IGV2ZW50cyB3aXRoIGd1ZXN0IHNwZWFrZXJzIHNwZWNpYWxpemluZyBpbiBvdXRkb29yIHJlY3JlYXRpb24gYW5kIHN1c3RhaW5hYmlsaXR5XCIsXG4gICAgICAgICAgICBcIkFjdGVkIGFzIGFzc2lzdGFudCBtYW5hZ2VyIGZvciBhIGxvY2FsIG91dGRvb3IgcmVjcmVhdGlvbiByZXRhaWwgc3RvcmUuXCIsXG4gICAgICAgICAgICBcIkJ1aWx0IHRvb2xzIHRvIG1ha2Ugc3RvcmUgcHJvY2Vzc2VzIG1vcmUgZWZmaWNpZW50IGFuZCBvcmdhbml6ZWRcIixcbiAgICAgICAgICAgIFwiV29ya2VkIGFsb25nc2lkZSByZXRhaWwgYnV5ZXJzIHRvIG1ha2UgZGVjaXNpb25zIHJlZ2FyZGluZyBwdXJjaGFzZSBvcmRlcnNcIixcbiAgICAgICAgICAgIFwiVHJhaW5lZCBzdGFmZiBhYm91dCBtYW55IHNwZWNpYWx0aWVzIG9mIG91dGRvb3IgcmVjcmVhdGlvbiBpbmNsdWRpbmcgc2tpLCB3YXRlcnNwb3J0LCBiYWNrcGFja2luZywgZ2VuZXJhbCBjYW1waW5nLCBmb290d2VhciwgYW5kIGFwcGFyZWxcIixcbiAgICAgICAgICAgIFwiV29ya2VkIHdpdGggbWFya2V0aW5nIHRlYW0gdG8gcHJvZHVjZSBpbnN0cnVjdGlvbmFsIHZpZGVvcy5cIixcbiAgICAgICAgICAgIFwiQWN0ZWQgYXMgc2FsZXMgZ3VpZGUsIGFuc3dlcmluZyBxdWVzdGlvbnMgYWJvdXQgb3V0ZG9vciByZWNyZWF0aW9uIGZyb20gY3VzdG9tZXJzIHdpdGggYSB3aWRlIHJhbmdlIG9mIGJhY2tncm91bmRzXCJcbiAgICAgICAgKVxuICAgICk7XG4gICAgY29uc3QgZXhwMiA9IF9tYWtlRXhwZXJpZW5jZShcbiAgICAgICAgXCJBZHZlbnR1cmUgTGVhZGVyc2hpcCBJbnN0aXR1dGUgYXQgT3JlZ29uIFN0YXRlIFVuaXZlcnNpdHlcIixcbiAgICAgICAgXCJDb3J2YWxsaXMsIE9yZWdvblwiLFxuICAgICAgICBcIkF1ZyAyMDE0XCIsXG4gICAgICAgIFwiSnVseSAyMDE5XCIsXG4gICAgICAgIF9tYWtlSm9iKFxuICAgICAgICAgICAgXCJFbXBsb3llZSBNYW5hZ2VyXCIsXG4gICAgICAgICAgICBcIlN1cGVydmlzZWQgc3R1ZGVudCBlbXBsb3llZXMgYW5kIGNyZWF0ZWQgd29yayBzY2hlZHVsZXNcIixcbiAgICAgICAgICAgIFwiT3JnYW5pemVkIGFuZCBmYWNpbGl0YXRlZCByZWd1bGFyIHN0YWZmIG1lZXRpbmdzXCIsXG4gICAgICAgICAgICBcIlRyYWluZWQgbmV3IHN0YWZmIGFuZCBhc3Npc3RlZCB3aXRoIG9uYm9hcmRpbmcgcHJvY2VkdXJlc1wiLFxuICAgICAgICAgICAgXCJNYW5hZ2VkIGludmVudG9yeSBhbmQgcGVyZm9ybWVkIHJvdXRpbmUgcmVwYWlycyBvbiBvdXRkb29yIHJlY3JlYXRpb24gZXF1aXBtZW50XCIsXG4gICAgICAgICAgICBcIlJlZ2lzdGVyZWQgY3VzdG9tZXJzIGZvciBvdXRkb29yIHByb2dyYW1zIGFuZCBnZWFyIHJlbnRhbHNcIixcbiAgICAgICAgICAgIFwiRGV2ZWxvcGVkIHByb2NlZHVyZXMgdG8gc3RyZWFtbGluZSBvdXRkb29yIHRyaXAgcHJlcGFyYXRpb24gYW5kIHNlbmQtb2ZmXCJcbiAgICAgICAgKSxcbiAgICAgICAgX21ha2VKb2IoXG4gICAgICAgICAgICBcIkluc3RydWN0b3IsIFRyaXAgTGVhZGVyLCBDbHViIENvb3JkaW5hdG9yXCIsXG4gICAgICAgICAgICBcIkFjaGlldmVkIGhpZ2hlc3QgbGV2ZWwgb2YgQWR2ZW50dXJlIExlYWRlcnNoaXAgR3VpZGUgTWVudG9yIGNlcnRpZmljYXRlXCIsXG4gICAgICAgICAgICBcIkluc3RydWN0ZWQgT3JlZ29uIFN0YXRlIFVuaXZlcnNpdHkgUGh5c2ljYWwgQWN0aXZpdHkgY3JlZGl0IGNvdXJzZXNcIixcbiAgICAgICAgICAgIFwiUGxhbm5lZCBhbmQgbGVkIGJhY2twYWNraW5nLCBjYW5vZWluZywga2F5YWtpbmcsIGNhdmluZywgYmlraW5nLCB3aGl0ZXdhdGVyIHJhZnRpbmcsIGNsaW1iaW5nIGFuZCBvdGhlciBvdXRkb29yIHRyaXBzXCIsXG4gICAgICAgICAgICBcIkVuY291cmFnZWQgc2FmZXR5LWZvY3VzZWQgd29yayBjdWx0dXJlIGFuZCBpbnNwZWN0ZWQgdHJpcCBwcm9wb3NhbHMgZm9yIHZpYWJpbGl0eSBhbmQgcmlzayBtYW5hZ2VtZW50XCJcbiAgICAgICAgKSxcbiAgICAgICAgX21ha2VKb2IoXG4gICAgICAgICAgICBcIkNvbW11bmljYXRpb25zIEludGVyblwiLFxuICAgICAgICAgICAgXCJTdHJhdGVnaXplZCBhbmQgZGV2ZWxvcGVkIHByb21vdGlvbmFsIGNhbXBhaWduc1wiLFxuICAgICAgICAgICAgXCJQcm9kdWNlZCB2aWRlbyBwcm9tb3Rpb25hbCBtYXRlcmlhbHNcIixcbiAgICAgICAgICAgIFwiTWFuYWdlZCBzb2NpYWwgbWVkaWEgcGFnZXNcIlxuICAgICAgICApXG4gICAgKTtcblxuICAgIGNvbnN0IGV4cDMgPSBfbWFrZUV4cGVyaWVuY2UoXG4gICAgICAgIFwiTmV4dCBBZHZlbnR1cmVcIixcbiAgICAgICAgXCJQb3J0bGFuZCwgT3JlZ29uXCIsXG4gICAgICAgIFwiSnVseSAyMDE5XCIsXG4gICAgICAgIFwiTm92IDIwMTlcIixcbiAgICAgICAgX21ha2VKb2IoXG4gICAgICAgICAgICBcIlBhZGRsZSBTcG9ydHMgU3BlY2lhbGlzdFwiLFxuICAgICAgICAgICAgXCJXYXRlciBzcG9ydHMgc3ViamVjdCBtYXR0ZXIgZXhwZXJ0XCIsXG4gICAgICAgICAgICBcIkN1c3RvbWVyIHNlcnZpY2UgZGVzayBtYW5hZ2VyXCIsXG4gICAgICAgICAgICBcIlJlc3BvbnNpYmxlIGZvciBpbnZlbnRvcnkgaW50YWtlL291dHB1dFwiLFxuICAgICAgICAgICAgXCJQcm9hY3RpdmVseSBiYWxhbmNlZCB2YXJpYWJsZSB3b3JrZmxvdyB0byBtYWludGFpbiBoaWdoLXF1YWxpdHkgY3VzdG9tZXIgc2VydmljZVwiXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgY29uc3QgZXhwNCA9IF9tYWtlRXhwZXJpZW5jZShcbiAgICAgICAgXCJDYXllbiBTeXN0ZW1zIExMQ1wiLFxuICAgICAgICBcIk1pbHdhdWtlZSwgV2lzY29uc2luXCIsXG4gICAgICAgIFwiTm92IDIwMTVcIixcbiAgICAgICAgXCJKdW4gMjAxNlwiLFxuICAgICAgICBfbWFrZUpvYihcbiAgICAgICAgICAgIFwiTWFya2V0aW5nICYgRGF0YWJhc2UgSW50ZXJuXCIsXG4gICAgICAgICAgICBcIk1hbmFnZWQgY29tcGFueSBvbmxpbmUgbWFya2V0aW5nXCIsXG4gICAgICAgICAgICBcIkRldmVsb3BlZCBjb21wYW55IHdlYnNpdGUgYW5kIG1haW50YWluZWQgYmFja2VuZCBkYXRhYmFzZVwiLFxuICAgICAgICAgICAgXCJQZXJmb3JtZWQgQVBSIGRhdGEgZW50cnkgZm9yIG11bHRpcGxlIHN0YXRlc1wiLFxuICAgICAgICAgICAgXCJQZXJmb3JtZWQgc2VydmVyIG1haW50ZW5hbmNlXCJcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBjb25zdCBleHA1ID0gX21ha2VFeHBlcmllbmNlKFxuICAgICAgICBcIkNhbXAgTWFuaXRv4oCTd2lzaCBZTUNBIFN1bW1lciBDYW1wXCIsXG4gICAgICAgIFwiQm91bGRlciBKdW5jdGlvbiwgV2lzY29uc2luXCIsXG4gICAgICAgIFwiSnVuZSAyMDExXCIsXG4gICAgICAgIFwiSnVseSAyMDE0XCIsXG4gICAgICAgIF9tYWtlSm9iKFxuICAgICAgICAgICAgXCJTZWFzb25hbCBBZG1pbmlzdHJhdG9yIFwiLFxuICAgICAgICAgICAgXCJTdXBlcnZpc2VkIG1pZGRsZSBzY2hvb2wvaGlnaCBzY2hvb2wgY2FtcGVycyBhbmQgY29sbGVnZS1hZ2UgY291bnNlbG9yc1wiLFxuICAgICAgICAgICAgXCJUcmFpbmVkIHdpbGRlcm5lc3MgdHJpcCBsZWFkZXJzIGFuZCBzYWZldHkgY29vcmRpbmF0b3JzXCIsXG4gICAgICAgICAgICBcIlJlc29sdmVkIGlzc3VlcyBhbmQgbWVkaWF0ZWQgY29uZmxpY3RzIGFtb25nIGNhbXBlcnMgYW5kIHN0YWZmIG1lbWJlcnNcIixcbiAgICAgICAgICAgIFwiQ29tcGxldGVkIHBhcGVyd29yayBmb3IgaW50ZXJuYWwgY2FtcCBhY3Rpdml0aWVzIGFuZCBvcGVyYXRpb25hbCByZXF1aXJlbWVudHNcIlxuICAgICAgICApXG4gICAgKTtcblxuICAgIGNvbnN0IGV4cDYgPSBfbWFrZUV4cGVyaWVuY2UoXG4gICAgICAgIFwiUGFic3QgVGhlYXRlciBHcm91cFwiLFxuICAgICAgICBcIk1pbHdhdWtlZSwgV2lzY29uc2luXCIsXG4gICAgICAgIFwiT2N0IDIwMTVcIixcbiAgICAgICAgXCIgSnVuZSAyMDE2XCIsXG4gICAgICAgIF9tYWtlSm9iKFxuICAgICAgICAgICAgXCJDdXN0b21lciBTZXJ2aWNlXCIsXG4gICAgICAgICAgICBcIkZyb250IG9mIGhvdXNlIHJlcHJlc2VudGF0aXZlIGluIGNoYXJnZSBvZiBhc3Npc3RpbmcgcGF0cm9ucyBkdXJpbmcgcGVyZm9ybWFuY2VzXCIsXG4gICAgICAgICAgICBcIlN1Y2Nlc3NmdWxseSBtYW5hZ2VkIGhpZ2gtaW50ZW5zaXR5IGNyaXNpcyBzaXR1YXRpb25zXCIsXG4gICAgICAgICAgICBcIlRyYWluZWQgY29tbXVuaXR5IG1lbWJlciB2b2x1bnRlZXJzIHRvIHByb3ZpZGUgY3VzdG9tZXIgc2VydmljZVwiXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oZXhwZXJpZW5jZXNDb250YWluZXIsIGV4cDEsIGV4cDIsIGV4cDMsIGV4cDQsIGV4cDUsIGV4cDYpO1xuXG4gICAgY29uc3QgZWR1Y2F0aW9uQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJlZHVjYXRpb24tY29udGFpbmVyXCIsIFwic2VjdGlvbi1jb250YWluZXJcIik7XG4gICAgY29uc3QgZWR1Y2F0aW9uVGl0bGUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImVkdWNhdGlvbi10aXRsZVwiLCBcInNlY3Rpb24tdGl0bGVcIiwgXCJFZHVjYXRpb25cIik7XG4gICAgY29uc3Qgc2Nob29sTmFtZUNvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwic2Nob29sLW5hbWUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHNjaG9vbE5hbWUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIFwic2Nob29sLW5hbWVcIixcbiAgICAgICAgXCJzY2hvb2wtbGFiZWxcIixcbiAgICAgICAgXCJPcmVnb24gU3RhdGUgVW5pdmVyc2l0eVwiXG4gICAgKTtcbiAgICBjb25zdCBzY2hvb2xMb2NhdGlvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICBcInNwYW5cIixcbiAgICAgICAgXCJzY2hvb2wtbG9jYXRpb25cIixcbiAgICAgICAgXCJsb2NhdGlvbi1sYWJlbFwiLFxuICAgICAgICBcIkNvcnZhbGxpcywgT3JlZ29uXCJcbiAgICApO1xuICAgIGNvbnN0IGRlZ3JlZUxhYmVsID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiZGVncmVlLWxhYmVsXCIsXG4gICAgICAgIFwic2VjdGlvbi10ZXh0XCIsXG4gICAgICAgIFwiQlMsIERpZ2l0YWwgQ29tbXVuaWNhdGlvbiBBcnRzLCBDb21wdXRlciBTY2llbmNlIE1pbm9yLCAyMDE5XCJcbiAgICApO1xuICAgIGNvbnN0IGFjdGl2aXRpZXNMYWJlbCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcImFjdGl2aXRpZXMtbGFiZWxcIixcbiAgICAgICAgXCJzZWN0aW9uLXRleHRcIixcbiAgICAgICAgXCJTdHVkZW50IEFjdGl2aXRpZXNcIlxuICAgICk7XG4gICAgY29uc3QgYWN0aXZpdHkxID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiYWN0aXZpdHktMVwiLFxuICAgICAgICBcImFjdGl2aXR5LXRleHQgc2VjdGlvbi10ZXh0XCIsXG4gICAgICAgIFwiQWR2ZW50dXJlIENsdWIgLSBNZWRpYSBhbmQgV2F0ZXIgQ29vcmRpbmF0b3JcIlxuICAgICk7XG4gICAgY29uc3QgYWN0aXZpdHkyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiYWN0aXZpdHktMlwiLFxuICAgICAgICBcImFjdGl2aXR5LXRleHQgc2VjdGlvbi10ZXh0XCIsXG4gICAgICAgIFwiRklSU1QgUm9ib3RpY3MgLSBTb2Z0d2FyZSBNZW50b3JcIlxuICAgICk7XG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oc2Nob29sTmFtZUNvbnRhaW5lciwgc2Nob29sTmFtZSwgc2Nob29sTG9jYXRpb24pO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKFxuICAgICAgICBlZHVjYXRpb25Db250YWluZXIsXG4gICAgICAgIGVkdWNhdGlvblRpdGxlLFxuICAgICAgICBzY2hvb2xOYW1lQ29udGFpbmVyLFxuICAgICAgICBkZWdyZWVMYWJlbCxcbiAgICAgICAgYWN0aXZpdGllc0xhYmVsLFxuICAgICAgICBhY3Rpdml0eTEsXG4gICAgICAgIGFjdGl2aXR5MlxuICAgICk7XG5cbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihcbiAgICAgICAgcmVzdW1lRGF0YUNvbnRhaW5lcixcbiAgICAgICAgc3RyZW5ndGhzQ29udGFpbmVyLFxuICAgICAgICB0ZWNoU2tpbGxzQ29udGFpbmVyLFxuICAgICAgICBleHBlcmllbmNlc0NvbnRhaW5lcixcbiAgICAgICAgZWR1Y2F0aW9uQ29udGFpbmVyXG4gICAgKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihyZXN1bWVDb250YWluZXIsIHJlc3VtZVRpdGxlLCByZXN1bWVEYXRhQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHJlc3VtZUNvbnRhaW5lcik7XG5cbiAgICBmdW5jdGlvbiBfYnVsbGV0QWRkKHBhcmVudCwgLi4uYnVsbGV0cykge1xuICAgICAgICBidWxsZXRzLmZsYXQoKS5mb3JFYWNoKGJ1bGxldCA9PiB7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJsaVwiLCBcIlwiLCBcInNlY3Rpb24tdGV4dFwiLCBidWxsZXQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX21ha2VKb2IodGl0bGUsIC4uLnNraWxscykge1xuICAgICAgICBjb25zdCBqb2JDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIlwiLCBcImpvYi1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGpvYlRpdGxlID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJqb2ItdGl0bGVcIiwgdGl0bGUpO1xuICAgICAgICBjb25zdCBza2lsbExpc3QgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcInVsXCIsIFwiXCIsIFwic2tpbGwtbGlzdFwiKTtcbiAgICAgICAgX2J1bGxldEFkZChza2lsbExpc3QsIHNraWxscyk7XG5cbiAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oam9iQ29udGFpbmVyLCBqb2JUaXRsZSwgc2tpbGxMaXN0KTtcblxuICAgICAgICByZXR1cm4gam9iQ29udGFpbmVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9tYWtlRXhwZXJpZW5jZShlbXBsb3llciwgbG9jYXRpb24sIHN0YXJ0LCBmaW5pc2gsIC4uLmpvYnMpIHtcbiAgICAgICAgY29uc3QgZXhwZXJpZW5jZUNvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiZXhwZXJpZW5jZS1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGV4cFRpdGxlQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJleHBlcmllbmNlLXRpdGxlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgZW1wbG95ZXJMYWJlbCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwic3BhblwiLCBcIlwiLCBcImVtcGxveWVyLWxhYmVsXCIsIGVtcGxveWVyKTtcbiAgICAgICAgY29uc3QgbG9jYXRpb25MYWJlbCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwic3BhblwiLCBcIlwiLCBcImxvY2F0aW9uLWxhYmVsXCIsIGxvY2F0aW9uKTtcbiAgICAgICAgY29uc3QgdGltZUxhYmVsID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJzcGFuXCIsIFwiXCIsIFwidGltZS1sYWJlbFwiLCBgJHtzdGFydH0gLSAke2ZpbmlzaH1gKTtcbiAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oZXhwVGl0bGVDb250YWluZXIsIGVtcGxveWVyTGFiZWwsIGxvY2F0aW9uTGFiZWwsIHRpbWVMYWJlbCk7XG5cbiAgICAgICAgY29uc3Qgam9ic0NvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiam9icy1jb250YWluZXJcIik7XG4gICAgICAgIGpvYnMuZm9yRWFjaChqb2IgPT4ge1xuICAgICAgICAgICAgam9ic0NvbnRhaW5lci5hcHBlbmRDaGlsZChqb2IpO1xuICAgICAgICB9KTtcblxuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihleHBlcmllbmNlQ29udGFpbmVyLCBleHBUaXRsZUNvbnRhaW5lciwgam9ic0NvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBleHBlcmllbmNlQ29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlQWJvdXQgPSAoKCkgPT4ge1xuICAgICAgICBsaW5rZWRpbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgKCkgPT4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdGltLXNjaGxleS01NjExOTY2Mi9cIilcbiAgICAgICAgKTtcbiAgICAgICAgZ2l0aHViLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiAod2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9UaHVuZGVyS2xhcHBlXCIpKTtcbiAgICAgICAgeW91dHViZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgKCkgPT4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS91c2VyL1BhbmRhVGltbXlcIilcbiAgICAgICAgKTtcbiAgICB9KSgpO1xufSkoKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2Z1bGwtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuI2NvbnRlbnQtaW5mby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5zaWRlLWltYWdlIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICAgIG1hcmdpbjogMjVweDtcXG59XFxuXFxuI2JyaWVmLWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuI2ltZy1saW5rLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmltZy1saW5rIHtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW1nLWxpbms6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTtcXG59XFxuXFxuLnN1Yi10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG59XFxuXFxuI3Jlc3VtZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4jcmVzdW1lLWRhdGEtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5zZWN0aW9uLXRleHQge1xcbiAgICBjb2xvcjogZGFya3NsYXRlZ3JheTtcXG59XFxuXFxuLmVtcGxveWVyLWxhYmVsIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLmxvY2F0aW9uLWxhYmVsIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcblxcbi50aW1lLWxhYmVsIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2tpbGwtbGlzdCB7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG59XFxuXFxuLnNjaG9vbC1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uYWN0aXZpdHktdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYWJvdXQvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjZnVsbC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jY29udGVudC1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLnNpZGUtaW1hZ2Uge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gICAgbWFyZ2luOiAyNXB4O1xcbn1cXG5cXG4jYnJpZWYtZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4jaW1nLWxpbmstY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaW1nLWxpbmsge1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbWctbGluazpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xcbn1cXG5cXG4uc3ViLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzOHB4O1xcbn1cXG5cXG4jcmVzdW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbiNyZXN1bWUtZGF0YS1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNlY3Rpb24tdGV4dCB7XFxuICAgIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xcbn1cXG5cXG4uZW1wbG95ZXItbGFiZWwge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4ubG9jYXRpb24tbGFiZWwge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLnRpbWUtbGFiZWwge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5za2lsbC1saXN0IHtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG5cXG4uc2Nob29sLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcblxcbi5hY3Rpdml0eS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaG93Y2FzZS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgbWFyZ2luOiA4cHg7XFxufVxcblxcbi5zaG93Y2FzZS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDIwcHggMHB4O1xcbn1cXG5cXG4ucGhvdG9zLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5pbWFnZS1jb250YWluZXIgPiBpbWcge1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxufVxcblxcbi5wcmV2LFxcbi5uZXh0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDAlO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgcGFkZGluZzogNTBweCAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMjZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG4ubmV4dCB7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcXG59XFxuLnByZXY6aG92ZXIsXFxuLm5leHQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbi5udW1iZXItdGV4dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nob3djYXNlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxRQUFRO0lBQ1IsMEJBQTBCO0FBQzlCO0FBQ0E7O0lBRUksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLE1BQU07QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2hvd2Nhc2UtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIG1hcmdpbjogOHB4O1xcbn1cXG5cXG4uc2hvd2Nhc2UtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcXG59XFxuXFxuLnBob3Rvcy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaW1hZ2UtY29udGFpbmVyID4gaW1nIHtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbn1cXG5cXG4ucHJldixcXG4ubmV4dCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHBhZGRpbmc6IDUwcHggMTZweDtcXG4gICAgbWFyZ2luLXRvcDogLTI2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuLm5leHQge1xcbiAgICByaWdodDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XFxufVxcbi5wcmV2OmhvdmVyLFxcbi5uZXh0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4ubnVtYmVyLXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hvd2Nhc2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaG93Y2FzZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIuL2Fib3V0L2luZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInNyY19Gb290ZXJfanMtc3JjX0hlYWRlcl9qc1wiLFwic3JjX2luZGV4X2Nzc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hYm91dC9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIkRPTU1hbmlwIiwiY3JlYXRlRm9vdGVyIiwiY3JlYXRlSGVhZGVyIiwiY3JlYXRlU2hvd2Nhc2UiLCJ0aXRsZSIsImhlYWRlciIsImNvbnRlbnQiLCJtYWtlTmV3RWxlbWVudCIsImZvb3RlciIsInRpdGxlQ29udGFpbmVyIiwidGl0bGVUZXh0IiwiYXBwZW5kQ2hpbGQiLCJhcHBlbmRDaGlsZHJlbiIsImRvY3VtZW50IiwiYm9keSIsInZpZGVvRnVuY3Rpb25zIiwiX2VtYmVkVmlkZW8iLCJzb3VyY2UiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImZyYW1lYm9yZGVyIiwiYWxsb3ciLCJhbGxvd2Z1bGxzY3JlZW4iLCJfY3JlYXRlVmlkZW8iLCJ2aWRlb0NvbnRhaW5lciIsInZpZGVvVGl0bGUiLCJ2aWRlbyIsImNyZWF0ZVZpZGVvUGFnZSIsInBhZ2UiLCJ2aWRlb3MiLCJmb3JFYWNoIiwicHVzaCIsImRpc3BsYXlWaWRlb1BhZ2UiLCJnZXRFbGVtZW50IiwicGhvdG9GdW5jdGlvbnMiLCJjcmVhdGVQaG90b1BhZ2UiLCJwaG90b3MiLCJwaG90byIsImluZGV4IiwiY29udGFpbmVyIiwibnVtYmVyIiwibGVuZ3RoIiwicGhvdG9ncmFwaCIsIkltYWdlIiwiZGlzcGxheVBob3RvUGFnZSIsInByZXYiLCJuZXh0IiwicGhvdG9Db250YWluZXIiLCJfYWN0aXZhdGVQaG90b1BhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwicGx1c1NsaWRlcyIsImJpbmQiLCJzbGlkZUluZGV4Iiwic2hvd1NsaWRlcyIsIm4iLCJpIiwic2xpZGVzIiwiZ2V0RWxlbWVudHMiLCJzdHlsZSIsImRpc3BsYXkiLCJwaG90bzFJbWciLCJwaG90bzJJbWciLCJjcmVhdGVBYm91dCIsImZ1bGxDb250YWluZXIiLCJwaG90bzEiLCJzZXRBdHRyaWJ1dGUiLCJwaG90bzIiLCJjb250ZW50SW5mb0NvbnRhaW5lciIsImJyaWVmRGVzY3JpcHRpb24iLCJsaW5rQ29udGFpbmVyIiwibGlua2VkaW4iLCJnaXRodWIiLCJ5b3V0dWJlIiwicmVzdW1lQ29udGFpbmVyIiwicmVzdW1lVGl0bGUiLCJyZXN1bWVEYXRhQ29udGFpbmVyIiwic3RyZW5ndGhzQ29udGFpbmVyIiwic3RyZW5ndGhzVGl0bGUiLCJzdHJlbmd0aHNJbmZvQ29udGFpbmVyIiwiX2J1bGxldEFkZCIsInRlY2hTa2lsbHNDb250YWluZXIiLCJ0ZWNoU2tpbGxzVGl0bGUiLCJ0ZWNoU2tpbGxzSW5mb0NvbnRhaW5lciIsImV4cGVyaWVuY2VzQ29udGFpbmVyIiwiZXhwMSIsIl9tYWtlRXhwZXJpZW5jZSIsIl9tYWtlSm9iIiwiZXhwMiIsImV4cDMiLCJleHA0IiwiZXhwNSIsImV4cDYiLCJlZHVjYXRpb25Db250YWluZXIiLCJlZHVjYXRpb25UaXRsZSIsInNjaG9vbE5hbWVDb250YWluZXIiLCJzY2hvb2xOYW1lIiwic2Nob29sTG9jYXRpb24iLCJkZWdyZWVMYWJlbCIsImFjdGl2aXRpZXNMYWJlbCIsImFjdGl2aXR5MSIsImFjdGl2aXR5MiIsInBhcmVudCIsImJ1bGxldHMiLCJmbGF0IiwiYnVsbGV0Iiwiam9iQ29udGFpbmVyIiwiam9iVGl0bGUiLCJza2lsbExpc3QiLCJza2lsbHMiLCJlbXBsb3llciIsImxvY2F0aW9uIiwic3RhcnQiLCJmaW5pc2giLCJleHBlcmllbmNlQ29udGFpbmVyIiwiZXhwVGl0bGVDb250YWluZXIiLCJlbXBsb3llckxhYmVsIiwibG9jYXRpb25MYWJlbCIsInRpbWVMYWJlbCIsImpvYnNDb250YWluZXIiLCJqb2JzIiwiam9iIiwiYWN0aXZhdGVBYm91dCIsIndpbmRvdyIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9