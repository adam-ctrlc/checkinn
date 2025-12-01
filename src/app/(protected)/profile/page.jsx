"use client";

import {
  FaUser,
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaSave,
  FaTimes,
  FaKey,
  FaBell,
  FaShieldAlt,
  FaCamera,
} from "react-icons/fa";
import { useState } from "react";

export default function page() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@checkinhotel.com",
    phone: "+63 912 345 6789",
    position: "Hotel Manager",
    department: "Operations",
    address: "123 Hotel Street, Makati City, Philippines",
    joinDate: "2020-03-15",
    employeeId: "EMP001",
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    maintenanceAlerts: true,
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data to original values
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Profile Settings
          </h1>
          <p className="text-slate-600 mt-2">
            Manage your account information and preferences
          </p>
        </header>

        {/* Profile Header Card */}
        <div className="bg-white border border-slate-200 rounded-md mb-8 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 px-6 py-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="relative">
                <FaUserCircle className="h-28 w-28 text-white text-opacity-90" />
                <button className="absolute bottom-0 right-0 bg-white text-slate-900 p-2 rounded-full hover:bg-slate-100 transition-colors shadow-lg">
                  <FaCamera className="h-3 w-3" />
                </button>
              </div>

              <div className="text-center sm:text-left text-white">
                <h2 className="text-3xl font-bold">
                  {profileData.firstName} {profileData.lastName}
                </h2>
                <p className="text-slate-200 text-lg mt-1">
                  {profileData.position}
                </p>
                <p className="text-slate-300 mt-1">
                  {profileData.department} Department
                </p>
              </div>
            </div>
          </div>

          {/* Info Cards Section */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center p-4 bg-slate-50 rounded-md border border-slate-100">
                <div className="bg-blue-100 p-3 rounded-md mr-4">
                  <FaUser className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    Employee ID
                  </p>
                  <p className="text-lg font-bold text-slate-900">
                    {profileData.employeeId}
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-slate-50 rounded-md border border-slate-100">
                <div className="bg-green-100 p-3 rounded-md mr-4">
                  <FaEnvelope className="h-5 w-5 text-green-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    Email Address
                  </p>
                  <p className="text-lg font-bold text-slate-900 truncate">
                    {profileData.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-slate-50 rounded-md border border-slate-100">
                <div className="bg-purple-100 p-3 rounded-md mr-4">
                  <FaPhone className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <p className="text-lg font-bold text-slate-900">
                    {profileData.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Stacked Sections */}
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="bg-white border border-slate-200 rounded-md p-6 flex-1">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Personal Information
              </h3>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center px-3 py-2 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                >
                  <FaEdit className="h-3 w-3 mr-1" />
                  Edit
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="flex items-center px-3 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    <FaSave className="h-3 w-3 mr-1" />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center px-3 py-2 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                  >
                    <FaTimes className="h-3 w-3 mr-1" />
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  First Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.firstName}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        firstName: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-slate-500 text-sm"
                  />
                ) : (
                  <p className="text-slate-900 py-2">{profileData.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.lastName}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        lastName: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-slate-500 text-sm"
                  />
                ) : (
                  <p className="text-slate-900 py-2">{profileData.lastName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-slate-500 text-sm"
                  />
                ) : (
                  <p className="text-slate-900 py-2">{profileData.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) =>
                      setProfileData({ ...profileData, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-slate-500 text-sm"
                  />
                ) : (
                  <p className="text-slate-900 py-2">{profileData.phone}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Address
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.address}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        address: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-slate-500 text-sm"
                  />
                ) : (
                  <p className="text-slate-900 py-2">{profileData.address}</p>
                )}
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white border border-slate-200 rounded-md p-6 flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Notification Preferences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries({
                emailNotifications: "Email Notifications",
                pushNotifications: "Push Notifications",
                weeklyReports: "Weekly Reports",
                maintenanceAlerts: "Maintenance Alerts",
              }).map(([key, label]) => (
                <div
                  key={key}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center">
                    <FaBell className="h-4 w-4 mr-3 text-slate-400" />
                    <span className="text-sm font-medium text-slate-700">
                      {label}
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences[key]}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          [key]: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Account */}
          <div className="bg-white border border-slate-200 rounded-md p-6 flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Security & Account
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Security Actions */}
              <div>
                <h4 className="text-md font-medium text-slate-900 mb-4">
                  Security Settings
                </h4>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between py-3 px-4 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                    <div className="flex items-center">
                      <FaKey className="h-4 w-4 mr-3 text-slate-400" />
                      <span>Change Password</span>
                    </div>
                    <svg
                      className="h-4 w-4 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  <button className="w-full flex items-center justify-between py-3 px-4 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                    <div className="flex items-center">
                      <FaShieldAlt className="h-4 w-4 mr-3 text-slate-400" />
                      <span>Two-Factor Authentication</span>
                    </div>
                    <svg
                      className="h-4 w-4 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Account Activity */}
              <div>
                <h4 className="text-md font-medium text-slate-900 mb-4">
                  Account Activity
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 text-sm">
                    <span className="text-slate-600">Last Login</span>
                    <span className="text-slate-900 font-medium">
                      Jan 27, 2024
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 text-sm">
                    <span className="text-slate-600">Password Changed</span>
                    <span className="text-slate-900 font-medium">
                      Dec 15, 2023
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 text-sm">
                    <span className="text-slate-600">Account Created</span>
                    <span className="text-slate-900 font-medium">
                      Mar 15, 2020
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 text-sm">
                    <span className="text-slate-600">Profile Updated</span>
                    <span className="text-slate-900 font-medium">
                      Jan 20, 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
