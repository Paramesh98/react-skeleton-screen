import React, { Profiler, useEffect, useState } from "react";
import SkeletonProfile from "./skeleton/SkeletonProfile";

const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      setProfile(data);
    }, 5000);
  }, []);
  return (
    <div className="User">
      <h2>User</h2>

      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}
      {/* <input type="file" onChange={(e) => console.log(e.target.files[0])} /> */}
      {!profile && <SkeletonProfile />}
    </div>
  );
};

export default User;
