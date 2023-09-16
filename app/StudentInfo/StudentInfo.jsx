import React from 'react';

function week1() {

}

function StudentInfo() {
  const yourName = "Jhio Soriano";
  const courseSection = "CPRG 306 A";
  const githubRepoURL = "https://github.com/Jhio0/cprg306-assignments"

  return (
    <div>
      <ul>
        <li class="text-sm">Name: {yourName}</li>
        <li class="text-sm">Course Section: {courseSection}</li>
        <li class="text-sm">
          GitHub Repository: <a href={githubRepoURL} target="_blank" rel="noopener noreferrer">{githubRepoURL}</a>
        </li>
      </ul>
    </div>
  );
}

export default StudentInfo;