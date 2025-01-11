import axios from 'axios';

const API_BASE = 'https://www.reddit.com';

export const fetchPopularPosts = async (subreddit = 'popular', sort = 'hot', limit = 8) => {
  const url = `${API_BASE}/r/${subreddit}/${sort}/.json?limit=${limit}`;
  const response = await axios.get(url);
  return response.data.data.children.map((post) => post.data);
};

export const fetchSearchResults = async (query) => {
  const url = `${API_BASE}/search.json?q=${query}`;
  const response = await axios.get(url);
  return response.data.data.children.map((post) => post.data);
};
