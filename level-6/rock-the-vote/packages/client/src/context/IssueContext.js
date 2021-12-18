import { createContext, useState, useEffect, useContext } from "react";
import UserContext from "./UserContext";
import {
  getIssues,
  findIssue,
  createIssue,
  deleteIssue,
  updateIssue,
  addUpvoteToIssue,
  addDownvoteToIssue,
  removeUpvoteFromIssue,
  removeDownvoteFromIssue,
  createComment,
  deleteComment,
  updateComment,
} from "../services/api";

const IssueContext = createContext();

export const IssueProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(UserContext);

  const find = async id => {
    const inContext = issues.find(i => i._id === id);
    if (inContext) return inContext;
    const issue = await findIssue(id);
    return issue;
  };
  const create = async data => {
    const issue = await createIssue(data);
    setIssues(prev => [...prev, issue]);
    return issue;
  };
  const remove = async issue => {
    setIssues(prev => prev.filter(i => i._id !== issue._id));
    await deleteIssue(issue);
  };
  const update = async issue => {
    setIssues(prev => prev.map(i => (i._id === issue._id ? issue : i)));
    await updateIssue(issue);
  };

  const addUpvote = async issue => {
    const updated = await addUpvoteToIssue(issue);
    setIssues(prev => prev.map(i => (i._id === updated._id ? updated : i)));
  };
  const addDownvote = async issue => {
    const updated = await addDownvoteToIssue(issue);
    setIssues(prev => prev.map(i => (i._id === updated._id ? updated : i)));
  };
  const removeUpvote = async issue => {
    const updated = await removeUpvoteFromIssue(issue);
    setIssues(prev => prev.map(i => (i._id === updated._id ? updated : i)));
  };
  const removeDownvote = async issue => {
    const updated = await removeDownvoteFromIssue(issue);
    setIssues(prev => prev.map(i => (i._id === updated._id ? updated : i)));
  };

  const addComment = async (data, issueId) => {
    const comment = await createComment({ issueId, ...data });
    const issue = issues.find(i => i._id === issueId);
    issue.comments.unshift(comment);
    setIssues(prev => prev.map(i => (i._id === issue._id ? issue : i)));
  };
  const removeComment = async (_id, issueId) => {
    await deleteComment({ _id, issue: issueId });
    const issue = issues.find(i => i._id === issueId);
    issue.comments = issue.comments.filter(c => c._id !== _id);
    setIssues(prev => prev.map(i => (i._id === issue._id ? issue : i)));
  };
  const editComment = async (data, issueId) => {
    const comm = await updateComment({ issueId, ...data });
    const issue = issues.find(i => i._id === issueId);
    issue.comments = issue.comments.map(c => (c._id === comm._id ? comm : c));
    setIssues(prev => prev.map(i => (i._id === issue._id ? issue : i)));
  };

  useEffect(() => {
    const load = async () => {
      if (!token) return;
      const data = await getIssues();
      if (!data) return;
      setIssues(data);
      setLoading(false);
    };
    setLoading(true);
    load();
  }, [token]);

  const provide = {
    issues,
    loading,
    create,
    find,
    remove,
    update,
    addUpvote,
    addDownvote,
    removeUpvote,
    removeDownvote,
    addComment,
    removeComment,
    editComment,
  };

  return (
    <IssueContext.Provider value={provide}>{children}</IssueContext.Provider>
  );
};

export default IssueContext;
