// // // //preview/page.js
// // // 'use client';
// // // import PreviewPost from "@/components/previewButton";
// // // import { useEffect, useState } from "react";

// // // export default function Preview({ postData }) {
// // //   const [previewPost, setPreviewPost] = useState(null);

// // //   useEffect(() => {
// // //     // Check if all necessary data is available for preview
// // //     if (postData) {
// // //       // Assuming "image" is a file object, create a preview URL
// // //       const imageURL = URL.createObjectURL(postData.image);
// // //       setPreviewPost({
// // //         name: postData.recipeName,
// // //         time: postData.preparationTime,
// // //         calories: postData.calories,
// // //         description: postData.description,
// // //         imageURL,
// // //       });
// // //     }
// // //   }, [postData]);

// // //   return (
// // //     <main>
// // //       <div className="m-10">
// // //         {previewPost && <PreviewPost post={previewPost} />}
// // //       </div>
// // //     </main>
// // //   );
// // // }

// // //preview/page.js
// // 'use client';
// // import PreviewPost from "@/components/previewButton";
// // import { useEffect, useState } from "react";

// // export default function Preview({ postData }) {
// //   const [previewPost, setPreviewPost] = useState(null);

// //   useEffect(() => {
// //     // Check if all necessary data is available for preview
// //     if (postData) {
// //       // Assuming "image" is a file object, create a preview URL
// //       const imageURL = URL.createObjectURL(postData.image);
// //       setPreviewPost({
// //         name: postData.recipeName,
// //         time: postData.preparationTime,
// //         calories: postData.calories,
// //         description: postData.description,
// //         imageURL,
// //       });
// //     }
// //   }, [postData]);

// //   return (
// //     <main>
// //       <div className="m-10">
// //         {previewPost && <PreviewPost post={previewPost} />}
// //         Test
// //       </div>
// //     </main>
// //   );
// // }
// // preview/page.js
// 'use client';
// import { useEffect, useState } from "react";

// export default function Preview({ postData }) {
//   const [previewPost, setPreviewPost] = useState(null);

//   useEffect(() => {
//     console.log("postData:", postData); // Log the received data
//     // Check if all necessary data is available for preview
//     if (postData) {
//       console.log("Processing data for preview:", postData); // Log that we are processing the data
//       // Assuming "image" is a file object, create a preview URL
//       const imageURL = URL.createObjectURL(postData.image);
//       setPreviewPost({
//         name: postData.recipeName,
//         time: postData.preparationTime,
//         calories: postData.calories,
//         description: postData.description,
//         imageURL,
//       });
//     }
//   }, [postData]);

//   console.log("previewPost:", previewPost); // Log the previewPost state

//   return (
//     <main>
//       <div className="m-10">
//         {previewPost && (
//           <>
//             <p>Name: {previewPost.name}</p>
//             <p>Time: {previewPost.time}</p>
//             <p>Calories: {previewPost.calories}</p>
//             <p>Description: {previewPost.description}</p>
//             <img src={previewPost.imageURL} alt="Preview" />
//           </>
//         )}
//       </div>
//     </main>
//   );
// }
// preview/page.js
// 'use client';
// import PreviewPost from "@/components/previewButton";
// import { useEffect, useState } from "react";

// export default function Preview({ postData }) {
//   const [previewPost, setPreviewPost] = useState(null);

//   useEffect(() => {
//     // Check if all necessary data is available for preview
//     if (postData) {
//       // Assuming "image" is a file object, create a preview URL
//       const imageURL = URL.createObjectURL(postData.image);
//       setPreviewPost({
//         name: postData.recipeName,
//         time: postData.preparationTime,
//         calories: postData.calories,
//         description: postData.description,
//         imageURL,
//       });
//     }
//   }, [postData]);

//   return (
//     <main>
//       <div className="m-10">
//         {previewPost && <PreviewPost post={previewPost} />}
//       </div>
//     </main>
//   );
// }

// preview/page.js
// 'use client';
// import PreviewPost from "@/components/previewButton";  // Corrected import
// import { useEffect, useState } from "react";

// export default function Preview({ formData }) {  // Change from postData to formData
//   const [previewPost, setPreviewPost] = useState(null);

//   useEffect(() => {
//     if (formData) {
//       const imageURL = URL.createObjectURL(formData.image);
//       setPreviewPost({
//         name: formData.recipeName,
//         time: formData.preparationTime,
//         calories: formData.calories,
//         description: formData.description,
//         imageURL,
//       });
//     }

//     // Cleanup function
//     return () => {
//       if (formData && formData.image) {
//         URL.revokeObjectURL(imageURL);
//       }
//     };
//   }, [formData]);

//   return (
//     <main>
//       <div className="m-10">
//         {previewPost && <PreviewPost post={previewPost} />}
//       </div>
//     </main>
//   );
// }

// pages/createPost.js
'use client';
import { useState } from 'react';
import PreviewButton from "@/components/PreviewButton";

const CreatePost = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    recipeName: '',
    preparationTime: '',
    calories: '',
    description: '',
    image: null,
  });

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Handler for file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({ ...prevFormData, image: file }));
  };

  // Handler for submitting the form and navigating to another page
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add any additional form submission logic if needed
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Create New Post</h1>

      {/* Form for capturing user input */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Your form input fields */}
        {/* ... */}

        {/* PreviewButton component */}
        <div className="flex items-center space-x-4">
          <PreviewButton formData={formData} />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
