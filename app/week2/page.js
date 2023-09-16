import React from 'react';
import StudentInfo from '../StudentInfo/StudentInfo'; // Adjust the import path as needed

function Page() {
  return (
  <main class="flex min-h-screen flex-col items-center justify-between p-24">
    <div class="w-full items-center justify-between font-mono text-sm lg:flex">
      <h1 class="text-4xl">My Shopping List</h1>
      <StudentInfo />
    </div>
  </main>
  );
}
export default Page;