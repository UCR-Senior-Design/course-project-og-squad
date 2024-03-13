import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function ProfileSettings({ setShowSettings, profileSettings }) {
  const { id, userName, bio, profilePic } = profileSettings;
  const [updatedBio, setUpdatedBio] = useState(bio);

  const settingsRef = useRef();

  const handleClickOutside = (event) => {
    if (settingsRef.current && !settingsRef.current.contains(event.target)) {
      setShowSettings(false);
    }
  };

  // const computeSHA256 = async (file) => {
  //   const buffer = await file.arrayBuffer()
  //   const hashBuffer = await crypto.subtle.digest("SHA-256", buffer)
  //   const hashArray = Array.from(new Uint8Array(hashBuffer))
  //   const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
  //   return hashHex
  // }

  // const handleImageUpload = async (file) => {
  //   const signedURLResult = await getSignedURL({
  //     fileSize: file.size,
  //     fileType: file.type,
  //     checksum: await computeSHA256(file),
  //   })
  //   if (signedURLResult.failure !== undefined) {
  //     throw new Error(signedURLResult.failure)
  //   }
  //   const { url, id: fileId } = signedURLResult.success
  //   await fetch(url, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": file.type,
  //     },
  //     body: file,
  //   })

  //   const fileUrl = url.split("?")[0]
  //   return fileId
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setLoading(true)
  //   try {
  //     let fileId = undefined
  //     if (file) {
  //       setStatusMessage("Uploading...")
  //       fileId = await handleFileUpload(file)
  //     }

  //     setStatusMessage("Posting post...")

  //     await createPost({
  //       content,
  //       fileId: fileId,
  //     })

  //     setStatusMessage("Post Successful")
  //   } catch (error) {
  //     console.error(error)
  //     setStatusMessage("Post failed")
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0] ?? null
  //   setFile(file)
  //   if (previewUrl) {
  //     URL.revokeObjectURL(previewUrl)
  //   }
  //   if (file) {
  //     const url = URL.createObjectURL(file)
  //     setPreviewUrl(url)
  //   } else {
  //     setPreviewUrl(null)
  //   }
  // }

  const handleConfirmClick = async () => {
    try {
      const res = await fetch("/api/updateUserInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          updatedBio: updatedBio,
        }),
      });
      if (res.ok) {
        setShowSettings(false);
        window.location.reload();
      } else {
        console.error("Failed to update bio");
      }
    } catch (error) {
      console.error("Error updating bio:", error);
    }
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 m-auto max-w-10"
      onClick={handleClickOutside}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        ref={settingsRef}
        className="border-solid border-2 border-custom-main-dark rounded-lg backdrop-blur-md "
      >
        <div className="bg-custom-main-dark rounded-t-lg p-3">
          {/* Orange background for top */}
          {/* Title */}
          <h1 className="text-black text-2xl font-bold">Edit Profile</h1>
        </div>
        <div className="bg-white rounded-b-lg p-4">
          {/* White background for rest */}
          {/* Settings Content */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center bg-orange-100 p-2 rounded-lg my-4">
              <div className="flex justify-center items-center">
                <Image
                  src={profilePic}
                  alt="Profile Picture"
                  className="rounded-full w-16 h-16"
                />
                <div className="mx-3 px-1 font-bold text-xl border-solid border border-[#A3A3A3] rounded-xl">
                  {userName}
                </div>
              </div>

              <button className="ml-12 bg-custom-main-dark bg-opacity-100 hover:bg-opacity-70 transition-colors ease-linear p-2 rounded-xl font-semibold">
                Change Photo
              </button>
              {/* </form> */}
            </div>
            <p className="font-semibold mt-4">Bio</p>
            <textarea
              maxlength="150"
              type="text"
              defaultValue={updatedBio}
              className="border-solid border-2 border-custom-main-dark p-2 pb-16 rounded-lg mb-4"
              onChange={(e) => setUpdatedBio(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={() => signOut()}
              className="bg-[#575A65] bg-opacity-60 hover:bg-opacity-100 transition-colors ease-linear px-4 py-2 rounded-lg text-white"
            >
              Log Out
            </button>
            <button
              className=" bg-custom-main-dark bg-opacity-100 hover:bg-opacity-70 transition-colors ease-linear p-2 px-8 ml-60 mt-4 mb-2 rounded-xl font-semibold"
              onClick={handleConfirmClick}
            >
              Confirm
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
