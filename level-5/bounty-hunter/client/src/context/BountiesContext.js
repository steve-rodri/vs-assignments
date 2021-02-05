import React, { useState, useEffect } from "react";
import {
  getBounties,
  createBounty,
  deleteBounty,
  updateBounty,
} from "../services/bounties-api";

const BountiesContext = React.createContext();

const BountiesContextProvider = ({ children }) => {
  const [bounties, setBounties] = useState([]);

  useEffect(() => {
    const mount = async () => {
      const bounties = await getBounties();
      if (bounties) setBounties(bounties);
    };
    mount();
  }, []);

  const addBounty = async data => {
    const bounty = await createBounty(data);
    setBounties(prev => [...prev, bounty]);
  };

  const removeBounty = async bounty => {
    setBounties(prev => prev.filter(b => b._id !== bounty._id));
    await deleteBounty(bounty);
  };

  const replaceBounty = async bounty => {
    setBounties(prev => prev.map(b => (b._id === bounty._id ? bounty : b)));
    await updateBounty(bounty);
  };

  const valueProps = {
    bounties,
    addBounty,
    deleteBounty: removeBounty,
    updateBounty: replaceBounty,
  };
  return (
    <BountiesContext.Provider value={valueProps}>
      {children}
    </BountiesContext.Provider>
  );
};
export default BountiesContext;
export { BountiesContextProvider };
