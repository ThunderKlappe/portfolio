/* eslint-disable no-unused-vars */
import { createShowcase } from "../Showcase";
import { DOMManip } from "../DOMManip";
import "./index.css";
import "../index.css";
import photo1Img from "./assets/photo.jpg";
import photo2Img from "./assets/tree.jpg";

const createAbout = (() => {
    createShowcase("About Me");
    const content = DOMManip.getElement("#content");
    const fullContainer = DOMManip.makeNewElement("div", "full-container");
    const photo1 = new Image();
    photo1.src = photo1Img;
    photo1.setAttribute("class", "side-image");
    const photo2 = new Image();
    photo2.src = photo2Img;
    photo2.setAttribute("class", "side-image");

    const contentInfoContainer = DOMManip.makeNewElement("div", "content-info-container");
    const briefDescription = DOMManip.makeNewElement(
        "div",
        "brief-description",
        "brief-description",
        "Originally from Wisconsin, Tim made his way to Oregon to attend Oregon State University and quickly fell in love with the state. Tim is passionate about what he does, and he approaches all of his work with the energy to get things done. He is a quick study and loves to learn new processes and techniques in his career and his hobbies. He loves outdoor adventure activities like kayaking, canyoneering, skiing, camping, and climbing. He lives with his fiance, Jessy and their pekingese, Frank"
    );
    const linkContainer = DOMManip.makeNewElement("div", "img-link-container");
    const linkedin = DOMManip.makeNewElement("i", "img-linkedin", "img-link fa-brands fa-linkedin");
    const github = DOMManip.makeNewElement("i", "img-github", "img-link fa-brands fa-github-square");
    const youtube = DOMManip.makeNewElement("i", "img-youtube", "img-link fa-brands fa-youtube-square");

    DOMManip.appendChildren(linkContainer, linkedin, github, youtube);
    DOMManip.appendChildren(contentInfoContainer, briefDescription, linkContainer);
    DOMManip.appendChildren(fullContainer, photo1, contentInfoContainer, photo2);
    content.appendChild(fullContainer);

    const resumeContainer = DOMManip.makeNewElement("div", "resume-container");
    const resumeTitle = DOMManip.makeNewElement("div", "resume-title", "sub-title", "Resume");
    const resumeDataContainer = DOMManip.makeNewElement("div", "resume-data-container");

    const strengthsContainer = DOMManip.makeNewElement("div", "strengths-container", "section-container");
    const strengthsTitle = DOMManip.makeNewElement("div", "strengths-title", "section-title", "My Strengths");
    const strengthsInfoContainer = DOMManip.makeNewElement("ul", "strength-info-container");
    _bulletAdd(
        strengthsInfoContainer,
        "Expertise in technical applications, customer service and problem-solving.",
        "Experience leading teams to provide excellent experiences for others.",
        "Self-motivated and focused on given tasks",
        "Has a growth mindset - always trying to improve and celebrates victories along the way"
    );
    DOMManip.appendChildren(strengthsContainer, strengthsTitle, strengthsInfoContainer);

    const techSkillsContainer = DOMManip.makeNewElement("div", "tech-skills-container", "section-container");
    const techSkillsTitle = DOMManip.makeNewElement(
        "div",
        "tech-skills-title",
        "section-title",
        "Technical Skills"
    );
    const techSkillsInfoContainer = DOMManip.makeNewElement("ul", "tech-skills-info-container");
    _bulletAdd(
        techSkillsInfoContainer,
        "Software: Premiere Pro, After Effects, Audition, Photoshop, In Design, Office Suite, Google Suite",
        "Proficiency writing code: Java, HTML, Javascript, css",
        "Group Dynamics",
        "Social Media Management",
        "Outdoor Leadership",
        "Databases",
        "Data Structures",
        "Video & Sound Pre/Post-Production",
        "Documentary Production",
        "Applied Sound Design",
        "Media Entrepreneurship",
        "Media Writing"
    );
    DOMManip.appendChildren(techSkillsContainer, techSkillsTitle, techSkillsInfoContainer);

    const experiencesContainer = DOMManip.makeNewElement("div", "experiences-container", "section-container");

    const exp1 = _makeExperience(
        "Peak Sports",
        "Corvallis, Oregon",
        "Apr 2020",
        "Present",
        _makeJob(
            "Adventure Services Coordinator",
            "Oversaw the development of an outdoor guide and education service",
            "Managed and submitted land use permit applications",
            "Developed lesson plans and curriculums for multiple levels of classes in various outdoor sports",
            "Established community engagement events with guest speakers specializing in outdoor recreation and sustainability",
            "Acted as assistant manager for a local outdoor recreation retail store.",
            "Built tools to make store processes more efficient and organized",
            "Worked alongside retail buyers to make decisions regarding purchase orders",
            "Trained staff about many specialties of outdoor recreation including ski, watersport, backpacking, general camping, footwear, and apparel",
            "Worked with marketing team to produce instructional videos.",
            "Acted as sales guide, answering questions about outdoor recreation from customers with a wide range of backgrounds"
        )
    );
    const exp2 = _makeExperience(
        "Adventure Leadership Institute at Oregon State University",
        "Corvallis, Oregon",
        "Aug 2014",
        "July 2019",
        _makeJob(
            "Employee Manager",
            "Supervised student employees and created work schedules",
            "Organized and facilitated regular staff meetings",
            "Trained new staff and assisted with onboarding procedures",
            "Managed inventory and performed routine repairs on outdoor recreation equipment",
            "Registered customers for outdoor programs and gear rentals",
            "Developed procedures to streamline outdoor trip preparation and send-off"
        ),
        _makeJob(
            "Instructor, Trip Leader, Club Coordinator",
            "Achieved highest level of Adventure Leadership Guide Mentor certificate",
            "Instructed Oregon State University Physical Activity credit courses",
            "Planned and led backpacking, canoeing, kayaking, caving, biking, whitewater rafting, climbing and other outdoor trips",
            "Encouraged safety-focused work culture and inspected trip proposals for viability and risk management"
        ),
        _makeJob(
            "Communications Intern",
            "Strategized and developed promotional campaigns",
            "Produced video promotional materials",
            "Managed social media pages"
        )
    );

    const exp3 = _makeExperience(
        "Next Adventure",
        "Portland, Oregon",
        "July 2019",
        "Nov 2019",
        _makeJob(
            "Paddle Sports Specialist",
            "Water sports subject matter expert",
            "Customer service desk manager",
            "Responsible for inventory intake/output",
            "Proactively balanced variable workflow to maintain high-quality customer service"
        )
    );

    const exp4 = _makeExperience(
        "Cayen Systems LLC",
        "Milwaukee, Wisconsin",
        "Nov 2015",
        "Jun 2016",
        _makeJob(
            "Marketing & Database Intern",
            "Managed company online marketing",
            "Developed company website and maintained backend database",
            "Performed APR data entry for multiple states",
            "Performed server maintenance"
        )
    );

    const exp5 = _makeExperience(
        "Camp Manito–wish YMCA Summer Camp",
        "Boulder Junction, Wisconsin",
        "June 2011",
        "July 2014",
        _makeJob(
            "Seasonal Administrator ",
            "Supervised middle school/high school campers and college-age counselors",
            "Trained wilderness trip leaders and safety coordinators",
            "Resolved issues and mediated conflicts among campers and staff members",
            "Completed paperwork for internal camp activities and operational requirements"
        )
    );

    const exp6 = _makeExperience(
        "Pabst Theater Group",
        "Milwaukee, Wisconsin",
        "Oct 2015",
        " June 2016",
        _makeJob(
            "Customer Service",
            "Front of house representative in charge of assisting patrons during performances",
            "Successfully managed high-intensity crisis situations",
            "Trained community member volunteers to provide customer service"
        )
    );

    DOMManip.appendChildren(experiencesContainer, exp1, exp2, exp3, exp4, exp5, exp6);

    const educationContainer = DOMManip.makeNewElement("div", "education-container", "section-container");
    const educationTitle = DOMManip.makeNewElement("div", "education-title", "section-title", "Education");
    const schoolNameContainer = DOMManip.makeNewElement("div", "school-name-container");
    const schoolName = DOMManip.makeNewElement(
        "span",
        "school-name",
        "school-label",
        "Oregon State University"
    );
    const schoolLocation = DOMManip.makeNewElement(
        "span",
        "school-location",
        "location-label",
        "Corvallis, Oregon"
    );
    const degreeLabel = DOMManip.makeNewElement(
        "div",
        "degree-label",
        "section-text",
        "BS, Digital Communication Arts, Computer Science Minor, 2019"
    );
    const activitiesLabel = DOMManip.makeNewElement(
        "div",
        "activities-label",
        "section-text",
        "Student Activities"
    );
    const activity1 = DOMManip.makeNewElement(
        "div",
        "activity-1",
        "activity-text section-text",
        "Adventure Club - Media and Water Coordinator"
    );
    const activity2 = DOMManip.makeNewElement(
        "div",
        "activity-2",
        "activity-text section-text",
        "FIRST Robotics - Software Mentor"
    );
    DOMManip.appendChildren(schoolNameContainer, schoolName, schoolLocation);
    DOMManip.appendChildren(
        educationContainer,
        educationTitle,
        schoolNameContainer,
        degreeLabel,
        activitiesLabel,
        activity1,
        activity2
    );

    DOMManip.appendChildren(
        resumeDataContainer,
        strengthsContainer,
        techSkillsContainer,
        experiencesContainer,
        educationContainer
    );
    DOMManip.appendChildren(resumeContainer, resumeTitle, resumeDataContainer);
    content.appendChild(resumeContainer);

    function _bulletAdd(parent, ...bullets) {
        bullets.flat().forEach(bullet => {
            parent.appendChild(DOMManip.makeNewElement("li", "", "section-text", bullet));
        });
    }

    function _makeJob(title, ...skills) {
        const jobContainer = DOMManip.makeNewElement("div", "", "job-container");
        const jobTitle = DOMManip.makeNewElement("div", "", "job-title", title);
        const skillList = DOMManip.makeNewElement("ul", "", "skill-list");
        _bulletAdd(skillList, skills);

        DOMManip.appendChildren(jobContainer, jobTitle, skillList);

        return jobContainer;
    }

    function _makeExperience(employer, location, start, finish, ...jobs) {
        const experienceContainer = DOMManip.makeNewElement("div", "", "experience-container");
        const expTitleContainer = DOMManip.makeNewElement("div", "", "experience-title-container");
        const employerLabel = DOMManip.makeNewElement("span", "", "employer-label", employer);
        const locationLabel = DOMManip.makeNewElement("span", "", "location-label", location);
        const timeLabel = DOMManip.makeNewElement("span", "", "time-label", `${start} - ${finish}`);
        DOMManip.appendChildren(expTitleContainer, employerLabel, locationLabel, timeLabel);

        const jobsContainer = DOMManip.makeNewElement("div", "", "jobs-container");
        jobs.forEach(job => {
            jobsContainer.appendChild(job);
        });

        DOMManip.appendChildren(experienceContainer, expTitleContainer, jobsContainer);
        return experienceContainer;
    }

    const activateAbout = (() => {
        linkedin.addEventListener(
            "click",
            () => (window.location.href = "https://www.linkedin.com/in/tim-schley-56119662/")
        );
        github.addEventListener("click", () => (window.location.href = "https://github.com/ThunderKlappe"));
        youtube.addEventListener(
            "click",
            () => (window.location.href = "https://www.youtube.com/user/PandaTimmy")
        );
    })();
})();
