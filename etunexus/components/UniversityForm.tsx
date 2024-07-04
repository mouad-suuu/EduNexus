// // UniversityList.tsx

// import React, { useEffect, useState } from "react";
// import { getAllUniversities } from "@/app/api/universities/route"; // Adjust path as needed

// const UniversityList: React.FC = () => {
//   const [universities, setUniversities] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchUniversities = async () => {
//       try {
//         const universitiesData = await getAllUniversities();
//         setUniversities(universitiesData);
//       } catch (error) {
//         console.error("Error fetching universities:", error);
//       }
//     };

//     fetchUniversities();
//   }, []);

//   return (
//     <div>
//       <h2>List of Universities</h2>
//       <ul>
//         {universities.map((university) => (
//           <li key={university._id}>
//             <h3>{university.name}</h3>
//             <p>{university.description}</p>
//             {/* Add more details as needed */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UniversityList;
