// // // // // // components/PreviewButton.jsx
// // // // // import Link from "next/link";

// // // // // export default function PreviewButton() {
// // // // //   return (
// // // // //     <Link href="/preview"> {/* Adjust the route to match your actual preview route */}
// // // // //       <button
// // // // //         className="bg-custom-main-dark px-4 py-2 rounded-lg text-white hover:bg-opacity-70"
// // // // //       >
// // // // //         Preview
// // // // //       </button>
// // // // //     </Link>
// // // // //   );
// // // // // }


// // // // // components/PreviewButton.js
// // // // import Link from "next/link";

// // // // const PreviewButton = ({ formData }) => {
// // // //   // Check if formData is available
// // // //   if (!formData) {
// // // //     return (
// // // //       <button className="bg-custom-main-dark px-4 py-2 rounded-lg text-white cursor-not-allowed" disabled>
// // // //         Preview
// // // //       </button>
// // // //     );
// // // //   }

// // // //   // Destructure the relevant data from the formData
// // // //   const { recipeName, preparationTime, calories, description, image } = formData;

// // // //   // Check if all necessary data is available for preview
// // // //   const isPreviewEnabled =
// // // //     recipeName && preparationTime && calories && description && image;

// // // //   return (
// // // //     <Link href={`/preview?recipeName=${recipeName}&preparationTime=${preparationTime}&calories=${calories}&description=${description}`}>
// // // //       <button
// // // //         className={`bg-custom-main-dark px-4 py-2 rounded-lg text-white ${
// // // //           isPreviewEnabled ? "hover:bg-opacity-70" : "cursor-not-allowed"
// // // //         }`}
// // // //         disabled={!isPreviewEnabled}
// // // //       >
// // // //         Preview
// // // //       </button>
// // // //     </Link>
// // // //   );
// // // // };

// // // // export default PreviewButton;

// // // // components/PreviewButton.js
// // // import Link from "next/link";

// // // const PreviewButton = ({ formData }) => {
// // //   if (!formData) {
// // //     // If formData is not available, show a disabled button
// // //     return (
// // //       <button className="disabled-button">
// // //         Preview
// // //       </button>
// // //     );
// // //   }

// // //   const { recipeName, preparationTime, calories, description, image } = formData;

// // //   const isPreviewEnabled =
// // //     recipeName && preparationTime && calories && description && image;

// // //   const previewLink = isPreviewEnabled
// // //     ? `/preview?recipeName=${recipeName}&preparationTime=${preparationTime}&calories=${calories}&description=${description}`
// // //     : null;

// // //   return (
// // //     <Link href={previewLink}>
// // //       <button
// // //         className={`preview-button ${isPreviewEnabled ? "enabled" : "disabled"}`}
// // //         disabled={!isPreviewEnabled}
// // //       >
// // //         Preview
// // //       </button>
// // //     </Link>
// // //   );
// // // };

// // // export default PreviewButton;


// // // components/PreviewButton.js
// // import Link from "next/link";

// // const PreviewButton = ({ formData }) => {
// //   const isPreviewEnabled = !!formData?.recipeName && !!formData?.image;

// //   return (
// //     <Link href={isPreviewEnabled ? `/preview?recipeName=${formData.recipeName}` : '#'}>
// //       <button
// //         className={`bg-custom-main-dark px-4 py-2 rounded-lg text-white ${isPreviewEnabled ? "hover:bg-opacity-70" : "cursor-not-allowed"}`}
// //         disabled={!isPreviewEnabled}
// //       >
// //         Preview
// //       </button>
// //     </Link>
// //   );
// // };

// // export default PreviewButton;

// // components/previewButton.jsx
// import Link from "next/link";

// const PreviewButton = ({ formData }) => {
//   // Check if formData is available
//   if (!formData) {
//     return (
//       <button className="bg-custom-main-dark px-4 py-2 rounded-lg text-white cursor-not-allowed" disabled>
//         Preview
//       </button>
//     );
//   }

//   // Destructure the relevant data from the formData
//   const { recipeName, preparationTime, calories, description, image } = formData;

//   // Check if all necessary data is available for preview
//   const isPreviewEnabled =
//     recipeName && preparationTime && calories && description && image;

//   return (
//     <Link href={`/preview?recipeName=${recipeName}&preparationTime=${preparationTime}&calories=${calories}&description=${description}`}>
//       <button
//         className={`bg-custom-main-dark px-4 py-2 rounded-lg text-white ${
//           isPreviewEnabled ? "hover:bg-opacity-70" : "cursor-not-allowed"
//         }`}
//         disabled={!isPreviewEnabled}
//       >
//         Preview
//       </button>
//     </Link>
//   );
// };

// export default PreviewButton;





// components/PreviewButton.jsx
// import Link from "next/link";

// const PreviewButton = ({ formData }) => {
//   // Check if formData is available
//   if (!formData) {
//     return (
//       <button className="bg-custom-main-dark px-4 py-2 rounded-lg text-white cursor-not-allowed" disabled>
//         Preview
//       </button>
//     );
//   }

//   // Destructure the relevant data from the formData
//   const { recipeName, preparationTime, calories, description, image } = formData;

//   // Check if all necessary data is available for preview
//   const isPreviewEnabled =
//     recipeName && preparationTime && calories && description && image;

//   return (
//     <Link href={`/preview?recipeName=${recipeName}&preparationTime=${preparationTime}&calories=${calories}&description=${description}`}>
//       <button
//         className={`bg-custom-main-dark px-4 py-2 rounded-lg text-white ${
//           isPreviewEnabled ? "hover:bg-opacity-70" : "cursor-not-allowed"
//         }`}
//         disabled={!isPreviewEnabled}
//       >
//         Preview
//       </button>
//     </Link>
//   );
// };

// export default PreviewButton;


// components/PreviewButton.jsx
import Link from "next/link";

const PreviewButton = ({ formData }) => {
  // Check if formData is available and valid (adjust validation logic as needed)
  const isFormDataValid = formData && formData.recipeName && formData.preparationTime && formData.calories && formData.description;

  if (!isFormDataValid) {
    return (
      <button className="bg-custom-main-dark px-4 py-2 rounded-lg text-white cursor-not-allowed" disabled>
        Preview
      </button>
    );
  }

  return (
    <Link
      href={{
        pathname: '/preview',
        query: formData,
      }}
      as="/preview"
    >
      <button
        type="button" // Use type="button" as it's not a form submission
        className="bg-custom-main-dark px-4 py-2 rounded-lg text-white hover:bg-opacity-70"
        role="button" // Add role="button" for accessibility
      >
        Preview
      </button>
    </Link>
  );
};

export default PreviewButton;
