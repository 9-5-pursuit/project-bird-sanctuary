// import React, { useState } from "react";


// export default function Checkout({ reset }) {
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     zipCode: "",
//     email: "",
//   });

//   function handleSubmit(event) {
//     event.preventDefault();
//     resetForm();
//     alert(`You have adopted birds. Thank you!`);
//   }
//   function handleTextChange(event) {
//     setUser({
//       ...user,
//       [event.target.id]: event.target.value,
//     });
//   }
//   function resetForm() {
//     setUser({
//       firstName: "",
//       lastName: "",
//       email: "",
//       zip: "",
//       id: "",
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="firstName">First name:</label>
//       <input
//         type="text"
//         value={user.firstName}
//         onChange={handleTextChange}
//         required
//         id="firstName"
//       />
//       <label htmlFor="lastName">Last name: </label>
//       <input
//         type="text"
//         value={user.lastName}
//         onChange={handleTextChange}
//         required
//         id="lastName"
//       />
//       <label htmlFor="zip">Zip code:</label>
//       <input
//         type="number"
//         value={user.zip}
//         onChange={handleTextChange}
//         required
//         id="zip"
//       />
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         value={user.email}
//         onChange={handleTextChange}
//         required
//         id="email"
//       />
//       <input type="submit" />
//     </form>
//   );
// }

// import React, { useState } from "react";

// // Checkout Component
// export default function Checkout({ reset }) {
//   // 1. Keep track of the information entered
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     zip: "",
//   });
//   // 2. Handle form submit
//   function handleSubmit(event) {
//     event.preventDefault();
//     alert("You have adopted birds. Thank you!");

//     setUser({
//       firstName: "",
//       lastName: "",
//       email: "",
//       zip: "",
//     });

//     reset();
//   }
//   // 3. Handle input changes
//   function handleTextChange(event) {
//     setUser({
//       ...user,
//       [event.target.id]: event.target.value,
//     });
//   }

//   return (
//     <div className="Checkout">
//       <h2>Checkout</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="firstName">First Name</label>
//         <input
//           id="firstName"
//           name="firstName"
//           type="text"
//           value={user.firstName}
//           onChange={handleTextChange}
//           required
//         />

//         <label htmlFor="lastName">Last Name</label>
//         <input
//           id="lastName"
//           name="lastName"
//           type="text"
//           value={user.lastName}
//           onChange={handleTextChange}
//           required
//         />

//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           value={user.email}
//           onChange={handleTextChange}
//           required
//         />

//         <label htmlFor="zip">Zipcode</label>
//         <input
//           id="zip"
//           name="zip"
//           type="number"
//           value={user.zip}
//           onChange={handleTextChange}
//           required
//         />

//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

