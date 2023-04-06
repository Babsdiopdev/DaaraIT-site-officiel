import React from "react";

export default function Input({ placeholder, type, ...props }) {
  return (
    <input
      type={type ?? "text"}
      placeholder={placeholder ?? ""}
      style={{
        all: "unset",
        backgroundColor: "#fff",
        padding: "10px 20px",
        fontSize: 14,
      }}
    />
  );
}
