import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FetchedData = ({ username }) => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const [userData, repoData] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}`),
          axios.get(`https://api.github.com/users/${username}/repos`)
        ]);

        setUser(userData.data);
        setRepos(repoData.data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div>
              <h2>GitHub Repositories for {username}</h2>

      {user && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={user.avatar_url} alt="GitHub Avatar" style={{ width: 100, height: 'auto', marginRight: 20 }} />
          <div>
            <h6>GitHub Profile for {user.login}</h6>
            <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
          </li>
        ))}
      </ul>
      <Link to="/login">Logout</Link>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default FetchedData;
