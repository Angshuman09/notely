import React, { useState } from "react";
import { User, Lock, Upload, ArrowLeft, LogOut } from "lucide-react";
import { useNavigate } from "react-router";
import { useUserLogout } from "@/hooks/user";

export function Profile() {
  const navigate = useNavigate();
  const { mutate: logout } = useUserLogout();
  const [formData, setFormData] = useState({
    username: "",
    profilePicture: "",
    gender: "",
    bio: "",
    password: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          profilePicture: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile data:", formData);
  };

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        navigate("/", { state: { showAuth: true } });
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#fbf9f6]">
      {/* Mobile Layout */}
      <div className="lg:hidden min-h-screen bg-white">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate("/")}
              className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-900" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Profile</h1>
            <div className="w-10" /> {/* Spacer for centering */}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                {formData.profilePicture ? (
                  <img
                    src={formData.profilePicture}
                    alt="Profile"
                    className="w-28 h-28 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center">
                    <User className="w-12 h-12 text-gray-400" />
                  </div>
                )}
                <label
                  htmlFor="profilePicture"
                  className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-sm cursor-pointer hover:bg-gray-50"
                >
                  <Upload className="w-4 h-4 text-gray-600" />
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:bg-gray-100"
                placeholder="Enter username"
              />
            </div>

            {/* Gender */}
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:bg-gray-100"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Bio */}
            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:bg-gray-100 resize-none"
                placeholder="Tell us about yourself"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password-mobile"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password-mobile"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:bg-gray-100"
                  placeholder="Enter password"
                />
                <Lock className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium mt-8"
            >
              Save Profile
            </button>
          </form>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 text-red-600 font-medium mt-6 py-3 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-center min-h-screen p-8">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm p-12">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/")}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
                title="Back to Home"
              >
                <ArrowLeft className="w-6 h-6 text-gray-400 group-hover:text-gray-900" />
              </button>
              <h1 className="text-3xl font-semibold text-gray-900">Profile</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium px-4 py-2 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex gap-12">
              {/* Left Column - Profile Picture */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  {formData.profilePicture ? (
                    <img
                      src={formData.profilePicture}
                      alt="Profile"
                      className="w-40 h-40 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center">
                      <User className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                  <label
                    htmlFor="profilePictureDesktop"
                    className="absolute bottom-0 right-0 bg-white rounded-full p-3 shadow-md cursor-pointer hover:bg-gray-50"
                  >
                    <Upload className="w-5 h-5 text-gray-600" />
                  </label>
                  <input
                    type="file"
                    id="profilePictureDesktop"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
                <p className="text-sm text-gray-500">Upload photo</p>
              </div>

              {/* Right Column - Form Fields */}
              <div className="flex-1 space-y-6">
                {/* Username */}
                <div>
                  <label
                    htmlFor="username-desktop"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username-desktop"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:bg-gray-100"
                    placeholder="Enter username"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label
                    htmlFor="gender-desktop"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Gender
                  </label>
                  <select
                    id="gender-desktop"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:bg-gray-100"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Bio */}
                <div>
                  <label
                    htmlFor="bio-desktop"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Bio
                  </label>
                  <textarea
                    id="bio-desktop"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:bg-gray-100 resize-none"
                    placeholder="Tell us about yourself"
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password-desktop"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password-desktop"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:bg-gray-100"
                      placeholder="Enter password"
                    />
                    <Lock className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium mt-8"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
