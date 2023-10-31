"use client";
import { useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLoginWithGitHub = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub login error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogout}>Logout</button>
          {/* Add a link to the shopping list page */}
          <div><Link href="/week8/shopping-list">Shopping-List</Link></div>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button onClick={handleLoginWithGitHub}>Login with GitHub</button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;