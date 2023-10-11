import React from "react";
import StudentInfo from './StudentInfo/StudentInfo'; // Assuming StudentInfo.js is in the same directory
import Link from "next/link";


function Page() {
  return (
  <div class="flex min-h-screen flex-col items-center justify-between p-24">
    <div class="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
      <h1 class="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
      <div><StudentInfo /></div>
      <ul>
        <li><Link href="/week2">Week 2</Link></li>
        <li><Link href="/week3">Week 3</Link></li>
        <li><Link href="/week4">Week 4</Link></li>
        <li><Link href="/week5">Week 5</Link></li>
        <li><Link href="/week6">Week 6</Link></li>
      </ul>
    </div>
  </div>
  );
}

export default Page;