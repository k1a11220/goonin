import React from "react";

export const TabSelector = ({
  isActive,
  children,
  onClick,
}: {
  isActive: Boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <div
      className={`cursor-pointer ${isActive ? "Active" : "unActive"}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
