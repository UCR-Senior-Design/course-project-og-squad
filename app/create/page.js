// "use client";
// import { useState } from 'react';
// import Post from "@/components/post";
// import postPic from "@/assets/zeytandzaa.png";

// const CreatePost = () => {
//   const [formData, setFormData] = useState({
//     postName: '',
//     preparationTime: '',
//     calories: '',
//     description: '',
//   });

//   const [showPreview, setShowPreview] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handlePreview = () => {
//     setShowPreview(true);
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md my-36">
//       <h1 className="text-2xl font-semibold mb-4">Create New Post</h1>

//       <form className="space-y-4">
//         {/* Your input fields */}
//         <div className="flex flex-col">
//           <label className="text-sm font-medium mb-1" htmlFor="postName">
//             Post Name:
//           </label>
//           <input
//             type="text"
//             name="postName"
//             id="postName"
//             required
//             value={formData.postName}
//             onChange={handleInputChange}
//             className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-medium mb-1" htmlFor="preparationTime">
//             Preparation Time (min):
//           </label>
//           <input
//             type="text"
//             name="preparationTime"
//             id="preparationTime"
//             required
//             value={formData.preparationTime}
//             onChange={handleInputChange}
//             className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-medium mb-1" htmlFor="calories">
//             Calories:
//           </label>
//           <input
//             type="text"
//             name="calories"
//             id="calories"
//             required
//             value={formData.calories}
//             onChange={handleInputChange}
//             className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-medium mb-1" htmlFor="description">
//             Description:
//           </label>
//           <textarea
//             name="description"
//             id="description"
//             required
//             value={formData.description}
//             onChange={handleInputChange}
//             className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         {/* Preview Button */}
//         <div className="flex items-center space-x-4 mt-4">
//           <button
//             type="button"
//             className="bg-custom-main-dark px-4 py-2 rounded-lg text-white hover:bg-opacity-70"
//             onClick={handlePreview}
//           >
//             Preview
//           </button>
//         </div>

//         {/* Preview Section */}
//         {showPreview && (
//           <div className="mt-4">
//             <h2 className="text-xl font-semibold mb-2">Preview</h2>
//             {/* Pass formData to the Post component */}
//               <Post post={{ ...formData, recipe_name: formData.postName, recipe_description: formData.description, user_name: 'Username', user_pfp: null, recipie_calories: formData.calories, recipie_time:formData.preparationTime }} staticImg={postPic} />

//           </div>
//         )}
//         {/* Publish Post Button*/}
//           {showPreview && (
//           <div className="flex items-center space-x-4 mt-4">
//           <button
//             type="button"
//             className="bg-custom-main-dark px-4 py-2 rounded-lg text-white hover:bg-opacity-70"
//           >
//             Publish Post
//           </button>
//         </div>
//       )}


//       </form>
//     </div>
//   );
// };

// export default CreatePost;

//import CreatePost from "@/components/createPost";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function CreatePost() {
  //const session = await getServerSession(authOptions);

  //if (session) redirect("/home"); //temporarily redirect to profile; thinking to homepage with recipes instead
  return (
    <div className="my-40">
      <CreatePost />
    </div>
  );
}


