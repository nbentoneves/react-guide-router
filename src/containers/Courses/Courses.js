import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render() {

        return (
            <React.Fragment>
                <div>
                    <h1>Amazing Udemy Courses</h1>
                    <section className="Courses">
                        {
                            this.state.courses.map(course => {
                                return (
                                    <div>
                                        <Link
                                            key={course.id}
                                            to={{
                                                pathname: '/courses/' + course.id,
                                                search: "?title=" + course.title
                                            }}>
                                            <article className="Course">{course.title}</article>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </section>
                </div>

                <Route path={'/courses/:id'} component={Course} />
            </React.Fragment>
        );
    }
}

export default Courses;