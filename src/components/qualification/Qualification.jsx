import "./qualification.css";
import React, { useState } from "react";

function Qualification() {
    const [toogleState, setToogleState] = useState(1);

    const toogleTab = (index) => {
        setToogleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toogleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toogleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div
                        className={
                            toogleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toogleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experiance
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toogleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Web Design
                                </h3>
                                <span className="qualification__subtitle">
                                    Spain - Institute
                                </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i>2021 -
                                    Present
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">
                                    Art Director
                                </h3>
                                <span className="qualification__subtitle">
                                    Spain - Institute
                                </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i>2021 -
                                    Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Web Development
                                </h3>
                                <span className="qualification__subtitle">
                                    Spain - Institute
                                </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i> -
                                    Present
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">
                                    UX Expert
                                </h3>
                                <span className="qualification__subtitle">
                                    Spain - Institute
                                </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i>2021 -
                                    Present
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            toogleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Product Designer
                                </h3>
                                <span className="qualification__subtitle">
                                    Microsoft-Institute
                                </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i>2021 -
                                    Present
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">
                                    UX Designer
                                </h3>
                                <span className="qualification__subtitle">
                                    Apple Inc - Spain
                                </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i>2018 -
                                    2020
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Web Designer
                                </h3>
                                <span className="qualification__subtitle">
                                    Figma - Spain
                                </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i>
                                    2018-2020
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification;
