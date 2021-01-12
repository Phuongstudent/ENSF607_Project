import React from "react";

import Header from "./login/Header";
import CourseInformation from "./form/CourseInformation";
import LearningOutcomes from "./form/LearningOutcomes";
import LearningLevelTable from "./form/LearningLevelTable";
import CourseContentCategories from "./form/CourseContentCategories";
import CourseSectionInformation from "./form/CourseSectionInformation";
import LearningGraduateTable from "./form/LearningGraduateTable";
import LaboratoryExperience from "./form/LaboratoryExperience";
import FinalGradeDetermination from "./form/FinalGradeDetermination";
import FinalGradeNotes from "./form/FinalGradeNotes";
import FinalGradeMarks from "./form/FinalGradeMarks";


function Navigation() {
    const [page, setPage] = React.useState("")

    const renderChoice = () => {
        if (page === "CourseInformation"){
            return <div><CourseInformation/></div>;
        } else if (page === "LearningOutcome"){
            return <div><LearningOutcomes/></div>;
        } else if(page === "CourseContentCategory"){
            return <div><CourseContentCategories/></div>; 
        } else if (page === "CourseSectionInformation"){
            return <div><CourseSectionInformation/></div>; 
        } else {
           return  <div><CourseInformation/></div>;
        }

    }

    return (
        <section class="hero is-primary is-medium">

            <div class="hero-head">
                <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                    <a class="navbar-item">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/University_of_Calgary_Logo.svg/220px-University_of_Calgary_Logo.svg.png" alt="Logo" ></img>
                    </a>
                    <span class="navbar-burger" data-target="navbarMenuHeroA">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    </div>
                    <div id="navbarMenuHeroA" class="navbar-menu">
                    <div class="navbar-end">
                        <a 
                        onClick={() => {
                            setPage("CourseInformation")
                        }}
                        class="navbar-item ${isActive ? 'is-active' : ''}">
                        Course Information
                        </a>
                        <a 
                         onClick={() => {
                            setPage("LearningOutcome")
                        }}
                        class="navbar-item">
                        Learning Outcomes
                        </a>
                        <a 
                         onClick={() => {
                            setPage("CourseContentCategory")
                        }}
                        class="navbar-item">
                        Course Content Category
                        </a>
                        <a 
                         onClick={() => {
                            setPage("CourseSectionInformation")
                        }}
                        class="navbar-item">
                        Course Section Information
                        </a>
                    </div>
                    </div>
                </div>
                </nav>
            </div>

            <div class="hero-body">
                <div class="container has-text-centered">
                    {renderChoice()}
                </div>
            </div>
        </section>
  );
}

export default Navigation; 