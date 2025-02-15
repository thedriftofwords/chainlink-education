import React from 'react'

import { useHistory } from 'react-router-dom'

import { courseData, CourseStatusType } from '../../../../pages/Course/Course.data'

import { Course } from 'shared/course'
import { PublicUser } from 'shared/user/PublicUser'
import { BadgeView } from '../../Badge/Badge.view'
import { MainButtonView } from '../../MainButton/MainButton.view'
import { ShareCertificate } from '../../ShareCertificate/ShareCertificate.view'
import { IAdditionalInfo } from 'helpers/coursesInfo'

export interface IDataCourses {
  courses: any
  overallProgress: number
  numberCompletedCourses: number
  numberCourses: number
}

interface ICertificatesView {
  user?: PublicUser
  infoCourses: IDataCourses
}

export const CertificatesView = ({ user, infoCourses }: ICertificatesView) => {
  const history = useHistory()
  return (
    <div className='profile-page-certificates-wrapper'>
      <div className='top-header'>
        <div className='profile-page-section__header h-font'>Badge collection</div>
        <div className='opened-badged'>
          You have opened <span>{infoCourses.numberCompletedCourses}</span> badges out of <span>{infoCourses.numberCourses}</span></div>
      </div>
      <div className='badges-list'>
      {user && user.courses
        ? user.courses.map((course: Course, key: number) => {
          const additionalInfo: IAdditionalInfo = infoCourses.courses[course.title]
          return (
            <div className="badge-wrapp" key={course.title}>
              <BadgeView percentage={additionalInfo.percent} title={course.title} isCompleted={course.status === CourseStatusType.COMPLETED} />
              <div className='title'>{course.title}</div>
            </div>
          )})
        : null}
      </div>
      {infoCourses.numberCompletedCourses ? (<div className='sections-content__line' />) : null}
      <div className='certificates-list'>
        {user && user.courses
          ? user.courses.map((course: Course, key: number) => {
            const currentCourse = courseData.find((c) => c.name === course.title);
            const additionalInfo: IAdditionalInfo = infoCourses.courses[currentCourse?.name || '']

            return (
              <React.Fragment key={key}>
                {course.status === CourseStatusType.COMPLETED ? (
                  <div className="certificate-wrapp" key={key}>
                    <div className='content'>
                      <div className='title'>{course.title}</div>
                      <div className='description'>{course.description}</div>
                    </div>
                    <div className="course-btn-wrapper">
                      <MainButtonView
                        isCompleted
                        isSecondary
                        hasArrowDown
                        text='Download certificate'
                        onClick={() => history.push(currentCourse? `/description/${additionalInfo.urlCourse}`: '/')}
                        loading={false}
                        disabled={false}
                        />
                        <ShareCertificate username={user.username} additionalInfo={additionalInfo} />
                    </div>
                  </div>
                ) : null}
              </React.Fragment>
            )
          })
          : null}
      </div>
    </div>
  )
}