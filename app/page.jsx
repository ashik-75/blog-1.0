import React from "react";
import BlogList from "../components/Blogs";
import Newsletter from "../components/Sidebar/Newsletter";
import WorkExp from "../components/Sidebar/WorkExp";
function Homepage() {
  return (
    <div className="grid p-4 grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <BlogList />
      </div>
      <div className="space-y-5">
        <Newsletter />
        <WorkExp />
      </div>
    </div>
  );
}

export default Homepage;
