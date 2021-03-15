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
    const updated = await upvoteIssue(issue);
    setIssues(prev => prev.map(i => (i._id === updated._id ? updated : i)));
  };
  const downvote = async issue => {
    const updated = await downvoteIssue(issue);
    setIssues(prev => prev.map(i => (i._id === updated._id ? updated : i)));
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
