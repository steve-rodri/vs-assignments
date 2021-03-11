import { createContext, useState, useEffect, useContext } from "react";
import UserContext from "./UserContext";
import {
  getIssues,
  createIssue,
  deleteIssue,
  updateIssue,
  upvoteIssue,
  downvoteIssue,
} from "../services/api";

const IssueContext = createContext();

export const IssueProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const { token } = useContext(UserContext);

  useEffect(() => {
    const load = async () => {
      if (!token) return;
      const data = await getIssues();
      console.log(data);
      if (data) setIssues(data);
    };
    load();
  }, [token]);

  const add = async data => {
    const issue = await createIssue(data);
    setIssues(prev => [...prev, issue]);
  };
  const remove = async issue => {
    setIssues(prev => prev.filter(i => i._id !== issue._id));
    await deleteIssue(issue);
  };
  const update = async issue => {
    setIssues(prev => prev.map(i => (i._id === issue._id ? issue : i)));
    await updateIssue(issue);
  };
  const upvote = async issue => {
    setIssues(prev => prev.map(i => (i._id === issue._id ? issue : i)));
    await upvoteIssue(issue);
  };
  const downvote = async issue => {
    setIssues(prev => prev.map(i => (i._id === issue._id ? issue : i)));
    await downvoteIssue(issue);
  };

  const provide = {
    issues,
    add,
    remove,
    update,
    upvote,
    downvote,
  };

  return (
    <IssueContext.Provider value={provide}>{children}</IssueContext.Provider>
  );
};

export default IssueContext;
