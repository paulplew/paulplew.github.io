// import React from "react";
// import Navigation from "../Navigation";
// import pages from '../Navigation/navigation_pages.json'
// import './portfolio.css'
// import projects from './projects.json'

// const Portfolio = () => {
//   document.title = 'Portfolio';
//   return (
//     <>
//       <Navigation selected={pages.portfolio} />
//       <div className='flex-center padding-all'>
//         <div className='content padding-all'>
//           <h1 className='section-title'>Computer Science Projects</h1>

//           <ul>
//             {
//               projects.computer.map((p, index) => {
//                 return(
//                 <li>
//                   <details>
//                     <summary>{p.title}</summary>
//                     <p>
//                       {p.description}
//                     </p>
//                   </details>
//                 </li>
//                 );
//               })
//             }
//           </ul>
//         </div>
//         <div className='content padding-all'>
//           <h1 className='section-title'>Design Projects</h1>
//           <ul>
//           </ul>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Portfolio