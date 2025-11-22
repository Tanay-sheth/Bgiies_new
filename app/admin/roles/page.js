"use client";

import { useEffect, useState } from "react";

export default function RoleManager() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const roles = ["admin", "ecm", "gbm"];

  // Load users
  useEffect(() => {
    async function loadUsers() {
      const res = await fetch("/api/users/list");
      const data = await res.json();
      setUsers(data.users || []);
    }
    loadUsers();
  }, []);

  // Update role
  const updateRole = async () => {
    const res = await fetch("/api/users/update-role", {
      method: "POST",
      body: JSON.stringify({ email, role }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setMessage(data.error || "Role updated successfully!");

    if (!data.error) {
      setUsers((prev) =>
        prev.map((u) => (u.email === email ? { ...u, role } : u))
      );
    }
  };

  // Delete role (reset to user)
  const deleteRole = async (email) => {
    const res = await fetch("/api/users/update-role", {
      method: "POST",
      body: JSON.stringify({ email, role: "user" }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (!data.error) {
      setUsers((prev) =>
        prev.map((u) => (u.email === email ? { ...u, role: "user" } : u))
      );
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-10">
      <h1 className="text-4xl font-extrabold text-center text-gray-800">
        User Role Manager
      </h1>

      {/* Assign Role Form */}
      <div className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Assign / Change Role
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="User Email"
            className="border text-black border-gray-300 p-3 w-full rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select
            className="border text-black border-gray-300 p-3 w-full rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="gbm">GBM</option>
            <option value="ecm">ECM</option>
            <option value="admin">Admin</option>
          </select>

          <button
            onClick={updateRole}
            className="bg-blue-600 text-white w-full py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Update Role
          </button>

          {message && <p className="mt-3 text-green-600">{message}</p>}
        </div>
      </div>

      {/* Current Users */}
      <div className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Current Users</h2>

          {/* Search bar */}
          <input
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 text-black p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {roles.map((roleType) => (
            <div
              key={roleType}
              className="border border-gray-200 rounded-xl bg-gray-50 p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-bold uppercase text-gray-700 mb-3 border-b pb-2 flex justify-between">
                <span>{roleType}</span>
                <span className="text-sm text-gray-500">
                  {users.filter(
                    (u) =>
                      u.role === roleType &&
                      u.email.toLowerCase().includes(search.toLowerCase())
                  ).length}
                </span>
              </h3>

              {/* Filtered user list */}
              {users
                .filter(
                  (u) =>
                    u.role === roleType &&
                    u.email.toLowerCase().includes(search.toLowerCase())
                )
                .map((u) => (
                  <div
                    key={u.email}
                    className="flex justify-between items-start bg-white p-3 mb-3 rounded-lg border shadow-sm"
                  >
                    <span className="text-sm text-gray-700 break-all">
                      {u.email}
                    </span>

                    <button
                      className="text-red-600 text-xs cursor-pointer font-semibold hover:underline"
                      onClick={() => deleteRole(u.email)}
                    >
                      Remove
                    </button>
                  </div>
                ))}

              {users.filter((u) => u.role === roleType).length === 0 && (
                <p className="text-sm text-gray-500">No users</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
